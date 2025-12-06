import React from 'react';

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-24 md:py-32 mt-12"> {/* 💡 Ajustamos padding y margen superior */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 💡 AÑADIMOS EL TÍTULO DE IMPACTO */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 max-w-4xl mx-auto">
          Built for speed, efficiency, and clarity.
        </h2>

        <div className="relative shadow-2xl shadow-indigo-500/10 rounded-2xl overflow-hidden border border-white/10">
          
          <img 
            // Mantendremos este placeholder, pero idealmente lo reemplazarías con una imagen de Linear oscura
            src="https://picsum.photos/seed/linearapp/1200/800" 
            alt="Linear app interface" 
            className="w-full h-auto object-cover" 
          />
          
          {/* Este degradado es bueno para la sombra sutil */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
