import React from 'react';

const Operations: React.FC = () => {
  return (
    // 💡 Aumentamos el padding vertical
    <section className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        
        {/* COLUMNA 1: Self-driving Product Operations */}
        <div className="flex flex-col">
          <h3 className="text-4xl font-bold tracking-tighter text-white">
            Self-driving product operations
          </h3>
          <p className="mt-4 text-lg text-gray-400">
            Streamline your product development workflows with AI assistance for routine, manual tasks, automatically triaging issues.
          </p>
          {/* 💡 Aumentamos el padding del contenedor de la imagen */}
          <div className="mt-8 flex-grow rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
            <img 
              src="https://picsum.photos/seed/operations1/700/400" // Placeholder más panorámico
              alt="Triage intelligence UI" 
              className="w-full h-full object-cover rounded-xl" 
            />
          </div>
        </div>
        
        {/* COLUMNA 2: Linear MCP (Multi-Connection Protocol) */}
        <div className="flex flex-col">
          <h3 className="text-4xl font-bold tracking-tighter text-white">
            Linear MCP
          </h3>
          <p className="mt-4 text-lg text-gray-400">
            Connect Linear to your favorite tools including Cursor, Claude, GitHub, and more. A unified protocol for a unified team.
          </p>
          {/* 💡 Aumentamos el padding del contenedor de la imagen */}
          <div className="mt-8 flex-grow rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
            <img 
              src="https://picsum.photos/seed/operations2/700/400" // Placeholder más panorámico
              alt="Code integration UI" 
              className="w-full h-full object-cover rounded-xl" 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Operations;