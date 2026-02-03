'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function Counter({ from, to, duration = 2, suffix = '', className = '' }: CounterProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setCount(Math.floor(from + (to - from) * progress));
      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [from, to, duration]);

  return <span className={className}>{count}{suffix}</span>;
}
