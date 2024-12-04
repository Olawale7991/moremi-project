import React from 'react';
import Slider from 'react-slick'; 
import { assets } from '../assets/asset'; 

const Program = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,  
  };

  return (
    <div>
    <div className="relative">
      <div className="absolute inset-0 bg-black bg-opacity-40 z-30"></div>
      
      <Slider {...settings} className="relative z-20">
        <div className="relative">
          <img 
            src={assets.program} 
            alt="Program" 
            className="w-full object-cover max-h-[450px] sm:object-cover" 
          />
        </div>
        <div className="relative">
          <img 
            src={assets.program3} 
            alt="Program 3" 
            className="w-full object-cover max-h-[450px] sm:object-cover" 
          />
        </div>
        <div className="relative">
          <img 
            src={assets.programPg} 
            alt="Program Pg" 
            className="w-full object-cover max-h-[450px] sm:object-cover" 
          />
        </div>
      </Slider>

      <div className="absolute top-1/2 md:left-60 left-24 transform -translate-x-1/2 -translate-y-1/2 text-white z-30">
        <h3 className="text-base font-bold md:text-base lg:text-4xl">
          Our Program
        </h3>
        <p className="text-lg mt-2">
          What we offer
        </p>
      </div>
    </div>

    <div className='text-3xl pt-4 text-gray-500 font-normal py-4 px-8 mt-6'>
          <b>
            Explore Our Training <span className='text-[#E13D7E] font-normal'>Programme</span>
          </b>
        </div>
        <div className='w-full flex flex-col sm:flex-row gap-4 px-8 my-4'>
          <div className='border bg-[#E13D7E] h-16 w-8 border-none hidden sm:block'></div>
          <div>
            <p className='lg:px-8 text-lg sm:mb-10 '>
            With our extensive technical expertise, we are your reliable partners in driving innovation. We empower women by developing advanced solutions and tools to optimize your online business processes.            </p>
          </div>
        </div>

        <div className='w-full flex flex-col sm:flex-row gap-4 px-8 my-4 mt-7'>
  <div className='flex-1'>
    <img src={assets.techstar} alt="" className="w-full h-full object-cover" />
  </div>
  <div className="flex-1">
    <p className='lg:px-8 text-lg sm:mb-10 '>
      <b>Moremi Techstar Bootscamp</b> <br />
      MTB is a female-based social enterprise training that uses ICT creatively to improve the lives of aspiring females wanting to venture into tech. It’s our dream to transform the lives of girls and women with 21st-century skills in technology.
    </p>
  </div>
</div>

<div className='w-full flex flex-col sm:flex-row gap-4 px-8 my-4 mt-7'>
  <div className='flex-1'>
    <img src={assets.techjob} alt="" className="w-full h-full object-cover" />
  </div>
  <div className="flex-1">
    <p className='lg:px-8 text-lg sm:mb-10 '>
      <b>Moremi TechJobs</b> <br />
      MTJ is a job portal. Leverage your professional network and skills, and get hired. We create first-class experiences for those seeking new job opportunities.
    </p>
  </div>
</div>

<div className='w-full flex flex-col sm:flex-row gap-4 px-8 my-4 mt-7'>
  <div className='flex-1'>
    <img src={assets.accelerator} alt="" className="w-full h-full object-cover" />
  </div>
  <div className="flex-1">
    <p className='lg:px-8 text-lg sm:mb-10 '>
      <b>Moremi Techstars Accelerator Program</b> <br />
      MTA is an event that provides a forum where graduates of MTB and other women and girls, as tech enthusiasts, are given opportunities to pitch their ideas to potential investors to attract funding, mentorship, and support for their enterprises. We host tech-related workshops through our MTA Talks event.
    </p>
  </div>
</div>

<div className='w-full flex flex-col sm:flex-row gap-4 px-8 my-4 mt-7'>
  <div className='flex-1'>
    <img src={assets.program3} alt="" className="w-full h-full object-cover" />
  </div>
  <div className="flex-1">
    <p className='lg:px-8 text-lg sm:mb-10 '>
      <b >Moremi Female Founders In Tech</b> <br />
      MFFT is a mentoring and entrepreneurial powerhouse for female founders in tech. We provide access to mentorship, helping you gain new skills and jumpstart your career through our support of female entrepreneurs and seasoned professionals in technology.
    </p>
  </div>
</div>

    </div>
  );
};

export default Program;
