import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const Card3D = ({ 
  children, 
  className = "", 
  intensity = 15,
  scale = 1.02,
  glowColor = "blue",
  ...props 
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    setRotateX((-mouseY / rect.height) * intensity);
    setRotateY((mouseX / rect.width) * intensity);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const glowColors = {
    blue: 'shadow-blue-500/20 hover:shadow-blue-500/40',
    green: 'shadow-green-500/20 hover:shadow-green-500/40',
    purple: 'shadow-purple-500/20 hover:shadow-purple-500/40',
    orange: 'shadow-orange-500/20 hover:shadow-orange-500/40'
  };

  return (
    <motion.div
      className={`perspective-1000 group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="relative transform-gpu"
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <Card 
          className={`
            border-0 bg-white/90 backdrop-blur-md
            shadow-xl hover:shadow-2xl
            ${glowColors[glowColor]}
            transition-all duration-500
            relative overflow-hidden
            before:absolute before:inset-0 before:bg-gradient-to-br 
            before:from-white/20 before:to-transparent before:opacity-0 
            hover:before:opacity-100 before:transition-opacity before:duration-300
            rounded-2xl
          `}
          {...props}
        >
          {/* Animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
          
          {/* Glass morphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />
          
          <div className="relative z-10">
            {children}
          </div>
          
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-2xl shadow-inner shadow-white/10" />
        </Card>
      </motion.div>
    </motion.div>
  );
};

const Card3DWithContent = ({ title, children, icon: Icon, glowColor = "blue", ...props }) => {
  return (
    <Card3D glowColor={glowColor} {...props}>
      {title && (
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-xl font-bold text-slate-900">
            {Icon && <Icon className="w-6 h-6 text-blue-600" />}
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent>
        {children}
      </CardContent>
    </Card3D>
  );
};

export default Card3D;
export { Card3DWithContent };