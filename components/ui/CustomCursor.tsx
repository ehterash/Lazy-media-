import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Hidden by default

  useEffect(() => {
    // Detect touch device - simplistic check but effective for initial load
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return; // Don't run cursor logic on mobile

    setIsVisible(true);

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        body { cursor: none; } /* Only hide default cursor if custom one is active */
        @media (pointer: coarse) {
            body { cursor: auto; }
        }
      `}</style>
      
      {/* Main Cursor Dot */}
      <div 
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out will-change-transform hidden md:block"
        style={{ 
          transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      
      {/* Trailing Ring */}
      <div 
        className={`fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9998] transition-all duration-500 ease-out will-change-transform border border-white/20 hidden md:block ${isClicking ? 'scale-50 opacity-80' : 'scale-100 opacity-100'}`}
        style={{ 
          // Center the ring
          left: position.x - 24,
          top: position.y - 24,
          transform: `scale(${isPointer ? 1.5 : 1})`,
          background: 'rgba(255, 255, 255, 0.03)',
        }}
      />
    </>
  );
};