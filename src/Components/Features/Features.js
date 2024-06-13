import React,{useState, useEffect} from 'react'
import { FaCheck , FaTools , FaUsers } from "react-icons/fa";
import { motion } from 'framer-motion';



const Features = () => {

    
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

  const initialLeft = {
    x: initialXLeft, // Set initial position for left element
    opacity: 0
  };





  return (
    <>

    <div className="container mx-auto lg:px-7 px-4 mt-8 py-24">
      <div className="flex flex-wrap -mx-4 overflow-hidden">
    
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
     className="w-full lg:w-1/2 md:w-full lg:px-5 px-4 mt-12">
      <div className="mb-8 px-2">
        <h3 className='text-[#348E38] text-2xl font-semibold font-family'>Why Choosing Us!</h3>
        <h1 className="text-[#0F4229] mt-6 font-family sm:text-5xl text-4xl font-bold" style={{ lineHeight: isLargeScreen ? '3.8rem' : '3rem' }}>
        Few Reasons Why People Choosing Us!
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
    <div className="w-full lg:w-1/4 md:w-1/2 px-4 py-4 flex flex-col justify-between space-y-5 overflow-hidden">
      <motion.div
          initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
          whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
          transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
          className="p-5 py-12 bg-white shadow-lg shadow-gray-300">
            <div className="flex justify-center">
          <div className="bg-[#348E38] p-4 rounded-full">
            <FaCheck className="text-white text-5xl" />
          </div>
        </div>
          <h3 className="text-2xl mt-7 font-family text-center font-semibold text-[#0F4229]">100% Satisfaction</h3>

         
        </motion.div>



        <motion.div
          initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
          whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
          transition={{ delay: 0.3, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
         className="p-5 py-12 bg-white shadow-lg shadow-gray-300">
        <div className="flex justify-center">
          <div className="bg-[#348E38] p-4 rounded-full">
            <FaUsers className="text-white mx-auto text-5xl" />
          </div>

         </div>
         <h3 className="text-2xl mt-6 font-family text-center font-semibold text-[#0F4229]">Dedicated Team</h3>

        </motion.div>
      </div>
      
      <div className="w-full lg:w-1/4 md:w-1/2 px-4 py-4 flex flex-col justify-between space-y-5 overflow-hidden">
      <motion.div
          initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
          whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
          transition={{ delay: 0.3, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
       className="p-5 md:mt-28 py-12 bg-white shadow-lg shadow-gray-300">
        <div className="flex justify-center">
          <div className="bg-[#348E38] p-4 rounded-full">
            <FaTools className="text-white text-5xl" />
          </div>
        </div>
          <h3 className="text-2xl mt-7 font-family text-center font-semibold text-[#0F4229]">Modern Equipment</h3>

         
        </motion.div>
        </div>

    </div>
  </div>
      
    </>
  )
}

export default Features