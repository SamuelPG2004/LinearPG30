import React from 'react';
import { Link } from 'react-router-dom';

interface IntegrationsMegaMenuProps {
  closeMenu: () => void;
}

const IntegrationsMegaMenu: React.FC<IntegrationsMegaMenuProps> = ({ closeMenu }) => {
  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-full max-w-4xl bg-[#15151A] border border-white/10 rounded-lg shadow-2xl p-6 text-white animate-fade-in-down">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Columna Izquierda (Categorías de Integración) */}
        <div className="w-full md:w-3/4 pr-0 md:pr-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <h3 className="font-semibold text-white mb-3">Integraciones Destacadas</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="font-medium text-slate-300 text-xs">Plataformas de Marketing</li>
                <li className="pl-2 flex items-start gap-2"><span className="text-indigo-400 mt-1">•</span><span>Google Ads, Meta, Hubspot</span></li>
                <li className="font-medium text-slate-300 text-xs mt-2">Herramientas de Productividad</li>
                <li className="pl-2 flex items-start gap-2"><span className="text-indigo-400 mt-1">•</span><span>Slack, Notion, Google Workspace</span></li>
                 <li className="font-medium text-slate-300 text-xs mt-2">Sistemas Financieros</li>
                <li className="pl-2 flex items-start gap-2"><span className="text-indigo-400 mt-1">•</span><span>QuickBooks, Stripe, PayPal</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Conectividad Técnica</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2"><span className="text-indigo-400 mt-1">•</span><span>Integración de Datos: Conectores SQL, NoSQL.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 mt-1">•</span><span>Webhooks y Eventos: Recibe y envía datos en tiempo real.</span></li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 mt-1">•</span><span>API Documentada: Acceso completo para personalización.</span></li>
              </ul>
            </div>
          </div>
           <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-sm text-slate-300">
                    <span className="text-indigo-400 font-semibold">•</span> Exportar a Hojas de cálculo
                </p>
            </div>
        </div>

        {/* Columna Derecha (Acciones) */}
        <div className="w-full md:w-1/4 bg-white/5 p-4 rounded-lg flex flex-col gap-3 border-t border-white/10 md:border-t-0 md:border-l">
            <h3 className="font-semibold text-white text-sm">Acciones de Integración</h3>
            <div className="flex flex-col gap-2">
                <Link to="/integrations/directory" onClick={handleLinkClick} className="block p-3 bg-[#0B0B0F] rounded-md hover:bg-slate-800 transition-colors">
                    <p className="font-medium text-white text-xs">Directorio de Aplicaciones</p>
                    <p className="text-slate-400 text-xs mt-1">Explora todas las integraciones.</p>
                </Link>
                <Link to="/docs/api" onClick={handleLinkClick} className="block p-3 bg-[#0B0B0F] rounded-md hover:bg-slate-800 transition-colors">
                    <p className="font-medium text-white text-xs">Documentación de la API</p>
                    <p className="text-slate-400 text-xs mt-1">Guía completa para desarrolladores.</p>
                </Link>
                <Link to="/feedback/integration-request" onClick={handleLinkClick} className="block p-3 bg-[#0B0B0F] rounded-md hover:bg-slate-800 transition-colors">
                    <p className="font-medium text-white text-xs">Solicitar Nueva Integración</p>
                    <p className="text-slate-400 text-xs mt-1">Vota por la próxima herramienta.</p>
                </Link>
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

export default IntegrationsMegaMenu;