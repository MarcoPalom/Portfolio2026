import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ECOSYSTEM_STACK } from '../constants/ecosystem';
import StackBanner from './Stack/StackBanner';
import StackCard from './Stack/StackCard';
import './Stack/Stack.css';

interface StackSectionProps {
  scrollProgress: number; // managed dynamically by usePageScroll
}

export default function StackSection({ scrollProgress }: StackSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  useEffect(() => {
    if (!isMobile || !innerRef.current) return;

    // Calculate actual scrollable distance: content height minus one viewport
    const contentHeight = innerRef.current.scrollHeight;
    const viewportHeight = window.innerHeight;
    const maxTranslate = Math.max(0, contentHeight - viewportHeight);

    // Each step scrolls 80% of window.innerHeight to match usePageScroll.ts step calculation
    const stepSize = viewportHeight * 0.8;
    const targetY = Math.min(scrollProgress * stepSize, maxTranslate);

    gsap.to(innerRef.current, {
      y: -targetY,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  }, [scrollProgress, isMobile]);

  return (
    <div
      ref={containerRef}
      id="stack-section-container"
      className="w-full h-full relative px-4 md:px-8 py-4 select-none bg-transparent text-white overflow-hidden"
    >
      {/* On desktop: fits in one grid. On mobile: tall column paged by scrollProgress. Adding padding bottom on mobile. */}
      <div
        ref={innerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3 gap-3 md:gap-4 w-full max-w-7xl mx-auto h-auto lg:h-[82vh] content-stretch pb-[20vh] lg:pb-0"
      >
        {/* Banner Block (Spans 2 columns on desktop) */}
        <StackBanner />

        {/* Dynamic blueprints grid blocks */}
        {ECOSYSTEM_STACK.map((item) => (
          <StackCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
