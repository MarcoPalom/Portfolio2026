import { useMemo } from 'react';

interface IfYouEvenCareButtonProps {
  scrollProgress: number; // 0.0 → 4.0
}

export default function IfYouEvenCareButton({ scrollProgress }: IfYouEvenCareButtonProps) {
  // Determine the active panel index (0 to 3) matching AboutSection's translation logic
  const activePanelIndex = useMemo(() => {
    const roundedScroll = Math.round(scrollProgress);
    return Math.min(3, Math.max(0, roundedScroll - 1));
  }, [scrollProgress]);

  // Determine active marquee text and accent color based on active panel
  const config = useMemo(() => {
    // Hide button during Intro (panel 0)
    if (Math.round(scrollProgress) <= 1) return null;

    switch (activePanelIndex) {
      case 1:
        return {
          text: 'VIDEOJUEGOS • DIBUJO • BAJO • DEPORTES • INVESTIGACIÓN • ',
          color: '#6366f1', // Indigo accent
        };
      case 2:
        return {
          text: 'MÚSICA • DISEÑO • VIAJES • TENIS • ',
          color: '#ec4899', // Pink accent
        };
      case 3:
        return {
          text: 'CONFIABLE • APRENDIZAJE RÁPIDO • CALMADO • GRACIOSO • ',
          color: '#f59e0b', // Orange accent
        };
      default:
        return null;
    }
  }, [activePanelIndex, scrollProgress]);

  const isVisible = config !== null;

  // Duplicate the text inside the spans to guarantee seamless horizontal looping
  const duplicatedText = useMemo(() => {
    if (!config) return '';
    return `${config.text}${config.text}`;
  }, [config]);

  return (
    <>
      <div 
        className={`absolute right-6 bottom-6 md:right-10 md:bottom-10 z-[100] flex items-center transition-all duration-700 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex items-center group relative cursor-pointer">
          {/* Infinite Marquee Drawer (slides out to the left on hover) */}
          <div 
            className="mr-3 overflow-hidden rounded-full border bg-black/70 backdrop-blur-md transition-all duration-500 ease-out w-0 opacity-0 group-hover:w-[200px] sm:group-hover:w-[280px] md:group-hover:w-[380px] group-hover:opacity-100 h-9 flex items-center"
            style={{ borderColor: config ? `${config.color}30` : 'rgba(255,255,255,0.1)' }}
          >
            <div className="w-full flex overflow-hidden">
              <div className="flex whitespace-nowrap animate-[marqueeScroll_10s_linear_infinite] font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white/95 select-none">
                <span>{duplicatedText}</span>
                <span>{duplicatedText}</span>
              </div>
            </div>
          </div>

          {/* Trigger Pill Button */}
          <div 
            className="flex items-center justify-center px-5 h-9 rounded-full border bg-white/5 backdrop-blur-md font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-white/80 transition-all duration-300 select-none group-hover:bg-white/10 group-hover:text-white"
            style={{
              borderColor: config ? `${config.color}40` : 'rgba(255,255,255,0.1)',
              boxShadow: config ? `0 0 10px ${config.color}15` : 'none',
            }}
          >
            {config && (
              <span className="relative flex h-2 w-2 mr-2">
                <span 
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" 
                  style={{ backgroundColor: config.color }}
                />
                <span 
                  className="relative inline-flex rounded-full h-2 w-2" 
                  style={{ backgroundColor: config.color }}
                />
              </span>
            )}
            if you even care
          </div>
        </div>
      </div>

      {/* Embedded Styles for Marquee Motion */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </>
  );
}
