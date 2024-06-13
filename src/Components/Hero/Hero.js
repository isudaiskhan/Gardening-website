import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgimage1 from '../Assets/carousel-1.jpg';
import bgimage2 from '../Assets/carousel-2.jpg';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { MdPhoneEnabled } from "react-icons/md";
import { motion } from 'framer-motion';



const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia("(min-width: 640px)").matches);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const slideTextVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <div className="relative">
        <button
          className="absolute sm:top-1/2 top-64 p-2 bg-[#348E38] hover:bg-[#3ca341] duration-300 transform -translate-y-1/2 md:left-12 sm:left-8 left-4 text-white rounded-full z-10"
          onClick={goToPrev}
        >
          <BsChevronLeft className='sm:text-4xl text-2xl text-white' />
        </button>
        <button
          className="absolute sm:top-1/2 p-2 bg-[#348E38] hover:bg-[#3ca341] duration-300 top-64 transform -translate-y-1/2 md:right-12 sm:right-8 right-4 text-white rounded-full z-10"
          onClick={goToNext}
        >
          <BsChevronRight className='sm:text-4xl text-2xl text-white' />
        </button>

        <div className="overflow-hidden relative">
          <Slider ref={sliderRef} {...settings} className="relative">
            <div className="relative">
              <div
                className='bg-no-repeat h-screen bg-blend-multiply bg-[#0F422999] bg-cover bg-center'
                style={{ backgroundImage: `url(${bgimage1})` }}
              >
                <div className="absolute max-w-6xl px-4 mx-auto inset-0 flex flex-col items-center justify-center">
                  <div className='max-w-4xl mt-10 sm:p-11'>
                    <motion.div
                      key={currentSlide}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={slideTextVariants}
                      transition={{ duration: 1 }}
                    >
                      <h1 className="text-[40px] text-center sm:text-6xl font-bold font-family sm:px-0 px-1 lg:text-[85px] text-white" style={{ lineHeight: isLargeScreen ? '6rem' : '3rem' }}>
                        Make Your Home Like Garden
                      </h1>
                    </motion.div>
                    <div className='flex justify-center mt-12'>
                      <button className="bg-[#348E38] hover:bg-[#3ca341] text-white py-4 px-4 rounded md:px-6 lg:px-8 text-lg focus:outline-none focus:ring-2 focus:ring-[#3ca341] transition duration-300 ease-in-out">
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className='bg-no-repeat h-screen bg-blend-multiply bg-[#0F422999] bg-cover bg-center'
                style={{ backgroundImage: `url(${bgimage2})` }}>
                <div className="absolute max-w-6xl px-4 mx-auto inset-0 flex flex-col items-center justify-center">
                  <div className='max-w-4xl mt-10 sm:p-11'>
                    <motion.div
                      key={currentSlide}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={slideTextVariants}
                      transition={{ duration: 1 }}
                    >
                      <h1 className="text-[40px] text-center sm:text-6xl font-bold sm:px-0 px-1 lg:text-[85px] text-white font-family" style={{ lineHeight: isLargeScreen ? '6rem' : '3rem' }}>
                        Create Your Own Small Garden At Home
                      </h1>
                    </motion.div>
                    <div className='flex justify-center mt-12'>
                      <button className="bg-[#348E38] hover:bg-[#3ca341] text-white py-4 px-4 rounded md:px-6 lg:px-8 text-lg focus:outline-none focus:ring-2 focus:ring-[#3ca341] transition duration-300 ease-in-out">
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      

      {/* Boxes */}
      <div className="container -mt-16 relative mx-auto xl:px-8 px-7 overflow-hidden">
        <div className="flex flex-wrap -mx-2">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
          whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
          transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
           className="w-full sm:w-1/2 lg:w-1/3 mb-4">
            <div className="flex items-center bg-white shadow-xl p-10">
              <div className='bg-[#348e382a] p-3 rounded-full'>
                <RxCross2 className="text-[#348E38] text-2xl" />
              </div>
              <div className='ml-6'>
                <h2 className="text-2xl font-family font-semibold text-[#0F4229]">No Hidden Cost</h2>
                <p className='text-gray-600 mt-1 text-lg'>Clita erat ipsum lorem sit sed stet duo justo.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
          initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
          whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
          transition={{ delay: 0.3, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
           className="w-full sm:w-1/2 lg:w-1/3 mb-4">
            <div className="flex items-center bg-white shadow-xl p-10">
              <div className='bg-[#348e382a] p-3 rounded-full'>
                <FaUsers className="text-[#348E38] text-2xl" />
              </div>
              <div className='ml-6'>
                <h2 className="text-2xl font-family font-semibold text-[#0F4229]">Dedicated Team</h2>
                <p className='text-gray-600 mt-1 text-lg'>Clita erat ipsum lorem sit sed stet duo justo.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
          initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
          whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
          transition={{ delay: 0.3, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
           className="w-full sm:w-1/2 lg:w-1/3 mb-4">
            <div className="flex items-center bg-white shadow-xl p-10">
              <div className='bg-[#348e382a] p-3 rounded-full'>
                <MdPhoneEnabled className="text-[#348E38] text-2xl" />
              </div>
              <div className='ml-6'>
                <h2 className="text-2xl font-family font-semibold text-[#0F4229]">24/7 Available</h2>
                <p className='text-gray-600 mt-1 text-lg'>Clita erat ipsum lorem sit sed stet duo justo.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;