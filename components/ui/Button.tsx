import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-lime/50 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-brand-lime text-black hover:bg-[#e6ff33] shadow-lg shadow-brand-lime/40 hover:shadow-brand-lime/60 active:scale-95",
    secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/5 hover:border-white/20",
    outline: "border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
    ghost: "text-brand-gray hover:text-white"
  };

  const sizes = {
    sm: "h-8 px-4 text-xs",
    md: "h-10 px-6 text-sm",
    lg: "h-12 px-8 text-base"
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};