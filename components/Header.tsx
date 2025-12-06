
import React from 'react';
import { LinearLogo } from '../constants';

const Header: React.FC = () => {
  const navLinks = ['Product', 'Resources', 'Pricing', 'Customers', 'Now', 'Contact'];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0B0F]/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <LinearLogo className="h-6 w-auto" />
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-300">
              {navLinks.map((link) => (
                <a key={link} href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <a href="#" className="hidden sm:inline-block text-gray-300 hover:text-white transition-colors">
              Log in
            </a>
            <a
              href="#"
              className="px-4 py-1.5 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition-colors"
            >
              Sign up
            </a>
            <button className="md:hidden text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
