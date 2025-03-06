import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import UnderMaintenans from './Components/UnderMaintenans/UnderMaintenans';
import Hero from './Components/Hero/Hero';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/ContactUs';
import Gallery from './Components/Gallery/Gallery';



function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <Gallery/>
    <ContactUs/>
    <Footer/>
    <UnderMaintenans/>
    </>
  );
}

export default App;
