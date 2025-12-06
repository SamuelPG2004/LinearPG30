
import React from 'react';
import { ArrowRightIcon } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-20 md:py-32 lg:py-40">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-tight">
          Linear is a purpose-built tool for planning and building products
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Meet the system for modern software development.
          Streamline issues, projects, and product roadmaps.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors flex items-center justify-center"
          >
            Start building
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-transparent border border-white/20 text-gray-300 font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            New: Linear agent for Slack <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
