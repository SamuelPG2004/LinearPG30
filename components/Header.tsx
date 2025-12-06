import React, { useState, useEffect } from 'react'; // 💡 IMPORTAMOS HOOKS PARA EL SCROLL
import { LinearLogo } from '../constants';

const Header: React.FC = () => {
  // 💡 AÑADIMOS EL ESTADO PARA CONTROLAR EL SCROLL
  const [scrolled, setScrolled] = useState(false);

  // 💡 LÓGICA DEL SCROLL (Tarea 3.5)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5); // 5px es suficiente para detectar scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = ['Product', 'Resources', 'Pricing', 'Customers', 'Now', 'Contact'];

  // 💡 CLASES CONDICIONALES: Añadimos un borde inferior si 'scrolled' es true
  const headerClasses = `sticky top-0 z-50 py-3 transition-all duration-300 ${
    // 💡 CAMBIO 1: Fondo Sólido Ultra Oscuro. Quitamos el blur y la transparencia.
    scrolled ? 'bg-[#0B0B0F] border-b border-white/10' : 'bg-[#0B0B0F]' 
  }`;

  return (
    // Aplicamos las clases condicionales
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-1.5"> {/* Ajustamos el py a 1.5 para hacerlo más compacto */}
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
              // 💡 CAMBIO 2: Estilo Secundario: Borde sutil, transparente, texto blanco.
              className="px-4 py-1.5 border border-white/10 rounded-md bg-transparent text-white font-medium hover:bg-white/5 transition-colors"
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