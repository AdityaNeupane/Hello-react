import { useState } from 'react'
 
import './App.css'
import { Navbar } from './Compnents/Navbar'
import { Welcome } from './Compnents/Welcome'
import { Pricing } from './Compnents/Pricing'
import { Features } from './Compnents/Features'
import { AnotherFeature } from './Compnents/AnotherFeature'
import { CTA } from './Compnents/CTA'
import { Team } from './Compnents/Team'
import { Review } from './Compnents/Review'
import { Testimonial } from './Compnents/Testimonial'
import { Footer } from './Compnents/Footer'
import Herosection from './Compnents/Herosection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <br></br>
      
      <Herosection/>
      <br></br>
    
       <Pricing/>
       <br></br>
       
       <Features/>
       <br></br>
       <AnotherFeature/>
       <br></br>
       <Team/>
       <br></br>
       <CTA/>
       <br></br>
       <Welcome/>
       <br></br>
       <Testimonial/>
       <br></br>
       {/* <Review/> */}
       <Footer/>
    </>
  )
}

export default App
