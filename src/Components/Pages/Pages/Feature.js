import React from 'react'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Assets/carousel-1.jpg'
import TopBar from '../../TopBar/TopBar';
import Navbar from '../../Navbar/Navbar';
import { RxCross2 } from "react-icons/rx";
import { FaUsers   } from "react-icons/fa";
import { MdPhoneEnabled } from "react-icons/md"
import Facts from '../../Facts/Facts';
import Features from '../../Features/Features';
import Footer from '../../Footer/Footer';
import ScrollButton from '../../ScrollButton/ScrollButton';



const Feature = () => {
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
             <h1 className="sm:text-7xl text-5xl font-family font-bold text-center text-white mt-28">Features</h1>
             <div className="flex flex-wrap items-center font-semibold text-lg mt-6 justify-center">
             <h2 className="text-white mr-3">Home</h2>
             <RxSlash className="text-white mr-3" />

             <h2 className="text-white mr-3">Pages</h2>
             <RxSlash className="text-white mr-3" />

            
               <h2 className="text-white">Features</h2>

                  </div>
                  </motion.div>
                </div>
             </div>

             </div>



                  
    {/* Boxes */}
    <div className="container py-20 relative mx-auto xl:px-10 px-7">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
          <div className="flex items-center bg-white shadow-xl p-10">
          <div className='bg-[#348e382a] p-3 rounded-full'>
            <RxCross2 className="text-[#348E38] text-2xl" />
            </div>
            <div className='ml-6'>
              <h2 className="text-2xl font-family font-semibold text-[#0F4229]">No Hidden Cost</h2>
              <p className='text-gray-600 mt-1 text-lg'>Clita erat ipsum lorem sit sed stet duo justo.</p>
            </div>
          </div>
        </div>


        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
          <div className="flex items-center bg-white shadow-xl p-10">
          <div className='bg-[#348e382a] p-3 rounded-full'>
            <FaUsers className="text-[#348E38] text-2xl" />
            </div>
            <div className='ml-6'>
              <h2 className="text-2xl font-family font-semibold text-[#0F4229]">Dedicated Team</h2>
              <p className='text-gray-600 mt-1 text-lg'>Clita erat ipsum lorem sit sed stet duo justo.</p>
            </div>
          </div>
        </div>


        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4">
          <div className="flex items-center bg-white shadow-xl p-10">
          <div className='bg-[#348e382a] p-3 rounded-full'>
            <MdPhoneEnabled className="text-[#348E38] text-2xl" />
            </div>
            <div className='ml-6'>
              <h2 className="text-2xl font-family font-semibold text-[#0F4229]">24/7 Available</h2>
              <p className='text-gray-600 mt-1 text-lg'>Clita erat ipsum lorem sit sed stet duo justo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <Facts />
    <Features />
    <Footer />
    <ScrollButton />

      
    </>
  )
}

export default Feature