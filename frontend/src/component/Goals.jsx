import React from 'react'

const Goals = () => {
  return (
    <div className='px-6 sm:px-8 md:px-10 lg:px-12 pt-5 pb-10'>
  <h3 className='text-3xl sm:text-4xl font-bold'>Our Goals</h3>
  <p className='text-sm sm:text-base py-3 mb-6'>We are building the next female techstar</p>

  <div className='flex flex-col sm:flex-row flex-wrap gap-6 w-full pt-5 px-3 sm:px-0 mb-5'>
    {/* Goal 01 */}
    <div className='bg-[#FFEEF5] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 p-5 flex-1'>
      <p className='text-5xl sm:text-6xl lg:text-7xl text-[#E13D7E] font-semibold py-3'>01</p>
      <p className='text-xl sm:text-2xl py-3 font-semibold'>Bridging the Gender Gap</p>
      <p className='py-3 text-sm sm:text-lg'>Our primary goal is to bridge the gender gap in the tech industry by empowering girls and women with the skills and confidence they need to succeed in tech-related fields.</p>
    </div>

    {/* Goal 02 */}
    <div className='bg-[#E13D7E] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 p-5 flex-1 text-white'>
      <p className='text-5xl sm:text-6xl lg:text-7xl font-semibold py-3'>02</p>
      <p className='text-xl sm:text-2xl py-3 font-semibold'>Skill Development</p>
      <p className='py-3 text-sm sm:text-lg'>We strive to equip girls and women with relevant technical skills, ensuring they have the necessary tools to excel in the tech industry.</p>
    </div>

    {/* Goal 03 */}
    <div className='bg-[#FFEEF5] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 p-5 flex-1'>
      <p className='text-5xl sm:text-6xl lg:text-7xl text-[#E13D7E] font-semibold py-3'>03</p>
      <p className='text-xl sm:text-2xl py-3 font-semibold'>Career Support</p>
      <p className='py-3 text-sm sm:text-lg'>We offer comprehensive career support services, including mentorship programs, networking opportunities, and job placement assistance, to help girls and women advance in their tech careers.</p>
    </div>
  </div>
</div>

  )
}

export default Goals