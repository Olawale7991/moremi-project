import React from 'react'
import { assets } from '../assets/asset'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='px-6 md:px-10 lg:px-10'>
    <h3 className='text-center text-3xl md:text-4xl font-bold pt-10'>
      Building The Next <span className='text-[#E13D7E]'>Female</span> Techstars
    </h3>
    <p className='text-center text-sm md:text-base'>
      Moremi is committed to helping girls and women succeed in tech, and we believe <br />
      that the future of tech is bright because of them.
    </p>
  
    {/* Button Section */}
    <div className='flex flex-col sm:flex-row items-center justify-center gap-4 py-10'>
      <button onClick={()=>navigate('/registration')} className='bg-[#E13D7E] text-white py-3 px-6 w-full sm:w-auto font-medium shadow-md hover:text-lg hover:bg-[#c12a62] transition-all duration-300'>
        Apply to Program
      </button>
      <button onClick={()=>navigate('/partner')} className='border border-[#E13D7E] text-[#E13D7E] py-3 px-6 w-full sm:w-auto font-medium shadow-md hover:text-lg hover:bg-[#c12a62] hover:text-white transition-all duration-300'>
        Become a Partner
      </button>
    </div>
  
    {/* Image Section */}
    <div className='py-8'>
      <img src={assets.landingPg} alt="Landing Image" className='w-full object-cover' />
    </div>
  </div>
  
    
  )
}

export default Header