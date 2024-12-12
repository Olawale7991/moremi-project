import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Donation from './pages/Donation'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Program from './pages/Program'
import TechEvent from './pages/TechEvent'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Donate from './pages/Donate'
import ApplyProgram from './pages/ApplyProgram'
import Partner from './pages/Partner'
import { ToastContainer, toast } from 'react-toastify';



const App = () => {
  return (
    <div className='px-5 md:px-20'>
      <ToastContainer />
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/donate' element={<Donate />}/>
          <Route path='/our-programs' element={<Program />}/>
          <Route path='/tech-events' element={<TechEvent />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/donation' element={<Donation />}/>
          <Route path='/registration' element={<ApplyProgram />}/>
          <Route path='/partner' element={<Partner />}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App