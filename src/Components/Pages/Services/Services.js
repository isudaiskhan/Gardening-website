import React from 'react'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Assets/carousel-1.jpg'
import TopBar from '../../TopBar/TopBar';
import Navbar from '../../Navbar/Navbar';
import Service from '../../Service/Service';
import Footer from '../../Footer/Footer';
import ScrollButton from '../../ScrollButton/ScrollButton';


const Services = () => {
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
             <h1 className="sm:text-7xl text-5xl font-family font-bold text-center text-white mt-28">Services</h1>
             <div className="flex flex-wrap items-center font-semibold text-lg mt-6 justify-center">
             <h2 className="text-white mr-3">Home</h2>
             <RxSlash className="text-white mr-3" />

             <h2 className="text-white mr-3">Pages</h2>
             <RxSlash className="text-white mr-3" />

            
               <h2 className="text-white">Services</h2>

                  </div>
                  </motion.div>
                </div>
             </div>

             </div>

             <Service />
             <Footer />
             <ScrollButton />
      
    </>
  )
}

export default Services