import React from 'react';
import { assets } from '../assets/asset';

const About = () => {
  return (
    <div>
      {/* About Section */}
      <div className='text-3xl pt-10 text-gray-700 font-bold py-4 px-8'>
        <p>
          About <span className='text-[#E13D7E] font-semibold'>Moremi</span>
        </p>
      </div>
      <p className='text-lg px-8'>
        Moremi is a platform that helps girls and women succeed in tech. We believe that everyone has the potential to be great in tech, and we provide the resources, guidance, and opportunities to help them reach their full potential. Moremi is committed to helping girls and women succeed in tech, and we believe that the future of tech is bright because of them.
      </p>

      <div className='my-4'>
        <img
          src={assets.about}
          alt=''
          className='px-8 py-4 max-h-[400px] w-full object-contain sm:object-cover'
        />
      </div>

      {/* Mission Section */}
      
        <div className='text-2xl pt-4 text-gray-500 font-normal py-4 px-8'>
          <b>
            Our <span className='text-[#E13D7E] font-normal'>Mission</span>
          </b>
        </div>

        <div className='w-full flex flex-col sm:flex-row gap-4 px-8 my-4'>
          <div className='border bg-[#E13D7E] h-20 w-8 border-none hidden sm:block'></div>
          <div>
            <p className='lg:px-8 text-lg sm:mb-10 '>
              Our mission is to foster a supportive and inclusive environment where girls and women can thrive in the tech industry. We are committed to empowering them through skill development, mentorship, and advocacy, ensuring they have equal opportunities to succeed in this ever-evolving field.
            </p>
          </div>
        </div>
      

      {/* Vision Section */}
      <div className='text-2xl pt-10 text-gray-500 font-normal py-4 px-8'>
        <b>
          Our <span className='text-[#E13D7E] font-normal'>Vision</span>
        </b>
      </div>

      <div className='w-full flex flex-col sm:flex-row gap-4 px-8 my-4 md:my-10'>
        <div className='border bg-[#E13D7E] h-40 w-8 border-none hidden sm:block'></div>
        <div>
          <p className='lg:px-8 text-lg'>
            We envision a future where girls and women have equal representation and influence in the tech industry. We strive to create a world where gender is not a barrier to success, and girls and women can pursue their passion for technology with confidence, leading to greater innovation and diversity in the tech sector. <br />
            <br />
            <p>
              Join us on this transformative journey as we empower girls and women to become the tech leaders of tomorrow and drive positive change in the world of technology. Together, we can build a more inclusive and equitable tech industry.
            </p>
          </p>
        </div>
      </div>

      {/* Meet The Team Section */}
      <div className='text-2xl pt-10 text-gray-500 font-normal py-4 px-8'>
        <b>
          Meet The <span className='text-[#E13D7E] font-normal'>Team</span>
        </b>
      </div>

      {/* Horizontal Scroll for Meet The Team Section */}
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-x-auto my-8 md:my-10'>
        <div className='flex flex-col items-center text-lg cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
          <img
            src={assets.ceo}
            alt=''
            className='w-24 sm:w-64 mb-2'
          />
          <p className='text-base'>Samuel Adetogun</p>
          <p className='text-sm text-gray-600'>Founder CEO of Moremi</p>
        </div>

        <div className='flex flex-col items-center text-lg cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
          <img
            src={assets.pm}
            alt=''
            className='w-24 sm:w-64 mb-2'
          />
          <p className='text-base'>Olayinka Mary</p>
          <p className='text-sm text-gray-600'>Project Manager</p>
        </div>
        <div className='flex flex-col items-center text-lg cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
          <img
            src={assets.cm}
            alt=''
            className='w-24 sm:w-64 mb-2'
          />
          <p className='text-base'>Oladejo Yusuf</p>
          <p className='text-sm text-gray-600'>Community Manager</p>
        </div>
        <div className='flex flex-col items-center text-lg cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
          <img
            src={assets.tm}
            alt=''
            className='w-24 sm:w-64 mb-2'
          />
          <p className='text-base'>Adekan Bassey</p>
          <p className='text-sm text-gray-600'>Talent Manager</p>
        </div>

        <div className='flex flex-col items-center text-lg cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
          <img
            src={assets.ceo}
            alt=''
            className='w-24 sm:w-64 mb-2'
          />
          <p className='text-base'>Samuel Adegoke</p>
          <p className='text-sm text-gray-600'>Founder CEO of Moremi</p>
        </div>
        <div className='flex flex-col items-center text-lg cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
          <img
            src={assets.pm}
            alt=''
            className='w-24 sm:w-64 mb-2'
          />
          <p className='text-base'>Olayinka Marye</p>
          <p className='text-sm text-gray-600'>Project Manager</p>
        </div>
      </div>
    </div>
  );
};

export default About;
