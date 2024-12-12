import React from "react";
import { assets } from "../assets/asset";
import { useNavigate } from "react-router-dom";

const TechEvent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-4xl pt-4 text-gray-500 font-normal py-4 px-8 text-center">
        <b>
          Our <span className="text-[#E13D7E] font-normal">Gallery</span>
        </b>
      </div>
      <div className="pt-4  font-normal py-4 px-8 ">
        <p className="text-2xl font-semibold text-[#E13D7E] ">Event</p>
        <b className="text-lg">Our Recent Event</b>
      </div>

      <div className="flex flex-wrap gap-6 justify-center px-4 my-8">
        <img
          src={assets.t1}
          alt="Image 1"
          className="w-full sm:w-52 sm:h-auto md:w-64 md:h-auto lg:w-80 lg:h-auto object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <img
          src={assets.t2}
          alt="Image 2"
          className="w-full sm:w-52 sm:h-auto md:w-64 md:h-auto lg:w-80 lg:h-auto object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <img
          src={assets.t3}
          alt="Image 3"
          className="w-full sm:w-52 sm:h-auto md:w-64 md:h-auto lg:w-80 lg:h-auto object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <img
          src={assets.t4}
          alt="Image 4"
          className="w-full sm:w-52 sm:h-auto md:w-64 md:h-auto lg:w-80 lg:h-auto object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <img
          src={assets.t5}
          alt="Image 5"
          className="w-full sm:w-52 sm:h-auto md:w-64 md:h-auto lg:w-80 lg:h-auto object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <img
          src={assets.program3}
          alt="Image 6"
          className="w-full sm:w-52 sm:h-auto md:w-64 md:h-auto lg:w-80 lg:h-auto object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="w-full flex flex-wrap sm:flex-nowrap gap-6 px-8 py-8 items-center justify-center">
        {/* First Box */}
        <div className="bg-[#FFEEF5] w-full sm:w-1/2 text-center h-44 flex flex-col items-center justify-center rounded-lg shadow-lg relative overflow-hidden">
          {/* Top-left circle with border */}
          <div className="absolute -top-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 bg-transparent border-4 border-[#E13D7E] rounded-full"></div>
          <p className="text-xl font-semibold text-[#E13D7E] mb-3">
            Become the next Female Techstar
          </p>
          <button onClick={()=> navigate('/registration')} className="bg-[#E13D7E] text-white py-2 px-6 rounded-full hover:bg-[#c22d65] transition-colors">
            Apply now
          </button>
        </div>

        {/* Second Box */}
        <div className="bg-[#FFEEF5] w-full sm:w-1/2 text-center h-44 flex flex-col items-center justify-center rounded-lg shadow-lg relative overflow-hidden">
          {/* Top-right circle with border */}
          <div className="absolute -top-6 -right-6 w-16 h-16 sm:w-20 sm:h-20 bg-transparent border-4 border-[#E13D7E] rounded-full"></div>
          {/* Bottom-left circle with border */}
          <div className="absolute -bottom-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 bg-transparent border-4 border-[#E13D7E] rounded-full"></div>
          <p className="text-xl font-semibold text-[#E13D7E] mb-3">
            Want To Join Our Community
          </p>
          <button onClick={()=> navigate('/partner')} className="bg-[#E13D7E] text-white py-2 px-6 rounded-full hover:bg-[#c22d65] transition-colors">
            Join now
          </button>
        </div>
      </div>

      <div className="pt-4  font-normal py-4 px-8 ">
        <p className="text-2xl font-semibold text-[#E13D7E] ">Recent</p>
        <b className="text-lg">Our Latest News</b>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <div className="relative h-56 w-full">
            <img
              src={assets.l1}
              alt="Event 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <p className="text-gray-500 text-sm">31 Jan, 2024</p>
            <p className="text-lg font-semibold my-2">
              Events: Leumax Organizing Its Annual Event
            </p>
            <div className="flex items-center justify-between text-[#E13D7E] mt-auto">
              <p className="flex items-center gap-1">👀 540</p>
              <button className="border border-[#E13D7E] py-1 px-4 rounded-lg hover:bg-[#E13D7E] hover:text-white transition">
                Read more
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <div className="relative h-56 w-full">
            <img
              src={assets.l2}
              alt="Event 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <p className="text-gray-500 text-sm">15 Feb, 2024</p>
            <p className="text-lg font-semibold my-2">
              Workshop: Future of Tech Innovations
            </p>
            <div className="flex items-center justify-between text-[#E13D7E] mt-auto">
              <p className="flex items-center gap-1">👀 680</p>
              <button className="border border-[#E13D7E] py-1 px-4 rounded-lg hover:bg-[#E13D7E] hover:text-white transition">
                Read more
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <div className="relative h-56 w-full">
            <img
              src={assets.l3}
              alt="Event 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <p className="text-gray-500 text-sm">20 Mar, 2024</p>
            <p className="text-lg font-semibold my-2">
              Seminar: Empowering Women in Tech
            </p>
            <div className="flex items-center justify-between text-[#E13D7E] mt-auto">
              <p className="flex items-center gap-1">👀 750</p>
              <button className="border border-[#E13D7E] py-1 px-4 rounded-lg hover:bg-[#E13D7E] hover:text-white transition">
                Read more
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <div className="relative h-56 w-full">
            <img
              src={assets.l4}
              alt="Event 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <p className="text-gray-500 text-sm">5 Apr, 2024</p>
            <p className="text-lg font-semibold my-2">
              Conference: Tech Leaders of Tomorrow
            </p>
            <div className="flex items-center justify-between text-[#E13D7E] mt-auto">
              <p className="flex items-center gap-1">👀 810</p>
              <button className="border border-[#E13D7E] py-1 px-4 rounded-lg hover:bg-[#E13D7E] hover:text-white transition">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechEvent;
