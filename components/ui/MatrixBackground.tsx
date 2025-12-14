import React, { useEffect, useRef, useState } from 'react';

interface Column {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  color: string;
  fontSize: number;
  changeRate: number;
  nextGlitch: number;
}

const CHARS = "0101010189ABCDEFZ"; 
const COLORS = ["#00FF41", "#00F0FF", "#8B5CF6"];

export const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const columnsRef = useRef<Column[]>([]);
  const frameIdRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const initMatrix = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const isMobile = window.innerWidth < 768;
      const baseFontSize = isMobile ? 18 : 24; 
      // Reduced density even further for cleaner look
      const columnCount = Math.floor(window.innerWidth / (isMobile ? 35 : 45)); 
      
      columnsRef.current = [];
      
      for (let i = 0; i < columnCount; i++) {
        // Significantly slower speeds for "smooth" feel
        const speed = (Math.random() * 0.15) + 0.05; 
        
        columnsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          speed: speed,
          chars: Array(Math.floor(Math.random() * 10 + 5)).fill('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]),
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          fontSize: baseFontSize,
          changeRate: Math.floor(Math.random() * 200 + 150), // Slower glitching
          nextGlitch: 0,
        });
      }
    };

    initMatrix();
    window.addEventListener('resize', initMatrix);

    const render = () => {
      if (!isVisible) return;
      
      // Use dark fill with low opacity for trails
      ctx.fillStyle = 'rgba(11, 11, 15, 0.1)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      timeRef.current++;

      columnsRef.current.forEach((col) => {
        col.y += col.speed;

        if (col.y > canvas.height) {
          col.y = -1 * (col.chars.length * col.fontSize) - Math.random() * 100;
          col.x = Math.random() * canvas.width;
          col.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        }

        if (timeRef.current > col.nextGlitch) {
          const charIdx = Math.floor(Math.random() * col.chars.length);
          col.chars[charIdx] = CHARS[Math.floor(Math.random() * CHARS.length)];
          col.nextGlitch = timeRef.current + col.changeRate;
        }

        ctx.font = `${col.fontSize}px monospace`;
        
        col.chars.forEach((char, i) => {
          const charY = col.y - (i * col.fontSize);
          if (charY > canvas.height || charY < -50) return;

          if (i === 0) {
             ctx.fillStyle = '#FFFFFF';
          } else {
             ctx.fillStyle = col.color;
             const opacity = 1 - (i / col.chars.length);
             ctx.globalAlpha = opacity * 0.5; // Lower opacity
          }

          ctx.fillText(char, col.x, charY);
          ctx.globalAlpha = 1.0;
        });
      });
      
      frameIdRef.current = requestAnimationFrame(render);
    };

    frameIdRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', initMatrix);
      cancelAnimationFrame(frameIdRef.current);
    };
  }, [isVisible]);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-[-1] pointer-events-none transition-opacity duration-1000"
      style={{ 
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};