import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // New Glassy Variants
        glassyPrimary: [
          "relative text-slate-700 border border-white/30 rounded-full font-semibold",
          "backdrop-blur-[20px] bg-white/15",
          "shadow-[0_15px_30px_-8px_rgba(6,182,212,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
          "hover:bg-white/25 hover:shadow-[0_20px_40px_-8px_rgba(6,182,212,0.4),inset_0_1px_0_rgba(255,255,255,0.4)]",
          "hover:scale-105 hover:-translate-y-0.5 transition-all duration-500"
        ],
        glassySecondary: [
          "relative text-slate-700 border border-blue-300/30 rounded-full font-semibold",
          "backdrop-blur-[20px] bg-blue-500/15",
          "shadow-[0_15px_30px_-8px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
          "hover:bg-blue-500/25 hover:shadow-[0_20px_40px_-8px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.4)]",
          "hover:scale-105 hover:-translate-y-0.5 transition-all duration-500"
        ],
        glassyCyber: [
          "relative text-white border border-cyan-300 rounded-full font-semibold",
          "backdrop-blur-[20px]",
          "shadow-[0_15px_30px_-8px_rgba(103,232,249,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
          "hover:shadow-[0_20px_40px_-8px_rgba(103,232,249,0.4),inset_0_1px_0_rgba(255,255,255,0.4)]",
          "hover:scale-105 hover:-translate-y-0.5 transition-all duration-500"
        ]
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        // Glassy sizes
        glassySm: "h-12 px-8 text-sm min-w-[280px]",
        glassyDefault: "h-16 px-12 text-base min-w-[320px]",
        glassyLg: "h-18 px-14 text-lg min-w-[384px]"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  
  // Check if it's a glassy variant to apply special effects
  const isGlassy = variant && variant.startsWith('glassy')
  
  if (isGlassy) {
    return <GlassyButton 
      ref={ref}
      className={className}
      variant={variant}
      size={size}
      {...props}
    />
  }
  
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />
  );
})

// Enhanced Glassy Button Component
const GlassyButton = React.forwardRef(({ 
  className, 
  variant = "glassyPrimary", 
  size = "glassyDefault", 
  children,
  disabled = false,
  onClick,
  ...props 
}, ref) => {
  // Variant configurations for dynamic effects
  const variantConfig = {
    glassyPrimary: {
      background: 'rgba(255, 255, 255, 0.15)',
      hoverBackground: 'rgba(255, 255, 255, 0.25)',
      glowColor: '#06b6d4'
    },
    glassySecondary: {
      background: 'rgba(59, 130, 246, 0.15)',
      hoverBackground: 'rgba(59, 130, 246, 0.25)',
      glowColor: '#3b82f6'
    },
    glassyCyber: {
      background: '#083344',
      hoverBackground: 'rgba(24, 24, 24, 0.8)',
      glowColor: '#67e8f9'
    }
  };

  const config = variantConfig[variant] || variantConfig.glassyPrimary;

  const handleMouseEnter = (e) => {
    if (disabled) return;
    
    const container = e.currentTarget;
    const elements = {
      backgroundGlow: container.querySelector('.bg-glow'),
      button: container.querySelector('.glass-btn'),
      topGlow: container.querySelector('.top-glow'),
      bottomGlow: container.querySelector('.bottom-glow')
    };

    if (elements.backgroundGlow) {
      elements.backgroundGlow.style.width = '120%';
      elements.backgroundGlow.style.height = '32px';
      elements.backgroundGlow.style.opacity = '0.9';
    }
    
    if (elements.button) {
      elements.button.style.background = config.hoverBackground;
    }
    
    if (elements.topGlow) {
      elements.topGlow.style.width = '40%';
      elements.topGlow.style.height = '3px';
      elements.topGlow.style.opacity = '1';
    }
    
    if (elements.bottomGlow) {
      elements.bottomGlow.style.width = '100%';
      elements.bottomGlow.style.height = '3px';
      elements.bottomGlow.style.opacity = '0.9';
    }
  };

  const handleMouseLeave = (e) => {
    if (disabled) return;
    
    const container = e.currentTarget;
    const elements = {
      backgroundGlow: container.querySelector('.bg-glow'),
      button: container.querySelector('.glass-btn'),
      topGlow: container.querySelector('.top-glow'),
      bottomGlow: container.querySelector('.bottom-glow')
    };

    if (elements.backgroundGlow) {
      elements.backgroundGlow.style.width = '0';
      elements.backgroundGlow.style.height = '0';
      elements.backgroundGlow.style.opacity = '0.8';
    }
    
    if (elements.button) {
      elements.button.style.background = config.background;
    }
    
    if (elements.topGlow) {
      elements.topGlow.style.width = '0';
      elements.topGlow.style.height = '0';
      elements.topGlow.style.opacity = '0';
    }
    
    if (elements.bottomGlow) {
      elements.bottomGlow.style.width = '0';
      elements.bottomGlow.style.height = '0';
      elements.bottomGlow.style.opacity = '0';
    }
  };

  return (
    <div 
      className={cn("relative", disabled && "opacity-50 cursor-not-allowed")}
      style={{ width: 'fit-content', height: 'fit-content' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={disabled ? undefined : onClick}
    >
      {/* Background Glow Effect */}
      <div 
        className="bg-glow absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700 ease-out"
        style={{
          width: '0',
          height: '0',
          background: config.glowColor,
          filter: 'blur(25px)',
          opacity: '0.8',
          zIndex: 0
        }}
      />
      
      {/* Main Glass Button */}
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), "glass-btn", className)}
        style={{
          background: config.background,
          zIndex: 1
        }}
        disabled={disabled}
        {...props}
      >
        {/* Top Highlight Glow */}
        <div 
          className="top-glow absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full transition-all duration-600"
          style={{
            width: '0',
            height: '0',
            background: `radial-gradient(ellipse, ${config.glowColor}80 0%, transparent 70%)`,
            opacity: '0',
            zIndex: 2
          }}
        />
        
        {/* Bottom Gradient Glow */}
        <div 
          className="bottom-glow absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-600"
          style={{
            width: '0',
            height: '0',
            background: `linear-gradient(90deg, transparent 0%, ${config.glowColor}40 25%, ${config.glowColor}80 50%, ${config.glowColor}40 75%, transparent 100%)`,
            borderRadius: '50px',
            opacity: '0',
            filter: `drop-shadow(0 0 20px ${config.glowColor})`,
            zIndex: 2
          }}
        />
        
        {/* Button Content */}
        <span className="relative z-10 flex items-center gap-3">
          {children}
        </span>
      </button>
    </div>
  );
});

Button.displayName = "Button"
GlassyButton.displayName = "GlassyButton"

export { Button, buttonVariants }