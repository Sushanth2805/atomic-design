import React from 'react';
import { Box, ScanFace, Disc } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-brand-lime mb-6">
            <span className="w-4 h-4 rounded-full border border-brand-lime/50 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-brand-lime rounded-full"></span>
            </span>
            HOW IT WORKS
          </div>
          <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.1]">
            Top-notch designs,<br />
            delivered at your doorstep.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-12 rounded-[2.5rem] bg-gradient-to-br from-[#0A0A0A] to-[#050505] border border-white/10 h-full hover:border-brand-lime/40 transition-all duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-brand-lime/10">
                <div className="w-16 h-16 bg-brand-lime text-black rounded-2xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform duration-300 shadow-xl shadow-brand-lime/30">
                    <Box size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl text-white mb-4 font-semibold">Tell us your vision</h3>
                <p className="text-brand-gray text-base leading-relaxed font-light">
                    Choose a plan and share your design project details with us: we're here to listen.
                </p>
            </div>

            {/* Step 2 */}
            <div className="p-12 rounded-[2.5rem] bg-gradient-to-br from-[#0A0A0A] to-[#050505] border border-white/10 h-full hover:border-brand-lime/40 transition-all duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-brand-lime/10">
                <div className="w-16 h-16 bg-brand-lime text-black rounded-full flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-brand-lime/30">
                    <Disc size={32} strokeWidth={1.5} className="animate-spin-slow" />
                </div>
                <h3 className="text-2xl text-white mb-4 font-semibold">Receive the magic</h3>
                <p className="text-brand-gray text-base leading-relaxed font-light">
                    Sit back and relax: our expert designers will turn your vision into reality.
                </p>
            </div>

            {/* Step 3 */}
            <div className="p-12 rounded-[2.5rem] bg-gradient-to-br from-[#0A0A0A] to-[#050505] border border-white/10 h-full hover:border-brand-lime/40 transition-all duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-brand-lime/10">
                <div className="w-16 h-16 bg-brand-lime text-black rounded-2xl flex items-center justify-center mb-10 group-hover:-rotate-6 transition-transform duration-300 shadow-xl shadow-brand-lime/30">
                    <ScanFace size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl text-white mb-4 font-semibold">Get ongoing support</h3>
                <p className="text-brand-gray text-base leading-relaxed font-light">
                    Your subscription ensures you have continuous access to our design team.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};