import React from 'react'
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';



const TopBar = () => {
  return (
    <>

    <div className="bg-[#0F4229] text-white py-4 px-14 justify-between items-center hidden lg:flex">
  <div className="flex items-center">
    <div className="mr-4">
      <FaPhoneAlt className="inline-block mr-2 text-[#E8F5E9]" />
      <span>+012 345 6789</span>
    </div>
    <div>
      <FaEnvelope className="inline-block mr-2 text-[#E8F5E9]" />
      <span>example@gmail.com</span>
    </div>
  </div>
  <div className="flex items-center">
    <h1 className="mr-4 text-lg text-[#E8F5E9]">Follow Us:</h1>
    <div className='space-x-5 flex'>
    <FaFacebookF className='text-lg cursor-pointer' />
    <FaTwitter className='text-lg cursor-pointer'/>
    <FaLinkedinIn className='text-lg cursor-pointer' />
    <FaInstagram className='text-lg cursor-pointer'/>
    </div>
  </div>
</div>


      
    </>
  )
}

export default TopBar