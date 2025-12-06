import React from 'react';
import { ArrowRightIcon } from '../constants'; // Asumo que ArrowRightIcon está en constants

const Cta: React.FC = () => {
  return (
    // 💡 Aumentamos el padding vertical
    <section className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4"> {/* 💡 Aumentamos el ancho */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-16"> {/* 💡 Aumentamos el padding interno */}
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white text-center md:text-left max-w-lg">
            Ready to make the switch?
          </h2>
          
          <div className="flex-shrink-0 flex items-center gap-4">
            {/* Botón Secundario (Log in o Contact Sales) */}
            <a
              href="#"
              className="px-6 py-3 rounded-full border border-white/10 text-gray-300 font-medium hover:bg-white/5 transition-colors"
            >
              Contact sales
            </a>
            {/* Botón Primario (Blanco) */}
            <a
              href="#"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              Get started <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;