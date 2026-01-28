import React from 'react';
import { Zap, ArrowRight, MessageCircle, Layers, ZapIcon, MousePointer2 } from 'lucide-react';

const Tag = ({ text, color = "lime" }: { text: string, color?: "lime" | "purple" | "orange" }) => {
    let dotColor = "bg-brand-lime";
    if(color === "purple") dotColor = "bg-purple-400";
    if(color === "orange") dotColor = "bg-orange-400";
    
    return (
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] rounded-full border border-white/5 text-xs text-brand-gray hover:border-white/20 hover:text-white transition-colors cursor-default">
            <span className={`w-1.5 h-1.5 rounded-full ${dotColor} shadow-[0_0_8px_currentColor]`}></span>
            {text}
        </span>
    );
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Intro Box */}
      <div className="mb-24 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#0A0A0A] to-[#050505] p-12 md:p-24 text-center relative overflow-hidden group shadow-2xl shadow-brand-lime/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(223,255,0,0.08)_0%,rgba(0,0,0,0)_50%)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-brand-lime/40 to-transparent group-hover:via-brand-lime/70 transition-colors duration-700"></div>
        
        <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-brand-lime mb-8 border border-brand-lime/20 px-3 py-1 rounded-full bg-brand-lime/5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse"></span>
                INTRODUCING BOLT
            </div>
            
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 max-w-4xl mx-auto leading-[1.2] tracking-tight">
              We know what's going on. You need top-notch design to stand out in the tech world, but hiring in-house designers can be costly. <span className="text-brand-gray">That's where Atomic comes in.</span>
            </h2>
        </div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-20">
         <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-brand-lime mb-4">
            <span className="w-4 h-4 rounded-full border border-brand-lime/50 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-brand-lime rounded-full"></span>
            </span>
            WHAT YOU'LL GET
        </div>
        <h3 className="text-3xl md:text-5xl text-white font-medium tracking-tight">
            We resolve problems associated with<br />creative procedures.
        </h3>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Card 1: Cost Effective - Bar Chart */}
        <div className="group rounded-[2.5rem] bg-gradient-to-br from-[#0A0A0A] to-[#050505] border border-white/10 p-10 hover:border-brand-lime/30 transition-all duration-300 flex flex-col justify-between h-[440px] overflow-hidden relative shadow-lg hover:shadow-brand-lime/10">
             <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowRight className="text-brand-lime -rotate-45" />
             </div>
             
             <div className="flex-1 flex flex-col items-center justify-center w-full">
                <div className="w-full max-w-[240px]">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-xs text-brand-lime font-mono">Growth</span>
                        <span className="text-[10px] px-2 py-0.5 bg-brand-lime/10 text-brand-lime rounded border border-brand-lime/20">+24%</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-32 w-full mb-4">
                        {[35, 55, 30, 70, 45, 85, 60, 95, 75].map((h, i) => (
                            <div key={i} className="flex-1 bg-[#1a1a1a] rounded-t-[2px] relative overflow-hidden group-hover:bg-[#222] transition-colors">
                                <div 
                                    className="absolute bottom-0 left-0 right-0 bg-brand-lime transition-all duration-1000 ease-out" 
                                    style={{ 
                                        height: `${h}%`,
                                        opacity: i === 8 ? 1 : 0.3 + (i * 0.05) 
                                    }} 
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between w-full text-[10px] text-brand-gray/50 border-t border-white/5 pt-2 font-mono">
                        <span>Nov 10</span>
                        <span>Nov 11</span>
                        <span>Today</span>
                    </div>
                </div>
            </div>
            <div className="relative z-10">
                <h4 className="text-xl text-white mb-2 font-medium">Cost effective solution</h4>
                <p className="text-brand-gray text-sm leading-relaxed">Get high-quality design work at a fraction of the cost.</p>
            </div>
        </div>

        {/* Card 2: Tailor-made - UI Card */}
        <div className="group rounded-[2.5rem] bg-gradient-to-br from-[#0A0A0A] to-[#050505] border border-white/10 p-10 hover:border-brand-lime/30 transition-all duration-300 flex flex-col justify-between h-[440px] overflow-hidden relative shadow-lg hover:shadow-brand-lime/10">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_100%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
             
             <div className="flex-1 flex items-center justify-center">
                {/* Main Card */}
                <div className="w-60 bg-[#111] border border-white/10 rounded-2xl p-4 shadow-2xl relative rotate-[-5deg] group-hover:rotate-0 transition-all duration-500 ease-out">
                    <div className="absolute -top-3 -right-3 bg-brand-lime text-black text-[10px] font-bold px-2 py-1 rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform delay-100">REVIEWED</div>
                    
                    <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-brand-lime">
                            <ZapIcon size={20} fill="currentColor" />
                        </div>
                        <div>
                            <div className="flex items-center gap-1 mb-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime"></span>
                                <span className="text-[9px] text-brand-lime uppercase font-bold tracking-wider">New</span>
                            </div>
                            <div className="text-white text-sm font-medium">Latest design</div>
                            <div className="text-[10px] text-brand-gray">Today, 11:50</div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-brand-lime/20"></div>
                        </div>
                        <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                    </div>
                </div>
                
                {/* Backdrop Card */}
                <div className="absolute w-56 h-32 bg-white/5 border border-white/5 rounded-2xl -z-10 rotate-[5deg] group-hover:rotate-[2deg] transition-all duration-500"></div>
            </div>
            <div className="relative z-10">
                <h4 className="text-xl text-white mb-2 font-medium">Tailor-made design</h4>
                <p className="text-brand-gray text-sm leading-relaxed">We've got the expertise to make your vision a reality.</p>
            </div>
        </div>

        {/* Card 3: Scalable - Sine Wave */}
        <div className="group rounded-[2.5rem] bg-gradient-to-br from-[#0A0A0A] to-[#050505] border border-white/10 p-10 hover:border-brand-lime/30 transition-all duration-300 flex flex-col justify-between h-[440px] overflow-hidden relative shadow-lg hover:shadow-brand-lime/10">
            <div className="flex-1 flex items-center justify-center relative w-full">
                 <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    {/* Grid lines */}
                    <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                 </div>
                 
                 <svg className="w-full h-32 overflow-visible relative z-10" viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path 
                        d="M0,80 C40,80 50,60 100,40 S160,20 200,10" 
                        fill="none" 
                        stroke="#DFFF00" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_10px_rgba(223,255,0,0.3)]"
                        strokeDasharray="300"
                        strokeDashoffset="0"
                    />
                    <circle cx="100" cy="40" r="4" fill="#111" stroke="#DFFF00" strokeWidth="2" className="group-hover:scale-150 transition-transform origin-center duration-300" />
                    <circle cx="100" cy="40" r="12" fill="#DFFF00" fillOpacity="0.2" className="animate-pulse" />
                 </svg>
            </div>
            <div className="relative z-10">
                <h4 className="text-xl text-white mb-2 font-medium">Scalable as you grow</h4>
                <p className="text-brand-gray text-sm leading-relaxed">We're ready to meet your evolving needs.</p>
            </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Card 4: Workflow Integration */}
        <div className="group rounded-[2.5rem] bg-gradient-to-br from-[#0A0A0A] to-[#050505] border border-white/10 p-10 md:px-14 md:py-12 hover:border-brand-lime/30 transition-all duration-300 flex flex-col md:flex-row justify-between items-center relative overflow-hidden gap-10 shadow-lg hover:shadow-brand-lime/10">
             <div className="relative z-10 max-w-xs">
                 <h4 className="text-xl text-white mb-3 font-medium">Workflow integration</h4>
                 <p className="text-brand-gray text-sm leading-relaxed">Seamlessly connect all your existing apps.</p>
             </div>
             <div className="relative z-10">
                 <div className="grid grid-cols-2 gap-4 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                     <div className="w-14 h-14 rounded-2xl bg-[#1c1c1c] border border-white/5 flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform duration-300 delay-0">
                        <span className="text-xl font-bold text-white">N</span>
                     </div>
                     <div className="w-14 h-14 rounded-2xl bg-[#1c1c1c] border border-white/5 flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                        <MessageCircle className="text-blue-500" fill="currentColor" size={24} />
                     </div>
                     <div className="w-14 h-14 rounded-2xl bg-[#1c1c1c] border border-white/5 flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform duration-300 delay-100">
                        <Zap className="text-orange-500" fill="currentColor" size={24} />
                     </div>
                     <div className="w-14 h-14 rounded-2xl bg-[#1c1c1c] border border-white/5 flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform duration-300 delay-150">
                         <Layers className="text-purple-500" size={24} />
                     </div>
                 </div>
             </div>
             {/* Radial gradient background accent */}
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]"></div>
        </div>

        {/* Card 5: Collaborate */}
        <div className="group rounded-[2.5rem] bg-gradient-to-br from-[#0A0A0A] to-[#050505] border border-white/10 p-10 md:px-14 md:py-12 hover:border-brand-lime/30 transition-all duration-300 flex flex-col md:flex-row justify-between items-center relative overflow-hidden gap-10 shadow-lg hover:shadow-brand-lime/10">
             <div className="relative z-10 max-w-xs">
                 <h4 className="text-xl text-white mb-3 font-medium">Collaborate real-time</h4>
                 <p className="text-brand-gray text-sm leading-relaxed">Seamlessly connect all your existing apps.</p>
             </div>
             <div className="relative z-10 pr-4">
                 <div className="flex -space-x-4 items-center pl-4">
                     {[1, 2, 3].map((i) => (
                         <div key={i} className="w-14 h-14 rounded-full border-[3px] border-[#0A0A0A] overflow-hidden relative shadow-lg transform group-hover:translate-x-1 transition-transform" style={{ zIndex: i }}>
                             <img src={`https://picsum.photos/100/100?random=${i+20}`} className="w-full h-full object-cover" alt={`User ${i}`} />
                         </div>
                     ))}
                     <div className="w-14 h-14 rounded-full border-[3px] border-[#0A0A0A] bg-brand-lime text-black flex items-center justify-center text-xs font-bold relative z-10 shadow-lg transform group-hover:translate-x-1 transition-transform">
                         Eliah
                     </div>
                 </div>
                 {/* Cursor Mock */}
                 <div className="absolute -bottom-2 right-0 flex items-center gap-2 bg-brand-lime/90 backdrop-blur px-2 py-1 rounded-full rounded-tl-none shadow-lg animate-bounce duration-[2000ms]">
                    <MousePointer2 size={12} className="text-black fill-black" />
                    <span className="text-[10px] font-bold text-black">Typing...</span>
                 </div>
             </div>
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-lime/5 rounded-full blur-[80px]"></div>
        </div>
      </div>

      {/* Tags Row */}
      <div className="flex flex-wrap justify-center gap-3">
        <Tag text="Design workshops" color="lime" />
        <Tag text="Workshops" color="orange" />
        <Tag text="Trend reports" color="lime" />
        <Tag text="Asset library" color="lime" />
        <Tag text="Rollover hours" color="purple" />
        <Tag text="Premium designers" color="lime" />
        <Tag text="Multilingual support" color="lime" />
      </div>

    </section>
  );
};