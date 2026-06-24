import { useRef } from 'react';
import { ECOSYSTEM_STACK } from '../constants/ecosystem';
import StackBanner from './Stack/StackBanner';
import StackCard from './Stack/StackCard';
import './Stack/Stack.css';

export default function StackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const currentY = e.touches[0].clientY;
    const diffY = currentY - startYRef.current;
    const scrollingDown = diffY < 0; // finger moved up, scrolling down
    
    const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 5;
    const isAtTop = container.scrollTop <= 5;
    
    if ((scrollingDown && !isAtBottom) || (!scrollingDown && !isAtTop)) {
      e.stopPropagation();
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    startYRef.current = e.clientY;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const currentY = e.clientY;
    const diffY = currentY - startYRef.current;
    const scrollingDown = diffY < 0; // finger/pointer moved up, scrolling down
    
    const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 5;
    const isAtTop = container.scrollTop <= 5;
    
    if (Math.abs(diffY) > 2) {
      if ((scrollingDown && !isAtBottom) || (!scrollingDown && !isAtTop)) {
        e.stopPropagation();
      }
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollingDown = e.deltaY > 0;
    
    const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 5;
    const isAtTop = container.scrollTop <= 5;
    
    if ((scrollingDown && !isAtBottom) || (!scrollingDown && !isAtTop)) {
      e.stopPropagation();
    }
  };

  return (
    <div 
      ref={containerRef}
      id="stack-section-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onWheel={handleWheel}
      className="w-full h-full min-h-screen flex flex-col justify-center relative px-4 md:px-8 py-4 select-none bg-transparent text-white overflow-y-auto touch-pan-y lg:overflow-hidden lg:touch-auto"
    >
      {/* Futuristic Grid Mural (4 columns, 3 rows on lg screens - perfectly balanced 12 slots) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3 gap-3 md:gap-4 w-full max-w-7xl mx-auto h-auto lg:h-[82vh] content-stretch">
        
        {/* Banner Block (Spans 2 columns on desktop) */}
        <StackBanner />

        {/* Dynamic blueprints grid blocks with brand-specific glows */}
        {ECOSYSTEM_STACK.map((item) => (
          <StackCard key={item.id} item={item} />
        ))}

      </div>
    </div>
  );
}
