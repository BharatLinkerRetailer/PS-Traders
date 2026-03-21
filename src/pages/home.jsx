import React from 'react'
import HeroHome from '../components/hero-home.jsx'
import HomeAboutUs from '../components/aboutus-home.jsx'
import ServiceHome from '../components/service-home.jsx'
import FaqHome from '../components/faq-home.jsx'
import ContactusHome from '../components/contactus-home.jsx'
import './home.css'
function home() {
  return (
    <div className='home-parent'>
        <HeroHome/>
        <HomeAboutUs/>
        <ServiceHome/>
         <FaqHome/>
        <ContactusHome/>
    </div>
  )
}

export default home