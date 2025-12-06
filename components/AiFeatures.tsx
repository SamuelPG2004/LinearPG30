import React from 'react';
import { ArrowRightIcon } from '../constants'; // Asumo que ArrowRightIcon está en constants

const AiFeatures: React.FC = () => {
  return (
    // 💡 Aumentamos el padding
    <section className="py-24 md:py-36 text-center">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Título y Subtítulo */}
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">
          Meet the new Linear AI.
        </h2>
        <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
          Linear AI automates status updates, summarizes issues, and helps you plan faster, so you can focus on the work that matters.
        </p>
        
        {/* Botón CTA (Ahora Primario) */}
        <div className="mt-8">
          <a
            href="#"
            // 💡 CAMBIO: Botón Primario (Blanco) para alto impacto
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
          >
            Explore AI Features <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* Contenedor de Imagen (Más grande y con padding ajustado) */}
      <div className="mt-20 max-w-6xl mx-auto px-4">
        <div className="relative rounded-3xl border border-white/10 bg-[#171719] p-6 md:p-8 shadow-2xl shadow-indigo-500/10 backdrop-blur-sm">
          <img 
            src="https://picsum.photos/seed/ai-features/1400/700" // Placeholder más ancho
            alt="Linear AI Agent Interface" 
            className="w-full h-auto rounded-xl object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default AiFeatures;