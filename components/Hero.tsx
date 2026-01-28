import React from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background Glows */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[90%] md:w-[1200px] h-[500px] md:h-[700px] bg-[radial-gradient(circle_at_center,rgba(223,255,0,0.15)_0%,rgba(0,0,0,0)_65%)] pointer-events-none z-0" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[85%] md:w-[80%] max-w-[1200px] aspect-[2/1] pointer-events-none z-0 opacity-45">
        <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 50 Q50 -10 100 50" fill="none" stroke="#DFFF00" strokeWidth="0.2" className="opacity-50" />
            <path d="M0 50 Q50 -10 100 50" fill="url(#heroGradient)" className="opacity-10" />
             <defs>
                <linearGradient id="heroGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#DFFF00" />
                <stop offset="100%" stopColor="transparent" />
                </linearGradient>
            </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-10">
            <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-white/80">Available for new projects</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-semibold tracking-tight text-white mb-6 leading-[1.1] max-w-5xl mx-auto">
          Design work, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-white/70">the efficient way</span>
        </h1>
        
        <p className="text-lg md:text-xl text-brand-gray mb-14 max-w-3xl mx-auto font-light leading-relaxed">
          Innovative design solutions for technology firms and emerging businesses weary of the typical aesthetic methodology. Arriving shortly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-[520px] mx-auto p-2 rounded-full bg-gradient-to-b from-white/10 to-white/5 border border-white/20 backdrop-blur-md shadow-2xl shadow-brand-lime/10">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="w-full h-12 px-6 bg-transparent border-none text-white placeholder-white/40 focus:ring-0 focus:outline-none text-sm font-medium"
          />
          <Button variant="primary" className="h-10 px-8 rounded-full font-semibold text-sm whitespace-nowrap w-full sm:w-auto shadow-xl shadow-brand-lime/30 hover:shadow-brand-lime/50 transition-all duration-300">
            Get notified
          </Button>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-brand-gray/50">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Join 2,000+ others on the waitlist</span>
        </div>
      </div>
    </section>
  );
};