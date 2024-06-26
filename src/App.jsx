import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './Compnents/Navbar'
import { FAQ } from './Compnents/FAQ'
import { Pricing } from './Compnents/Pricing'
 
import { Feature } from './Compnents/Feature'
import { CTA } from './Compnents/CTA'
import { Home } from './Compnents/Home'
import { AboutUs } from './Compnents/AboutUs'
import { ContactUs } from './Compnents/ContactUs'
//  import { Route, Routes } from 'react-router-dom'
import { Testimonial } from './Compnents/Testimonial'
import { Footer } from './Compnents/Footer'
import Herosection from './Compnents/Herosection'
import { About } from './Compnents/About'
import { Blog } from './Compnents/Blog'
import { Contact } from './Compnents/Contact'

function App() {
  

  return (
    <>
       <Navbar/>
       
       <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
       </Routes>




      <Herosection/>
      
    
       <About/>
       <br></br>

       <Feature/>
       <br></br>
 

       <Blog/>
       <br></br>

       <Contact/>
       <br></br>

       <FAQ/>
       <br></br>

       <Pricing/>
       <br></br>

       <Testimonial/>
       <br></br>

       <CTA/>
       <br></br>
        
       <Footer/>
    </>
  )
}

export default App
