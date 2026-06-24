import { useState } from 'react';
import HeroSection from './components/HeroSection';
import Loader from './components/Loader';
import PortfolioSection from './components/PortfolioSection';
import StackSection from './components/StackSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import CustomCursor from './components/CustomCursor';
import { usePageScroll } from './hooks/usePageScroll';

const backgrounds = [
  'bg-[#0a0b0e]', // Deep Space Blue/Black
  'bg-[#140624]', // Cyberpunk Deep Purple/Violet
  'bg-[#240612]', // Cinematic Crimson/Burgundy
  'bg-[#06241a]', // Blade Runner Toxic Teal/Green
  'bg-[#061c24]', // Indigo/Deep Teal (Contacto)
];

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Modularized scroll, resize, keyboard keydown and GSAP Observer logic
  const {
    activeSection,
    portfolioScroll,
    aboutScroll,
    contactScroll,
    bgIndex,
    setBgIndex,
    containerRef,
    wrapperRef,
  } = usePageScroll(loadingComplete);

  return (
    <div className="min-h-screen relative bg-[#0a0b0e] text-white overflow-hidden select-none">
      {/* Custom Cursor */}
      <CustomCursor />

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
            <PortfolioSection scrollProgress={portfolioScroll} />
          </div>

          {/* Section 3: Stack */}
          <div className="absolute left-0 top-[200vh] w-full h-full">
            <StackSection />
          </div>

          {/* Section 4: About Me */}
          <div className="absolute left-[100vw] top-[300vh] w-full h-full">
            <AboutSection scrollProgress={aboutScroll} />
          </div>

          {/* Section 5: Contacto */}
          <div className="absolute left-0 top-[400vh] w-full h-full">
            <ContactSection scrollProgress={contactScroll} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
