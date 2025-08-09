import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full shadow-md z-50"
      style={{ backgroundColor: 'rgba(79, 70, 229, 1)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <img src={logo} alt="Company Logo" className="h-10 w-auto" />
          </a>
          
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#services" className="hover:text-gray-200">Services</a>
            <a href="#about" className="hover:text-gray-200">About Us</a>
            <a href="#contact" className="hover:text-gray-200">Contact Us</a>
            <a href="#careers" className="hover:text-gray-200">Careers</a>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-white focus:outline-none"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

       
        {menuOpen && (
          <div className="md:hidden bg-white px-4 py-4 space-y-4">
            <a
              href="#services"
              className="block text-black hover:text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block text-black hover:text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block text-black hover:text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>
            <a
              href="#careers"
              className="block text-black hover:text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Careers
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
