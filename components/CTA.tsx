import React from 'react';
import { Button } from './ui/Button';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-[#080808] border border-white/10 relative overflow-hidden text-center py-24 px-6 group">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>
            
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-brand-lime/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Glowing orb */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-lime/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight">
                    Elevate the way you<br />source design
                </h2>
                <p className="text-brand-gray mb-12 text-lg font-light max-w-xl mx-auto">
                    Get ready to start producing stunning, efficient design work without the hassles of hiring. Soon available.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-[500px] mx-auto p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <input 
                        type="email" 
                        placeholder="johndoi@email.com" 
                        className="w-full h-12 px-5 bg-transparent border-none text-white placeholder-white/30 focus:outline-none text-sm"
                    />
                    <Button variant="primary" className="h-10 w-full sm:w-auto px-8 rounded-xl font-semibold shadow-[0_0_15px_rgba(223,255,0,0.3)] hover:shadow-[0_0_25px_rgba(223,255,0,0.5)] transition-shadow duration-300">
                        Get notified
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
};