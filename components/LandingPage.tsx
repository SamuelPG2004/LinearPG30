// src/components/LandingPage.tsx
import React from 'react';
import Hero from './Hero';
import ProductShowcase from './ProductShowcase';
import Clients from './Clients';
import ModernFeatures from './ModernFeatures';
import AiFeatures from './AiFeatures';
import Operations from './Operations';
import Timeline from './Timeline';
import Cta from './Cta';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    // Contenido de la Landing Page
    <> 
      <main className="px-4 md:px-8">
        <Hero />
        <ProductShowcase />
        <Clients />
        <ModernFeatures />
        <AiFeatures />
        <Operations />
        <Timeline />
        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;