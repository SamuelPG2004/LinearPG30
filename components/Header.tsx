import React, { useState, useEffect } from 'react';
// 💡 IMPORTAMOS EL COMPONENTE LINK DE REACT ROUTER DOM
import { Link } from 'react-router-dom'; 
import { LinearLogo } from '../constants';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = ['Product', 'Resources', 'Pricing', 'Customers', 'Now', 'Contact'];

  const headerClasses = `sticky top-0 z-50 py-3 transition-all duration-300 ${
    scrolled ? 'bg-[#0B0B0F] border-b border-white/10' : 'bg-[#0B0B0F]' 
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
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
            
            {/* 🔑 BOTÓN LOGIN: CONECTADO A /login */}
            <Link 
              to="/login" // 💡 Aquí está la conexión al componente Login.tsx
              className="hidden sm:inline-block text-gray-300 hover:text-white transition-colors"
            >
              Log in
            </Link>
            
            {/* 🔑 BOTÓN SIGNUP: CONECTADO A /signup */}
            <Link
              to="/signup" // Conexión al componente SignUp.tsx
              className="px-4 py-1.5 border border-white/10 rounded-md bg-transparent text-white font-medium hover:bg-white/5 transition-colors"
            >
              Sign up
            </Link>
            
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