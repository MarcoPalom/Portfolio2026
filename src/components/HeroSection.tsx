import ImageSequence from './ImageSequence';
import EvaporatingPixels from './EvaporatingPixels';

const IS_MOBILE = typeof window !== 'undefined' && window.innerWidth < 768;

// Cinematic holographic filters — drop-shadow removed on mobile (very expensive GPU filter)
const holographicFiltersDesktop = [
  'sepia(1) saturate(2.8) hue-rotate(185deg) brightness(0.85) contrast(1.05) drop-shadow(0 0 20px rgba(59,130,246,0.4))',
  'sepia(1) saturate(3.2) hue-rotate(245deg) brightness(0.85) contrast(1.05) drop-shadow(0 0 20px rgba(168,85,247,0.4))',
  'sepia(1) saturate(3.8) hue-rotate(325deg) brightness(0.9) contrast(1.0) drop-shadow(0 0 20px rgba(239,68,68,0.4))',
  'sepia(1) saturate(3.0) hue-rotate(65deg) brightness(0.9) contrast(1.1) drop-shadow(0 0 20px rgba(34,197,94,0.4))',
  'sepia(1) saturate(2.8) hue-rotate(185deg) brightness(0.85) contrast(1.05) drop-shadow(0 0 20px rgba(59,130,246,0.4))',
];
const holographicFiltersMobile = [
  'sepia(1) saturate(2.0) hue-rotate(185deg) brightness(0.85) contrast(1.05)',
  'sepia(1) saturate(2.4) hue-rotate(245deg) brightness(0.85) contrast(1.05)',
  'sepia(1) saturate(2.8) hue-rotate(325deg) brightness(0.9) contrast(1.0)',
  'sepia(1) saturate(2.2) hue-rotate(65deg) brightness(0.9) contrast(1.1)',
  'sepia(1) saturate(2.0) hue-rotate(185deg) brightness(0.85) contrast(1.05)',
];
const holographicFilters = IS_MOBILE ? holographicFiltersMobile : holographicFiltersDesktop;

interface HeroSectionProps {
  bgIndex: number;
  setBgIndex: React.Dispatch<React.SetStateAction<number>>;
  isHeroActive: boolean;
}

export default function HeroSection({ bgIndex, setBgIndex, isHeroActive }: HeroSectionProps) {
  const handleFrameTrigger = (frame: number) => {
    if (frame === 14 && isHeroActive) {
      // Loop the background colors only within the first 4 (0, 1, 2, 3) when at the Hero page
      setBgIndex((prev) => (prev + 1) % 4);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-transparent">
      {/* Background Cinematic Orbs — HIDDEN on mobile (blur is extremely expensive on mobile GPU) */}
      <div className="hidden lg:block absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-700/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="hidden lg:block absolute bottom-[-10%] right-[10%] w-[60%] h-[60%] bg-pink-700/10 rounded-full blur-[160px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />



      {/* Title & Subtitle: Layered behind the image sequence (z-5) */}
      <div className="absolute left-[6vw] lg:left-[8vw] top-[14vh] lg:top-[25vh] z-5 flex flex-col pointer-events-none select-none">

        {/* Title: Elongated (scaleY) and condensed (Bebas Neue) */}
        <h1 className="font-display text-[14vw] sm:text-[11vw] lg:text-[7vw] leading-[0.8] uppercase whitespace-nowrap text-[#f5f5f7]"
          style={{
            transform: 'scaleY(1.4)',
            transformOrigin: 'left top',
            letterSpacing: '-0.04em'
          }}>
          Marco Palomo
        </h1>

        {/* Subtitle: "frontend developer / Web Designer" offset to account for vertical stretch of h1 */}
        <div className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-4 mt-[6vh] lg:mt-[3.5vh] text-[10px] sm:text-xs md:text-sm lg:text-base font-light text-white/50 uppercase tracking-[0.2em] font-sans">
          <span>frontend developer</span>
          <span className="hidden md:inline-block w-2.5 h-2.5 border border-white/40" style={{ borderWidth: '1.5px' }} />
          <span>Web Designer</span>
        </div>

      </div>

      <div className="absolute right-0 bottom-0 w-full lg:w-[48vw] h-[60vh] lg:h-full z-10 flex items-end overflow-hidden pointer-events-none">
        {/* EvaporatingPixels disabled on mobile — canvas animation too heavy */}
        {!IS_MOBILE && <EvaporatingPixels bgIndex={bgIndex} />}

        {/* Reusable ImageSequence Component with custom styling, dynamic color mapping, and bottom fade-out mask */}
        <ImageSequence
          className="absolute inset-0 w-full h-full flex items-end justify-center lg:justify-end z-10 opacity-100"
          imgClassName="w-full h-full object-contain object-right-bottom"
          onTriggerFrame={handleFrameTrigger}
          imgStyle={{
            filter: holographicFilters[bgIndex],
            transition: 'filter 1.0s ease-in-out', // Smoothly transitions the face color to match the background
          }}
        />

      </div>

      {/* Logo in the bottom-left corner */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20">
        <img
          src="/LOGO.png"
          alt="Logo"
          className="h-5 md:h-7 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
        />
      </div>
    </section>
  );
}
