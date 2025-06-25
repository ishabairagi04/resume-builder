import { useState } from 'react'


import React from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/herosection/HeroSection";
function App() {
  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <Navbar/>
      <HeroSection/>
    </div>
  );
}


export default App
