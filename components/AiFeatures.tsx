
import React from 'react';

const AiFeatures: React.FC = () => {
  return (
    <section className="py-20 md:py-28 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
          AI-assisted product development
        </h2>
        <p className="mt-6 text-lg text-gray-400">
          Linear for Agents. Choose from a variety of AI agents and start delegating work, from code generation to other technical tasks.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block px-5 py-2 rounded-md border border-white/20 text-gray-300 font-medium hover:bg-white/10 transition-colors"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className="mt-16 max-w-4xl mx-auto">
         <div className="relative rounded-xl border border-white/10 bg-gray-900/50 p-4 shadow-2xl shadow-indigo-500/10 backdrop-blur-sm">
            <img src="https://picsum.photos/seed/ai-features/800/200" alt="AI Agent Assignment UI" className="w-full h-auto rounded-lg object-cover" />
         </div>
      </div>
    </section>
  );
};

export default AiFeatures;
