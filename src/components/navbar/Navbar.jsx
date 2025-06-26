import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      
        <div className="flex items-center space-x-2">
     
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
          <span className="text-xl font-bold text-gray-900">
            ResumeBuilder <span className="font-normal">Pro</span>
          </span>
        </div>

        
        <div className="flex items-center space-x-6">
          <button className="text-gray-800 none font-medium hover:text-blue-600 transition">
            Login
          </button>
          <button className="bg-gray-900 text-white px-5 py-2 rounded-md font-semibold hover:bg-gray-800 transition">
            Get Started Free
          </button>
        </div>
      </div>
    </nav>
  );
}
