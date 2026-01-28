import React from 'react';
import { Layers } from 'lucide-react';

export const Logos: React.FC = () => {
  return (
    <section className="py-16 border-b border-white/5 bg-gradient-to-b from-brand-dark to-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-brand-gray/80 mb-12 text-base font-light">Already chosen by the leaders</p>
        
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-60 hover:opacity-100 transition-all duration-500 group">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/80 rounded-full"></div>
            <span className="text-xl font-bold font-sans tracking-tight">headspace</span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="text-white" />
            <span className="text-xl font-bold font-sans tracking-tight">shopify</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="border-2 border-white rounded-full p-1 w-8 h-8 flex items-center justify-center">
                <div className="w-4 h-[2px] bg-white -rotate-45"></div>
            </div>
            <span className="text-xl font-bold font-sans tracking-tight">VOLVO</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 overflow-hidden">
                <div className="w-full h-full bg-white transform rotate-45 translate-y-3"></div>
             </div>
            <span className="text-xl font-bold font-sans tracking-tight">Mobbin</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center text-xs font-bold font-serif">P</div>
            <span className="text-xl font-bold font-sans tracking-tight">Pinterest</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 bg-white rounded-lg"></div>
            <span className="text-xl font-bold font-sans tracking-tight">duolingo</span>
          </div>
        </div>
      </div>
    </section>
  );
};