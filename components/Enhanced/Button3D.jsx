import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const Button3D = ({ 
  children, 
  className = "", 
  variant = "default",
  size = "default",
  glowColor = "blue",
  ...props 
}) => {
  const variants = {
    default: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent",
    ghost: "text-blue-600 hover:bg-blue-100",
    premium: "bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 hover:from-purple-700 hover:via-blue-700 hover:to-purple-700 text-white",
  };

  const glowColors = {
    blue: 'shadow-blue-500/30 hover:shadow-blue-500/60',
    green: 'shadow-green-500/30 hover:shadow-green-500/60',
    purple: 'shadow-purple-500/30 hover:shadow-purple-500/60',
    orange: 'shadow-orange-500/30 hover:shadow-orange-500/60'
  };

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        rotateX: -5,
        rotateY: 2,
      }}
      whileTap={{ 
        scale: 0.98,
        rotateX: 0,
        rotateY: 0,
      }}
      transition={{ 
        duration: 0.2, 
        ease: "easeOut",
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
      className="perspective-1000 inline-block"
      style={{ transformStyle: "preserve-3d" }}
    >
      <Button
        className={`
          ${variants[variant]}
          ${glowColors[glowColor]}
          relative overflow-hidden
          shadow-lg hover:shadow-xl
          transition-all duration-300
          transform-gpu
          rounded-xl
          font-semibold
          border-0
          before:absolute before:inset-0 
          before:bg-gradient-to-r before:from-white/20 before:via-white/10 before:to-transparent 
          before:opacity-0 hover:before:opacity-100 
          before:transition-opacity before:duration-300
          after:absolute after:inset-0 
          after:bg-gradient-to-t after:from-black/10 after:to-transparent
          ${className}
        `}
        {...props}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out" />
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        
        {/* Bottom shine effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </Button>
    </motion.div>
  );
};

export default Button3D;