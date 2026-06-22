import { useRef } from 'react';

export default function StashSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // High-fidelity blueprint skills configurations with brand-specific color tokens (10 items)
  const stashItems = [
    {
      id: "01",
      name: "React.js",
      category: "LIBRARY",
      spec: "V18+ / COMPONENT CORE",
      desc: "Declarative component architecture, custom hooks, fiber reconciliation, concurrent features, and state optimization.",
      accentColor: "text-[#00d8ff]",
      hoverBorder: "hover:border-[#00d8ff]/30 hover:shadow-[0_0_25px_rgba(0,216,255,0.06)]",
      glowBg: "bg-[#00d8ff]/10",
      crosshairBorder: "border-[#00d8ff]/40",
      svg: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.2" fill="none">
          <g className="react-svg" style={{ transformOrigin: '50px 50px' }}>
            <ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(0 50 50)" />
            <ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(120 50 50)" />
          </g>
          <circle cx="50" cy="50" r="5" className="fill-white/10" />
          <line x1="50" y1="10" x2="50" y2="90" strokeDasharray="3 3" strokeOpacity="0.2" />
          <line x1="10" y1="50" x2="90" y2="50" strokeDasharray="3 3" strokeOpacity="0.2" />
        </svg>
      )
    },
    {
      id: "02",
      name: "Next.js",
      category: "FRAMEWORK",
      spec: "APP ROUTER / HYBRID",
      desc: "Static site generation, server-side rendering, dynamic routing, edge runtime optimization, and api routes integration.",
      accentColor: "text-white",
      hoverBorder: "hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.06)]",
      glowBg: "bg-white/10",
      crosshairBorder: "border-white/40",
      svg: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.2" fill="none">
          <circle cx="50" cy="50" r="42" strokeDasharray="3 3" className="next-circle" style={{ transformOrigin: '50px 50px' }} />
          <path d="M32 68 V32 L68 68 V32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="68" cy="68" r="2.5" fill="currentColor" />
          <line x1="15" y1="15" x2="85" y2="85" strokeWidth="0.5" strokeOpacity="0.15" />
        </svg>
      )
    },
    {
      id: "03",
      name: "Nuxt.js",
      category: "FRAMEWORK",
      spec: "VUX / MOUNTAIN ROUTER",
      desc: "Vue-based layout systems, auto-imported modules, universal server-side rendering, and integrated static generation engines.",
      accentColor: "text-[#00c58e]",
      hoverBorder: "hover:border-[#00c58e]/30 hover:shadow-[0_0_25px_rgba(0,197,142,0.06)]",
      glowBg: "bg-[#00c58e]/10",
      crosshairBorder: "border-[#00c58e]/40",
      svg: (
        <div className="w-16 h-16 flex items-center justify-center select-none" style={{ perspective: '200px' }}>
          <div 
            className="w-10 h-10 relative nuxt-pyramid" 
            style={{ 
              transformStyle: 'preserve-3d',
              color: 'inherit'
            }}
          >
            {/* Base square */}
            <div 
              style={{ 
                position: 'absolute', 
                width: '40px', 
                height: '40px', 
                border: '1.2px solid currentColor', 
                transform: 'rotateX(90deg) translateZ(-20px)',
                opacity: 0.35,
                color: 'inherit'
              }} 
            />
            {/* Face 1 */}
            <div 
              style={{ 
                position: 'absolute', 
                width: '40px', 
                height: '40px', 
                transform: 'rotateY(0deg) translateZ(20px) rotateX(30deg)',
                transformOrigin: 'bottom center',
                color: 'inherit'
              }}
            >
              <svg viewBox="0 0 40 40" className="w-full h-full stroke-current" fill="none" strokeWidth="1.2">
                <polygon points="20,0 0,40 40,40" />
              </svg>
            </div>
            {/* Face 2 */}
            <div 
              style={{ 
                position: 'absolute', 
                width: '40px', 
                height: '40px', 
                transform: 'rotateY(90deg) translateZ(20px) rotateX(30deg)',
                transformOrigin: 'bottom center',
                color: 'inherit'
              }}
            >
              <svg viewBox="0 0 40 40" className="w-full h-full stroke-current" fill="none" strokeWidth="1.2">
                <polygon points="20,0 0,40 40,40" />
              </svg>
            </div>
            {/* Face 3 */}
            <div 
              style={{ 
                position: 'absolute', 
                width: '40px', 
                height: '40px', 
                transform: 'rotateY(180deg) translateZ(20px) rotateX(30deg)',
                transformOrigin: 'bottom center',
                color: 'inherit'
              }}
            >
              <svg viewBox="0 0 40 40" className="w-full h-full stroke-current" fill="none" strokeWidth="1.2">
                <polygon points="20,0 0,40 40,40" />
              </svg>
            </div>
            {/* Face 4 */}
            <div 
              style={{ 
                position: 'absolute', 
                width: '40px', 
                height: '40px', 
                transform: 'rotateY(270deg) translateZ(20px) rotateX(30deg)',
                transformOrigin: 'bottom center',
                color: 'inherit'
              }}
            >
              <svg viewBox="0 0 40 40" className="w-full h-full stroke-current" fill="none" strokeWidth="1.2">
                <polygon points="20,0 0,40 40,40" />
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "04",
      name: "TypeScript",
      category: "LANGUAGE",
      spec: "STRICT / STATIC TYPING",
      desc: "Interface definition compile safeguards, advanced generic structures, conditional compiler nodes, and code autocomplete tooling.",
      accentColor: "text-[#3178c6]",
      hoverBorder: "hover:border-[#3178c6]/30 hover:shadow-[0_0_25px_rgba(49,120,198,0.06)]",
      glowBg: "bg-[#3178c6]/10",
      crosshairBorder: "border-[#3178c6]/40",
      svg: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.2" fill="none">
          <rect x="18" y="18" width="64" height="64" rx="6" strokeWidth="1.5" className="ts-rect" style={{ transformOrigin: '50px 50px' }} />
          <path d="M28 35 H48 M38 35 V65" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M54 60 Q62 66 70 60 T62 48 T70 48" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="38" cy="35" r="2" fill="currentColor" />
          <circle cx="38" cy="65" r="2" fill="currentColor" />
          <line x1="18" y1="50" x2="82" y2="50" strokeDasharray="4 4" strokeOpacity="0.15" />
        </svg>
      )
    },
    {
      id: "05",
      name: "Tailwind CSS",
      category: "UTILITY CSS",
      spec: "AESTHETICS / COMPACT",
      desc: "Responsive layout tokens, component fluid utilities, customizable design engines, and rapid wireframe layout speed.",
      accentColor: "text-[#38bdf8]",
      hoverBorder: "hover:border-[#38bdf8]/30 hover:shadow-[0_0_25px_rgba(56,189,248,0.06)]",
      glowBg: "bg-[#38bdf8]/10",
      crosshairBorder: "border-[#38bdf8]/40",
      svg: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.2" fill="none">
          <path d="M20 45 C30 25, 45 25, 55 45 C65 65, 75 65, 85 45 C75 65, 60 65, 50 45 C40 25, 25 25, 20 45 Z" strokeWidth="1.8" className="tw-wave" style={{ transformOrigin: '50px 45px' }} />
          <path d="M15 55 C25 35, 40 35, 50 55 C60 75, 75 75, 80 55 C75 75, 60 75, 50 55 C40 35, 25 35, 15 55 Z" strokeWidth="1.0" strokeDasharray="3 3" />
          <line x1="50" y1="15" x2="50" y2="85" strokeWidth="0.5" strokeOpacity="0.2" />
        </svg>
      )
    },
    {
      id: "06",
      name: "GSAP Motion",
      category: "ANIMATION",
      spec: "TIMELINE / SPLINES",
      desc: "Tween coordinate interpolation, advanced stagger triggers, scroll-driven triggers, and bezier path animations.",
      accentColor: "text-[#88ce02]",
      hoverBorder: "hover:border-[#88ce02]/30 hover:shadow-[0_0_25px_rgba(136,206,2,0.06)]",
      glowBg: "bg-[#88ce02]/10",
      crosshairBorder: "border-[#88ce02]/40",
      svg: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.2" fill="none">
          <path d="M15 80 C30 80, 45 20, 85 20" strokeWidth="2.2" className="gsap-path" strokeDasharray="100" strokeDashoffset="0" style={{ transformOrigin: '50px 50px' }} />
          <line x1="15" y1="80" x2="85" y2="80" strokeWidth="1.0" strokeOpacity="0.4" />
          <line x1="85" y1="20" x2="85" y2="80" strokeDasharray="3 3" strokeOpacity="0.3" />
          <line x1="15" y1="80" x2="35" y2="80" strokeWidth="1.0" />
          <circle cx="35" cy="80" r="3.0" className="fill-white/10" />
          <line x1="85" y1="20" x2="55" y2="20" strokeWidth="1.0" />
          <circle cx="55" cy="20" r="3.0" className="fill-white/10" />
        </svg>
      )
    },
    {
      id: "07",
      name: "Figma Canvas",
      category: "UI DESIGN",
      spec: "VECTOR / DESIGN FLOW",
      desc: "Grid vector architecture, components, variables, micro-interaction mockups, design tokens, and developer asset delivery.",
      accentColor: "text-[#f24e1e]",
      hoverBorder: "hover:border-[#f24e1e]/30 hover:shadow-[0_0_25px_rgba(242,78,30,0.06)]",
      glowBg: "bg-[#f24e1e]/10",
      crosshairBorder: "border-[#f24e1e]/40",
      svg: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.2" fill="none">
          <g>
            <circle cx="38" cy="30" r="12" />
            <circle cx="62" cy="30" r="12" />
            <circle cx="38" cy="50" r="12" />
            <circle cx="62" cy="50" r="12" />
            <path d="M26 70 A12 12 0 0038 82 A12 12 0 0038 58 Z" />
          </g>
          <circle cx="50" cy="50" r="44" strokeDasharray="4 4" strokeOpacity="0.2" className="figma-crosshair" style={{ transformOrigin: '50px 50px' }} />
        </svg>
      )
    },
    {
      id: "08",
      name: "Illustrator",
      category: "VECTOR ART",
      spec: "ANCHOR / BEZIER PATH",
      desc: "Anchor node modification, complex geometric profiles, vector tracing, precise asset design, and raw SVG exports.",
      accentColor: "text-[#ff9a00]",
      hoverBorder: "hover:border-[#ff9a00]/30 hover:shadow-[0_0_25px_rgba(255,154,0,0.06)]",
      glowBg: "bg-[#ff9a00]/10",
      crosshairBorder: "border-[#ff9a00]/40",
      svg: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.2" fill="none">
          <rect x="20" y="20" width="60" height="60" rx="4" strokeWidth="1.2" />
          <path d="M25 70 Q50 25 75 45" strokeWidth="2.2" className="ill-path" strokeDasharray="100" strokeDashoffset="0" style={{ transformOrigin: '50px 50px' }} />
          <rect x="47" y="42" width="6" height="6" className="fill-white/10" />
          <line x1="50" y1="45" x2="40" y2="25" strokeWidth="1" strokeOpacity="0.5" />
          <circle cx="40" cy="25" r="2.5" fill="currentColor" />
          <line x1="50" y1="45" x2="60" y2="65" strokeWidth="1" strokeOpacity="0.5" />
          <circle cx="60" cy="65" r="2.5" fill="currentColor" />
        </svg>
      )
    },
    {
      id: "09",
      name: "Photoshop",
      category: "PIXEL STACK",
      spec: "PIXEL GRID / MARQUEE",
      desc: "Raster graphic overlays, image assets correction, compositing workflows, channel filtering, and detailed mockups generation.",
      accentColor: "text-[#31a8ff]",
      hoverBorder: "hover:border-[#31a8ff]/30 hover:shadow-[0_0_25px_rgba(49,168,255,0.06)]",
      glowBg: "bg-[#31a8ff]/10",
      crosshairBorder: "border-[#31a8ff]/40",
      svg: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.2" fill="none">
          <rect x="16" y="16" width="68" height="68" />
          <line x1="33" y1="16" x2="33" y2="84" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="50" y1="16" x2="50" y2="84" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="67" y1="16" x2="67" y2="84" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="16" y1="33" x2="84" y2="33" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="16" y1="50" x2="84" y2="50" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="16" y1="67" x2="84" y2="67" strokeWidth="0.5" strokeOpacity="0.15" />
          <rect x="26" y="26" width="48" height="48" strokeDasharray="3 3" strokeWidth="1.5" className="ps-marquee" />
        </svg>
      )
    },
    {
      id: "10",
      name: "Node.js",
      category: "RUNTIME",
      spec: "V18+ / EVENT-DRIVEN",
      desc: "Asynchronous event-driven JavaScript engine, back-end configurations, custom script automation, and non-blocking package tooling.",
      accentColor: "text-[#6cc24a]",
      hoverBorder: "hover:border-[#6cc24a]/30 hover:shadow-[0_0_25px_rgba(108,194,74,0.06)]",
      glowBg: "bg-[#6cc24a]/10",
      crosshairBorder: "border-[#6cc24a]/40",
      svg: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.2" fill="none">
          <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" className="node-hex" style={{ transformOrigin: '50px 55px' }} />
          <line x1="50" y1="15" x2="50" y2="55" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="50" y1="55" x2="85" y2="75" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="50" y1="55" x2="15" y2="75" strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="50" cy="55" r="3" fill="currentColor" />
          <circle cx="50" cy="15" r="2" fill="currentColor" />
          <circle cx="85" cy="35" r="2" fill="currentColor" />
          <circle cx="85" cy="75" r="2" fill="currentColor" />
          <circle cx="50" cy="95" r="2" fill="currentColor" />
          <circle cx="15" cy="75" r="2" fill="currentColor" />
          <circle cx="15" cy="35" r="2" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="w-full h-full min-h-screen flex flex-col justify-center relative px-4 md:px-8 py-4 select-none bg-transparent text-white overflow-y-auto lg:overflow-hidden"
    >
      {/* Self-contained CSS Animations for Stash items */}
      <style>{`
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-pyramid {
          0% { transform: rotateX(-16deg) rotateY(0deg); }
          100% { transform: rotateX(-16deg) rotateY(360deg); }
        }
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes wave-tailwind {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        @keyframes wave-sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes ants-march {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 6; }
        }
        
        /* Continuous animations (always active while viewing the mural) */
        .react-svg { transform-origin: center; animation: rotate-slow 15s linear infinite; }
        
        .next-circle { transform-origin: center; animation: rotate-slow 20s linear infinite; }
        
        .nuxt-pyramid { transform-style: preserve-3d; animation: spin-pyramid 6s linear infinite; }
        
        .ts-rect { transform-origin: center; animation: scale-pulse 3s ease-in-out infinite; }
        
        .tw-wave { transform-origin: center; animation: wave-tailwind 3s ease-in-out infinite; }
        
        .gsap-path { transform-origin: center; stroke-dasharray: 4 2; animation: ants-march 1.2s linear infinite; }
        
        .figma-crosshair { transform-origin: center; animation: rotate-slow 28s linear infinite; }
        
        .ill-path { transform-origin: center; stroke-dasharray: 4 2; animation: ants-march 1.2s linear infinite; }
        
        .ps-marquee { animation: ants-march 0.5s linear infinite; }
        
        .node-hex { transform-origin: center; animation: scale-pulse 3s ease-in-out infinite; }
      `}</style>

      {/* Futuristic Grid Mural (4 columns, 3 rows on lg screens - perfectly balanced 12 slots) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3 gap-3 md:gap-4 w-full max-w-7xl mx-auto h-auto lg:h-[82vh] content-stretch">
        
        {/* Banner Block (Spans 2 columns on desktop, perfectly completing Row 1 with React & Next.js) */}
        <div className="col-span-1 sm:col-span-2 border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between relative overflow-hidden h-full min-h-[140px] md:min-h-0">
          <div>
            <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-white/30 border-b border-white/10 pb-1 mb-2">
              <span>SYSTEM DATA REFS</span>
              <span>BUILD CODE: v2.6.3</span>
            </div>
            <h2 
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-none uppercase tracking-tighter text-[#f5f5f7]"
              style={{ transform: 'scaleY(1.3)', transformOrigin: 'left center' }}
            >
              Stash
            </h2>
            <p className="text-[9px] font-mono text-white/40 uppercase tracking-widest mt-2">
              Tecnologías, Librerías, Editores & Recursos Técnicos
            </p>
          </div>

          {/* Dots matrix animation */}
          <div className="flex items-center gap-6 my-2">
            <div className="grid grid-cols-10 gap-1.5 opacity-20">
              {Array.from({ length: 30 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 h-1 rounded-full bg-white animate-pulse" 
                  style={{ animationDelay: `${i * 0.08}s`, animationDuration: '2s' }} 
                />
              ))}
            </div>
            <div className="flex-1 h-4 border-l border-b border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-[200%] animate-[wave-sweep_4s_linear_infinite]" />
            </div>
          </div>

          <div className="text-[8px] font-mono text-white/20 flex justify-between border-t border-white/5 pt-2">
            <span>STASH MATRIX INDEX // ACTIVE</span>
            <span>FUTURISTIC PRESS GRID</span>
          </div>
          
          {/* Subtle decoration lines in corner */}
          <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-white/5 pointer-events-none" />
        </div>

        {/* Dynamic blueprints grid blocks with brand-specific glows (10 items) */}
        {stashItems.map((item) => (
          <div 
            key={item.id}
            className={`group relative border border-white/10 bg-black/20 p-3 md:p-4 flex flex-col justify-between transition-all duration-300 ease-out select-none h-full ${item.hoverBorder}`}
          >
            {/* Background Glow Orb */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl rounded-full scale-75 ${item.glowBg}`} style={{ margin: '15%' }} />

            {/* Spec Number Header */}
            <div className="flex justify-between items-start z-10">
              <div className="text-[9px] font-mono text-white/30 group-hover:text-white/60 transition-colors uppercase tracking-wider">
                {item.id} // {item.category}
              </div>
              <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest">
                {item.spec}
              </div>
            </div>

            {/* Illustration Graphic Area */}
            <div className="w-full flex items-center justify-center py-2 my-1 z-10">
              <div className="w-16 h-16 md:w-18 md:h-18 relative flex items-center justify-center">
                <div className={`w-full h-full ${item.accentColor} opacity-40 group-hover:opacity-100 transition-all duration-300`}>
                  {item.svg}
                </div>
                {/* Hover decorative bounding box */}
                <div className={`absolute inset-0 border border-dashed ${item.accentColor}/20 pointer-events-none rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500`} />
              </div>
            </div>

            {/* Text Specs */}
            <div className="border-t border-white/10 pt-2 z-10">
              <h3 className="font-sans font-bold text-xs md:text-sm uppercase tracking-wider text-white transition-colors duration-300">
                <span className={`group-hover:${item.accentColor} transition-colors duration-300`}>
                  {item.name}
                </span>
              </h3>
              <p className="font-mono text-[9px] leading-relaxed text-white/40 group-hover:text-white/65 transition-colors duration-300 mt-1 h-10 overflow-hidden text-ellipsis">
                {item.desc}
              </p>
            </div>

            {/* Tiny technical draft crosshairs in corners */}
            <div className={`absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/20 group-hover:${item.crosshairBorder} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
            <div className={`absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white/20 group-hover:${item.crosshairBorder} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
            <div className={`absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white/20 group-hover:${item.crosshairBorder} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
            <div className={`absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/20 group-hover:${item.crosshairBorder} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
          </div>
        ))}

      </div>
    </div>
  );
}
