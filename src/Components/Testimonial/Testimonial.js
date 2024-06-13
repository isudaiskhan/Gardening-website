import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import image1 from '../Assets/testimonial-1.jpg';
import image2 from '../Assets/testimonial-2.jpg';
import { motion } from 'framer-motion';



const Testimonial = () => {
    const sliderRef = useRef();

    const images = [image1, image2, image1, image2];
    const clientNames = ["Client Name", "Client Name", "Client Name", "Client Name"];
    const professions = ["Profession", "Profession", "Profession", "Profession"];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
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



    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };



    
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



    return (
        <>
        <div className="container mx-auto py-16 overflow-hidden">
            <div className="flex flex-wrap px-2">
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
                 className="w-full lg:w-2/5 p-4">
                    <h2 className="text-[#348E38] text-2xl font-family font-semibold">Testimonial</h2>
                    <h1 className="text-[#0F4229] sm:text-5xl text-4xl mt-6 font-family font-bold"  style={{ lineHeight: isLargeScreen ? '3.8rem' : '3rem' }}>What Our Clients Say About Us!</h1>
                    <p className="text-gray-500 text-lg mt-6">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.
                    </p>

                    <button className="bg-[#348E38] hover:bg-[#3ca341] text-white py-3.5 mt-7 px-4 rounded md:px-6 lg:px-6 text-lg focus:outline-none focus:ring-2 focus:ring-[#3ca341] transition duration-300 ease-in-out">
                      See More
                    </button>
                </motion.div>


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
                 className="w-full lg:w-3/5 px-2 lg:mt-0 mt-4 relative">
                    <Slider ref={sliderRef} {...settings}>
                        {images.map((image, index) => (
                            <div key={index} className="lg:px-10">
                                <div className="p-4">
                                    <img className="w-24 h-24 rounded-md object-cover mr-6" src={image} alt={`Client ${index + 1}`} />
                                    <div>
                                        <p className="text-gray-600 mt-7 text-lg">
                                            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.
                                            At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                                        </p>
                                        <h2 className="text-2xl font-semibold font-family text-[#0F4229] mt-4">{clientNames[index]}</h2>
                                        <p className="text-gray-600 text-xl mt-1">{professions[index]}</p>
                                      
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className='mt-4'>
                    <button className="absolute lg:left-[70px] left-6 p-2 bg-[#E8F5E9] group rounded-2xl shadow-md hover:bg-[#348E38] transition" onClick={goToPrev}>
                        <FiChevronLeft className="text-[#348E38] group-hover:text-white text-3xl" />
                    </button>
                    <button className="absolute lg:left-[135px] left-20 p-2 bg-[#E8F5E9] group rounded-2xl shadow-md hover:bg-[#348E38] transition" onClick={goToNext}>
                        <FiChevronRight className="text-[#348E38] group-hover:text-white text-3xl" />
                    </button>
                    </div>
                </motion.div>
            </div>
        </div>
        </>
    );
};

export default Testimonial;