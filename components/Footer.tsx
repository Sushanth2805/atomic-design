import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-brand-dark border-t border-white/5 text-xs text-brand-gray">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-sm transform rotate-45"></div>
            </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy & Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
        </div>

        {/* Copyright */}
        <div>
            2024 digital agency
        </div>

      </div>
    </footer>
  );
};