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
      style={{ top: `${(idx + 1) * 120}%` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 lg:gap-16 items-center w-full max-w-6xl mx-auto px-6 pointer-events-auto">
        
        {/* Staggered image column */}
        <div 
          className={`md:col-span-7 ${idx % 2 === 1 ? 'md:order-2' : ''} w-full flex justify-center product-img`} 
          style={{ transformOrigin: 'center center' }}
        >
          <div className="w-full h-[170px] sm:h-[240px] md:h-[350px] lg:h-[380px] max-h-[42dvh] md:max-h-[60dvh] overflow-hidden rounded-md border border-white/10">
            <img 
              src={product.image} 
              alt={product.title} 
              loading="lazy"
              className="w-full h-full object-cover object-center pointer-events-none" 
            />
          </div>
        </div>

        {/* Text info column */}
        <div 
          className={`md:col-span-5 ${idx % 2 === 1 ? 'md:order-1' : ''} flex flex-col gap-1.5 md:gap-3 text-left product-text px-2 md:px-0`} 
          style={{ transformOrigin: 'left center' }}
        >
          <span 
            className={`w-2.5 h-2.5 md:w-3.5 md:h-3.5 border border-current block mb-0.5 opacity-85 ${theme.accentText}`} 
            style={{ borderWidth: '1.5px' }} 
          />
          <h3 
            className="text-2xl sm:text-4xl lg:text-5xl font-display uppercase text-white leading-[0.9] mt-0.5 mb-[0.2em]"
            style={{ 
              // scaleY grows the glyphs downward only; mb-[0.2em] reserves that space
              transformOrigin: 'left top',
              letterSpacing: '-0.02em',
              transform: 'scaleY(1.2)'
            }}
          >
            {product.title}
          </h3>
          <span className={`text-xs md:text-sm font-sans font-medium mt-1 ${theme.accentText}`}>
            {product.subtitle}
          </span>
          
          <p className="text-xs sm:text-sm text-white/75 font-sans max-w-[60ch] mt-1 md:mt-2 leading-relaxed">
            {product.description}
          </p>
          
          <div className="flex flex-wrap gap-1 mt-2 md:mt-3">
            {product.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[9px] md:text-[10px] font-sans font-medium text-white/40 bg-white/5 px-2 py-0.5 md:px-2.5 md:py-1 rounded border border-white/5 select-none"
              >
                {tag}
              </span>
            ))}
          </div>

          {product.url && (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`self-start mt-2 md:mt-3 text-xs md:text-sm font-sans font-medium underline underline-offset-4 decoration-1 hover:decoration-2 ${theme.accentText}`}
            >
              Visit site ↗
            </a>
          )}
        </div>

      </div>
    </div>
  );
});

PortfolioItem.displayName = 'PortfolioItem';
export default PortfolioItem;
