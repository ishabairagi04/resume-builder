import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 sm:py-4 max-w-7xl mx-auto">
        
        {/* Left Section */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {location.pathname === "/next" && (
            <button
              onClick={() => navigate("/")}
              className="text-blue-600 hover:text-blue-800 text-lg sm:text-xl"
            >
              <FaLongArrowAltLeft />
            </button>
          )}
          
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          
          <span className="text-lg sm:text-xl font-bold text-gray-900">
            ResumeBuilder <span className="font-normal">Pro</span>
          </span>
        </div>

        {/* Right Section (Nav Buttons) */}
        <div className="flex items-center space-x-3 sm:space-x-6 mt-2 sm:mt-0">
          <button className="text-sm sm:text-base text-gray-800 font-medium hover:text-blue-600 transition">
            Login
          </button>
          <button className="text-sm sm:text-base bg-gray-900 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-md font-semibold hover:bg-gray-800 transition">
            Get Started Free
          </button>
        </div>
      </div>
    </nav>
  );
}
