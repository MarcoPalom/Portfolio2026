import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { PRODUCTS } from '../constants/portfolio';

gsap.registerPlugin(Observer);

export function usePageScroll(loadingComplete: boolean) {
  const [bgIndex, setBgIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [portfolioScroll, setPortfolioScroll] = useState(0); // float from 0.0 to products.length

  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const activeSectionRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const portfolioScrollRef = useRef(0);
  const boundaryHitTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!loadingComplete) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const gotoSection = (index: number) => {
      if (index < 0 || index >= 5) return;

      isAnimatingRef.current = true;

      // Handle step resetting depending on entry direction
      if (index === 1) {
        boundaryHitTimeRef.current = Date.now();
        if (activeSectionRef.current < 1) {
          portfolioScrollRef.current = 0.0;
          setPortfolioScroll(0.0);
        } else if (activeSectionRef.current > 1) {
          portfolioScrollRef.current = PRODUCTS.length + 1;
          setPortfolioScroll(PRODUCTS.length + 1);
        }
      }

      activeSectionRef.current = index;
      setActiveSection(index);
      setBgIndex(index);

      // Coordinates for each section (zigzag grid structure)
      let xTarget = '0vw';
      let yTarget = '0vh';

      if (index === 1) {
        xTarget = '-100vw';
        yTarget = '-100vh';
      } else if (index === 2) {
        xTarget = '0vw';
        yTarget = '-200vh';
      } else if (index === 3) {
        xTarget = '-100vw';
        yTarget = '-300vh';
      } else if (index === 4) {
        xTarget = '0vw';
        yTarget = '-400vh';
      }

      gsap.to(wrapper, {
        x: xTarget,
        y: yTarget,
        duration: 1.2,
        ease: 'power2.inOut',
        overwrite: 'auto',
        onComplete: () => {
          setTimeout(() => {
            isAnimatingRef.current = false;
          }, 800);
        }
      });
    };

    // Observer setup for wheel & touch swipes (with 50px tolerance to prevent accidental triggers)
    const obs = Observer.create({
      target: window,
      type: 'wheel,touch',
      wheelSpeed: 1.0,
      tolerance: 50,
      preventDefault: true,
      onUp: () => {
        if (!isAnimatingRef.current) {
          if (activeSectionRef.current === 1) {
            if (portfolioScrollRef.current > 0.0) {
              const nextScroll = Math.max(0.0, portfolioScrollRef.current - 0.15);
              portfolioScrollRef.current = nextScroll;
              setPortfolioScroll(nextScroll);
              if (nextScroll === 0.0) {
                boundaryHitTimeRef.current = Date.now();
              }
              return;
            } else {
              // Lock the boundary transition for 700ms to absorb momentum
              if (Date.now() - boundaryHitTimeRef.current < 700) {
                return;
              }
            }
          }
          gotoSection(activeSectionRef.current - 1);
        }
      },
      onDown: () => {
        if (!isAnimatingRef.current) {
          if (activeSectionRef.current === 1) {
            const limit = PRODUCTS.length + 1;
            if (portfolioScrollRef.current < limit) {
              const nextScroll = Math.min(limit, portfolioScrollRef.current + 0.15);
              portfolioScrollRef.current = nextScroll;
              setPortfolioScroll(nextScroll);
              if (nextScroll === limit) {
                boundaryHitTimeRef.current = Date.now();
              }
              return;
            } else {
              // Lock the boundary transition for 700ms to absorb momentum
              if (Date.now() - boundaryHitTimeRef.current < 700) {
                return;
              }
            }
          }
          gotoSection(activeSectionRef.current + 1);
        }
      }
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimatingRef.current) return;
      const limit = PRODUCTS.length + 1;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        if (activeSectionRef.current === 1) {
          if (portfolioScrollRef.current < limit) {
            const nextScroll = Math.min(limit, portfolioScrollRef.current + 0.5);
            portfolioScrollRef.current = nextScroll;
            setPortfolioScroll(nextScroll);
            if (nextScroll === limit) {
              boundaryHitTimeRef.current = Date.now();
            }
            return;
          } else {
            if (Date.now() - boundaryHitTimeRef.current < 700) {
              return;
            }
          }
        }
        gotoSection(activeSectionRef.current + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (activeSectionRef.current === 1) {
          if (portfolioScrollRef.current > 0.0) {
            const nextScroll = Math.max(0.0, portfolioScrollRef.current - 0.5);
            portfolioScrollRef.current = nextScroll;
            setPortfolioScroll(nextScroll);
            if (nextScroll === 0.0) {
              boundaryHitTimeRef.current = Date.now();
            }
            return;
          } else {
            if (Date.now() - boundaryHitTimeRef.current < 700) {
              return;
            }
          }
        }
        gotoSection(activeSectionRef.current - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const handleResize = () => {
      const index = activeSectionRef.current;
      let xTarget = '0vw';
      let yTarget = '0vh';

      if (index === 1) {
        xTarget = '-100vw';
        yTarget = '-100vh';
      } else if (index === 2) {
        xTarget = '0vw';
        yTarget = '-200vh';
      } else if (index === 3) {
        xTarget = '-100vw';
        yTarget = '-300vh';
      } else if (index === 4) {
        xTarget = '0vw';
        yTarget = '-400vh';
      }
      gsap.set(wrapper, { x: xTarget, y: yTarget });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      obs.kill();
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [loadingComplete]);

  return {
    activeSection,
    portfolioScroll,
    bgIndex,
    setBgIndex,
    containerRef,
    wrapperRef,
  };
}
