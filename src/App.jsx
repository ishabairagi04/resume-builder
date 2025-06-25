import { useState } from 'react'


import React from "react";


import Navbar from './components/navbar/Navbar.jsx/';
import HeroSection from './components/herosection/HeroSection';
import ViewMore from './components/View Templates/View_More';
function App() {
  return (
   <div >
    <Navbar/>
    <HeroSection/>
    <ViewMore/>
   
    </div>
  );
}


export default App
