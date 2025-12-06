
import React from 'react';

const Operations: React.FC = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <div className="flex flex-col">
          <h3 className="text-4xl font-bold tracking-tighter">
            Self-driving product operations
          </h3>
          <p className="mt-4 text-lg text-gray-400">
            Streamline your product development workflows with AI assistance for routine, manual tasks.
          </p>
          <div className="mt-8 flex-grow rounded-xl border border-white/10 bg-white/5 p-6">
            <img src="https://picsum.photos/seed/operations1/500/400" alt="Triage intelligence UI" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-4xl font-bold tracking-tighter">
            Linear MCP
          </h3>
          <p className="mt-4 text-lg text-gray-400">
            Connect Linear to your favorite tools including Cursor, Claude, ChatGPT, and more.
          </p>
          <div className="mt-8 flex-grow rounded-xl border border-white/10 bg-white/5 p-6">
             <img src="https://picsum.photos/seed/operations2/500/400" alt="Code integration UI" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operations;
