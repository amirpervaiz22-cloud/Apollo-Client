import React from 'react'

const Button = ({ children, variant = "primary", className = "", onClick }) => {
  
  const variants = {
    primary:
      "bg-blue-700 text-white hover:bg-blue-800 shadow-md transition-all active:scale-95",
    secondary:
      "bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 shadow-sm transition-all",
    outline:
      "bg-transparent text-white border border-white hover:bg-white/10 transition-all",
    ghost: "bg-transparent text-blue-700 hover:bg-blue-50 transition-all",
  };
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base flex items-center justify-center gap-2 transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};



export default Button