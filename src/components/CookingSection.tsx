import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface CookingSectionProps {
  scrollProgress: number;
}

export default function CookingSection({ scrollProgress }: CookingSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementsRef.current;
    if (!el) return;

    // Subtle parallax shift based on general scroll progress
    gsap.to(el, {
      y: (scrollProgress - 6.0) * 80,
      duration: 0.6,
      ease: 'power1.out',
      overwrite: 'auto'
    });
  }, [scrollProgress]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex flex-col items-center justify-center text-center relative select-none pointer-events-auto"
    >
      {/* Self-contained CSS Animations for the dynamic wireframe bonfire */}
      <style>{`
        @keyframes flame-glow {
          0%, 100% { transform: scale(1); opacity: 0.12; filter: blur(45px); }
          50% { transform: scale(1.25); opacity: 0.22; filter: blur(55px); }
        }
        @keyframes glow-color-shift {
          0%, 100% { background-color: rgba(249, 115, 22, 0.6); }   /* Orange */
          25% { background-color: rgba(139, 92, 246, 0.6); }        /* Violet */
          50% { background-color: rgba(6, 182, 212, 0.6); }         /* Cyan */
          75% { background-color: rgba(236, 72, 153, 0.6); }        /* Rose/Pink */
        }
        @keyframes animate-flame-1 {
          0%, 100% { transform: scaleY(1) scaleX(1) translate(0, 0) rotate(0deg); opacity: 0.35; }
          50% { transform: scaleY(1.3) scaleX(0.82) translate(-2px, -6px) rotate(-3.5deg); opacity: 0.6; }
        }
        @keyframes animate-flame-2 {
          0%, 100% { transform: scaleY(1) scaleX(1) translate(0, 0) rotate(0deg); opacity: 0.55; }
          50% { transform: scaleY(1.36) scaleX(0.85) translate(3px, -9px) rotate(4deg); opacity: 0.8; }
        }
        @keyframes animate-flame-3 {
          0%, 100% { transform: scaleY(1) scaleX(1) translate(0, 0) rotate(-1deg); opacity: 0.85; }
          50% { transform: scaleY(1.24) scaleX(0.8) translate(-1px, -5px) rotate(2deg); opacity: 1; }
        }
        @keyframes animate-flame-left {
          0%, 100% { transform: scaleY(1) scaleX(1) translate(0, 0) rotate(-3deg); opacity: 0.5; }
          50% { transform: scaleY(1.28) scaleX(0.82) translate(-5px, -7px) rotate(-7deg); opacity: 0.75; }
        }
        @keyframes animate-flame-right {
          0%, 100% { transform: scaleY(1) scaleX(1) translate(0, 0) rotate(3deg); opacity: 0.5; }
          50% { transform: scaleY(1.32) scaleX(0.85) translate(5px, -8px) rotate(7deg); opacity: 0.75; }
        }
        @keyframes color-outer-flame {
          0%, 100% { stroke: rgba(249, 115, 22, 0.45); }
          25% { stroke: rgba(139, 92, 246, 0.45); }
          50% { stroke: rgba(6, 182, 212, 0.45); }
          75% { stroke: rgba(236, 72, 153, 0.45); }
        }
        @keyframes color-mid-flame {
          0%, 100% { stroke: rgba(236, 72, 153, 0.75); }
          25% { stroke: rgba(59, 130, 246, 0.75); }
          50% { stroke: rgba(16, 185, 129, 0.75); }
          75% { stroke: rgba(249, 115, 22, 0.75); }
        }
        @keyframes color-inner-flame {
          0%, 100% { stroke: rgba(249, 115, 22, 0.98); }
          25% { stroke: rgba(139, 92, 246, 0.98); }
          50% { stroke: rgba(6, 182, 212, 0.98); }
          75% { stroke: rgba(236, 72, 153, 0.98); }
        }
        @keyframes coal-color-shift {
          0%, 100% { stop-color: rgb(249, 115, 22); }
          25% { stop-color: rgb(139, 92, 246); }
          50% { stop-color: rgb(6, 182, 212); }
          75% { stop-color: rgb(236, 72, 153); }
        }
        @keyframes sparks-color-shift {
          0%, 100% { fill: rgb(249, 115, 22); }
          25% { fill: rgb(167, 139, 250); }
          50% { fill: rgb(34, 211, 238); }
          75% { fill: rgb(244, 114, 182); }
        }
        @keyframes floating-project-1 {
          0%, 100% { transform: translateY(0) rotate(0.5deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
        }
        @keyframes floating-project-2 {
          0%, 100% { transform: translateY(0) rotate(-0.5deg); }
          50% { transform: translateY(-14px) rotate(1deg); }
        }
        @keyframes floating-project-3 {
          0%, 100% { transform: translateY(0) rotate(1deg); }
          50% { transform: translateY(-8px) rotate(-0.5deg); }
        }
        @keyframes spark-rise {
          0% { transform: translateY(180px) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.9; }
          100% { transform: translateY(20px) translateX(var(--drift-x, 25px)) scale(0); opacity: 0; }
        }
      `}</style>

      {/* Background Heat Wave & Shifting Color Glow */}
      <div 
        className="absolute w-[45%] h-[45%] rounded-full pointer-events-none z-0 mix-blend-screen animate-[flame-glow_5s_ease-in-out_infinite,glow-color-shift_12s_linear_infinite]"
        style={{ bottom: '15%' }}
      />

      <div ref={elementsRef} className="z-10 flex flex-col items-center justify-center max-w-xl px-4">
        {/* Title: WHAT'S COOKING? (Clean white text drop shadow) */}
        <h2 
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none uppercase tracking-tighter text-[#f5f5f7] drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] mb-14"
          style={{ transform: 'scaleY(1.35)', transformOrigin: 'center center' }}
        >
          What's Cooking?
        </h2>

        {/* Floating names column positioned above the grill */}
        <div className="flex flex-col gap-5 items-center mb-6 z-20">
          <div 
            className="font-mono text-xs sm:text-sm md:text-base text-white/90 font-bold uppercase tracking-widest px-5 py-2.5 border border-white/20 rounded bg-black/60 backdrop-blur shadow-[0_0_15px_rgba(255,255,255,0.1)] animate-[floating-project-1_5s_ease-in-out_infinite]"
          >
            takara-hoby web
          </div>
          
          <div 
            className="font-mono text-xs sm:text-sm md:text-base text-white/90 font-bold uppercase tracking-widest px-5 py-2.5 border border-white/20 rounded bg-black/60 backdrop-blur shadow-[0_0_15px_rgba(255,255,255,0.1)] animate-[floating-project-2_6s_ease-in-out_infinite]"
          >
            doty-app
          </div>
          
          <div 
            className="font-mono text-xs sm:text-sm md:text-base text-white/90 font-bold uppercase tracking-widest px-5 py-2.5 border border-white/20 rounded bg-black/60 backdrop-blur shadow-[0_0_15px_rgba(255,255,255,0.1)] animate-[floating-project-3_4.5s_ease-in-out_infinite]"
          >
            FICSM 2026
          </div>
        </div>

        {/* The Bonfire with Grill on Top (Minimal White Wireframe Aesthetic) */}
        <div className="relative w-85 h-64 flex items-center justify-center select-none z-10">
          
          {/* SVG bonfire illustration */}
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              {/* Radial glow filter for base coals */}
              <radialGradient id="coalGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" className="animate-[coal-color-shift_12s_linear_infinite]" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Glowing Coals / Ashes Bed */}
            <ellipse cx="100" cy="170" rx="60" ry="15" fill="url(#coalGlow)" className="animate-pulse" style={{ animationDuration: '3s' }} />


            {/* Upright Leaning Teepee Wood Logs (White outline, no fill) */}
            <g fill="none" stroke="rgba(255, 255, 255, 0.75)" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
              {/* Log 1 (Leftmost leaning right) */}
              <path d="M55,180 L95,95 L102,98 L62,183 Z" />
              {/* Log 2 (Center-left leaning right) */}
              <path d="M75,182 L98,90 L104,92 L81,184 Z" />
              {/* Log 3 (Center vertical log) */}
              <path d="M97,185 L97,85 L103,85 L103,185 Z" />
              {/* Log 4 (Center-right leaning left) */}
              <path d="M125,182 L102,90 L96,92 L119,184 Z" />
              {/* Log 5 (Rightmost leaning left) */}
              <path d="M145,180 L105,95 L98,98 L138,183 Z" />
            </g>

            {/* Layered Fire Flames rising from logs (Wireframe sways, no fill, shifting color outlines) */}
            <g fill="none" className="flames">
              {/* Outer Big Flame */}
              <path 
                d="M60,170 Q100,50 100,20 Q100,50 140,170" 
                strokeWidth="1.2"
                className="animate-[animate-flame-1_3s_ease-in-out_infinite,color-outer-flame_12s_linear_infinite]"
                style={{ transformOrigin: '100px 170px' }}
              />
              {/* Left licking flame */}
              <path 
                d="M65,170 Q75,100 90,60 Q85,100 95,170" 
                strokeWidth="1.4"
                className="animate-[animate-flame-left_3.2s_ease-in-out_infinite,color-mid-flame_12s_linear_infinite]"
                style={{ transformOrigin: '100px 170px', animationDelay: '0.2s' }}
              />
              {/* Middle Flame */}
              <path 
                d="M72,170 Q100,70 100,45 Q100,70 128,170" 
                strokeWidth="1.5"
                className="animate-[animate-flame-2_2.4s_ease-in-out_infinite,color-mid-flame_12s_linear_infinite]"
                style={{ transformOrigin: '100px 170px', animationDelay: '0.4s' }}
              />
              {/* Right licking flame */}
              <path 
                d="M105,170 Q115,100 110,60 Q125,100 135,170" 
                strokeWidth="1.4"
                className="animate-[animate-flame-right_2.8s_ease-in-out_infinite,color-mid-flame_12s_linear_infinite]"
                style={{ transformOrigin: '100px 170px', animationDelay: '0.1s' }}
              />
              {/* Inner Hot core */}
              <path 
                d="M84,170 Q100,100 100,75 Q100,100 116,170" 
                strokeWidth="1.8"
                className="animate-[animate-flame-3_1.8s_ease-in-out_infinite,color-inner-flame_12s_linear_infinite]"
                style={{ transformOrigin: '100px 170px', animationDelay: '0.6s' }}
              />
            </g>

            {/* Rising spark particles (Shifting color dots) */}
            <g className="animate-[sparks-color-shift_12s_linear_infinite]">
              <circle cx="80" cy="180" r="1.5" className="animate-[spark-rise_3.5s_linear_infinite]" style={{ '--drift-x': '40px' } as any} />
              <circle cx="120" cy="180" r="1.2" className="animate-[spark-rise_4.5s_linear_infinite]" style={{ '--drift-x': '-35px', animationDelay: '1.2s' } as any} />
              <circle cx="95" cy="180" r="1.5" className="animate-[spark-rise_2.8s_linear_infinite]" style={{ '--drift-x': '20px', animationDelay: '0.7s' } as any} />
              <circle cx="110" cy="180" r="1.0" className="animate-[spark-rise_5.2s_linear_infinite]" style={{ '--drift-x': '-15px', animationDelay: '2.1s' } as any} />
            </g>

            {/* The Cooking Grill (Parrilla) sitting on top of the stones/fire */}
            <g className="grill" fill="none" stroke="rgba(255, 255, 255, 0.55)" strokeWidth="1.5">
              {/* Grill legs standing on stones */}
              <line x1="50" y1="120" x2="45" y2="175" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2.5" />
              <line x1="150" y1="120" x2="155" y2="175" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2.5" />
              <line x1="100" y1="122" x2="100" y2="183" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" opacity="0.8" />
              
              {/* Grill Platform Oval Rim */}
              <ellipse cx="100" cy="120" rx="55" ry="12" stroke="rgba(255, 255, 255, 0.65)" strokeWidth="3" />
              
              {/* Grill Wire Mesh Lines */}
              <line x1="52" y1="120" x2="148" y2="120" stroke="rgba(255, 255, 255, 0.65)" strokeWidth="2" />
              <line x1="55" y1="117" x2="145" y2="117" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" />
              <line x1="62" y1="114" x2="138" y2="114" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.2" />
              <line x1="75" y1="111" x2="125" y2="111" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
              
              <line x1="55" y1="123" x2="145" y2="123" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" />
              <line x1="62" y1="126" x2="138" y2="126" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.2" />
              <line x1="75" y1="129" x2="125" y2="129" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
