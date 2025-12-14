
import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsFading(true);
          setTimeout(onComplete, 800); // Wait for fade out
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 150);
    return () => clearInterval(timer);
  }, [onComplete]);

  if (progress > 100 && !isFading) return null;

  return (
    <div className={`fixed inset-0 z-[10000] bg-[#050508] flex items-center justify-center transition-opacity duration-700 ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative flex flex-col items-center">
        {/* Animated Logo Construction */}
        <div className="w-24 h-24 mb-8 relative">
          <div className="absolute inset-0 border-4 border-purple-500/30 rounded-xl animate-spin-slow" />
          <div className="absolute inset-0 border-4 border-t-purple-500 rounded-xl animate-spin" />
          <div className="absolute inset-4 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg animate-pulse flex items-center justify-center shadow-[0_0_30px_rgba(147,51,234,0.5)]">
            <span className="text-3xl font-bold text-white">L</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-200 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="mt-4 font-mono text-purple-400 text-sm">
          INITIALIZING SYSTEM... {Math.round(Math.min(progress, 100))}%
        </div>
      </div>
    </div>
  );
};
