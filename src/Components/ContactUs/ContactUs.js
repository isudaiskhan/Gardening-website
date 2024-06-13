import React,{useState, useEffect} from 'react'
import bgimage from '../Assets/carousel-2.jpg'
import {motion} from 'framer-motion';
import { FiUser , FiMail, FiMessageSquare } from "react-icons/fi";
import { FaPencilAlt } from "react-icons/fa";
import { MdOutlinePhoneEnabled } from "react-icons/md";




const ContactUs = () => {
  
    
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

     
    <div
        className='bg-no-repeat bg-fixed bg-blend-multiply bg-[#0F422999] bg-cover bg-center lg:mt-5 mt-14'
        style={{ backgroundImage: `url(${bgimage})` }}>


    <div className='w-full py-8'>   

   <div className='w-full py-16 px-5'>
    <div className='container mx-auto lg:w-7/12 overflow-hidden'>

    <motion.div
        initial={{ y: 150, opacity: 0 }} // Initial position: below its final position and hidden
        whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
        transition={{ 
      delay: 0.4, 
      y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
      opacity: { duration: 0.2 }, // Smooth opacity transition
      ease: "easeIn", // Easing function
      duration: 1 // Overall animation duration
      }}
     className='flex flex-col justify-center p-6 md:p-12 bg-white'>
      <h1 className='lg:text-5xl text-center text-[#0F4229] font-family sm:text-4xl text-3xl font-bold' style={{ lineHeight: isLargeScreen ? '4rem' : '3rem' }}>
      Get A Free Quote
      </h1>


      {/* Form Section */}
      <form className='mt-10 space-y-6 mb-4 md:mb-0'>

   <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
     <div className='w-full md:w-1/2 relative'>
       <input type="text" id="input1" name="user_name" placeholder='Your Name' required className="w-full bg-[#E8F5E9] border px-4 py-3 placeholder:text-gray-500 text-black focus:border-[#348E38] focus:outline-none" />
       <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#348E38]" />
     </div>
   
   

   <div className='w-full md:w-1/2 relative'>
       <input type="email" id="input2" name="user_Email" placeholder='Your Email' required className="w-full bg-[#E8F5E9] border px-4 py-3 placeholder:text-gray-500 text-black focus:border-[#348E38] focus:outline-none" />
       <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#348E38]" />
     </div>
     </div>

     <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
     
   <div className='w-full md:w-1/2 relative'>
       <input type="text" id="input2" name="user_Email" placeholder='Your Mobile' required className="w-full bg-[#E8F5E9] border px-4 py-3 placeholder:text-gray-500 text-black focus:border-[#348E38] focus:outline-none" />
       <MdOutlinePhoneEnabled  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#348E38]" />
     </div>


     <div className='w-full md:w-1/2 relative'>
       <input type="text" id="input1" name="user_name" placeholder='Service Type' required className="w-full bg-[#E8F5E9] border px-4 py-3 placeholder:text-gray-500 text-black focus:border-[#348E38] focus:outline-none" />
       <FaPencilAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#348E38]" />
     </div>


     </div>

   <div className='w-full relative'>
     <textarea id="textarea" placeholder='Message' name="message" required rows="6" className="p-2 px-4 py-3 w-full bg-[#E8F5E9] border placeholder:text-gray-500 focus:border-[#348E38] focus:outline-none" />
     <FiMessageSquare className="absolute right-3 bottom-3 text-[#348E38]" />
   </div>
   <div className='flex justify-center mt-8'>
          <button className="bg-[#348E38] hover:bg-[#3ca341] text-white py-4 px-4 rounded md:px-6 lg:px-8 text-lg focus:outline-none focus:ring-2 focus:ring-[#3ca341] transition duration-300 ease-in-out">
           Submit Now
         </button>
           </div>
      </form>


      </motion.div>

      </div>

      </div>

      </div>
      </div>
      
    </>
  )
}

export default ContactUs