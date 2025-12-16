import React, { useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let rafId: number | null = null;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (rafId) return; 

      rafId = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        
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

  // Split text helper
  const SplitText = ({ text, delay = 0, className = '' }: { text: string, delay?: number, className?: string }) => (
    <span className="inline-block">
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-2 md:mr-4 align-bottom">
          <span 
            className={`inline-block animate-slide-up-fade ${className}`}
            style={{ 
              animation: `slideUpFade 0.8s cubic-bezier(0.2, 0, 0.2, 1) forwards`,
              animationDelay: `${delay + (i * 0.1)}s`,
              opacity: 0,
              transform: 'translateY(100%)'
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );

  const brandGradientClass = "bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400";

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-[72px] pb-20 overflow-hidden perspective-1000"
      style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
    >
      <style>{`
        @keyframes slideUpFade {
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-brain-spin {
          animation: brainSpin 60s linear infinite;
        }
        @keyframes brainSpin {
          0% { transform: rotateY(0deg) rotateX(10deg); }
          100% { transform: rotateY(360deg) rotateX(10deg); }
        }
      `}</style>

      {/* 3D Brain Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30 pointer-events-none z-0">
         <div className="relative w-full h-full animate-brain-spin preserve-3d">
            {[0, 45, 90, 135].map((deg, i) => (
              <div key={i} className="absolute inset-0 border border-purple-500/30 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.2)]" style={{ transform: `rotateY(${deg}deg)` }} />
            ))}
            {[0, 60, 120].map((deg, i) => (
              <div key={`h-${i}`} className="absolute inset-10 border border-indigo-500/30 rounded-full" style={{ transform: `rotateX(${deg}deg)` }} />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-3xl rounded-full animate-pulse-slow" />
         </div>
      </div>

      {/* Parallax Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
         <div 
           className="absolute top-[20%] left-[10%] bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl transition-transform duration-100 ease-out"
           style={{ transform: `translate(calc(var(--mouse-x) * -1.5), calc(var(--mouse-y) * -1.5)) rotate(-5deg)` }}
         >
            <span className="text-4xl animate-bounce">🤖</span>
         </div>
         <div 
           className="absolute bottom-[30%] right-[10%] bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl transition-transform duration-100 ease-out"
           style={{ transform: `translate(calc(var(--mouse-x) * 2), calc(var(--mouse-y) * 2)) rotate(5deg)` }}
         >
            <span className="text-4xl animate-pulse">🚀</span>
         </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-30 flex flex-col items-center text-center">
        
        <Reveal variant="scale" duration={1000}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-2xl hover:scale-105 transition-transform duration-500 cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-xs font-semibold text-purple-100 tracking-wide uppercase">System Online v3.0</span>
          </div>
        </Reveal>

        <h1 className="text-[50px] md:text-[90px] font-extrabold tracking-tight leading-[1.1] text-white mb-6 md:mb-8 max-w-[90%] md:max-w-5xl mx-auto drop-shadow-2xl">
          <SplitText text="We Build The" delay={0.2} /> <br />
          <span className="inline-block relative">
             <SplitText 
               text="Intelligence of Tomorrow" 
               delay={0.5} 
               className={`bg-clip-text text-transparent ${brandGradientClass} animate-text-shimmer bg-[length:200%_auto] pb-1`}
             />
             <div className="absolute -bottom-2 left-0 w-full h-2 bg-purple-500/20 blur-lg rounded-full" />
          </span>
        </h1>

         <Reveal variant="up" delay={800} width="100%">
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Deploying advanced neural networks and cognitive frameworks to elevate your business into the next dimension of digital reality.
            </p>
         </Reveal>

        <Reveal variant="up" delay={1000} width="100%">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-2">
            <Button 
              variant="primary" 
              size="lg"
              magnetic
              className="relative overflow-hidden group min-w-[180px]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Initiate Project
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              magnetic
              className="min-w-[180px]"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Systems
            </Button>
          </div>
        </Reveal>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce duration-[3000ms]">
         <div className="p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-400">
           <ChevronDown size={24} />
         </div>
      </div>

    </section>
  );
};