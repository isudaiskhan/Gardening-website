import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import AboutUs from './Components/Pages/About/About';
import Services from './Components/Pages/Services/Services';
import Project from './Components/Pages/Project/Project';
import Feature from './Components/Pages/Pages/Feature';
import FreeQuote from './Components/Pages/Pages/FreeQuote';
import OurTeam from './Components/Pages/Pages/OurTeam';
import Testimonials from './Components/Pages/Pages/Testimonials';
import Contact from './Components/Pages/Contact/Contact';



function App() {
  return (
    <>

     <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/projects" element={<Project />} />
          <Route path="/Features" element={<Feature/>} />
          <Route path="/freequote" element={<FreeQuote/>} />
          <Route path="/ourteam" element={<OurTeam/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/contact" element={<Contact />} />
     </Routes>

    </>
  );
}

export default App;