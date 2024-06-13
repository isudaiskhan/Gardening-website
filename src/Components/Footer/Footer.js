import React,{useState, useEffect} from 'react'
import {FaFacebookF, FaInstagram, FaSearch } from 'react-icons/fa';
import {AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { MdKeyboardArrowRight } from "react-icons/md";
import {motion} from 'framer-motion';




const Footer = () => {

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

  const initialGreen = {
    x: initialXLeft, // Set initial position for green element
    opacity: 0
  };

  const initialRed = {
    x: initialXRight, // Set initial position for red element
    opacity: 0
  };

  return (
    <>



     <div className='bg-[#0F4229]'>
      <div className='container py-8 mx-auto mt-28 md:px-2 px-6 text-gray-300 overflow-hidden'>
      
     <motion.div
     initial={{ y: 80, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
        delay: 0.4, 
        y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
        opacity: { duration: 0.2 }, // Smooth opacity transition
        ease: "easeIn", // Easing function
        duration: 1 // Overall animation duration
        }}
    className="md:flex lg:flex mx-auto container">
     
    </motion.div>
        <div className='flex flex-wrap justify-center gap-6'>
             

            <div className='w-full lg:w-1/4 md:w-2/5'>
            <motion.div
            initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
            whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
            transition={{ 
            delay: 0.2, 
            x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
            opacity: { duration: 1 }, // Smooth opacity transition
            ease: "easeIn", // Easing function
            duration: 1 // Overall animation duration
        }}
         className='space-y-3 mt-16'>
        <h6 className='text-white text-2xl font-family font-semibold ps-2'>Our Office</h6>
          <div className="mt-20 text-white py-4 space-y-3">
        <div className="flex items-center space-x-2 text-white">
          <FiMapPin className='ml-2' />
          <span >123 Street, New York, USA</span>
        </div>
        <div className="flex items-center space-x-2 text-white">
          <FiPhone className='ml-2' />
          <span>+012 345 67890</span>
        </div>
        <div className="flex items-center space-x-2 text-white">
          <FiMail className='ml-2' />
          <span>example@gmail.com</span>
        </div>
      </div>
      </motion.div>
            
            <div className="flex items-center justify-start">
        <div className='md:flex items-center py-6 text-center'>
        <motion.div
            initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
            whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
            transition={{ 
            delay: 0.2, 
            x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
            opacity: { duration: 1 }, // Smooth opacity transition
            ease: "easeIn", // Easing function
            duration: 1 // Overall animation duration
        }}
               className='flex justify-end text-white space-x-3 flex-wrap ps-1'>
                  <div className='px-2 cursor-pointer py-2 group rounded-full border-2 duration-300 border-white hover:bg-[#E8F5E9]'>
                      <FaFacebookF className='group-hover:text-[#348E38] text-white text-xl' />
                  </div>
                  <div className='px-2 py-2 cursor-pointer group rounded-full border-2 duration-300 border-white hover:bg-[#E8F5E9]'>
                      <AiOutlineTwitter className='group-hover:text-[#348E38] text-white text-xl' />
                  </div>
  
                  <div className='px-2 py-2 cursor-pointer group rounded-full border-2 duration-300 border-white hover:bg-[#E8F5E9]'>
                      <FaInstagram className='group-hover:text-[#348E38] text-white text-xl' />
                  </div>
  
                  <div className='px-2 py-2 cursor-pointer group rounded-full border-2 duration-300 border-white hover:bg-[#E8F5E9]'>
                      <AiFillLinkedin className='group-hover:text-[#348E38] text-white text-xl' />
                  </div>
              </motion.div>
          </div>
      </div>

      </div>
   
  
      <div className='w-full lg:w-1/5 md:w-2/5'>
        <motion.div
        initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
        whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
        transition={{ 
        delay: 0.2, 
        x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
        opacity: { duration: 1 }, // Smooth opacity transition
        ease: "easeIn", // Easing function
        duration: 1 // Overall animation duration
    }}
    className='space-y-3 mt-16'>
          <h6 className='text-white text-2xl font-family font-semibold ps-2'>Services</h6>
          <ul>
        <div className='flex items-center cursor-pointer group'>
            <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
            <li className='py-2 text-white group-hover:tracking-widest duration-500'>Landscaping</li>
        </div>
        <div className='flex cursor-pointer items-center group'>
            <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
            <li className='py-2 text-white group-hover:tracking-widest duration-500'>Pruning Plants</li>
        </div>
        <div className='flex cursor-pointer items-center group'>
            <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
            <li className='py-2 text-white group-hover:tracking-widest duration-500'>Urban Gardening</li>
        </div>
        <div className='flex cursor-pointer items-center group'>
            <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
            <li className='py-2 text-white group-hover:tracking-widest duration-500'>Garden Maintaince</li>
        </div>

        <div className='flex cursor-pointer items-center group'>
            <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
            <li className='py-2 text-white group-hover:tracking-widest duration-500'>Green Technology</li>
        </div>
        </ul>

        </motion.div>
      </div>
  
      <div className='w-full lg:w-1/5 md:w-2/5'>
      <motion.div
        initial={initialRed} // Initial position: off-screen to the left, hidden, starting from a greater distance
        whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
        transition={{ 
        delay: 0.2, 
        x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
        opacity: { duration: 1 }, // Smooth opacity transition
        ease: "easeIn", // Easing function
        duration: 1 // Overall animation duration
    }}
       className='space-y-3 mt-16'>
      <h6 className='text-white text-2xl font-family font-semibold ps-2'>Quick Links</h6>
          <ul>
        <div className='flex cursor-pointer items-center group'>
            <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
            <li className='py-2 text-white group-hover:tracking-widest duration-500'>About Us</li>
        </div>
        <div className='flex cursor-pointer items-center group'>
            <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
            <li className='py-2 text-white group-hover:tracking-widest duration-500'>Contact Us</li>
        </div>
        <div className='flex cursor-pointer items-center group'>
            <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
            <li className='py-2 text-white group-hover:tracking-widest duration-500'>Our Service</li>
        </div>
        <div className='flex cursor-pointer items-center group'>
            <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
            <li className='py-2 text-white group-hover:tracking-widest duration-500'>Terms & Condition</li>
        </div>

        <div className='flex cursor-pointer items-center group'>
            <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
            <li className='py-2 text-white group-hover:tracking-widest duration-500'>Support</li>
        </div>
        </ul>
        </motion.div>
      </div>
  
    
      <div className='overflow-hidden md:w-2/5 lg:w-[27%] md:px-0 px-2 w-full'>
      <motion.div
        initial={initialRed} // Initial position: off-screen to the left, hidden, starting from a greater distance
        whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
        transition={{ 
        delay: 0.2, 
        x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
        opacity: { duration: 1 }, // Smooth opacity transition
        ease: "easeIn", // Easing function
        duration: 1 // Overall animation duration
    }}
                className="md:mx-auto md:max-w-md">
            <div className="mt-16 md:px-3">

            <div className='text-white'>
            <h1 className='text-white text-2xl font-family font-semibold'>Newsletter</h1>
            <p className='mt-5'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            </div>

            {/* Search Input */}
            <div className="w-full flex justify-center items-center mt-6">
                    <div className="rounded-lg shadow-md w-full relative">
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="py-4 rounded-md border caret-black bg-[#E8F5E9] text-black focus:outline-none w-full pl-5 pr-12 placeholder:text-gray-500"
                      />
                      <button className="absolute top-0 right-0 p-4 border bg-[#348E38] rounded-e-md">
                        <FaSearch className="text-white text-2xl" />
                      </button>
                    </div>
                 
                  </div>

                </div>
            </motion.div>

                </div>
                </div> 
            </div>
            
  
          <div className='tracking-wider py-7 text-start bg-[#072A19] mt-8 overflow-hidden'>
          <div className="flex flex-col mx-auto container lg:px-10 px-0 sm:ps-0 sm:pe-0 ps-5 pe-5 lg:flex-row lg:space-y-0 space-y-5">
          <motion.div
            initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
            whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
            transition={{ 
            delay: 0.2, 
            x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
            opacity: { duration: 1 }, // Smooth opacity transition
            ease: "easeIn", // Easing function
            duration: 1 // Overall animation duration
        }}
               className="lg:w-7/12 lg:text-start text-center">
              <h1 className='text-white'> <span className='border-b cursor-pointer hover:text-[#348E38] duration-300'>Gardener</span> , Copyright © 2024 All rights reserved .</h1>
              </motion.div>
              <motion.div
                initial={initialRed} // Initial position: off-screen to the left, hidden, starting from a greater distance
                whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
                transition={{ 
                delay: 0.2, 
                x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
                opacity: { duration: 1 }, // Smooth opacity transition
                ease: "easeIn", // Easing function
                duration: 1 // Overall animation duration
            }}
               className="lg:w-5/12 flex flex-wrap lg:justify-end justify-center space-x-5">
             <h1 className='text-white'>Created and Designed by Sudais Khan .</h1>
           </motion.div>
          </div>

     </div>
  
     </div>
  
    </>
  )
}

export default Footer