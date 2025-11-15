import React from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/HeroSection.jsx'
import FeatureSection from '../components/FeatureSection.jsx'
import TurnoverSection from '../components/TurnoverSection.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import TrustSignalsSection from '../components/TrustSignalsSection.jsx'
import Footer from '../components/Footer.jsx'

export const Home = () => {
  return (
    <>
       {/* <Navbar/> */}
       <HeroSection/>
       <FeatureSection/>
       <TurnoverSection/>
       <TestimonialsSection/>
       <TrustSignalsSection/>
       <Footer/>
    </>
  )
}
