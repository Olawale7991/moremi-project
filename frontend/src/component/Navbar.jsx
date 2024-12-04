import React from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/asset'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=> navigate('/')} className='w-32 cursor-pointer' src={assets.tek} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
               <li className='py-1 text-lg'>Home</li> 
               <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'> 
               <li className='py-1 text-lg'>About</li> 
               <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/our-programs'>
               <li className='py-1 text-lg'>Our Programs</li> 
               <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/tech-events'> 
               <li className='py-1 text-lg'>Tech Events</li> 
               <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'> 
               <li className='py-1 text-lg'>Contact Us</li> 
               <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <button className='bg-[#E13D7E] text-white px-8 py-3 rounded-full font-light hidden md:block'>Donate</button>
        </ul>

    </div>
  )
}

export default Navbar