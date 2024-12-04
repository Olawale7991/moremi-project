import React, { useContext } from 'react';
import { testimonials } from '../assets/asset';
import { AppContext } from '../context/AppContext';

  const Testimonials = () => {
  const { currentSlide, nextSlide, prevSlide, goToSlide } = useContext(AppContext);
  

  return (
    <div className='px-6 sm:px-8 md:px-10 lg:px-12 pt-5 pb-10 mt-[400px]'>
      <h3 className='text-3xl sm:text-4xl font-bold text-center'>Testimonials</h3>
      <p className='text-sm sm:text-base py-3 mb-6 text-center'>See what they are saying about us</p>

      <div className='relative flex flex-col items-center justify-center max-w-3xl mx-auto overflow-hidden shadow-lg rounded-lg bg-white'>
        {/* Testimonial Slide */}
        <div className='flex flex-col items-center gap-4 p-6'>
          <img
            src={testimonials[currentSlide].image}
            alt={testimonials[currentSlide].name}
            className='w-14 sm:w-16 md:w-20 rounded-full'
          />
          <p className='text-sm sm:text-base md:text-lg text-center text-zinc-700'>
            {testimonials[currentSlide].text}
          </p>
          <p className='text-sm font-semibold text-zinc-900'>
            {testimonials[currentSlide].name}
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className='absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer text-2xl text-zinc-600' onClick={prevSlide}>
          &#8249;
        </div>
        <div className='absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-2xl text-zinc-600' onClick={nextSlide}>
          &#8250;
        </div>
        
        {/* Dots for Slide Navigation */}
        <div className='flex justify-center gap-2 mt-4'>
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                index === currentSlide ? 'bg-[#E13D7E]' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
