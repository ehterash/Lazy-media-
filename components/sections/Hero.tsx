import React, { useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // PERFORMANCE OPTIMIZATION:
    // Use requestAnimationFrame loop to throttle the mouse move events
    // This prevents layout thrashing on high poll rate mice
    
    let rafId: number | null = null;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (rafId) return; // Skip if a frame is already pending

      rafId = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        
        // Calculate normalized position
        const x = (e.clientX / window.innerWidth - 0.5) * 20; // 20px max movement
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        // Update CSS Variables directly on the container
        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
        
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-[72px] pb-20 overflow-hidden perspective-1000"
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px',
      } as React.CSSProperties}
    >
      
      {/* --- ADVANCED CSS 3D BRAIN --- */}
      <style>{`
        .brain-container {
          transform-style: preserve-3d;
          animation: spin 60s linear infinite;
          will-change: transform;
        }
        @keyframes spin {
          0% { transform: rotateY(0deg) rotateX(10deg); }
          100% { transform: rotateY(360deg) rotateX(10deg); }
        }
        .brain-ring {
          position: absolute;
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);
        }
        .particle {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: floatParticle 15s infinite ease-in-out; /* Slower */
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) opacity(0); }
          50% { transform: translateY(-100px) opacity(1); }
        }
        /* Hardware Accelerated Moving Elements */
        .parallax-item {
          transition: transform 0.2s cubic-bezier(0.2, 0, 0.2, 1);
          will-change: transform;
        }
      `}</style>

      {/* 3D Brain Centerpiece Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30 pointer-events-none z-0">
         <div className="relative w-full h-full brain-container">
            {[0, 45, 90, 135].map((deg, i) => (
              <div key={i} className="brain-ring inset-0" style={{ transform: `rotateY(${deg}deg)` }} />
            ))}
            {[0, 60, 120].map((deg, i) => (
              <div key={`h-${i}`} className="brain-ring inset-10 border-cyan-500/30" style={{ transform: `rotateX(${deg}deg)` }} />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl rounded-full animate-pulse-slow" />
         </div>
      </div>

      {/* Floating Particles - Reduced count & Slower */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="particle w-1 h-1 bg-purple-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100 + 50}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Parallax Floating Emoji Cards - Using CSS Vars for smooth movement */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
         <div 
           className="parallax-item absolute top-[20%] left-[10%] bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl"
           style={{ transform: `translate(calc(var(--mouse-x) * -2), calc(var(--mouse-y) * -2))` }}
         >
            <span className="text-4xl">🤖</span>
            <div className="mt-2 h-1 w-12 bg-purple-500/50 rounded-full" />
         </div>
         <div 
           className="parallax-item absolute bottom-[30%] right-[10%] bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl"
           style={{ transform: `translate(calc(var(--mouse-x) * 3), calc(var(--mouse-y) * 3))` }}
         >
            <span className="text-4xl">🚀</span>
            <div className="mt-2 h-1 w-12 bg-cyan-500/50 rounded-full" />
         </div>
         <div 
           className="parallax-item absolute top-[30%] right-[20%] bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-2xl blur-[2px]"
           style={{ transform: `translate(calc(var(--mouse-x) * -1), calc(var(--mouse-y) * -1))` }}
         >
            <span className="text-2xl">⚡</span>
         </div>
      </div>

      {/* Central Content */}
      <div className="container mx-auto px-6 relative z-30 flex flex-col items-center text-center">
        
        {/* Badge */}
        <Reveal width="fit-content">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-700 cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-xs font-semibold text-purple-100 tracking-wide uppercase">System Online v3.0</span>
          </div>
        </Reveal>

        {/* Main Headline with Slower Gradient Text */}
        <Reveal width="100%" delay={100}>
          <h1 className="text-[50px] md:text-[90px] font-extrabold tracking-tight leading-[1.1] text-white mb-6 md:mb-8 max-w-[90%] md:max-w-5xl mx-auto drop-shadow-2xl">
            We Build The <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 animate-gradient-x bg-[length:200%_auto]">
              Intelligence of Tomorrow
            </span>
          </h1>
        </Reveal>

        {/* Subtitle */}
         <Reveal width="100%" delay={200}>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Deploying advanced neural networks and cognitive frameworks to elevate your business into the next dimension of digital reality.
            </p>
         </Reveal>

        {/* CTA Buttons */}
        <Reveal width="100%" delay={300}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-2">
            <Button 
              variant="white" 
              size="lg"
              className="relative overflow-hidden group transition-all duration-500"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Initiate Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              className="transition-all duration-500"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Systems
            </Button>
          </div>
        </Reveal>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce duration-[3000ms]">
         <div className="p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-400">
           <ChevronDown size={24} />
         </div>
      </div>
      
      {/* Slower Gradient Keyframe */}
      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite; /* Much Slower */
        }
      `}</style>

    </section>
  );
};