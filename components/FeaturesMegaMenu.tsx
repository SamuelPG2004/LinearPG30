import React from 'react';

interface FeaturesMegaMenuProps {
  closeMenu: () => void;
}

const SearchIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const FeaturesMegaMenu: React.FC<FeaturesMegaMenuProps> = ({ closeMenu }) => {
  return (
    <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-full max-w-4xl bg-[#15151A] border border-white/10 rounded-lg shadow-2xl p-6 text-white animate-fade-in-down">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-lg font-semibold text-white">Explora Nuestras Características</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Columna Izquierda */}
          <div className="w-full md:w-1/2 bg-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-white mb-3">Capacidades</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2"><span className="text-blue-400 text-lg leading-none">•</span><span>Análisis en Tiempo Real</span></li>
              <li className="flex items-center gap-2"><span className="text-blue-400 text-lg leading-none">•</span><span>Integraciones</span></li>
              <li className="flex items-center gap-2"><span className="text-blue-400 text-lg leading-none">•</span><span>Automatización</span></li>
            </ul>
          </div>
          {/* Columna Derecha */}
          <div className="w-full md:w-1/2 bg-white/5 p-4 rounded-lg">
            <h3 className="font-semibold text-white mb-3">Casos de Uso</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2"><span className="text-blue-400 text-lg leading-none">•</span><span>Optimización de Marketing</span></li>
              <li className="flex items-center gap-2"><span className="text-blue-400 text-lg leading-none">•</span><span>Gestión de Proyectos</span></li>
              <li className="flex items-center gap-2"><span className="text-blue-400 text-lg leading-none">•</span><span>Gestión de Proyectos</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Buscar feature..."
              className="w-full bg-[#0B0B0F] border border-slate-700 rounded-md pl-10 pr-4 py-2 text-sm placeholder-slate-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>
      </div>
       <style>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-10px) translateX(-50%);
          }
          100% {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FeaturesMegaMenu;