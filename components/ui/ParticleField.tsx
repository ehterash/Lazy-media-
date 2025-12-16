import React, { useEffect, useRef } from 'react';

export const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    // Mobile Optimization: Check screen size
    const isMobile = w < 768;
    const particleCount = isMobile ? 25 : 60; // Reduce from 60 to 25 on mobile

    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * (isMobile ? 0.1 : 0.2), // Slower movement on mobile
      vy: (Math.random() - 0.5) * (isMobile ? 0.1 : 0.2),
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      targetAlpha: Math.random() * 0.5 + 0.1,
      angle: Math.random() * Math.PI * 2,
      spinSpeed: (Math.random() - 0.5) * 0.01
    }));

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    // Only listen to mouse move on desktop to save resources
    if (!isMobile) {
        window.addEventListener('mousemove', handleMouseMove);
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        
        p.angle += p.spinSpeed;
        p.x += p.vx + Math.sin(p.angle) * 0.2;
        p.y += p.vy + Math.cos(p.angle) * 0.2;

        if (Math.abs(p.targetAlpha - p.alpha) < 0.01) {
            p.targetAlpha = Math.random() * 0.8 + 0.1;
        }
        p.alpha += (p.targetAlpha - p.alpha) * 0.05;

        // Interaction only on desktop
        if (!isMobile) {
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const distSq = dx * dx + dy * dy;
            
            if (distSq < 40000) {
                const dist = Math.sqrt(distSq);
                const force = (200 - dist) / 200;
                p.x -= dx * force * 0.05;
                p.y -= dy * force * 0.05;
            }
        }

        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particleCount; j++) {
           const p2 = particles[j];
           const ddx = p.x - p2.x;
           
           if (Math.abs(ddx) > 100) continue;
           
           const ddy = p.y - p2.y;
           if (Math.abs(ddy) > 100) continue;

           const ddistSq = ddx*ddx + ddy*ddy;
           
           if (ddistSq < 10000) {
              const ddist = Math.sqrt(ddistSq);
              ctx.strokeStyle = `rgba(255, 255, 255, ${Math.min(p.alpha, p2.alpha) * 0.1 * (1 - ddist/100)})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
           }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[2]" />;
};