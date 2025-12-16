import React, { useEffect, useState } from 'react';

const SCRAMBLE_CHARS = 'X0123456789@#&/[]';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [displayText, setDisplayText] = useState('INITIALIZING_SYSTEM');
  const [shutterOpen, setShutterOpen] = useState(false);

  // 1. Progress Simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        // Non-linear progress for realism (fast start, slow end)
        const diff = 100 - prev;
        const inc = Math.max(0.5, Math.random() * (diff / 5)); 
        const next = prev + inc;
        
        if (next >= 100) {
          clearInterval(timer);
          // Start Exit Sequence
          setTimeout(() => setIsFinished(true), 200);
          return 100;
        }
        return next;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // 2. Trigger Shutter after "Finish" state
  useEffect(() => {
    if (isFinished) {
      // Small delay before opening shutters for dramatic effect
      setTimeout(() => {
        setShutterOpen(true);
        // Call parent completion after animation finishes
        setTimeout(onComplete, 1200); 
      }, 300);
    }
  }, [isFinished, onComplete]);

  // 3. Scramble Text Effect
  useEffect(() => {
     if (isFinished) {
         setDisplayText('ACCESS_GRANTED');
         return;
     }

     const interval = setInterval(() => {
         const baseText = 'INITIALIZING_CORE';
         const scrambled = baseText.split('').map((char, i) => {
             if (char === ' ') return ' ';
             // Randomly scramble characters
             if (Math.random() > 0.7) return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
             return char;
         }).join('');
         setDisplayText(scrambled);
     }, 80);
     return () => clearInterval(interval);
  }, [isFinished]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none">
      
      {/* --- TOP SHUTTER --- */}
      <div 
        className={`absolute top-0 left-0 w-full bg-[#050508] z-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.87,0,0.13,1)] border-b border-white/10 ${
            shutterOpen ? '-translate-y-full' : 'translate-y-0'
        }`} 
        style={{ height: '50%' }}
      />
      
      {/* --- BOTTOM SHUTTER --- */}
      <div 
        className={`absolute bottom-0 left-0 w-full bg-[#050508] z-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.87,0,0.13,1)] border-t border-white/10 ${
            shutterOpen ? 'translate-y-full' : 'translate-y-0'
        }`} 
        style={{ height: '50%' }}
      />

      {/* --- CENTRAL LOADER CONTENT --- */}
      {/* Fades out when shutters open */}
      <div className={`relative z-30 flex flex-col items-center transition-all duration-500 ${shutterOpen ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
         
         {/* Logo / Spinner */}
         <div className="relative w-24 h-24 mb-10">
            {/* Outer Ring */}
            <div className="absolute inset-0 border border-white/5 rounded-full" />
            
            {/* Spinning Arcs */}
            <div className="absolute inset-0 border-t-2 border-purple-500 rounded-full animate-spin" style={{ animationDuration: '1.5s' }} />
            <div className="absolute inset-2 border-r-2 border-cyan-500 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            
            {/* Center Percentage */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold font-mono text-white tracking-tighter">
                    {Math.floor(progress).toString().padStart(2, '0')}
                </span>
            </div>
            
            {/* Glitch Overlay Effect */}
            <div className="absolute inset-0 rounded-full bg-purple-500/10 animate-pulse" />
         </div>

         {/* Scramble Text */}
         <div className="flex flex-col items-center gap-2">
            <div className="font-mono text-xs text-purple-400 tracking-[0.3em] uppercase min-w-[140px] text-center">
                {displayText}
            </div>
            {/* Progress Bar Line */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-2">
                <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-100 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
         </div>
      </div>

      {/* --- FLASH LINE EFFECT --- */}
      {/* A white line that expands horizontally right before shutters open */}
      <div 
        className={`absolute top-1/2 left-0 w-full h-[2px] bg-white z-40 transition-all duration-500 ease-out ${
            shutterOpen ? 'scale-x-0 opacity-0' : isFinished ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        }`} 
      />
      
    </div>
  );
};