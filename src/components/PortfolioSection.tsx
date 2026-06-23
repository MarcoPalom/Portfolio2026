import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import CookingSection from './CookingSection';
import { PRODUCTS } from '../constants/portfolio';
import PortfolioTitle from './Portfolio/PortfolioTitle';
import PortfolioItem from './Portfolio/PortfolioItem';
import PortfolioCounter from './Portfolio/PortfolioCounter';
import './Portfolio/Portfolio.css';

interface PortfolioSectionProps {
  scrollProgress: number;
}

export default function PortfolioSection({ scrollProgress }: PortfolioSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bigTextRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Active project calculation based on scroll progress
  const activeIdx = scrollProgress > 0.5 ? Math.floor((scrollProgress - 0.5)) : 0;

  useEffect(() => {
    const productsEl = productRefs.current;
    const scrollContainer = scrollContainerRef.current;
    const titleEl = titleRef.current;
    const bigTextsEl = bigTextRefs.current;
    
    const isMobile = window.innerWidth < 768;
    const viewportHeight = window.innerHeight;

    // 1. Smoothly scroll the main list container vertically (120vh space multiplier)
    const spacingHeight = viewportHeight * 1.2;

    gsap.to(scrollContainer, {
      y: -scrollProgress * spacingHeight,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto'
    });

    // 2. Animate main "Portafolio 2026" header to stretch like a magazine cover in the background
    if (scrollProgress <= 1.0) {
      const p = scrollProgress; // 0 to 1
      gsap.to(titleEl, {
        scaleX: 1.0 + p * (isMobile ? 0.6 : 0.9), // stretch to cover viewport width
        scaleY: 1.0 + p * (isMobile ? 1.4 : 2.0), // stretch height massively
        opacity: 1.0 - p * (1.0 - 0.05), // fade out to a subtle background watermark
        y: 0, // stay centered in the background
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto'
      });

      // Fade out the main scroll subtitle
      const mainSubtitle = titleEl?.querySelector('.product-subtitle-main');
      if (mainSubtitle) {
        gsap.to(mainSubtitle, {
          opacity: Math.max(0, 1 - p * 2.5),
          y: p * 40,
          duration: 0.5,
          overwrite: 'auto'
        });
      }
    } else {
      // Lock title in full magazine editorial background state
      gsap.to(titleEl, {
        scaleX: isMobile ? 1.6 : 1.9,
        scaleY: isMobile ? 2.4 : 3.0,
        opacity: 0.05,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto'
      });

      const mainSubtitle = titleEl?.querySelector('.product-subtitle-main');
      if (mainSubtitle) {
        gsap.to(mainSubtitle, {
          opacity: 0,
          y: 40,
          duration: 0.5,
          overwrite: 'auto'
        });
      }
    }

    // 3. Interpolate elastic height stretch based on local Y progress
    productsEl.forEach((wrapper, idx) => {
      if (!wrapper) return;
      
      const img = wrapper.querySelector('.product-img');
      const txt = wrapper.querySelector('.product-text');

      // Local scroll offset relative to viewport center (-1.0 to 1.0)
      const localScroll = scrollProgress - (idx + 1);

      if (scrollProgress === 0.0) {
        // Hide during the initial intro screen to let the title be clean
        gsap.to(wrapper, { opacity: 0, pointerEvents: 'none', duration: 0.4, overwrite: 'auto' });
      } else {
        // Keep fully opaque to create the illusion of a continuous infinite waterfall!
        gsap.to(wrapper, { opacity: 1, pointerEvents: 'auto', duration: 0.4, overwrite: 'auto' });
      }

      const absScroll = Math.abs(localScroll);
      
      // Calculate vertical height stretch based on distance from viewport center
      // Maximum stretch occurs at absScroll = 0.5 (boundary transition)
      const stretchAmount = 0.24 * Math.sin(Math.min(1.0, absScroll) * Math.PI);
      const scaleY = 1.0 + stretchAmount;

      // Subtle vertical parallax scrolling relative to the container scroll
      const yOffset = localScroll * spacingHeight * 0.15;

      if (img) {
        gsap.to(img, {
          y: yOffset,
          scaleY,
          scaleX: 1.0,
          skewY: 0,
          opacity: 1, // Keep fully visible, no fading
          duration: 0.6,
          ease: 'power1.out',
          overwrite: 'auto'
        });
      }

      if (txt) {
        gsap.to(txt, {
          y: yOffset,
          scaleY,
          scaleX: 1.0,
          skewY: 0,
          opacity: 1, // Keep fully visible, no fading
          duration: 0.6,
          ease: 'power1.out',
          overwrite: 'auto'
        });
      }

      if (bigTextsEl[idx]) {
        const bigTextYOffset = localScroll * 120;
        gsap.to(bigTextsEl[idx], { 
          opacity: scrollProgress === 0 ? 0 : 0.04, 
          y: bigTextYOffset, 
          scaleY: 1.0 + stretchAmount * 0.5,
          duration: 0.6, 
          ease: 'power1.out',
          overwrite: 'auto' 
        });
      }
    });
  }, [scrollProgress]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full min-h-screen flex flex-col items-center justify-center relative select-none bg-transparent overflow-hidden"
    >
      {/* Background Glowing Orbs */}
      <div className="absolute top-[20%] left-[20%] w-[50%] h-[50%] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[45%] h-[45%] bg-brand-700/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Glowing highlight orb mapped to active index */}
      <div 
        className={`absolute w-[40%] h-[40%] rounded-full blur-[150px] pointer-events-none transition-all duration-1000 ease-in-out ${
          activeIdx === 0 ? 'top-[20%] left-[20%] bg-purple-500/10' :
          activeIdx === 1 ? 'top-[20%] right-[20%] bg-purple-500/10' :
          activeIdx === 2 ? 'bottom-[20%] left-[20%] bg-emerald-500/10' :
          activeIdx === 3 ? 'bottom-[20%] right-[20%] bg-purple-500/10' :
          activeIdx === 4 ? 'top-[20%] left-[20%] bg-orange-500/10' :
          'top-[20%] left-[20%] bg-transparent'
        }`} 
      />

      {/* Giant Cyberpunk Background Typography */}
      {PRODUCTS.map((product, idx) => (
        <div
          key={`bg-text-${product.id}`}
          ref={(el) => { bigTextRefs.current[idx] = el; }}
          className="absolute font-display text-[22vw] uppercase leading-none select-none pointer-events-none opacity-0 z-0 tracking-widest"
          style={{
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.05)',
            color: 'transparent',
            left: idx % 2 === 0 ? '8%' : 'auto',
            right: idx % 2 === 1 ? '8%' : 'auto',
            top: '30%',
          }}
        >
          {product.bigText}
        </div>
      ))}

      {/* Main Title Container */}
      <PortfolioTitle ref={titleRef} />

      {/* Vertical Continuous Scroll Container */}
      <div 
        ref={scrollContainerRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      >
        {PRODUCTS.map((product, idx) => (
          <PortfolioItem
            key={product.id}
            product={product}
            idx={idx}
            ref={(el) => { productRefs.current[idx] = el; }}
          />
        ))}

        {/* Cooking Section (Bonfire slide at the end) */}
        <div 
          className="absolute left-0 w-full h-full flex items-center justify-center pointer-events-none"
          style={{ top: `${(PRODUCTS.length + 1) * 120}vh` }}
        >
          <CookingSection scrollProgress={scrollProgress} />
        </div>
      </div>

      {/* Step indicator in corner (mechanical roulette style) */}
      <PortfolioCounter 
        scrollProgress={scrollProgress} 
        productsLength={PRODUCTS.length} 
      />
    </div>
  );
}
