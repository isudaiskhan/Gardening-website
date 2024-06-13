import React, { useState, useEffect } from 'react'
import {motion} from 'framer-motion';
import bgimage from '../Assets/carousel-1.jpg'



const Facts = () => {

    const [experience, setExperience] = useState({
        years: 0,
        clients: 0,
        projects: 0,
      });
    
      useEffect(() => {
        const durations = {
          years: 1, // 1 second
          clients: 1, // 2 seconds
          projects: 1, // 3 seconds
        };
    
        const resetExperience = () => {
          setExperience({
            years: 0,
            clients: 0,
            projects: 0,
          });
        };
    
        const intervals = Object.keys(experience).map(property => {
          return setInterval(() => {
            setExperience(prevExperience => ({
              ...prevExperience,
              [property]: Math.min(prevExperience[property] + 1, property === 'years' ? 1234 : property === 'clients' ? 1234 : 1234),
            }));
          }, durations[property]);
        });
    
        // Add event listener for visibility change
        document.addEventListener('visibilitychange', resetExperience);
    
        // Cleanup: remove event listener and clear intervals
        return () => {
          document.removeEventListener('visibilitychange', resetExperience);
          intervals.forEach(interval => clearInterval(interval));
        };
      }, []);

  return (
    <>


    <div
        className='bg-no-repeat bg-fixed bg-blend-multiply bg-[#0F422999] bg-cover bg-center'
        style={{ backgroundImage: `url(${bgimage})` }}>


      <section className="py-24 overflow-hidden">
      
      <motion.div
      initial={{ y: 120, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
        delay: 0.4, 
        y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
        opacity: { duration: 0.2 }, // Smooth opacity transition
        ease: "easeIn", // Easing function
        duration: 1 // Overall animation duration
      }}
      className="container mx-auto lg:px-6 px-4">
         <div
         className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
          {/* Box 1 - Experience */}
        <div
           className="p-8 text-center">
            <h2 className="text-6xl text-white font-bold mb-4">{experience.years}</h2>
            <h2 className="text-2xl text-white font-semibold mb-4">Happy Clients</h2>
          </div>

          {/* Box 2 - Happy Clients */}
        <div
           className="p-8 text-center">
            <h2 className="text-6xl text-white font-bold mb-4">{experience.clients}</h2>
            <h2 className="text-2xl text-white font-semibold mb-4">Garden Complated</h2>
          </div>

          {/* Box 3 - Completed Projects */}
        <div
           className="p-8 text-center">
            <h2 className="text-6xl text-white font-bold mb-4">{experience.projects}</h2>
            <h2 className="text-2xl text-white font-semibold mb-4">Dedicated Staff</h2>
          </div>


           {/* Box 4 - Completed Projects */}
        <div
           className="p-8 text-center">
            <h2 className="text-6xl text-white font-bold mb-4">{experience.projects}</h2>
            <h2 className="text-2xl text-white font-semibold mb-4">Awards Achieved</h2>
          </div>


        </div>
      </motion.div>
    </section>

    </div>
      
    </>
  )
}

export default Facts