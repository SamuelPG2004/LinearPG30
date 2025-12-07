import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductMegaMenu from './ProductMegaMenu';
import FeaturesMegaMenu from './FeaturesMegaMenu';
import BlogMegaMenu from './BlogMegaMenu';
import IntegrationsMegaMenu from './IntegrationsMegaMenu';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const handleMenuToggle = (e: React.MouseEvent<HTMLAnchorElement>, menuName: string) => {
    e.preventDefault();
    setOpenMenu(prev => (prev === menuName ? null : menuName));
  };
  
  const closeMenu = () => {
    setOpenMenu(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = ['Product', 'Features', 'Integrations', 'Blog'];

  const headerClasses = `sticky top-0 z-50 py-3 transition-all duration-300 ${
    scrolled ? 'bg-[#0B0B0F]/80 backdrop-blur-sm border-b border-white/10' : 'bg-[#0B0B0F]' 
  }`;

  return (
    <>
      <header className={headerClasses} ref={headerRef}>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" onClick={closeMenu} className="text-xl font-bold">Linear Style</Link>
              <nav className="hidden md:flex items-center space-x-1 text-sm font-medium text-gray-300">
                {/* Lógica de renderizado de enlaces simplificada */}
                {navLinks.map((link) => {
                  const menuName = link.toLowerCase();
                  return (
                    <div key={link} className="relative">
                      <a 
                        href="#" 
                        onClick={(e) => handleMenuToggle(e, menuName)}
                        className={`px-3 py-2 rounded-md hover:text-white transition-colors cursor-pointer ${openMenu === menuName ? 'text-white bg-slate-700' : ''}`}
                      >
                        {link}
                      </a>
                    </div>
                  );
                })}
              </nav>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <Link 
                to="/login"
                className="hidden sm:inline-block text-gray-300 hover:text-white transition-colors"
              >
                Log in
              </Link>
              <Link
                to="/signup"
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
          
          {/* Renderizado condicional de todos los menús */}
          {openMenu === 'product' && <ProductMegaMenu closeMenu={closeMenu} />}
          {openMenu === 'features' && <FeaturesMegaMenu closeMenu={closeMenu} />}
          {openMenu === 'integrations' && <IntegrationsMegaMenu closeMenu={closeMenu} />}
          {openMenu === 'blog' && <BlogMegaMenu closeMenu={closeMenu} />}
        </div>
      </header>
      {openMenu && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm animate-fade-in" 
          onClick={closeMenu}
        />
      )}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Header;