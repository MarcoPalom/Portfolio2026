import { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { PRODUCTS } from '../constants/portfolio';

gsap.registerPlugin(Observer);

const BOUNDARY_COOLDOWN = 250; // ms cooldown to trigger next section transition

/** Dynamically compute how many scroll steps the stack section needs based on actual content height */
function getStackMaxSteps(): number {
  const container = document.getElementById('stack-section-container');
  if (!container) return 0;
  const grid = container.querySelector('.grid') as HTMLElement;
  if (!grid) return 0;
  const contentH = grid.scrollHeight;
  // Use window.innerHeight for the real visible area (mobile browser chrome makes clientHeight unreliable)
  const visibleH = window.innerHeight;
  if (visibleH <= 0) return 0;
  // Each step moves ~80% of viewport so the user sees overlap for context
  const stepSize = visibleH * 0.8;
  return Math.ceil((contentH - visibleH) / stepSize);
}

export function usePageScroll(loadingComplete: boolean) {
  const [bgIndex, setBgIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [portfolioScroll, setPortfolioScroll] = useState(0); // float from 0.0 to products.length
  const [stackScroll, setStackScroll] = useState(0); // float from 0.0 to 3.0 (4 mobile pages)
  const [aboutScroll, setAboutScroll] = useState(0); // float from 0.0 to 4.0 (4 background scenes)
  const [contactScroll, setContactScroll] = useState(0); // float from 0.0 to 1.0 (footer reveal)

  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const activeSectionRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const portfolioScrollRef = useRef(0);
  const aboutScrollRef = useRef(0);
  const contactScrollRef = useRef(0);
  const stackScrollRef = useRef(0);
  const boundaryHitTimeRef = useRef<number>(0);

  const gotoSection = useCallback((index: number) => {
    if (index < 0 || index >= 5) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

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

    if (index === 2) {
      boundaryHitTimeRef.current = Date.now();
      if (activeSectionRef.current < 2) {
        stackScrollRef.current = 0.0;
        setStackScroll(0.0);
      } else if (activeSectionRef.current > 2) {
        const maxSteps = getStackMaxSteps();
        stackScrollRef.current = maxSteps;
        setStackScroll(maxSteps);
      }
    }

    if (index === 3) {
      boundaryHitTimeRef.current = Date.now();
      if (activeSectionRef.current < 3) {
        aboutScrollRef.current = 0.0;
        setAboutScroll(0.0);
      } else if (activeSectionRef.current > 3) {
        aboutScrollRef.current = 5.0;
        setAboutScroll(5.0);
      }
    }

    if (index === 4) {
      boundaryHitTimeRef.current = Date.now();
      contactScrollRef.current = 0.0;
      setContactScroll(0.0);
    }

    activeSectionRef.current = index;
    setActiveSection(index);
    setBgIndex(index);

    // Coordinates for each section (zigzag grid structure)
    let xTarget = '0%';
    let yTarget = '0%';

    if (index === 1) {
      xTarget = '-100%';
      yTarget = '-100%';
    } else if (index === 2) {
      xTarget = '0%';
      yTarget = '-200%';
    } else if (index === 3) {
      xTarget = '-100%';
      yTarget = '-300%';
    } else if (index === 4) {
      xTarget = '0%';
      yTarget = '-400%';
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
        }, 150);
      }
    });
  }, []);

  useEffect(() => {
    if (!loadingComplete) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    /**
     * Moves the portfolio exactly one project in `dir` (+1 / -1) and locks input while
     * PortfolioSection tweens to it, so a project never rests halfway between two slots.
     * Returns false when already at the edge, letting the caller change section.
     */
    const stepPortfolio = (dir: 1 | -1): boolean => {
      const limit = PRODUCTS.length + 1;
      const current = Math.round(portfolioScrollRef.current);
      const next = Math.max(0, Math.min(limit, current + dir));
      if (next === current) return false;

      isAnimatingRef.current = true;
      portfolioScrollRef.current = next;
      setPortfolioScroll(next);
      setTimeout(() => {
        if (next === 0 || next === limit) {
          boundaryHitTimeRef.current = Date.now();
        }
        isAnimatingRef.current = false;
      }, 850);
      return true;
    };

    // Observer setup for wheel & touch swipes (with 20px tolerance to prevent accidental triggers)
    const obs = Observer.create({
      target: window,
      type: 'wheel,touch',
      wheelSpeed: -1.0,
      tolerance: 20,
      preventDefault: false,
      onUp: () => {
        if (!isAnimatingRef.current) {
          if (activeSectionRef.current === 1) {
            if (stepPortfolio(1)) return;
            if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) return;
          }
          if (activeSectionRef.current === 2) {
            const isMobileOrTablet = window.innerWidth < 1024;
            const maxSteps = getStackMaxSteps();
            if (isMobileOrTablet && maxSteps > 0 && stackScrollRef.current < maxSteps) {
              isAnimatingRef.current = true;
              const nextScroll = Math.min(maxSteps, Math.round(stackScrollRef.current) + 1.0);
              const tempObj = { value: stackScrollRef.current };

              gsap.to(tempObj, {
                value: nextScroll,
                duration: 0.8,
                ease: 'power2.out',
                onUpdate: () => {
                  stackScrollRef.current = tempObj.value;
                  setStackScroll(tempObj.value);
                },
                onComplete: () => {
                  if (nextScroll >= maxSteps) {
                    boundaryHitTimeRef.current = Date.now();
                  }
                  setTimeout(() => {
                    isAnimatingRef.current = false;
                  }, 150);
                }
              });
              return;
            } else {
              if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) {
                return;
              }
            }
          }
          if (activeSectionRef.current === 3) {
            if (aboutScrollRef.current < 5.0) {
              isAnimatingRef.current = true;
              const nextScroll = Math.min(5.0, Math.round(aboutScrollRef.current) + 1.0);
              const tempObj = { value: aboutScrollRef.current };

              gsap.to(tempObj, {
                value: nextScroll,
                duration: 0.8,
                ease: 'power2.out',
                onUpdate: () => {
                  aboutScrollRef.current = tempObj.value;
                  setAboutScroll(tempObj.value);
                },
                onComplete: () => {
                  if (nextScroll === 5.0) {
                    boundaryHitTimeRef.current = Date.now();
                  }
                  setTimeout(() => {
                    isAnimatingRef.current = false;
                  }, 150);
                }
              });
              return;
            } else {
              if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) {
                return;
              }
            }
          }
          if (activeSectionRef.current === 4) {
            if (contactScrollRef.current < 1.0) {
              isAnimatingRef.current = true;
              const tempObj = { value: contactScrollRef.current };
              gsap.to(tempObj, {
                value: 1.0,
                duration: 0.8,
                ease: 'power2.out',
                onUpdate: () => {
                  contactScrollRef.current = tempObj.value;
                  setContactScroll(tempObj.value);
                },
                onComplete: () => {
                  boundaryHitTimeRef.current = Date.now();
                  setTimeout(() => {
                    isAnimatingRef.current = false;
                  }, 150);
                }
              });
              return;
            }
            // Already at max, do nothing (last section)
            return;
          }
          gotoSection(activeSectionRef.current + 1);
        }
      },
      onDown: () => {
        if (!isAnimatingRef.current) {
          if (activeSectionRef.current === 1) {
            if (stepPortfolio(-1)) return;
            if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) return;
          }
          if (activeSectionRef.current === 2) {
            const isMobileOrTablet = window.innerWidth < 1024;
            if (isMobileOrTablet && stackScrollRef.current > 0.0) {
              isAnimatingRef.current = true;
              const nextScroll = Math.max(0.0, Math.round(stackScrollRef.current) - 1.0);
              const tempObj = { value: stackScrollRef.current };

              gsap.to(tempObj, {
                value: nextScroll,
                duration: 0.8,
                ease: 'power2.out',
                onUpdate: () => {
                  stackScrollRef.current = tempObj.value;
                  setStackScroll(tempObj.value);
                },
                onComplete: () => {
                  if (nextScroll === 0.0) {
                    boundaryHitTimeRef.current = Date.now();
                  }
                  setTimeout(() => {
                    isAnimatingRef.current = false;
                  }, 150);
                }
              });
              return;
            } else {
              if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) {
                return;
              }
            }
          }
          if (activeSectionRef.current === 3) {
            if (aboutScrollRef.current > 0.0) {
              isAnimatingRef.current = true;
              const nextScroll = Math.max(0.0, Math.round(aboutScrollRef.current) - 1.0);
              const tempObj = { value: aboutScrollRef.current };
              
              gsap.to(tempObj, {
                value: nextScroll,
                duration: 0.8,
                ease: 'power2.out',
                onUpdate: () => {
                  aboutScrollRef.current = tempObj.value;
                  setAboutScroll(tempObj.value);
                },
                onComplete: () => {
                  if (nextScroll === 0.0) {
                    boundaryHitTimeRef.current = Date.now();
                  }
                  setTimeout(() => {
                    isAnimatingRef.current = false;
                  }, 150);
                }
              });
              return;
            } else {
              if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) {
                return;
              }
            }
          }
          if (activeSectionRef.current === 4) {
            if (contactScrollRef.current > 0.0) {
              isAnimatingRef.current = true;
              const tempObj = { value: contactScrollRef.current };
              gsap.to(tempObj, {
                value: 0.0,
                duration: 0.8,
                ease: 'power2.out',
                onUpdate: () => {
                  contactScrollRef.current = tempObj.value;
                  setContactScroll(tempObj.value);
                },
                onComplete: () => {
                  boundaryHitTimeRef.current = Date.now();
                  setTimeout(() => {
                    isAnimatingRef.current = false;
                  }, 150);
                }
              });
              return;
            } else {
              if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) {
                return;
              }
            }
          }
          gotoSection(activeSectionRef.current - 1);
        }
      }
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimatingRef.current) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        if (activeSectionRef.current === 1) {
          if (stepPortfolio(1)) return;
          if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) return;
        }
        if (activeSectionRef.current === 3) {
          if (aboutScrollRef.current < 5.0) {
            isAnimatingRef.current = true;
            const nextScroll = Math.min(5.0, Math.round(aboutScrollRef.current) + 1.0);
            const tempObj = { value: aboutScrollRef.current };

            gsap.to(tempObj, {
              value: nextScroll,
              duration: 0.8,
              ease: 'power2.out',
              onUpdate: () => {
                aboutScrollRef.current = tempObj.value;
                setAboutScroll(tempObj.value);
              },
              onComplete: () => {
                if (nextScroll === 5.0) {
                  boundaryHitTimeRef.current = Date.now();
                }
                setTimeout(() => {
                  isAnimatingRef.current = false;
                }, 150);
              }
            });
            return;
          } else {
            if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) {
              return;
            }
          }
        }
        if (activeSectionRef.current === 4) {
          if (contactScrollRef.current < 1.0) {
            isAnimatingRef.current = true;
            const tempObj = { value: contactScrollRef.current };
            gsap.to(tempObj, {
              value: 1.0,
              duration: 0.8,
              ease: 'power2.out',
              onUpdate: () => {
                contactScrollRef.current = tempObj.value;
                setContactScroll(tempObj.value);
              },
              onComplete: () => {
                boundaryHitTimeRef.current = Date.now();
                setTimeout(() => {
                  isAnimatingRef.current = false;
                }, 150);
              }
            });
            return;
          }
          return;
        }
        gotoSection(activeSectionRef.current + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (activeSectionRef.current === 1) {
          if (stepPortfolio(-1)) return;
          if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) return;
        }
        if (activeSectionRef.current === 3) {
          if (aboutScrollRef.current > 0.0) {
            isAnimatingRef.current = true;
            const nextScroll = Math.max(0.0, Math.round(aboutScrollRef.current) - 1.0);
            const tempObj = { value: aboutScrollRef.current };

            gsap.to(tempObj, {
              value: nextScroll,
              duration: 0.8,
              ease: 'power2.out',
              onUpdate: () => {
                aboutScrollRef.current = tempObj.value;
                setAboutScroll(tempObj.value);
              },
              onComplete: () => {
                if (nextScroll === 0.0) {
                  boundaryHitTimeRef.current = Date.now();
                }
                setTimeout(() => {
                  isAnimatingRef.current = false;
                }, 150);
              }
            });
            return;
          } else {
            if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) {
              return;
            }
          }
        }
        if (activeSectionRef.current === 4) {
          if (contactScrollRef.current > 0.0) {
            isAnimatingRef.current = true;
            const tempObj = { value: contactScrollRef.current };
            gsap.to(tempObj, {
              value: 0.0,
              duration: 0.8,
              ease: 'power2.out',
              onUpdate: () => {
                contactScrollRef.current = tempObj.value;
                setContactScroll(tempObj.value);
              },
              onComplete: () => {
                boundaryHitTimeRef.current = Date.now();
                setTimeout(() => {
                  isAnimatingRef.current = false;
                }, 150);
              }
            });
            return;
          } else {
            if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) {
              return;
            }
          }
        }
        gotoSection(activeSectionRef.current - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const handlePreventDefault = (e: TouchEvent | WheelEvent) => {
      if (e.cancelable) {
        e.preventDefault();
      }
    };
    window.addEventListener('wheel', handlePreventDefault, { passive: false });
    window.addEventListener('touchmove', handlePreventDefault, { passive: false });

    const handleResize = () => {
      const index = activeSectionRef.current;
      let xTarget = '0%';
      let yTarget = '0%';

      if (index === 1) {
        xTarget = '-100%';
        yTarget = '-100%';
      } else if (index === 2) {
        xTarget = '0%';
        yTarget = '-200%';
      } else if (index === 3) {
        xTarget = '-100%';
        yTarget = '-300%';
      } else if (index === 4) {
        xTarget = '0%';
        yTarget = '-400%';
      }
      gsap.set(wrapper, { x: xTarget, y: yTarget });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      obs.kill();
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('wheel', handlePreventDefault);
      window.removeEventListener('touchmove', handlePreventDefault);
    };
  }, [loadingComplete, gotoSection]);

  return {
    activeSection,
    portfolioScroll,
    stackScroll,
    aboutScroll,
    contactScroll,
    bgIndex,
    setBgIndex,
    containerRef,
    wrapperRef,
    gotoSection,
  };
}
