import React, { useState } from "react";
import { assets } from "../assets/asset";
import { programs } from "../assets/asset";
import { useNavigate } from "react-router-dom";

const Programs = () => {
  const [visibleContent, setVisibleContent] = useState(null);

  const navigate = useNavigate()

  const toggleContent = (id) => {
    setVisibleContent(visibleContent === id ? null : id);
  };

  
  return (
    <>
      <div className="bg-[#1E1E1E] flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-4 md:px-4 lg:px-4">
        {/* Left side */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] px-8">
          <p className="text-3xl md:text-4xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
            Our Program
          </p>
          <p className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
            Explore what we are offering
          </p>
          <button onClick={()=>navigate('/registration')} className="flex items-center gap-2 bg-[#E13D7E] px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300">
            Apply Now
          </button>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 md:relative">
          <img src={assets.programPg} alt=""
            className="w-full h-auto md:h-full md:absolute bottom-0 right-0 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Program List Container */}
      <div className="w-full px-4 md:px-10 lg:px-20 py-10 mb-[-60px] relative lg:relative">
        <div className="w-4/5 p-6 border rounded-xl shadow-lg bg-white absolute mt-[-80px] lg:absolute">
          {
          programs.map((program) => (
            <div key={program.id} className="mb-4 last:mb-0">
              <div
                className="flex items-center gap-5 p-4 border rounded-lg cursor-pointer bg-gray-50"
                onClick={() => toggleContent(program.id)}
              >
                <img className="w-5" src={assets.icon} alt="" />
                <p className="flex-1">{program.title}</p>
                <p className="text-3xl font-bold">
                  {visibleContent === program.id ? "-" : "+"}
                </p>
              </div>
              {visibleContent === program.id && (
                <div className="mt-2 px-4 text-gray-700 bg-gray-100 rounded-md">
                  <p>{program.content}</p>
                </div>
              )}
            </div>
          ))
          }
        </div>
      </div>
    </>
  );
};

export default Programs;
