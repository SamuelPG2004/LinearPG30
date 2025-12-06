
import React from 'react';

const Timeline: React.FC = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-indigo-400 font-medium">Project and long-term planning</p>
        <h2 className="mt-2 text-5xl md:text-6xl font-bold tracking-tighter">
          Set the product direction
        </h2>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Align your team around a unified product timeline. Plan, manage, and track all product initiatives with Linear’s visual planning tools.
        </p>
      </div>
      <div className="mt-16 max-w-6xl mx-auto">
        <div className="relative rounded-xl border border-white/10 bg-gray-900/50 p-4 shadow-2xl shadow-indigo-500/10 backdrop-blur-sm">
          <img src="https://picsum.photos/seed/timeline/1200/600" alt="Product timeline visualization" className="w-full h-auto rounded-lg object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
