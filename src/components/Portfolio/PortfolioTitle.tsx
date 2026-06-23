import { forwardRef } from 'react';

export const PortfolioTitle = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div 
      ref={ref} 
      className="flex flex-col items-center justify-center text-center z-0 pointer-events-none absolute"
      style={{ transformOrigin: 'center center' }}
    >
      <h1 
        className="font-display text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-[0.8] uppercase text-[#f5f5f7] tracking-tighter" 
        style={{ 
          transform: 'scaleY(1.4)', 
          transformOrigin: 'center center',
          letterSpacing: '-0.04em'
        }}
      >
        Portafolio 2026
      </h1>
      <p className="text-sm sm:text-base lg:text-lg font-light text-white/30 uppercase tracking-widest mt-6 md:mt-8 font-sans product-subtitle-main flex items-center justify-center">
        <span>Desliza para explorar</span>
        <span className="w-2.5 h-2.5 border border-white/35 inline-block mx-4" style={{ borderWidth: '1.5px' }} />
        <span>Diseños</span>
        <span className="w-2.5 h-2.5 border border-white/35 inline-block mx-4" style={{ borderWidth: '1.5px' }} />
        <span>Desarrollos</span>
      </p>
    </div>
  );
});

PortfolioTitle.displayName = 'PortfolioTitle';
export default PortfolioTitle;
