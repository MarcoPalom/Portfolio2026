import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import CookingSection from './CookingSection';

interface PortfolioSectionProps {
  scrollProgress: number;
}

interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  color: 'emerald' | 'purple' | 'orange';
  bigText: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: 'INKsports System',
    subtitle: 'Frontend System Showcase',
    description: 'In my first professional role, I co-developed this comprehensive system as a Frontend Developer in a team of two. The platform features a secure login process, role-based access control (RBAC), inventory management with full CRUD systems, and fully optimized responsiveness across all devices.',
    image: '/Screen1.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Ant Design'],
    color: 'purple',
    bigText: 'SPORTS'
  },
  {
    id: 2,
    title: 'FICSM 2024',
    subtitle: 'International Film Festival Portal',
    description: 'Working as a solo developer, I adapted and modernized a deprecated template for the International Film Festival en la Costa del Seno Mexicano. Leveraging a native stack of WordPress, HTML5, CSS3, and JavaScript, I aligned the portal with the festival’s aesthetic expectations for the 2024 season.',
    image: '/Screen2.jpeg',
    tags: ['WordPress', 'JavaScript', 'HTML5', 'CSS3'],
    color: 'purple',
    bigText: 'CINEMA'
  },
  {
    id: 3,
    title: 'ZokiPulse',
    subtitle: 'Fullstack Wellbeing System',
    description: 'As a Fullstack Developer in collaboration with DEVRA software company, I co-developed ZokiPulse, an emotional wellbeing management platform for schools and corporates. I built the landing page and integrated webhooks for user acquisition, and built system features including UUID role-based access, student/employee onboarding, CRUD modules, interactive data charts, questionnaires, key emotional metrics, and secure authentication verified via Resend email API.',
    image: '/Screen3.jpeg',
    tags: ['Nuxt.js', 'Vue.js', 'Webhooks', 'Resend API'],
    color: 'emerald',
    bigText: 'PULSE'
  },
  {
    id: 4,
    title: 'FICSM 2025',
    subtitle: 'Interactive Venue & Event Portal',
    description: 'Developed from scratch for the International Film Festival en la Costa del Seno Mexicano 2025, I built a custom venue and event management web portal using React, Next.js, and Tailwind CSS. The system enables users to easily discover local events near their location via search filters, location tags, and an interactive festival schedule.',
    image: '/Screen4.png',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    color: 'purple',
    bigText: 'VENUE'
  },
  {
    id: 5,
    title: 'Doty Landing Page',
    subtitle: 'Premium Startup Showcase',
    description: 'Representing my most comprehensive design achievement, I developed a modern, high-impact landing page for Doty, a startup co-founded with a friend. Leveraging React, Next.js, and Tailwind CSS, I created sophisticated visuals in Adobe Illustrator and Photoshop, and built complex, fluid scroll-driven animations using GSAP to deliver an immersive product showcase.',
    image: '/Screen5.png',
    tags: ['React', 'Next.js', 'GSAP', 'Tailwind CSS'],
    color: 'orange',
    bigText: 'DOTY'
  }
];

// Color mapping for highlights and borders
const colorThemes = {
  emerald: {
    glowShadow: 'shadow-[0_0_40px_rgba(16,185,129,0.08)]',
    accentText: 'text-emerald-400',
    bgOrb: 'bg-emerald-500/10'
  },
  purple: {
    glowShadow: 'shadow-[0_0_40px_rgba(168,85,247,0.08)]',
    accentText: 'text-purple-400',
    bgOrb: 'bg-purple-500/10'
  },
  orange: {
    glowShadow: 'shadow-[0_0_40px_rgba(249,115,22,0.08)]',
    accentText: 'text-orange-400',
    bgOrb: 'bg-orange-500/10'
  }
};

export default function PortfolioSection({ scrollProgress }: PortfolioSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bigTextRefs = useRef<(HTMLDivElement | null)[]>([]);
  const counterRef = useRef<HTMLDivElement>(null);
  const digitStripRef = useRef<HTMLDivElement>(null);
  const numberWrapperRef = useRef<HTMLDivElement>(null);

  // Active project calculation based on scroll progress
  const activeIdx = scrollProgress > 0.5 ? Math.floor((scrollProgress - 0.5)) : 0;

  useEffect(() => {
    const productsEl = productRefs.current;
    const scrollContainer = scrollContainerRef.current;
    const titleEl = titleRef.current;
    const bigTextsEl = bigTextRefs.current;
    
    const isMobile = window.innerWidth < 768;
    const viewportHeight = window.innerHeight;

    // 1. Smoothly scroll the main list container vertically (120vh space multiplier)
    const spacingHeight = viewportHeight * 1.2;

    gsap.to(scrollContainer, {
      y: -scrollProgress * spacingHeight,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto'
    });

    // 2. Animate main "Portafolio 2026" header to stretch like a magazine cover in the background
    if (scrollProgress <= 1.0) {
      const p = scrollProgress; // 0 to 1
      gsap.to(titleEl, {
        scaleX: 1.0 + p * (isMobile ? 0.6 : 0.9), // stretch to cover viewport width
        scaleY: 1.0 + p * (isMobile ? 1.4 : 2.0), // stretch height massively
        opacity: 1.0 - p * (1.0 - 0.05), // fade out to a subtle background watermark
        y: 0, // stay centered in the background
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto'
      });

      // Fade out the main scroll subtitle
      const mainSubtitle = titleEl?.querySelector('.product-subtitle-main');
      if (mainSubtitle) {
        gsap.to(mainSubtitle, {
          opacity: Math.max(0, 1 - p * 2.5),
          y: p * 40,
          duration: 0.5,
          overwrite: 'auto'
        });
      }
    } else {
      // Lock title in full magazine editorial background state
      gsap.to(titleEl, {
        scaleX: isMobile ? 1.6 : 1.9,
        scaleY: isMobile ? 2.4 : 3.0,
        opacity: 0.05,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto'
      });

      const mainSubtitle = titleEl?.querySelector('.product-subtitle-main');
      if (mainSubtitle) {
        gsap.to(mainSubtitle, {
          opacity: 0,
          y: 40,
          duration: 0.5,
          overwrite: 'auto'
        });
      }
    }

    // 3. Interpolate elastic height stretch based on local Y progress
    productsEl.forEach((wrapper, idx) => {
      if (!wrapper) return;
      
      const img = wrapper.querySelector('.product-img');
      const txt = wrapper.querySelector('.product-text');

      // Local scroll offset relative to viewport center (-1.0 to 1.0)
      const localScroll = scrollProgress - (idx + 1);

      if (scrollProgress === 0.0) {
        // Hide during the initial intro screen to let the title be clean
        gsap.to(wrapper, { opacity: 0, pointerEvents: 'none', duration: 0.4, overwrite: 'auto' });
      } else {
        // Keep fully opaque to create the illusion of a continuous infinite waterfall!
        gsap.to(wrapper, { opacity: 1, pointerEvents: 'auto', duration: 0.4, overwrite: 'auto' });
      }

      const absScroll = Math.abs(localScroll);
      
      // Calculate vertical height stretch based on distance from viewport center
      // Maximum stretch occurs at absScroll = 0.5 (boundary transition)
      const stretchAmount = 0.24 * Math.sin(Math.min(1.0, absScroll) * Math.PI);
      const scaleY = 1.0 + stretchAmount;

      // Subtle vertical parallax scrolling relative to the container scroll
      const yOffset = localScroll * spacingHeight * 0.15;

      if (img) {
        gsap.to(img, {
          y: yOffset,
          scaleY,
          scaleX: 1.0,
          skewY: 0,
          opacity: 1, // Keep fully visible, no fading
          duration: 0.6,
          ease: 'power1.out',
          overwrite: 'auto'
        });
      }

      if (txt) {
        gsap.to(txt, {
          y: yOffset,
          scaleY,
          scaleX: 1.0,
          skewY: 0,
          opacity: 1, // Keep fully visible, no fading
          duration: 0.6,
          ease: 'power1.out',
          overwrite: 'auto'
        });
      }

      if (bigTextsEl[idx]) {
        const bigTextYOffset = localScroll * 120;
        gsap.to(bigTextsEl[idx], { 
          opacity: scrollProgress === 0 ? 0 : 0.04, 
          y: bigTextYOffset, 
          scaleY: 1.0 + stretchAmount * 0.5,
          duration: 0.6, 
          ease: 'power1.out',
          overwrite: 'auto' 
        });
      }
    });
  }, [scrollProgress]);

  // Derived step for display counter shifting at midpoint of transitions (up to products.length + 1)
  const displayStep = Math.min(
    products.length + 1,
    scrollProgress <= 1.5 ? 1 : Math.floor(scrollProgress - 0.5) + 1
  );

  useEffect(() => {
    // 1. Animate overall counter container visibility
    const showCounter = scrollProgress >= 0.3 && scrollProgress <= products.length + 1.1;
    gsap.to(counterRef.current, {
      opacity: showCounter ? 1 : 0,
      y: showCounter ? 0 : 20, // subtle slide up/down entrance
      pointerEvents: showCounter ? 'auto' : 'none',
      duration: 0.4,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  }, [scrollProgress, displayStep]);

  useEffect(() => {
    // 2. Animate the rolling digit strip (old mechanical odometer style)
    if (digitStripRef.current) {
      const targetPercent = -((Math.min(products.length, displayStep) - 1) / products.length) * 100;
      gsap.to(digitStripRef.current, {
        yPercent: targetPercent,
        duration: 0.7,
        ease: 'back.out(1.6)', // tactile overshoot bounce
        overwrite: 'auto'
      });
    }
  }, [displayStep]);

  useEffect(() => {
    // 3. Morph transition (/ turns to X, collapses to crossed logs, ignites fire)
    const isCooking = displayStep === products.length + 1;
    const el = numberWrapperRef.current;
    if (!el) return;

    const leftParts = el.querySelectorAll('.num-left, .num-digit');
    const rightPart = el.querySelector('.num-right');
    const log2 = el.querySelector('.log-line-2');
    const logsGroup = el.querySelector('.logs-group');
    const flames = el.querySelectorAll('.log-flame');

    const tl = gsap.timeline({ overwrite: 'auto' });

    if (isCooking) {
      // Phase 1: Collapse the numbers into the center (0.4s)
      tl.to(leftParts, {
        x: 16,
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in'
      }, 0);

      tl.to(rightPart, {
        x: -24,
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in'
      }, 0);

      // Phase 2: Grow the opposite log diagonal "\" from the center crossing point
      tl.fromTo(log2, 
        { attr: { x1: 10, y1: 10, x2: 10, y2: 10 }, opacity: 0 },
        {
          attr: { x1: 4, y1: 3, x2: 16, y2: 17 },
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out'
        },
        0.25
      );

      // Phase 3: Bend/Squish the logs group downward to look like logs on ground
      tl.to(logsGroup, {
        scaleY: 0.4,
        scaleX: 1.3,
        duration: 0.4,
        ease: 'back.out(1.5)'
      });

      // Phase 4: Light the fire (sprout flames from logs base)
      tl.fromTo(flames,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.45,
          ease: 'back.out(1.8)',
          stagger: 0.1
        },
        '-=0.1' // overlap slightly with log collapse
      );
    } else {
      // Reverse animation: Extinguish fire, restore logs, remove diagonal slash, bring back digits
      tl.to(flames, {
        scale: 0,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in'
      }, 0);

      tl.to(logsGroup, {
        scaleY: 1.0,
        scaleX: 1.0,
        duration: 0.3,
        ease: 'power2.inOut'
      }, 0.15);

      tl.to(log2, {
        attr: { x1: 10, y1: 10, x2: 10, y2: 10 },
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      }, 0.3);

      tl.to(leftParts, {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(1.4)'
      }, 0.45);

      tl.to(rightPart, {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(1.4)'
      }, 0.45);
    }
  }, [displayStep]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full min-h-screen flex flex-col items-center justify-center relative select-none bg-transparent overflow-hidden"
    >
      {/* Self-contained CSS for the odometer custom styles */}
      <style>{`
        @keyframes counter-icon-shift {
          0%, 100% { color: rgb(249, 115, 22); }
          25% { color: rgb(139, 92, 246); }
          50% { color: rgb(6, 182, 212); }
          75% { color: rgb(236, 72, 153); }
        }
      `}</style>
      {/* Background Glowing Orbs */}
      <div className="absolute top-[20%] left-[20%] w-[50%] h-[50%] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[45%] h-[45%] bg-brand-700/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Glowing highlight orb mapped to active index */}
      <div 
        className={`absolute w-[40%] h-[40%] rounded-full blur-[150px] pointer-events-none transition-all duration-1000 ease-in-out ${
          activeIdx === 0 ? 'top-[20%] left-[20%] bg-purple-500/10' :
          activeIdx === 1 ? 'top-[20%] right-[20%] bg-purple-500/10' :
          activeIdx === 2 ? 'bottom-[20%] left-[20%] bg-emerald-500/10' :
          activeIdx === 3 ? 'bottom-[20%] right-[20%] bg-purple-500/10' :
          activeIdx === 4 ? 'top-[20%] left-[20%] bg-orange-500/10' :
          'top-[20%] left-[20%] bg-transparent'
        }`} 
      />

      {/* Giant Cyberpunk Background Typography */}
      {products.map((product, idx) => (
        <div
          key={`bg-text-${product.id}`}
          ref={(el) => { bigTextRefs.current[idx] = el; }}
          className="absolute font-display text-[22vw] uppercase leading-none select-none pointer-events-none opacity-0 z-0 tracking-widest"
          style={{
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.05)',
            color: 'transparent',
            left: idx % 2 === 0 ? '8%' : 'auto',
            right: idx % 2 === 1 ? '8%' : 'auto',
            top: '30%',
          }}
        >
          {product.bigText}
        </div>
      ))}

      {/* Main Title Container */}
      <div 
        ref={titleRef} 
        className="flex flex-col items-center justify-center text-center z-0 pointer-events-none absolute"
        style={{ transformOrigin: 'center center' }}
      >
        <h1 
          className="font-display text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-[0.8] uppercase text-[#f5f5f7] tracking-tighter" 
          style={{ 
            transform: 'scaleY(1.4)', 
            transformOrigin: 'center center',
            letterSpacing: '-0.04em'
          }}
        >
          Portafolio 2026
        </h1>
        <p className="text-sm sm:text-base lg:text-lg font-light text-white/30 uppercase tracking-widest mt-6 md:mt-8 font-sans product-subtitle-main flex items-center justify-center">
          <span>Desliza para explorar</span>
          <span className="w-2.5 h-2.5 border border-white/35 inline-block mx-4" style={{ borderWidth: '1.5px' }} />
          <span>Diseños</span>
          <span className="w-2.5 h-2.5 border border-white/35 inline-block mx-4" style={{ borderWidth: '1.5px' }} />
          <span>Desarrollos</span>
        </p>
      </div>

      {/* Vertical Continuous Scroll Container */}
      <div 
        ref={scrollContainerRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      >
        {products.map((product, idx) => {
          const theme = colorThemes[product.color];
          
          return (
            <div
              key={product.id}
              ref={(el) => { productRefs.current[idx] = el; }}
              className="absolute left-0 w-full h-full flex items-center justify-center pointer-events-none"
              style={{ top: `${(idx + 1) * 120}vh` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center w-full max-w-6xl mx-auto px-6 pointer-events-auto">
                
                {/* Staggered Image column with rounded glass frame */}
                <div className={`md:col-span-7 ${idx % 2 === 1 ? 'md:order-2' : ''} w-full flex justify-center product-img`} style={{ transformOrigin: 'center center' }}>
                  <div className={`p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] ${theme.glowShadow} w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[380px] overflow-hidden group hover:border-white/20 transition-all duration-500 ease-out`}>
                    <div className="w-full h-full overflow-hidden rounded-[1.5rem]">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out pointer-events-none" 
                      />
                    </div>
                  </div>
                </div>

                {/* Text info column */}
                <div className={`md:col-span-5 ${idx % 2 === 1 ? 'md:order-1' : ''} flex flex-col gap-3 text-left product-text px-4 md:px-0`} style={{ transformOrigin: 'left center' }}>
                  <span className={`w-3.5 h-3.5 border border-current block mb-0.5 opacity-85 ${theme.accentText}`} style={{ borderWidth: '1.5px' }} />
                  <span className={`text-xs font-sans font-bold tracking-widest uppercase ${theme.accentText}`}>
                    {product.subtitle}
                  </span>
                  
                  <h3 
                    className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white leading-[0.9] mt-1"
                    style={{ 
                      transformOrigin: 'left center',
                      letterSpacing: '-0.02em',
                      transform: 'scaleY(1.2)'
                    }}
                  >
                    {product.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-white/85 font-mono uppercase tracking-wider mt-3 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {product.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] font-sans font-medium text-white/40 bg-white/5 px-2.5 py-1 rounded border border-white/5 select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}

        {/* Cooking Section (Bonfire slide at the end) */}
        <div 
          className="absolute left-0 w-full h-full flex items-center justify-center pointer-events-none"
          style={{ top: `${(products.length + 1) * 120}vh` }}
        >
          <CookingSection scrollProgress={scrollProgress} />
        </div>
      </div>

      {/* Step indicator in corner (mechanical roulette style) */}
      <div 
        ref={counterRef}
        className="absolute bottom-8 right-8 text-white/25 font-display text-4xl select-none z-20 flex items-center justify-center opacity-0 pointer-events-none w-28 h-10"
        style={{ lineHeight: '1' }}
      >
        <div ref={numberWrapperRef} className="flex items-center justify-center w-full h-full">
          <span className="num-left text-white/60">0</span>
          <div className="num-digit relative h-[1em] overflow-hidden w-[0.62em] flex flex-col justify-start">
            <div 
              ref={digitStripRef} 
              className="absolute top-0 left-0 flex flex-col items-center justify-start"
              style={{ width: '100%' }}
            >
              {Array.from({ length: products.length }, (_, idx) => (
                <span key={idx + 1} className="text-white/60 h-[1em] flex items-center justify-center">
                  {idx + 1}
                </span>
              ))}
            </div>
          </div>
          
          {/* Morphing Divider SVG (The / that morphs into a bonfire) */}
          <div className="num-divider-svg relative w-[0.8em] h-[1.1em] mx-1">
            <svg viewBox="0 0 20 20" className="w-full h-full stroke-current fill-none" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round">
              {/* Crossed Logs */}
              <g className="logs-group" stroke="rgba(255, 255, 255, 0.65)" style={{ transformOrigin: '10px 17px' }}>
                <line x1="16" y1="3" x2="4" y2="17" className="log-line-1" />
                <line x1="4" y1="3" x2="16" y2="17" className="log-line-2" style={{ opacity: 0 }} />
              </g>
              {/* Flame shapes (Ignite color shifting) */}
              <g className="animate-[counter-icon-shift_12s_linear_infinite]" style={{ transformOrigin: '10px 14px' }}>
                <path d="M6 14 Q10 2 10 2 Q10 2 14 14" className="log-flame" style={{ opacity: 0 }} />
                <path d="M8 14 Q10 7 10 7 Q10 7 12 14" className="log-flame" style={{ opacity: 0 }} />
              </g>
            </svg>
          </div>

          <span className="num-right">0{products.length}</span>
        </div>
      </div>
    </div>
  );
}
