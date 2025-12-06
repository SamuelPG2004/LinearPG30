import React from 'react';

const Timeline: React.FC = () => {
  return (
    // 💡 Aumentamos el padding vertical
    <section className="py-24 md:py-36"> 
      <div className="max-w-5xl mx-auto text-center px-4"> {/* Ajustamos el max-w para centrar mejor el texto */}
        <p className="text-indigo-400 font-medium tracking-wide uppercase text-sm">Product and long-term planning</p>
        <h2 className="mt-2 text-5xl md:text-6xl font-bold tracking-tighter text-white">
          Our living product roadmap.
        </h2>
        <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
          Align your team around a unified product timeline. Plan, manage, and track all product initiatives with Linear’s visual planning tools.
        </p>
      </div>
      
      {/* Contenedor de Imagen (Ahora más ancho y con más margen superior) */}
      <div className="mt-20 max-w-7xl mx-auto px-4"> 
        <div className="relative rounded-3xl border border-white/10 bg-gray-900/50 p-6 md:p-8 shadow-2xl shadow-indigo-500/10 backdrop-blur-sm">
          <img 
            src="https://picsum.photos/seed/timeline/1400/700" // Usamos un placeholder más panorámico
            alt="Product timeline visualization" 
            className="w-full h-auto rounded-xl object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
