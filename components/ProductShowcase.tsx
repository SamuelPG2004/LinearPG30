
import React from 'react';

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-12 md:py-20 -mt-16 md:-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative transform-gpu -rotate-3 scale-105 shadow-2xl shadow-indigo-500/20 rounded-2xl overflow-hidden border border-white/10">
          <img 
            src="https://picsum.photos/seed/linearapp/1200/800" 
            alt="Linear app interface" 
            className="w-full h-auto object-cover" 
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
