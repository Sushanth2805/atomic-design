import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
    { q: "Can I use Atomic Template for commercial purposes?", a: "Yes, you absolutely can use the Atomic Template for commercial purposes. It is designed to be flexible for both personal and commercial projects." },
    { q: "Read and understand Template restrictions", a: "Please refer to the license file included with the download for full details on what you can and cannot do." },
    { q: "Accept the Template Usage Disclaimer", a: "By using this template, you agree to our terms of service and disclaimer regarding liability." },
    { q: "How to contact the author of this Template?", a: "You can contact us via the support form on our profile page." },
    { q: "Disclaimer of Responsibility for Usage", a: "We are not responsible for any direct or indirect damages that may occur from the use of this template." },
    { q: "How do I get started with LandFree?", a: "Simply sign up, choose a plan, and start your first project request!" },
    { q: "Graphic Assets attribution Notice", a: "All graphic assets used are royalty-free or licensed for commercial use." },
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section id="faqs" className="py-24 bg-brand-dark">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase text-brand-lime mb-4">
                        <span className="w-4 h-4 rounded-full border border-brand-lime flex items-center justify-center">
                            <span className="w-2 h-2 bg-brand-lime rounded-full"></span>
                        </span>
                        FAQS
                    </div>
                    <h2 className="text-3xl md:text-4xl font-medium text-white">
                        We've got the answers
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="bg-brand-card border border-brand-border rounded-xl overflow-hidden transition-all duration-300"
                        >
                            <button 
                                onClick={() => toggle(idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-white text-sm md:text-base font-medium pr-8">{item.q}</span>
                                {openIndex === idx ? (
                                    <X className="flex-shrink-0 text-white/50" size={18} />
                                ) : (
                                    <Plus className="flex-shrink-0 text-white/50" size={18} />
                                )}
                            </button>
                            
                            <div className={`
                                px-6 text-brand-gray text-sm leading-relaxed overflow-hidden transition-all duration-300 ease-in-out
                                ${openIndex === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}
                            `}>
                                {item.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};