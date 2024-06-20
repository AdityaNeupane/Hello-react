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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <Pricing/>
       <Welcome/>
       <Features/>
       <AnotherFeature/>
       <CTA/>
       <Team/>
       <Testimonial/>
       <Review/>
       <Footer/>
    </>
  )
}

export default App
