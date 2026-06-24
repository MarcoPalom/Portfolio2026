import { useRef } from 'react';
import { ECOSYSTEM_STACK } from '../constants/ecosystem';
import StackBanner from './Stack/StackBanner';
import StackCard from './Stack/StackCard';
import './Stack/Stack.css';

export default function StackSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      id="stack-section-container"
      className="w-full h-full min-h-screen flex flex-col justify-center relative px-4 md:px-8 py-4 select-none bg-transparent text-white overflow-y-auto overscroll-contain lg:overflow-hidden"
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
