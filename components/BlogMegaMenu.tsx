import React from 'react';
import { Link } from 'react-router-dom';

interface BlogMegaMenuProps {
  closeMenu: () => void;
}

const ArrowRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

const BlogMegaMenu: React.FC<BlogMegaMenuProps> = ({ closeMenu }) => {
  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-full max-w-4xl bg-[#15151A] border border-white/10 rounded-lg shadow-2xl p-6 text-white animate-fade-in-down">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Columna Izquierda (Últimos Artículos) */}
        <div className="w-full md:w-2/3">
          <h3 className="font-semibold text-white mb-4">Últimos Artículos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="space-y-3">
              <Link to="/blog/post-1" onClick={handleLinkClick} className="block group">
                <p className="font-medium text-white group-hover:text-indigo-400 transition-colors">Mejorando el rendimiento en React</p>
                <p className="text-slate-400 text-xs">Una guía completa sobre hooks y memoización.</p>
              </Link>
              <Link to="/blog/post-2" onClick={handleLinkClick} className="block group">
                <p className="font-medium text-white group-hover:text-indigo-400 transition-colors">Tailwind CSS vs. Styled Components</p>
                <p className="text-slate-400 text-xs">¿Cuál elegir para tu próximo proyecto?</p>
              </Link>
            </div>
            <div className="space-y-3">
               <Link to="/blog/post-3" onClick={handleLinkClick} className="block group">
                <p className="font-medium text-white group-hover:text-indigo-400 transition-colors">Novedades en TypeScript 5.0</p>
                <p className="text-slate-400 text-xs">Explorando los nuevos decoradores y enums.</p>
              </Link>
               <Link to="/blog/post-4" onClick={handleLinkClick} className="block group">
                <p className="font-medium text-white group-hover:text-indigo-400 transition-colors">Creando un Backend con Node.js</p>
                <p className="text-slate-400 text-xs">Una introducción a Express y Prisma.</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Columna Derecha (Categorías y Suscripción) */}
        <div className="w-full md:w-1/3 md:border-l md:pl-8 border-white/10 border-t md:border-t-0 pt-6 md:pt-0">
          <div className="h-full flex flex-col">
            <div>
                <h3 className="font-semibold text-white mb-4">Categorías</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li><Link to="/blog/category/frontend" onClick={handleLinkClick} className="hover:text-white transition-colors">Frontend</Link></li>
                    <li><Link to="/blog/category/backend" onClick={handleLinkClick} className="hover:text-white transition-colors">Backend</Link></li>
                    <li><Link to="/blog/category/devops" onClick={handleLinkClick} className="hover:text-white transition-colors">DevOps</Link></li>
                    <li><Link to="/blog/category/ui-ux" onClick={handleLinkClick} className="hover:text-white transition-colors">UI/UX</Link></li>
                </ul>
            </div>
            <div className="mt-auto pt-6">
                <h3 className="font-semibold text-white mb-3 text-sm">Suscríbete al Newsletter</h3>
                <div className="relative">
                    <input type="email" placeholder="tu@email.com" className="w-full bg-[#0B0B0F] border border-slate-700 rounded-md pl-3 pr-10 py-2 text-xs placeholder-slate-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"/>
                    <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-white">
                        <ArrowRightIcon />
                    </button>
                </div>
            </div>
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

export default BlogMegaMenu;