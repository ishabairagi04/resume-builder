import { useState } from 'react'


import React from "react";


import Navbar from './components/navbar/Navbar.jsx/';
import HeroSection from './components/herosection/HeroSection/';

import Footer from './components/footer/Footer';
import TemplatesSection from './components/template/TempCard/';
function App() {
  return (
   <div >
    <Navbar/>
    <HeroSection/>
   <TemplatesSection/>
    <Footer/>
   
    </div>
  );
}


export default App
