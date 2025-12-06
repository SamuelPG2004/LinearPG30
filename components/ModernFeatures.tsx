
import React from 'react';
import { ArrowRightIcon, PlusIcon } from '../constants';

interface FeatureCardProps {
  title: string;
  imageUrl: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, imageUrl }) => (
  <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative">
      <div className="aspect-square rounded-lg overflow-hidden mb-6">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover"/>
      </div>
      <h3 className="text-xl font-semibold text-gray-200">{title}</h3>
      <button className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
        <PlusIcon className="w-5 h-5" />
      </button>
    </div>
  </div>
);

const ModernFeatures: React.FC = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
              Made for modern product teams
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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard title="Purpose-built for product development" imageUrl="https://picsum.photos/seed/feature1/400/400" />
          <FeatureCard title="Designed to move fast" imageUrl="https://picsum.photos/seed/feature2/400/400" />
          <FeatureCard title="Crafted to perfection" imageUrl="https://picsum.photos/seed/feature3/400/400" />
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;
