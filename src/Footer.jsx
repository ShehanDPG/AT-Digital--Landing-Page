import React from 'react';
import Logo from './assets/logo.png';

const Footer = () => (
  <footer
    style={{
      backgroundColor: 'rgba(79, 70, 229, 1)',
      color: 'white',
      opacity: 1,
    }}
    className="w-full"
  >
    <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-[80px] py-6 lg:py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
        
        
        <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
          <div className="flex items-center space-x-2 mb-2">
            <img src={Logo} alt="at digital logo" className="h-8" />
          </div>
          <p className="leading-relaxed text-gray-200 text-sm">
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective – your business results.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-2">Our Technologies</h3>
          <ul className="space-y-1 text-gray-200">
            <li><a href="#" className="hover:text-white text-sm">ReactJS</a></li>
            <li><a href="#" className="hover:text-white text-sm">Gatsby</a></li>
            <li><a href="#" className="hover:text-white text-sm">NextJS</a></li>
            <li><a href="#" className="hover:text-white text-sm">NodeJS</a></li>
          </ul>
        </div>

        
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-2">Our Services</h3>
          <ul className="space-y-1 text-gray-200">
            <li><a href="#" className="hover:text-white text-sm">Social Media Marketing</a></li>
            <li><a href="#" className="hover:text-white text-sm">Web & Mobile App Development</a></li>
            <li><a href="#" className="hover:text-white text-sm">Data & Analytics</a></li>
          </ul>
        </div>
      </div>

      
      <div className="mt-6 pt-4 border-t border-white-400 text-white-300 text-sm">
        <ul className="flex justify-between md:justify-center items-center gap-0 md:gap-6 px-4 md:px-0">
          <li className="text-left">
            <a href="#" className="hover:text-white text-sm">
              Privacy Policy
            </a>
          </li>

          {/* Separator */}
          <li className="hidden md:inline mx-3">|</li>
          <li className="md:hidden text-center mx-2">|</li>

          <li className="text-right">
            <a href="#" className="hover:text-white text-sm">
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
