import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <div className="rounded-[40px] bg-brand-card border border-brand-border p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase text-brand-lime">
                <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
                CUSTOMER STORY
            </div>
            
            <blockquote className="text-3xl md:text-4xl text-white font-medium leading-tight">
                "Our growth no longer necessitates the recruitment and education of additional design professionals"
            </blockquote>

            <a href="#" className="inline-flex items-center gap-2 text-white hover:text-brand-lime transition-colors text-sm font-medium group">
                Read the story
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

        {/* Right Video Mockup */}
        <div className="flex-1 w-full">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800 group cursor-pointer">
                <img 
                    src="https://picsum.photos/800/600?random=10" 
                    alt="Customer Video" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity group-hover:scale-105 duration-700"
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <Play size={20} className="ml-1 text-black fill-black" />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-6 left-6 text-left">
                    <div className="text-white font-medium">Johnny Seedapple</div>
                    <div className="text-white/60 text-sm">Role</div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};