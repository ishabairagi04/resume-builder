import { useState } from 'react'


import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/navbar/Navbar.jsx/';
import HeroSection from './components/herosection/HeroSection/';
import ViewMore from './components/ViewTemplates/ViewMore';
import Footer from './components/footer/Footer';
import TemplatesSection from './components/template/TempCard';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>

          <Route path="/" element={
            <>
            <HeroSection />
            <TemplatesSection/>
            </>
          } />
          <Route path="/next" element={<ViewMore />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};


export default App
