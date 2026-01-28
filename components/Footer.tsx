import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-brand-dark border-t border-white/5 text-sm text-brand-gray/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-white to-white/60 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-brand-lime/20 transition-shadow">
                <div className="w-4 h-4 bg-black rounded-sm transform rotate-45"></div>
            </div>
            <span className="font-semibold hidden sm:block">Atomic</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-8">
            <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
            <div className="hidden md:block w-px h-4 bg-white/10"></div>
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy & Cookie Policy</a>
            <div className="hidden md:block w-px h-4 bg-white/10"></div>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms & Conditions</a>
        </div>

        {/* Copyright */}
        <div className="text-brand-gray/60">
            © 2024 Atomic Design. All rights reserved.
        </div>

      </div>
      </div>
    </footer>

  );
};