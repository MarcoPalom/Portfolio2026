import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PortfolioCounterProps {
  scrollProgress: number;
  productsLength: number;
}

export default function PortfolioCounter({ scrollProgress, productsLength }: PortfolioCounterProps) {
  const counterRef = useRef<HTMLDivElement>(null);
  const digitStripRef = useRef<HTMLDivElement>(null);
  const numberWrapperRef = useRef<HTMLDivElement>(null);

  // Derived step for display counter shifting at midpoint of transitions (up to productsLength + 1)
  const displayStep = Math.min(
    productsLength + 1,
    scrollProgress <= 1.5 ? 1 : Math.floor(scrollProgress - 0.5) + 1
  );

  useEffect(() => {
    // 1. Animate overall counter container visibility
    const showCounter = scrollProgress >= 0.3 && scrollProgress <= productsLength + 1.1;
    gsap.to(counterRef.current, {
      opacity: showCounter ? 1 : 0,
      y: showCounter ? 0 : 20, // subtle slide up/down entrance
      pointerEvents: showCounter ? 'auto' : 'none',
      duration: 0.4,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  }, [scrollProgress, displayStep, productsLength]);

  useEffect(() => {
    // 2. Animate the rolling digit strip (old mechanical odometer style)
    if (digitStripRef.current) {
      const targetPercent = -((Math.min(productsLength, displayStep) - 1) / productsLength) * 100;
      gsap.to(digitStripRef.current, {
        yPercent: targetPercent,
        duration: 0.7,
        ease: 'back.out(1.6)', // tactile overshoot bounce
        overwrite: 'auto'
      });
    }
  }, [displayStep, productsLength]);

  useEffect(() => {
    // 3. Morph transition (/ turns to X, collapses to crossed logs, ignites fire)
    const isCooking = displayStep === productsLength + 1;
    const el = numberWrapperRef.current;
    if (!el) return;

    const leftParts = el.querySelectorAll('.num-left, .num-digit');
    const rightPart = el.querySelector('.num-right');
    const log2 = el.querySelector('.log-line-2');
    const logsGroup = el.querySelector('.logs-group');
    const flames = el.querySelectorAll('.log-flame');

    const tl = gsap.timeline({ overwrite: 'auto' });

    if (isCooking) {
      // Phase 1: Collapse the numbers into the center (0.4s)
      tl.to(leftParts, {
        x: 16,
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in'
      }, 0);

      tl.to(rightPart, {
        x: -24,
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in'
      }, 0);

      // Phase 2: Grow the opposite log diagonal "\" from the center crossing point
      tl.fromTo(log2, 
        { attr: { x1: 10, y1: 10, x2: 10, y2: 10 }, opacity: 0 },
        {
          attr: { x1: 4, y1: 3, x2: 16, y2: 17 },
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out'
        },
        0.25
      );

      // Phase 3: Bend/Squish the logs group downward to look like logs on ground
      tl.to(logsGroup, {
        scaleY: 0.4,
        scaleX: 1.3,
        duration: 0.4,
        ease: 'back.out(1.5)'
      });

      // Phase 4: Light the fire (sprout flames from logs base)
      tl.fromTo(flames,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.45,
          ease: 'back.out(1.8)',
          stagger: 0.1
        },
        '-=0.1' // overlap slightly with log collapse
      );
    } else {
      // Reverse animation: Extinguish fire, restore logs, remove diagonal slash, bring back digits
      tl.to(flames, {
        scale: 0,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in'
      }, 0);

      tl.to(logsGroup, {
        scaleY: 1.0,
        scaleX: 1.0,
        duration: 0.3,
        ease: 'power2.inOut'
      }, 0.15);

      tl.to(log2, {
        attr: { x1: 10, y1: 10, x2: 10, y2: 10 },
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      }, 0.3);

      tl.to(leftParts, {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(1.4)'
      }, 0.45);

      tl.to(rightPart, {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(1.4)'
      }, 0.45);
    }
  }, [displayStep, productsLength]);

  return (
    <div 
      ref={counterRef}
      className="absolute bottom-8 right-8 text-white/25 font-display text-4xl select-none z-20 flex items-center justify-center opacity-0 pointer-events-none w-28 h-10"
      style={{ lineHeight: '1' }}
    >
      <div ref={numberWrapperRef} className="flex items-center justify-center w-full h-full">
        <span className="num-left text-white/60">0</span>
        <div className="num-digit relative h-[1em] overflow-hidden w-[0.62em] flex flex-col justify-start">
          <div 
            ref={digitStripRef} 
            className="absolute top-0 left-0 flex flex-col items-center justify-start"
            style={{ width: '100%' }}
          >
            {Array.from({ length: productsLength }, (_, idx) => (
              <span key={idx + 1} className="text-white/60 h-[1em] flex items-center justify-center">
                {idx + 1}
              </span>
            ))}
          </div>
        </div>
        
        {/* Morphing Divider SVG (The / that morphs into a bonfire) */}
        <div className="num-divider-svg relative w-[0.8em] h-[1.1em] mx-1">
          <svg viewBox="0 0 20 20" className="w-full h-full stroke-current fill-none" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round">
            {/* Crossed Logs */}
            <g className="logs-group" stroke="rgba(255, 255, 255, 0.65)" style={{ transformOrigin: '10px 17px' }}>
              <line x1="16" y1="3" x2="4" y2="17" className="log-line-1" />
              <line x1="4" y1="3" x2="16" y2="17" className="log-line-2" style={{ opacity: 0 }} />
            </g>
            {/* Flame shapes (Ignite color shifting) */}
            <g className="animate-[counter-icon-shift_12s_linear_infinite]" style={{ transformOrigin: '10px 14px' }}>
              <path d="M6 14 Q10 2 10 2 Q10 2 14 14" className="log-flame" style={{ opacity: 0 }} />
              <path d="M8 14 Q10 7 10 7 Q10 7 12 14" className="log-flame" style={{ opacity: 0 }} />
            </g>
          </svg>
        </div>

        <span className="num-right">0{productsLength}</span>
      </div>
    </div>
  );
}
