
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
    <section className="py-20 md:py-28 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Powering the world’s best product teams.
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          From next-gen startups to established enterprises.
        </p>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 items-center">
          {logos.map((logo, index) => {
            const LogoComponent = logo.component;
            return (
              <div key={index} className="flex justify-center">
                <LogoComponent className="h-8 w-auto text-gray-400 hover:text-white transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
