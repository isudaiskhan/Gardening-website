import React,{useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import image1 from '../Assets/team-1.jpg';
import image2 from '../Assets/team-2.jpg';
import image3 from '../Assets/team-3.jpg';



const teamMembers = [
  { name: 'Doris Jordan', designation: 'Landscape Designer', image: image1 },
  { name: 'Johnny Ramirez', designation: 'Garden Designer', image: image2 },
  { name: 'Diana Wagner', designation: 'Senior Gardener', image: image3 },
];



const Team = () => {


    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia("(min-width: 640px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const handleScreenChange = () => {
      setIsLargeScreen(mediaQuery.matches);
    };

    // Initial check
    handleScreenChange();

    // Listen for changes
    mediaQuery.addListener(handleScreenChange);

    // Clean up
    return () => {
      mediaQuery.removeListener(handleScreenChange);
    };
  }, []); // Empty dependency array to run only once on mount




  return (
    <>
      <div className="w-full py-20 mt-5 overflow-hidden">
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          y: { type: 'spring', stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: 'easeIn',
          duration: 1,
        }}
        className='lg:w-2/5 sm:w-3/4 w-11/12 mx-auto'
      >
        <h1 className='text-center text-[#348E38] text-2xl font-family font-semibold mx-auto'>
        Our Team
        </h1>
        <h1 className='text-center text-[#0F4229] sm:text-5xl text-4xl mt-6 font-family font-bold'  style={{ lineHeight: isLargeScreen ? '3.8rem' : '3rem' }}>
        Dedicated & Experienced Team Members
        </h1>
      </motion.div>
        <div className="w-full lg:px-7 px-4 mt-5">
          <div className="container mx-auto grid lg:grid-cols-3 sm:grid-cols-2">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 250 + index * 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  y: { type: 'spring', stiffness: 40 },
                  opacity: { duration: 0.2 },
                  ease: 'easeIn',
                  duration: 1,
                }}
                className="w-full my-4 p-4 relative group"
              >
                <div className="relative overflow-hidden">
                  <img src={member.image} alt={`Team member ${index + 1}`} className="w-full rounded transition-transform ease-in-out duration-700 delay-150 group-hover:scale-110 group-hover:-translate-y-1" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded bg-[#0F422999] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className='transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                    <p className="text-white text-2xl font-semibold mb-3">{member.name}</p>
                      <p className="text-white  text-lg mb-7">{member.designation}</p>
                      <div className="flex space-x-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="md:px-3 cursor-pointer md:py-3 px-2 py-2 rounded-full bg-[#E8F5E9]">
                          <FaTwitter className="text-xl text-[#348E38]" />
                        </div>
                        <div className="md:px-3 cursor-pointer md:py-3 px-2 py-2 rounded-full bg-[#E8F5E9]">
                          <FaFacebookF className="text-xl text-[#348E38] " />
                        </div>
                        <div className="md:px-3 cursor-pointer md:py-3 px-2 py-2 rounded-full bg-[#E8F5E9]">
                          <FaLinkedinIn className="text-xl text-[#348E38]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;