import React from 'react';
import { Button } from './ui/Button';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto rounded-[3.5rem] bg-gradient-to-br from-[#080808] to-[#050505] border border-white/10 relative overflow-hidden text-center py-28 px-6 group shadow-2xl shadow-brand-lime/5">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>
            
            <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-brand-lime/15 to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Glowing orb */}
            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-lime/25 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
                    Elevate the way you<br />source design
                </h2>
                <p className="text-brand-gray mb-14 text-lg font-light max-w-2xl mx-auto">
                    Get ready to start producing stunning, efficient design work without the hassles of hiring. Soon available.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-[540px] mx-auto p-2 rounded-full bg-gradient-to-b from-white/10 to-white/5 border border-white/20 backdrop-blur-md shadow-2xl shadow-brand-lime/15">
                    <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="w-full h-12 px-6 bg-transparent border-none text-white placeholder-white/40 focus:outline-none text-sm font-medium"
                    />
                    <Button variant="primary" className="h-10 px-8 rounded-full font-semibold shadow-xl shadow-brand-lime/40 hover:shadow-brand-lime/60 transition-all duration-300">
                        Get notified
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
};