import { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { PRODUCTS } from '../constants/portfolio';

gsap.registerPlugin(Observer);

const BOUNDARY_COOLDOWN = 250; // ms cooldown to trigger next section transition

export function usePageScroll(loadingComplete: boolean) {
  const [bgIndex, setBgIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [portfolioScroll, setPortfolioScroll] = useState(0); // float from 0.0 to products.length
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
      const stackContainer = document.getElementById('stack-section-container');
      if (stackContainer) {
        const maxScroll = stackContainer.scrollHeight - stackContainer.clientHeight;
        if (activeSectionRef.current < 2) {
          stackScrollRef.current = 0;
          gsap.set(stackContainer, { scrollTop: 0 });
        } else if (activeSectionRef.current > 2) {
          stackScrollRef.current = maxScroll > 0 ? maxScroll : 0;
          gsap.set(stackContainer, { scrollTop: stackScrollRef.current });
        }
      }
    }

    if (index === 3) {
      boundaryHitTimeRef.current = Date.now();
      if (activeSectionRef.current < 3) {
        aboutScrollRef.current = 0.0;
        setAboutScroll(0.0);
      } else if (activeSectionRef.current > 3) {
        aboutScrollRef.current = 4.0;
        setAboutScroll(4.0);
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
        }, 150);
      }
    });
  }, []);

  useEffect(() => {
    if (!loadingComplete) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Observer setup for wheel, touch swipes & pointer drag (with 20px tolerance to prevent accidental triggers)
    const obs = Observer.create({
      target: window,
      type: 'wheel,touch,pointer',
      wheelSpeed: -1.0,
      tolerance: 20,
      preventDefault: false,
      onUp: () => {
        if (!isAnimatingRef.current) {
          if (activeSectionRef.current === 1) {
            const limit = PRODUCTS.length + 1;
            if (portfolioScrollRef.current < limit) {
              const isMobile = window.innerWidth < 768;
              if (isMobile) {
                isAnimatingRef.current = true;
                const nextScroll = Math.min(limit, Math.round(portfolioScrollRef.current) + 1.0);
                portfolioScrollRef.current = nextScroll;
                setPortfolioScroll(nextScroll);
                setTimeout(() => {
                  if (nextScroll === limit) {
                    boundaryHitTimeRef.current = Date.now();
                  }
                  isAnimatingRef.current = false;
                }, 800);
              } else {
                const nextScroll = Math.min(limit, portfolioScrollRef.current + 0.15);
                portfolioScrollRef.current = nextScroll;
                setPortfolioScroll(nextScroll);
                if (nextScroll === limit) {
                  boundaryHitTimeRef.current = Date.now();
                }
              }
              return;
            } else {
              if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) {
                return;
              }
            }
          }
          if (activeSectionRef.current === 2) {
            const stackContainer = document.getElementById('stack-section-container');
            if (stackContainer) {
              const maxScroll = stackContainer.scrollHeight - stackContainer.clientHeight;
              if (maxScroll > 10) {
                if (stackContainer.scrollTop < maxScroll - 10) {
                  // Permitir scroll nativo dentro del stack sin avanzar de sección
                  return;
                } else {
                  if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) {
                    return;
                  }
                }
              }
            }
          }
          if (activeSectionRef.current === 3) {
            if (aboutScrollRef.current < 4.0) {
              isAnimatingRef.current = true;
              const nextScroll = Math.min(4.0, Math.round(aboutScrollRef.current) + 1.0);
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
                  if (nextScroll === 4.0) {
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
            const isMobile = window.innerWidth < 768;
            if (portfolioScrollRef.current > 0.0) {
              if (isMobile) {
                isAnimatingRef.current = true;
                const nextScroll = Math.max(0.0, Math.round(portfolioScrollRef.current) - 1.0);
                portfolioScrollRef.current = nextScroll;
                setPortfolioScroll(nextScroll);
                setTimeout(() => {
                  if (nextScroll === 0.0) {
                    boundaryHitTimeRef.current = Date.now();
                  }
                  isAnimatingRef.current = false;
                }, 800);
              } else {
                const nextScroll = Math.max(0.0, portfolioScrollRef.current - 0.15);
                portfolioScrollRef.current = nextScroll;
                setPortfolioScroll(nextScroll);
                if (nextScroll === 0.0) {
                  boundaryHitTimeRef.current = Date.now();
                }
              }
              return;
            } else {
              if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) {
                return;
              }
            }
          }
          if (activeSectionRef.current === 2) {
            const stackContainer = document.getElementById('stack-section-container');
            if (stackContainer) {
              const maxScroll = stackContainer.scrollHeight - stackContainer.clientHeight;
              if (maxScroll > 10) {
                if (stackContainer.scrollTop > 10) {
                  // Permitir scroll nativo dentro del stack sin retroceder de sección
                  return;
                } else {
                  if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) {
                    return;
                  }
                }
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
            if (Date.now() - boundaryHitTimeRef.current < BOUNDARY_COOLDOWN) {
              return;
            }
          }
        }
        if (activeSectionRef.current === 3) {
          if (aboutScrollRef.current < 4.0) {
            isAnimatingRef.current = true;
            const nextScroll = Math.min(4.0, Math.round(aboutScrollRef.current) + 1.0);
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
                if (nextScroll === 4.0) {
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
          if (portfolioScrollRef.current > 0.0) {
            const nextScroll = Math.max(0.0, portfolioScrollRef.current - 0.5);
            portfolioScrollRef.current = nextScroll;
            setPortfolioScroll(nextScroll);
            if (nextScroll === 0.0) {
              boundaryHitTimeRef.current = Date.now();
            }
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
    };
    window.addEventListener('keydown', handleKeyDown);

    const handlePreventDefault = (e: TouchEvent | WheelEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest('#stack-section-container')) {
        return;
      }
      if (e.cancelable) {
        e.preventDefault();
      }
    };
    window.addEventListener('wheel', handlePreventDefault, { passive: false });
    window.addEventListener('touchmove', handlePreventDefault, { passive: false });

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
      window.removeEventListener('wheel', handlePreventDefault);
      window.removeEventListener('touchmove', handlePreventDefault);
    };
  }, [loadingComplete, gotoSection]);

  return {
    activeSection,
    portfolioScroll,
    aboutScroll,
    contactScroll,
    bgIndex,
    setBgIndex,
    containerRef,
    wrapperRef,
    gotoSection,
  };
}
