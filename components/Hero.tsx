
import React from 'react';
import { ArrowRightIcon } from '../constants'; 

const Hero: React.FC = () => {
  return (
    <section className="text-center py-24 md:py-40 lg:py-48 text-white"> 
      <div className="max-w-5xl mx-auto px-4"> 
        {/* Título más grande y con tracking ajustado */}
        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] xl:text-[7rem] font-extrabold tracking-tight leading-none">
          Linear is a purpose-built tool for planning and building products
        </h1>
        {/* Subtítulo más grande y con más espacio */}
        <p className="mt-8 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"> 
          Meet the system for modern software development. Streamline issues, projects, and product roadmaps.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            
            className="w-full sm:w-auto px-8 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center" 
          >
            Start building
          </a>
          <a
            href="#"
            
            className="w-full sm:w-auto px-8 py-3 rounded-md bg-transparent border border-white/10 text-gray-300 font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
          >
            New: Linear agent for Slack <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;