import React from 'react'
import { assets } from '../assets/asset'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='mt-32'>
    <div className="relative">
  {/* Top Section */}
  <div className="bg-[#E13D7E] text-white flex flex-col items-center justify-center max-w-3xl mx-auto overflow-hidden shadow-lg rounded-lg relative z-10">
    <p className="text-2xl text-center text-white p-4 pt-10">
      Become The Next Female <br /> Techstars Now
    </p>

    <button onClick={()=> navigate('/registration')} className="border bg-white text-[#E13D7E] py-2 px-6 my-10">
      Apply to program
    </button>
  </div>

  {/* Bottom Section */}
  <div className="md:mx-10 relative z-0 mt-[-110px]">
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm bg-[#1E1E1E] text-white p-10 pt-32">
      {/* Left section */}
      <div>
        <img className="mb-5 w-40" src={assets.removebg} alt="" />
        <p className="w-full md:w-2/3 leading-6">
          Bridging the Gap in the tech industry by empowering girls and women
          with skills and confidence they need to succeed in tech-related
          fields.
        </p>
      </div>

      {/* Center section */}
      <div>
        <p className="text-xl font-medium mb-5">Company</p>
        <ul className="flex flex-col gap-2">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Testimonials</li>
          <li>Tech Events</li>
          <li>Terms of Service</li>
        </ul>
      </div>

      {/* Right section */}
      <div>
        <p className="text-xl font-medium mb-5">Get In Touch</p>
        <ul className="flex flex-col gap-2">
          <li>+234-816-263-8910</li>
          <li>Moremi@gmail.com</li>
          <img className='w-5 cursor-pointer' src={assets.facebook} alt="" />
          <img className='w-5 cursor-pointer' src={assets.twiiter} alt="" />
          <img className='w-5 cursor-pointer' src={assets.linkdin} alt="" />
        </ul>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="w-full">
      <hr className="border-gray-500" />
      <p className="py-5 text-sm text-center">
        Copyright 2024 @Moremi - All Rights Reserved
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Footer