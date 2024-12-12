import React from 'react';
import { assets } from '../assets/asset';
import { NavLink } from 'react-router-dom';

const Donation = () => {
  return (
    <div className="bg-gray-50 px-6 py-10 md:px-10 lg:px-20">
      <div className="text-center md:text-left text-3xl font-bold text-gray-700 mb-6">
        <b>
          <span className="text-[#E13D7E] font-normal">Donate </span>To The Cause
        </b>
      </div>

      <p className="text-base text-gray-600 leading-relaxed mb-6">
        Thank you for considering making a donation to Moremi! Your support plays a vital role in empowering girls and women in the tech industry. With your contribution, we can continue to provide valuable resources, mentorship programs, and career support services that help girls and women build successful tech careers. Join us in our mission to bridge the gender gap in the tech industry and create a more inclusive and diverse future.
      </p>

      <div>
        <p className="text-lg font-semibold text-gray-700 mb-2">Why Donate To Moremi</p>
        <p className="text-base text-gray-600 leading-relaxed">
          Every contribution makes a difference in creating a more diverse and inclusive future. Together, we can make a lasting impact on the lives of countless girls and women, and transform the tech industry for the better. Thank you for your generosity!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[
          "Empowering Girls and Women",
          "Bridging the Gender Gap",
          "Building a Diverse Tech Industry",
          "Long-Term Change",
          "Positive Social Impact",
          "Creating Role Models",
        ].map((text, index) => (
          <div key={index} className="flex items-start gap-4">
            <img src={assets.icon} alt="" className="w-8 h-8" />
            <p className="text-base text-gray-700">{text}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-base text-gray-600 leading-relaxed">
        Donate today and be a part of our mission to empower girls and women in the tech industry. Every contribution makes a difference in creating a more diverse and inclusive future. Together.
      </p>

      <div className="flex justify-center md:justify-start">
        <NavLink to='/donate'>
        <button className="bg-[#E13D7E] text-white px-8 py-3 rounded-md mt-6 text-sm font-medium shadow-md hover:bg-[#c12a62] transition-all duration-300">
          Donate Now
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Donation;
