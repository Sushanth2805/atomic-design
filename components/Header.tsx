import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 h-16 shadow-2xl shadow-black/50' : 'h-20'}`}>
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 relative flex items-center justify-center">
                {/* Abstract 'Atomic' Logo */}
                <div className="absolute inset-0 bg-white rounded-md transform rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <div className="absolute w-full h-[1px] bg-black/20"></div>
                    <div className="absolute h-full w-[1px] bg-black/20"></div>
                </div>
            </div>
          </div>

          {/* Desktop Nav - Centered Pill */}
          {!isMobileMenuOpen && (
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-xs font-medium text-brand-gray hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            <Button variant="outline" size="sm" className="px-6 rounded-full border-white/10 hover:border-white/30 hover:bg-white/5 text-xs tracking-wide">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 p-4 md:hidden">
            <div className="bg-[#111] border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-white hover:bg-white/5 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-white/10 my-2"></div>
            <Button fullWidth variant="primary" onClick={() => setIsMobileMenuOpen(false)}>Login</Button>
          </div>
        </div>
      )}
    </header>
  );
};