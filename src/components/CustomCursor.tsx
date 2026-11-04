import { useEffect, useRef, useState } from 'react';

const isTouchDevice = typeof window !== 'undefined' && (
  'ontouchstart' in window || window.matchMedia('(hover: none)').matches
);

/**
 * Brand cursor: a solid square inside an outline square.
 *
 * Both squares sit inside one wrapper whose position is written straight to the DOM on every
 * mousemove, with no transition, so the cursor never trails behind the pointer. Only the hover
 * scale is animated, on the inner elements, so it can't delay the position.
 */
export default function CustomCursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      setHovered(!!target.closest('a, button, [role="button"], label, select, summary'));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    // Hide the native cursor only while this one is mounted
    const style = document.createElement('style');
    style.textContent = '* { cursor: none !important; }';
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      style.remove();
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={wrapperRef}
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Inner solid white square */}
      <div
        className="absolute w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-[scale] duration-150 ease-out"
        style={{ scale: hovered ? '1.4' : '1' }}
      />
      {/* Outer outline white square (Brand signature) */}
      <div
        className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 border shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-[scale,border-color] duration-200 ease-out"
        style={{
          scale: hovered ? '1.6' : '1',
          borderColor: hovered ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.6)',
        }}
      />
    </div>
  );
}
