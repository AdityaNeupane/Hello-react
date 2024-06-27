import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'

import { Navbar } from './Components/Navbar'
import Herosection from './Components/Herosection'
import About from './Components/About'
import Feature from './Components/Feature'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import FAQ from './Components/FAQ'
import Pricing from './Components/Pricing'
import Testimonial from './Components/Testimonial'
import CTA from './Components/CTA'
import Footer from './Components/Footer'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'

function App() {
  

  return (
    <>

    <Router>
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

        </Router>
    </>
  )
}

export default App
