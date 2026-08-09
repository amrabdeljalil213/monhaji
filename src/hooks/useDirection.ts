'use client';

import { useEffect, useState } from 'react';

export function useDirection() {
  const [direction, setDirection] = useState<'rtl' | 'ltr'>('rtl');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const htmlElement = document.documentElement;
    const currentDir = htmlElement.getAttribute('dir') as 'rtl' | 'ltr' || 'rtl';
    setDirection(currentDir);
  }, []);

  return { direction, mounted };
}
