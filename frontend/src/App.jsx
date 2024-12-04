import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Donation from './pages/Donation'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Program from './pages/Program'
import TechEvent from './pages/TechEvent'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <div className='px-5 md:px-20'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/our-programs' element={<Program />}/>
          <Route path='/tech-events' element={<TechEvent />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/donation' element={<Donation />}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App