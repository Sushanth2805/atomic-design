import React from 'react';
import { Layers, Command, Disc, Box, PenTool, Globe } from 'lucide-react'; // Using lucide icons as placeholders for brand logos

export const Logos: React.FC = () => {
  return (
    <section className="py-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-brand-gray mb-10 text-lg">Already chosen by the leaders</p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
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