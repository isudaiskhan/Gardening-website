import React,{useState, useEffect} from 'react'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Assets/carousel-1.jpg'
import TopBar from '../../TopBar/TopBar';
import Navbar from '../../Navbar/Navbar';
import {FiUser, FiMail, FiMessageSquare} from 'react-icons/fi'
import { FaPen  } from "react-icons/fa6";
import Footer from '../../Footer/Footer';
import ScrollButton from '../../ScrollButton/ScrollButton';



const Contact = () => {

     
  const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia("(min-width: 1024px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

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

  <TopBar />
    <Navbar />

  <div className="relative">
      <div className="relative h-96 flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 h-96 bg-no-repeat bg-cover bg-center bg-blend-multiply bg-[#0F422999]" style={{ backgroundImage: `url(${bgimage})` }}>

         <motion.div
               initial={{x:-100,opacity:0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
                duration:1}}
           className="flex flex-col items-center pt-10 sm:ps-10 sm:px-0 px-5 h-full">
             <h1 className="sm:text-7xl text-5xl font-family font-bold text-center text-white mt-28">Contact Us</h1>
             <div className="flex flex-wrap items-center font-semibold text-lg mt-6 justify-center">
             <h2 className="text-white mr-3">Home</h2>
             <RxSlash className="text-white mr-3" />

             <h2 className="text-white mr-3">Pages</h2>
             <RxSlash className="text-white mr-3" />

            
               <h2 className="text-white">Contact Us</h2>

                  </div>
                  </motion.div>
                </div>
             </div>



    <div className='w-full py-12 overflow-hidden'>   

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
    className='w-full py-16 lg:px-20 md:px-20 sm:px-10 px-4'>
   <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>
  

    <div className='flex flex-col justify-center sm:p-6 p-3'>
     <h1 className='text-[#348E38] text-2xl font-family font-semibold'>Contact Us</h1>
       <h1 className='lg:text-5xl font-family sm:text-4xl text-3xl font-bold mt-4 text-[#0F4229]' style={{ lineHeight: isLargeScreen ? '4rem' : '3rem' }}>
       If You Have Any Query, Please Contact Us
       </h1>

       <p className='text-gray-500 mt-4'>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <span className='text-[#348E38]'>Download Now.</span> </p>
     

         {/* Form Section */}
    <form
     className='mt-10 space-y-6 mb-4 md:mb-0'>
   
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className='w-full md:w-1/2 relative'>
          <input type="text" id="input1" name="user_name" placeholder='Your Name' required className="w-full bg-transparent border rounded border-gray-400 px-4 py-3 placeholder:text-gray-500 text-black focus:border-[#348E38] focus:outline-none" />
          <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8488a0]" />
        </div>
      
      

      <div className='w-full md:w-1/2 relative'>
          <input type="email" id="input2" name="user_Email" placeholder='Your Email' required className="w-full border bg-transparent rounded border-gray-400 px-4 py-3 placeholder:text-gray-500 text-black focus:border-[#348E38] focus:outline-none" />
          <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8488a0]" />
        </div>
        </div>

        <div className='w-full relative'>
          <input type="email" id="input2" name="user_Subject" placeholder='Subject' required className="w-full border bg-transparent rounded border-gray-400 px-4 py-3 placeholder:text-gray-500 text-black focus:border-[#348E38] focus:outline-none" />
          <FaPen className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8488a0]" />
        </div>

      <div className='w-full relative'>
        <textarea id="textarea" placeholder='Message' name="message" required rows="6" className="p-2 px-4 py-3 w-full bg-transparent rounded border border-gray-400 placeholder:text-gray-500 focus:border-[#348E38] focus:outline-none" />
        <FiMessageSquare className="absolute right-3 bottom-3 text-[#8488a0]" />
      </div>

      <div className="flex justify-center">
  <button type="submit" className="font-semibold flex items-center justify-center px-8 py-3.5 w-full bg-[#348E38] hover:bg-[#3ca341] rounded text-white">
    Send Message
  </button>
</div>
 </form>
     </div>



       {/* Map */}
       <div className='overflow-hidden p-5 rounded'>
          <div className="relative h-full" style={{ paddingBottom: "36.25%" }}>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d273841.1102308948!2d-74.18405101663417!3d40.68398427732833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1717082829377!5m2!1sen!2s"    
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute top-0 left-0 w-full"
                ></iframe>
              </div>
            </div>

          
        </div>
      </motion.div>
      </div>
       </div>


       <Footer />
       <ScrollButton />
      
    </>
  )
}

export default Contact