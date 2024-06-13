import React,{useState, useEffect} from 'react'
import image1 from '../Assets/about.jpg'
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { motion } from 'framer-motion';




const AboutUs = () => {


  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures that effect runs only once after mount

  const initialXLeft = windowSize.width >= 640 ? -200 : -100; // Initial X position for left animation
  const initialXRight = windowSize.width >= 640 ? 200 : 100; // Initial X position for right animation

  const initialLeft = {
    x: initialXLeft, // Set initial position for left element
    opacity: 0
  };

  const initialRight = {
    x: initialXRight, // Set initial position for right element
    opacity: 0
  };


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

  <div className="container mx-auto px-4 lg:px-7 py-28 mt-6 overflow-hidden">
  <div className="flex flex-wrap -mx-4">
    {/* Left side - Image */}
    <motion.div
    initial={initialLeft} // Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
     className="w-full lg:w-[23%] md:w-4/12 sm:w-2/5 px-4 mb-8 md:mb-0">
      <img src={image1} alt="About Us" className="shadow-lg w-full" />
    </motion.div>
    
    {/* Right side - Text */}
    <motion.div
    initial={initialLeft} // Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
     className="w-full lg:w-1/2 md:w-4/6 px-4 lg:mt-12 md:mt-5">
      <div className="mb-8 px-3">
        <h2 className="text-7xl font-family font-bold text-[#348E38] mb-3">25</h2>
        <h3 className='text-[#348E38] text-lg'>Year of Experience</h3>
        <h1 className="text-[#0F4229] mt-8 font-family sm:text-5xl text-4xl font-bold" style={{ lineHeight: isLargeScreen ? '3.8rem' : '3rem' }}>
          We Make Your Home Like A Garden
        </h1>
        <p className="text-gray-600 text-lg mt-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
        </p>

        <div className='mt-8'>
          <button className="bg-[#348E38] hover:bg-[#3ca341] text-white py-4 px-4 rounded md:px-6 lg:px-8 text-lg focus:outline-none focus:ring-2 focus:ring-[#3ca341] transition duration-300 ease-in-out">
           Explore More
         </button>
           </div>

      </div>
    </motion.div>
    
        {/* Right side - Additional Text */}
        <motion.div
        initial={initialRight} // Initial position: off-screen to the left, hidden, starting from a greater distance
        whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
        transition={{ 
        delay: 0.2, 
        x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
        opacity: { duration: 1 }, // Smooth opacity transition
        ease: "easeIn", // Easing function
        duration: 1 // Overall animation duration
      }}
        className="w-full lg:w-1/4 lg:flex-col sm:flex lg:px-4 px-3.5 lg:space-y-5 mt-8">
        <div className="p-6 md:border-s">
          <div className="space-x-2">
            <FaAward className="text-[#348E38] text-5xl" />
          </div>
          <h3 className="text-2xl mt-3 font-family font-semibold text-[#0F4229]">Award Winning</h3>

          <p className="text-gray-600 text-lg mt-2">
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna.
          </p>
        </div>

        <div className="p-6 md:border-s">
          <div className="space-x-2">
            <FaUsers className="text-[#348E38] text-5xl" />
          </div>
          <h3 className="text-2xl mt-3 font-family font-semibold text-[#0F4229]">Award Winning</h3>

          <p className="text-gray-600 text-lg mt-2">
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna.
          </p>
        </div>
      </motion.div>
  </div>
</div>

      
    </>
  )
}

export default AboutUs