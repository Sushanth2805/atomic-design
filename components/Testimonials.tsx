import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO of ChicBoutique",
    company: "ChicBoutique",
    avatar: "https://picsum.photos/100/100?random=11",
    content: "LandFree has been instrumental in transforming our online presence. Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform.",
    date: "03 January 2024"
  },
  {
    id: 2,
    name: "Jason Williams",
    role: "Sales Director at CRM",
    company: "CRM",
    avatar: "https://picsum.photos/100/100?random=12",
    content: "Our website was slow and buggy, costing us sales. LandFree fixed the code, optimized everything, and now it's blazing fast and converting like crazy. We're ecstatic!",
    date: "16 January 2024"
  },
  {
    id: 3,
    name: "Mark Thompson",
    role: "CEO of Event Masters",
    company: "Event Masters",
    avatar: "https://picsum.photos/100/100?random=13",
    content: "LandFree developed a comprehensive booking and reservation system for our event management company. Their attention to detail and commitment to delivering a user-friendly platform was evident.",
    date: "03 January 2024"
  },
  {
    id: 4,
    name: "Michael Anderson",
    role: "Founder of Dreams",
    company: "Dreams",
    avatar: "https://picsum.photos/100/100?random=14",
    content: "Our website was sluggish and full of glitches, causing us to lose sales. LandFree completely overhauled the code, optimized everything, and now it's lightning-fast and converting exceptionally well.",
    date: "03 January 2024"
  },
  {
    id: 5,
    name: "Sarah Jenkins",
    role: "CTO at TechFlow",
    company: "TechFlow",
    avatar: "https://picsum.photos/100/100?random=15", 
    content: "LandFree has played a pivotal role in revolutionizing our online presence. Their team's proficiency in web development and design led to a visually stunning and easy-to-navigate e-commerce platform.",
    date: "03 January 2024"
  },
  {
    id: 6,
    name: "Emily Davis",
    role: "Marketing Head",
    company: "Growth.io",
    avatar: "https://picsum.photos/100/100?random=16",
    content: "Our website was slow and buggy, costing us sales. LandFree fixed the code, optimized everything, and now it's blazing fast and converting like crazy. We're ecstatic!",
    date: "16 January 2024"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-brand-lime mb-6">
            <span className="w-4 h-4 rounded-full border border-brand-lime/50 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-brand-lime rounded-full"></span>
            </span>
            TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
            What our clients say about us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
                <div key={`${t.id}-${idx}`} className="bg-gradient-to-br from-[#0A0A0A] to-[#050505] border border-white/10 rounded-2xl p-8 hover:border-brand-lime/40 hover:shadow-lg hover:shadow-brand-lime/10 transition-all duration-300 flex flex-col h-full group">
                    <div className="flex items-center gap-4 mb-6">
                        <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-white/10 group-hover:border-brand-lime/50 transition-colors" />
                        <div>
                            <div className="text-white text-base font-semibold">{t.name}</div>
                            <div className="text-brand-gray text-xs">{t.role}</div>
                        </div>
                    </div>
                    <p className="text-brand-gray text-sm leading-relaxed mb-6 flex-grow font-light">
                        "{t.content}"
                    </p>
                    <div className="text-brand-gray/40 text-[10px] uppercase tracking-wider font-mono">
                        {t.date}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};