
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="py-6 bg-slate-900/60 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
          AI README & API Docs Generator
        </h1>
      </div>
    </header>
  );
};
