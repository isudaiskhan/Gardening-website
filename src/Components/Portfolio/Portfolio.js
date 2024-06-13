import React, { useState, useEffect } from 'react';
import { FaEye , FaTimes  } from 'react-icons/fa';
import image1 from  '../Assets/service-1.jpg';
import image2 from  '../Assets/service-2.jpg';
import image3 from  '../Assets/service-3.jpg';
import image4 from  '../Assets/service-4.jpg';
import image5 from  '../Assets/service-5.jpg';
import image6 from  '../Assets/service-6.jpg';
import {motion} from 'framer-motion';
import { FaLink } from "react-icons/fa6";



const Portfolio = () => {



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
  
 
    const [currentVideoIndex, setCurrentVideoIndex] = useState(-1);
    const [videoUrls] = useState([
      'https://www.youtube.com/embed/yJg-Y5byMMw?si=hznSQrNwpdG4wMoI',
      'https://www.youtube.com/embed/8VLXHyHRXjc?si=xTUKauNqvr59BDFk',
      'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
      'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
      'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
      'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
      'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y', 
      'https://www.youtube.com/embed/yJg-Y5byMMw?si=hznSQrNwpdG4wMoI',
      'https://www.youtube.com/embed/8VLXHyHRXjc?si=xTUKauNqvr59BDFk',
  
     ]);
    const [category, setCategory] = useState('all'); // State to track current category
    const [selectedImage, setSelectedImage] = useState(null);

    const handleIconClick = (image) => {
      setSelectedImage(image);
    };
  
    const handleCloseClick = () => {
      setSelectedImage(null);
    };
  
    const handleCategoryClick = (category) => {
      setCategory(category);
    };
  

  const images = [
    { src: image1, category: 'design', text1: 'Landscaping' },
    { src: image2, category: 'development', text1: 'Pruning plants'},
    { src: image3, category: 'design', text1: 'Irrigation & Drainage' },
    { src: image4, category: 'development', text1: 'Garden Maintenance' },
    { src: image5, category: 'design', text1: 'Green Technology'},
    { src: image6, category: 'development', text1: 'Urban Gardening' },
 
  ];

  const filteredImages = category === 'all' ? images : images.filter(image => image.category === category);


  
  return (
    <>

      <div className='mt-8 py-3 container overflow-hidden mx-auto lg:px-7 px-4'>

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
        Our Projects
        </h1>
        <h1 className='text-center text-[#0F4229] sm:text-5xl text-4xl mt-6 font-family font-bold'  style={{ lineHeight: isLargeScreen ? '3.8rem' : '3rem' }}>
        Some Of Our Wonderful Projects
        </h1>
      </motion.div>

        <div className="flex justify-center mt-16 flex-wrap">

        <motion.button
      initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
      whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
      transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
      onClick={() => handleCategoryClick('all')} className={`${category === 'all' ? 'bg-[#348E38] text-white' : 'bg-[#E8F5E9] text-[#348E38]'} px-9 py-2`}>All</motion.button>


         <motion.button
        initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
        whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
        transition={{ delay: 0.3, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
        onClick={() => handleCategoryClick('design')} className={`${category === 'design' ? 'bg-[#348E38] text-white' : 'bg-[#E8F5E9] text-[#348E38]'} px-6 py-2`}>Completed Projects</motion.button>


     <motion.button
     initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
      whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
      transition={{ delay: 0.3, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
       onClick={() => handleCategoryClick('development')} className={` ${category === 'development' ? 'bg-[#348E38] text-white' : 'bg-[#E8F5E9] text-[#348E38]'} px-4 py-2`}>Ongoing Projects</motion.button>

          {/* Add more category buttons here */}
        </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 py-16 lg:grid-cols-3 gap-8">
      {filteredImages.map((image, index) => (
        <motion.div
         key={index}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 60, duration: 1 }}
          className="relative group">
          <div className='absolute inset-0 flex items-center justify-center rounded bg-[#0F422999] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <h1 className="absolute inset-0 flex justify-center items-center bottom-28 md:bottom-28 xl:bottom-36 text-white font-semibold text-2xl text-center">
              {image.text1}
           </h1>
             <div className='flex space-x-4 xl:mt-4 mt-14 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
          
              <div onClick={() => handleIconClick(image.src)} className="cursor-pointer hover:bg-[#348E38] py-4 px-4 rounded-full group-hover:bg-[#E8F5E9]">
                <FaEye  onClick={() => handleIconClick(image.src)} className="text-2xl text-[#348E38]" />
              </div>

              <div className='cursor-pointer py-4 px-4 rounded-full group-hover:bg-[#E8F5E9]'>
                <FaLink className='text-2xl text-[#348E38]' />
              </div>
            </div>
          </div>
        <img src={image.src} className="w-full rounded object-cover" alt="Video thumbnail" />
     
      </motion.div>
      ))}
    </div>


    {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 sm:ps-0 sm:pe-0 ps-4 pe-4 flex items-center justify-center z-50">
          <div className="relative bg-white p-2 mt-4 rounded-lg max-w-lg w-full">
            <FaTimes className="absolute -top-9 text-white right-0 text-3xl cursor-pointer" onClick={handleCloseClick} />
            <img src={selectedImage} alt="Selected" className="rounded-lg" />
          </div>
        </div>
      )}

      </div>

    </>
  );
};

export default Portfolio;