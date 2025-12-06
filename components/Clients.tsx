import React from 'react';
import { OpenAILogo, CashAppLogo, ScaleLogo, RampLogo, VercelLogo, CoinbaseLogo, BoomLogo, CursorLogo } from '../constants';

const Clients: React.FC = () => {
  const logos = [
    { component: OpenAILogo, name: 'OpenAI' },
    { component: CashAppLogo, name: 'Cash App' },
    { component: ScaleLogo, name: 'Scale' },
    { component: RampLogo, name: 'Ramp' },
    { component: VercelLogo, name: 'Vercel' },
    { component: CoinbaseLogo, name: 'Coinbase' },
    { component: BoomLogo, name: 'Boom' },
    { component: CursorLogo, name: 'Cursor' },
  ];

  return (
    <section className="py-16 md:py-24 border-y border-white/10 my-16"> {/* 💡 Añadimos borde superior/inferior para separarlo */}
      <div className="max-w-6xl mx-auto px-4">
        
        {/* 💡 Título discreto de credibilidad */}
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 text-center mb-12">
          Trusted by the world’s best product teams.
        </h3>
        
        {/* 💡 Diseño basado en Flex para alineación central de logos, con opacidad sutil */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 opacity-70">
          {logos.map((logo, index) => {
            const LogoComponent = logo.component;
            return (
              <div key={index} className="flex justify-center transition-opacity hover:opacity-100">
                {/* 💡 Aseguramos que el color sea blanco/gris claro para el modo oscuro */}
                <LogoComponent className="h-7 w-auto text-gray-400 hover:text-white transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;