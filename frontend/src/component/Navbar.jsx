import React, { useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/asset'

const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
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
            <NavLink to='donation'>
            <button className='bg-[#E13D7E] text-white px-8 py-3 rounded-full font-light hidden md:block'>Donate</button>
            </NavLink>
        </ul>

        <img onClick={()=> setShowMenu(true)} className='w-6 md:hidden ml-28' src={assets.menu} alt="" />

         {/* Mobile menu */}
         <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all `}>
            <div className='flex items-center justify-between py-6 px-5'>
               <img className='w-28' src={assets.removebg} alt="" />
               <img className='w-7' onClick={()=> setShowMenu(false)} src={assets.cross} alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
               <NavLink onClick={()=> setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block hover:bg-[#E13D7E] hover:text-white'>HOME</p></NavLink>
               <NavLink onClick={()=> setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block hover:bg-[#E13D7E] hover:text-white'>About</p></NavLink>
               <NavLink onClick={()=> setShowMenu(false)} to='/our-programs'><p className='px-4 py-2 rounded inline-block hover:bg-[#E13D7E] hover:text-white'>Our Programs</p></NavLink>
               <NavLink onClick={()=> setShowMenu(false)} to='/tech-events'><p className='px-4 py-2 rounded inline-block hover:bg-[#E13D7E] hover:text-white'>Tech-Event</p></NavLink>
               <NavLink onClick={()=> setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block hover:bg-[#E13D7E] hover:text-white'>Contact</p></NavLink>
               <NavLink onClick={()=> setShowMenu(false)} to='/donation'><p className='px-4 py-2 rounded inline-block hover:bg-[#E13D7E] hover:text-white'>Donation</p></NavLink>
            </ul>
         </div>

    </div>
  )
}

export default Navbar