'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      setIsPointer(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.className?.includes('cursor-pointer')
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Cursor glow dot */}
      <motion.div
        className="pointer-events-none fixed z-50 w-3 h-3 bg-primary rounded-full mix-blend-screen"
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6 }}
        transition={{ type: 'spring', stiffness: 800, damping: 30, mass: 0.2 }}
      />

      {/* Larger cursor ring */}
      <motion.div
        className="pointer-events-none fixed z-50 w-8 h-8 border border-primary/40 rounded-full mix-blend-screen"
        animate={{ 
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16,
          scale: isPointer ? 1.3 : 1
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 25, mass: 0.4 }}
      />
    </>
  );
}
