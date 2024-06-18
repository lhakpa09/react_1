// src/routes/ConditionalRoute.js
import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from '../pages/home';
import AboutUs from '../pages/about_us';
import Contact from '../pages/contact';
import Navbar from '../Components/Navbar'; 

function ConditionalRoute() {
  return (<>
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/about_us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </> );
}

export default ConditionalRoute;
