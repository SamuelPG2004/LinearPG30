
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Clients from './components/Clients';
import ModernFeatures from './components/ModernFeatures';
import AiFeatures from './components/AiFeatures';
import Operations from './components/Operations';
import Timeline from './components/Timeline';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased relative overflow-x-hidden">
       <div className="absolute top-0 left-0 w-full h-full z-[-10] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header />
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
    </div>
  );
};

export default App;
