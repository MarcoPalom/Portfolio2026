import { useMemo, useState, useEffect } from 'react';

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
    // Hide button during Intro (panel 0) or at the end of About Section
    if (Math.round(scrollProgress) <= 1 || scrollProgress >= 4.7) return null;

    switch (activePanelIndex) {
      case 1:
        return {
          text: 'VIDEO GAMES • DRAWING • BASS • SPORTS • RESEARCH • ',
          color: '#6366f1', // Indigo accent
        };
      case 2:
        return {
          text: 'MUSIC • DESIGN • TRAVEL • TENNIS • ',
          color: '#ec4899', // Pink accent
        };
      case 3:
        return {
          text: 'RELIABLE • FAST LEARNER • CALM • FUNNY • ',
          color: '#f59e0b', // Orange accent
        };
      default:
        return null;
    }
  }, [activePanelIndex, scrollProgress]);

  // State to handle smooth fade-out and fade-in when changing panel config text
  const [displayConfig, setDisplayConfig] = useState(config);
  const [textOpacity, setTextOpacity] = useState(1);

  useEffect(() => {
    if (config?.text !== displayConfig?.text) {
      // Transition fade out
      setTextOpacity(0);
      const timer = setTimeout(() => {
        setDisplayConfig(config);
        setTextOpacity(1);
      }, 250);
      return () => clearTimeout(timer);
    } else if (config?.color !== displayConfig?.color) {
      setDisplayConfig(config);
    }
  }, [config, displayConfig]);

  const isVisible = config !== null;
  const activeConfig = displayConfig || config;

  // Duplicate the text inside the spans to guarantee seamless horizontal looping
  const duplicatedText = useMemo(() => {
    if (!activeConfig) return '';
    return `${activeConfig.text}${activeConfig.text}`;
  }, [activeConfig]);

  return (
    <>
      {/* Desktop/Tablet version: hover-expandable pill */}
      <div
        className={`hidden md:flex absolute right-10 bottom-10 z-[100] items-center transition-all duration-700 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex items-center group relative cursor-pointer">
          {/* Infinite Marquee Drawer (slides out to the left on hover) */}
          <div
            className="mr-3 overflow-hidden rounded-full border bg-black/70 backdrop-blur-md transition-all duration-500 ease-out w-0 opacity-0 group-hover:w-[380px] group-hover:opacity-100 h-9 flex items-center"
            style={{ borderColor: activeConfig ? `${activeConfig.color}30` : 'rgba(255,255,255,0.1)' }}
          >
            <div 
              className="w-full flex overflow-hidden transition-opacity duration-300"
              style={{ opacity: textOpacity }}
            >
              <div 
                key={activeConfig?.text || 'empty'}
                className="flex flex-row whitespace-nowrap animate-[marqueeScroll_15s_linear_infinite] font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white/95 select-none"
              >
                <div className="flex-shrink-0">{duplicatedText}</div>
                <div className="flex-shrink-0">{duplicatedText}</div>
              </div>
            </div>
          </div>

          {/* Trigger Pill Button */}
          <div
            className="flex items-center justify-center px-5 h-9 rounded-full border bg-white/5 backdrop-blur-md font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-white/80 transition-all duration-300 select-none group-hover:bg-white/10 group-hover:text-white"
            style={{
              borderColor: activeConfig ? `${activeConfig.color}40` : 'rgba(255,255,255,0.1)',
              boxShadow: activeConfig ? `0 0 10px ${activeConfig.color}15` : 'none',
            }}
          >
            {activeConfig && (
              <span className="relative flex h-2 w-2 mr-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: activeConfig.color }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: activeConfig.color }}
                />
              </span>
            )}
            if you even care
          </div>
        </div>
      </div>

      {/* Mobile/Touch version: already deployed marquee anchored at the bottom with safe area margin */}
      <div 
        className={`flex md:hidden absolute left-6 right-6 z-[100] items-center transition-all duration-700 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{
          bottom: 'calc(8.5rem + env(safe-area-inset-bottom))'
        }}
      >
        <div 
          className="w-full overflow-hidden rounded-full border bg-black/85 backdrop-blur-md h-9 flex items-center px-4"
          style={{ 
            borderColor: activeConfig ? `${activeConfig.color}35` : 'rgba(255,255,255,0.1)',
            boxShadow: activeConfig ? `0 0 10px ${activeConfig.color}10` : 'none',
          }}
        >
          <div 
            className="w-full flex overflow-hidden transition-opacity duration-300"
            style={{ opacity: textOpacity }}
          >
            <div 
              key={activeConfig?.text || 'empty'}
              className="flex flex-row whitespace-nowrap animate-[marqueeScroll_15s_linear_infinite] font-mono text-[10px] uppercase tracking-wider text-white/95 select-none"
            >
              <div className="flex-shrink-0">{duplicatedText}</div>
              <div className="flex-shrink-0">{duplicatedText}</div>
            </div>
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
