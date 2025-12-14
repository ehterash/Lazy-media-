
import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
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

  return (
    <>
      {/* Main Cursor Dot */}
      <div 
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out will-change-transform"
        style={{ 
          transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      
      {/* Trailing Glow Ring - Slower Transition (duration-700) */}
      <div 
        className={`fixed top-0 left-0 w-12 h-12 border-2 border-purple-500 rounded-full pointer-events-none z-[9998] transition-all duration-700 ease-out will-change-transform ${isClicking ? 'scale-50 bg-purple-500/50' : 'scale-100'}`}
        style={{ 
          transform: `translate(${position.x - 24}px, ${position.y - 24}px) scale(${isPointer ? 1.5 : 1})`,
          opacity: isClicking ? 0.8 : 0.5,
          filter: 'blur(1px)'
        }}
      />
    </>
  );
};
