import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(223,255,0,0.12)_0%,rgba(0,0,0,0)_60%)] pointer-events-none z-0" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[80%] max-w-[1200px] aspect-[2/1] pointer-events-none z-0 opacity-40">
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-10">
            <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-white/80">Available for new projects</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-white mb-8 leading-[1.05]">
          Design work, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">the efficient way</span>
        </h1>
        
        <p className="text-lg md:text-xl text-brand-gray/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Innovative design solutions for technology firms and emerging businesses weary of the typical aesthetic methodology. Arriving shortly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-[500px] mx-auto p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <input 
            type="email" 
            placeholder="johndoi@email.com" 
            className="w-full h-12 px-4 bg-transparent border-none text-white placeholder-white/30 focus:ring-0 focus:outline-none text-sm"
          />
          <Button variant="primary" className="h-10 px-6 rounded-xl font-semibold text-sm whitespace-nowrap w-full sm:w-auto shadow-lg shadow-brand-lime/20">
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