import React from 'react';
import { Link } from 'react-router-dom';

interface ProductMegaMenuProps {
  closeMenu: () => void;
}

const BackArrowIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const PlusIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

const ProductMegaMenu: React.FC<ProductMegaMenuProps> = ({ closeMenu }) => {
  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-full max-w-4xl bg-[#15151A] border border-white/10 rounded-lg shadow-2xl p-6 text-white animate-fade-in-down">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Columna Izquierda (Contenido) */}
        <div className="w-full md:w-3/4 pr-0 md:pr-6">
          <h2 className="text-2xl font-bold text-white mb-2">Descubre el Poder de Nuestra Plataforma</h2>
          <p className="text-slate-400 text-sm mb-6">
            Nuestra innovadora plataforma te brinda las herramientas necesarias para escalar, analizar y optimizar tus operaciones. Descubre un nuevo nivel de eficiencia.
          </p>
          <hr className="border-white/10 mb-6" />
          <div className="flex gap-8">
            <div className="w-1/2">
              <h3 className="font-semibold text-white mb-3">Características Clave</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2"><span className="text-indigo-400 mt-1">•</span><span>Análisis de datos en tiempo real.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 mt-1">•</span><span>Integraciones con un solo click.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 mt-1">•</span><span>Dashboards personalizables y reportes.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 mt-1">•</span><span>Seguridad de nivel empresarial.</span></li>
              </ul>
            </div>
            <div className="w-1/2">
              <h3 className="font-semibold text-white mb-3">Casos de Uso</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2"><span className="text-indigo-400 mt-1">•</span><span>Optimización de campañas de marketing.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 mt-1">•</span><span>Gestión de inventario para e-commerce.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 mt-1">•</span><span>Plataforma para análisis financiero.</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Columna Derecha (Precios y Contacto) */}
        <div className="w-full md:w-1/4 bg-white/5 p-4 rounded-lg flex flex-col gap-4 border-t border-white/10 md:border-t-0 md:border-l">
            <Link 
                to="/product/info" 
                onClick={handleLinkClick}
                className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-3 rounded-md text-xs flex items-center justify-center gap-2 transition-colors duration-200 w-full"
            >
                <BackArrowIcon />
                <span>Información + Precios</span>
                <PlusIcon />
            </Link>

            <div>
                <h3 className="font-semibold text-white text-sm mb-2">Precios</h3>
                <div className="space-y-2">
                    {/* Plan Básico */}
                    <div className="bg-[#0B0B0F] p-3 rounded-md">
                        <p className="font-bold text-xs text-white">Básico</p>
                        <p className="text-white"><span className="text-lg font-semibold">$2.00</span><span className="text-xs text-slate-400">/mes</span></p>
                        <p className="text-slate-400 text-xs mt-1">Ideal para empezar.</p>
                    </div>
                    {/* Plan Pro */}
                    <div className="bg-[#0B0B0F] p-3 rounded-md">
                        <p className="font-bold text-xs text-white">Pro</p>
                        <p className="text-white"><span className="text-lg font-semibold">$10.00</span><span className="text-xs text-slate-400">/mes</span></p>
                        <p className="text-slate-400 text-xs mt-1">Para equipos en crecimiento.</p>
                    </div>
                    {/* Plan Enterprise */}
                    <div className="bg-[#0B0B0F] p-3 rounded-md border border-indigo-500">
                        <p className="font-bold text-xs text-white">Enterprise</p>
                        <p className="text-white"><span className="text-lg font-semibold">$100.00</span><span className="text-xs text-slate-400">/mes</span></p>
                        <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-1.5 px-3 rounded text-xs mt-2 transition-colors duration-200">
                            Empezar
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-auto">
                <h3 className="font-semibold text-white text-sm mb-2">Contacto</h3>
                 <input type="text" placeholder="FAQ" className="w-full bg-[#0B0B0F] border border-slate-700 rounded-md px-2 py-1 text-xs placeholder-slate-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"/>
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

export default ProductMegaMenu;