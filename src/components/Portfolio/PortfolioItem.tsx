import { forwardRef } from 'react';
import type { Product } from '../../constants/portfolio';
import { COLOR_THEMES } from '../../constants/portfolio';

interface PortfolioItemProps {
  product: Product;
  idx: number;
}

export const PortfolioItem = forwardRef<HTMLDivElement, PortfolioItemProps>(({ product, idx }, ref) => {
  const theme = COLOR_THEMES[product.color];

  return (
    <div
      ref={ref}
      className="absolute left-0 w-full h-full flex items-center justify-center pointer-events-none"
      style={{ top: `${(idx + 1) * 120}vh` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center w-full max-w-6xl mx-auto px-6 pointer-events-auto">
        
        {/* Staggered Image column with rounded glass frame */}
        <div 
          className={`md:col-span-7 ${idx % 2 === 1 ? 'md:order-2' : ''} w-full flex justify-center product-img`} 
          style={{ transformOrigin: 'center center' }}
        >
          <div 
            className={`p-3 bg-white/5 lg:backdrop-blur-md border border-white/10 rounded-[2rem] ${theme.glowShadow} w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[380px] overflow-hidden group hover:border-white/20 transition-all duration-500 ease-out`}
          >
            <div className="w-full h-full overflow-hidden rounded-[1.5rem]">
              <img 
                src={product.image} 
                alt={product.title} 
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out pointer-events-none" 
              />
            </div>
          </div>
        </div>

        {/* Text info column */}
        <div 
          className={`md:col-span-5 ${idx % 2 === 1 ? 'md:order-1' : ''} flex flex-col gap-3 text-left product-text px-4 md:px-0`} 
          style={{ transformOrigin: 'left center' }}
        >
          <span 
            className={`w-3.5 h-3.5 border border-current block mb-0.5 opacity-85 ${theme.accentText}`} 
            style={{ borderWidth: '1.5px' }} 
          />
          <span className={`text-xs font-sans font-bold tracking-widest uppercase ${theme.accentText}`}>
            {product.subtitle}
          </span>
          
          <h3 
            className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white leading-[0.9] mt-1"
            style={{ 
              transformOrigin: 'left center',
              letterSpacing: '-0.02em',
              transform: 'scaleY(1.2)'
            }}
          >
            {product.title}
          </h3>
          
          <p className="text-xs sm:text-sm text-white/85 font-mono uppercase tracking-wider mt-3 leading-relaxed">
            {product.description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 mt-3">
            {product.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] font-sans font-medium text-white/40 bg-white/5 px-2.5 py-1 rounded border border-white/5 select-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
});

PortfolioItem.displayName = 'PortfolioItem';
export default PortfolioItem;
