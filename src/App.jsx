import { useState } from 'react'
 
import './App.css'
import { Navbar } from './Compnents/Navbar'
import { FAQ } from './Compnents/FAQ'
import { Pricing } from './Compnents/Pricing'
 
import { Feature } from './Compnents/Feature'
import { CTA } from './Compnents/CTA'
 
 
import { Testimonial } from './Compnents/Testimonial'
import { Footer } from './Compnents/Footer'
import Herosection from './Compnents/Herosection'
import { About } from './Compnents/About'
import { Blog } from './Compnents/Blog'
import { Contact } from './Compnents/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       
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
