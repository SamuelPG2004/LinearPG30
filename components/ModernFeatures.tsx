import React from 'react';
import { ArrowRightIcon, PlusIcon } from '../constants';

// MANTENEMOS FeatureCard, ES PERFECTO Y TIENE EL HOVER DE LINEAR
interface FeatureCardProps {
  title: string;
  description: string; // Añadimos descripción
  imageUrl: string;
  spanClass?: string; // Clase opcional para el span del grid (col-span-2)
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageUrl, spanClass = '' }) => (
  // Aplicamos la clase de span condicionalmente
  <div className={`group relative rounded-xl border border-white/10 bg-white/5 p-6 overflow-hidden transition-all duration-300 hover:scale-[1.01] ${spanClass}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative h-full flex flex-col">
      
      {/* 💡 CONTENIDO TEXTUAL */}
      <h3 className="text-2xl font-semibold text-gray-200 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>

      {/* 💡 PLACEHOLDER DE IMAGEN (Ahora es más flexible) */}
      <div className="flex-grow aspect-video rounded-lg overflow-hidden mt-4">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover"/>
      </div>
      
      {/* Botón (Mantenemos la interacción) */}
      <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
        <ArrowRightIcon className="w-5 h-5" /> {/* Cambiamos el Plus por ArrowRight para que sea más claro */}
      </button>
    </div>
  </div>
);

const ModernFeatures: React.FC = () => {

  const features = [
    { title: "Crafted to perfection", description: "Design matters. Our minimalist UI focuses on efficiency, allowing you to fade into your work and minimize distractions.", imageUrl: "https://picsum.photos/seed/feature1/400/400", spanClass: "lg:col-span-2" }, // Será el grande
    { title: "Designed to move fast", description: "A fluid interface with keyboard-first navigation makes your workflow lightning fast. No more waiting on lag.", imageUrl: "https://picsum.photos/seed/feature2/400/400", spanClass: "" },
    { title: "Purpose-built for product development", description: "From issues to product roadmaps, Linear provides a single, unified view for all your team's work.", imageUrl: "https://picsum.photos/seed/feature3/400/400", spanClass: "" },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 1. Título y Párrafo */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
              The fastest path from idea to production.
            </h2>
          </div>
          <div>
            <p className="text-lg text-gray-400">
              Linear is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft. 
              <a href="#" className="text-white hover:underline ml-1">
                Make the switch <ArrowRightIcon className="inline-block w-4 h-4"/>
              </a>
            </p>
          </div>
        </div>
        
        {/* 2. GRID ASIMÉTRICO (BENTO BOX) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Cambio gap-8 a gap-6 */}
          
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              spanClass={feature.spanClass}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;