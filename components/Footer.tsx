import React from 'react';
import { LinearLogo } from '../constants';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Features',
      links: ['Plan', 'Build', 'Insights', 'Customer Requests', 'Linear Asks', 'Security'],
    },
    {
      title: 'Product',
      links: ['Method', 'Integrations', 'Changelog', 'Documentation', 'Download'],
    },
    {
      title: 'Company',
      links: ['About', 'Customers', 'Startups', 'Changelog', 'README', 'Quality'],
    },
    {
      title: 'Resources',
      links: ['Developers', 'Status', 'Report vulnerability', 'DPA', 'Privacy'],
    },
    {
      title: 'Connect',
      links: ['Contact us', 'X (Twitter)', 'GitHub', 'YouTube'],
    },
  ];

  return (
    // 💡 AÑADIMOS EL COLOR DE FONDO FINAL Y MANTENEMOS EL BORDE
    <footer className="bg-[#0B0B0F] border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          
          {/* Columna 1: Logo y Copyright */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col justify-between">
            <LinearLogo className="h-6 w-auto" />
            <div className="space-y-4">
               <p className="mt-4 text-sm text-gray-500">Producto de mi pasion y gusto por el desarollo web.</p>
               {/* 💡 AÑADIMOS EL COPYRIGHT */}
               <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()} Samuel Peña Gonzalez. All rights reserved.
               </p>
            </div>
          </div>
          
          {/* Columnas de Enlaces */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              {/* 💡 AJUSTE DE ESTILO DE TÍTULO: Mayúsculas, más pequeño, más audaz */}
              <h4 className="font-bold uppercase tracking-wider text-xs text-white">{column.title}</h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;