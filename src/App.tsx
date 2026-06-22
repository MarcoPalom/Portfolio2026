import { useState, useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import Loader from './components/Loader';
import PortfolioSection from './components/PortfolioSection';
import StashSection from './components/StashSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Observer);

const backgrounds = [
  'bg-[#0a0b0e]', // Deep Space Blue/Black (Original)
  'bg-[#140624]', // Cyberpunk Deep Purple/Violet
  'bg-[#240612]', // Cinematic Crimson/Burgundy
  'bg-[#06241a]', // Blade Runner Toxic Teal/Green (Sparkplay style)
  'bg-[#061c24]', // Indigo/Deep Teal (Contacto)
];

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  const activeSectionRef = useRef(0);
  const isAnimatingRef = useRef(false);

  // GSAP Observer Scroll mechanism for both desktop and mobile
  useEffect(() => {
    if (!loadingComplete) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const gotoSection = (index: number) => {
      if (index < 0 || index >= 5) return;

      isAnimatingRef.current = true;
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
          gotoSection(activeSectionRef.current - 1);
        }
      },
      onDown: () => {
        if (!isAnimatingRef.current) {
          gotoSection(activeSectionRef.current + 1);
        }
      }
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimatingRef.current) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        gotoSection(activeSectionRef.current + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
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

  return (
    <div className="min-h-screen relative bg-[#0a0b0e] text-white overflow-hidden select-none">
      {/* Loading Screen Overlay */}
      {!loadingComplete && (
        <Loader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Main Container */}
      <div 
        ref={containerRef} 
        className={`w-full h-screen overflow-hidden transition-colors duration-1000 ease-in-out ${backgrounds[bgIndex]}`}
      >
        {/* Slides Wrapper */}
        <div ref={wrapperRef} className="relative w-full h-full">
          
          {/* Section 1: Hero */}
          <div className="absolute left-0 top-0 w-full h-full">
            <HeroSection 
              bgIndex={bgIndex} 
              setBgIndex={setBgIndex} 
              isHeroActive={activeSection === 0} 
            />
          </div>

          {/* Section 2: Portafolio */}
          <div className="absolute left-[100vw] top-[100vh] w-full h-full">
            <PortfolioSection />
          </div>

          {/* Section 3: Stash */}
          <div className="absolute left-0 top-[200vh] w-full h-full">
            <StashSection />
          </div>

          {/* Section 4: About Me */}
          <div className="absolute left-[100vw] top-[300vh] w-full h-full">
            <AboutSection />
          </div>

          {/* Section 5: Contacto */}
          <div className="absolute left-0 top-[400vh] w-full h-full">
            <ContactSection />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
