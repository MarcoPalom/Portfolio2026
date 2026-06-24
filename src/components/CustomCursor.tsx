import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  // Skip entirely on touch/mobile devices — no cursor needed
  const isTouchDevice = typeof window !== 'undefined' && (
    'ontouchstart' in window || window.matchMedia('(hover: none)').matches
  );

  useEffect(() => {
    if (isTouchDevice) return;
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setHovered(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    // Inject styles to hide default cursor globally
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      document.head.removeChild(style);
    };
  }, [hidden]);

  if (isTouchDevice || hidden) return null;

  return (
    <>
      {/* Inner solid white square */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_2px_rgba(0,0,0,0.8)]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${hovered ? 1.4 : 1})`,
        }}
      />
      {/* Outer outline white square (Brand signature) */}
      <div
        className="fixed top-0 left-0 w-5 h-5 border border-white pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out shadow-[0_0_2px_rgba(0,0,0,0.8)]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${hovered ? 1.6 : 1})`,
          borderColor: hovered ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.6)',
        }}
      />
    </>
  );
}
