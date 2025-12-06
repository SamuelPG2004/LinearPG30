
import React from 'react';

const Cta: React.FC = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-xl border border-white/10 bg-white/5 p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center md:text-left">
            Plan the present. Build the future.
          </h2>
          <div className="flex-shrink-0 flex items-center gap-4">
            <a
              href="#"
              className="px-5 py-2 rounded-md border border-white/20 text-gray-300 font-medium hover:bg-white/10 transition-colors"
            >
              Contact sales
            </a>
            <a
              href="#"
              className="px-5 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition-colors"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
