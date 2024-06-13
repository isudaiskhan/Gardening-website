import React, { useState, useEffect } from 'react';
import image1 from '../Assets/service-images/icon-1.png';
import image2 from '../Assets/service-images/icon-2.png';
import image3 from '../Assets/service-images/icon-3.png';
import image4 from '../Assets/service-images/icon-4.png';
import image5 from '../Assets/service-images/icon-5.png';
import image6 from '../Assets/service-images/icon-6.png';
import image7 from '../Assets/service-1.jpg';
import image8 from '../Assets/service-2.jpg';
import image9 from '../Assets/service-3.jpg';
import image10 from '../Assets/service-4.jpg';
import image11 from '../Assets/service-5.jpg';
import image12 from '../Assets/service-6.jpg';
import { FaPlus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';



const cards = [
  { id: 1, image: image1, backgroundImage: image7, title: 'Landscaping', },
  { id: 2, image: image2, backgroundImage: image8, title: 'Pruning plants',},
  { id: 3, image: image3, backgroundImage: image9, title: 'Irrigation & Drainage',  },
  { id: 4, image: image4, backgroundImage: image10, title: 'Garden Maintenance', },
  { id: 5, image: image5, backgroundImage: image11, title: 'Green Technology', },
  { id: 6, image: image6, backgroundImage: image12, title: 'Urban Gardening',},
];

const Service = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
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
    <div className='mt-10 py-12 container mx-auto overflow-hidden'>
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
        Our Services
        </h1>
        <h1 className='text-center text-[#0F4229] sm:text-5xl text-4xl mt-6 font-family font-bold'  style={{ lineHeight: isLargeScreen ? '3.8rem' : '3rem' }}>
        Services That We Offer For You
        </h1>
      </motion.div>

      <div className='grid grid-cols-1 py-20 md:grid-cols-2 lg:px-7 px-4 lg:grid-cols-3 gap-7'>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 60, duration: 1 }}
            className={`py-8 flex flex-col items-center relative rounded bg-white shadow-xl shadow-gray-300 group ${
              hoveredCard === card.id ? 'bg-blend-multiply' : ''
            }`}
            onMouseEnter={() => handleMouseEnter(card.id)}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundImage:
                hoveredCard === card.id
                  ? `url(${card.backgroundImage}), linear-gradient(rgba(15, 66, 41, 0.6), rgba(15, 66, 41, 0.6))`
                  : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='py-6 px-6 rounded-full group-hover:bg-[#E8F5E9] relative z-10'>
              <img src={card.image} alt={card.title} />
            </div>
            <h1 className='text-2xl text-black text-center group-hover:text-white tracking-wide font-bold font-family mt-6'>
              {card.title}
            </h1>
            <p className='text-gray-600 mb-16 text-lg text-center group-hover:text-white mt-3 px-14'>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.
            </p>
            <div className='absolute bottom-8 bg-[#E8F5E9] p-2 cursor-pointer flex items-center'>
              <FaPlus className='text-[#348E38] text-lg' />
              <AnimatePresence>
                {hoveredCard === card.id && (
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className='ml-1 text-gray-600 px-2'
                  >
                    Read More
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Service;