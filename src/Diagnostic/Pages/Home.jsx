import React from 'react'
import Hero from '../Components/Hero'
import ServicesHome from '../Components/ServicesHome'
import AboutHome from '../Components/AboutHome'
import ContactHome from '../Components/ContactHome'
import Dashboard from '../Components/DashboardHome'
import AppointmentHome from '../Components/AppointmentHome'
import Test from '../Components/subComponent/test'
const Home = () => {
  return (
    <>
    <Hero />
    <AppointmentHome/>
    <ServicesHome />
    <Dashboard />
    <AboutHome />
    <ContactHome />
    {/* <Test/> */}
    
    </>
  )
}

export default Home
