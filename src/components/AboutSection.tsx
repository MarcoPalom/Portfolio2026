import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HobbiesDoodles from './HobbiesDoodles';
import InterestsDoodles from './InterestsDoodles';
import MeDoodles from './MeDoodles';
import IfYouEvenCareButton from './IfYouEvenCareButton';

// ─── 4 full-viewport background panels with unique identity ────────────────────
const PANELS = [
  {
    // Panel 0 (intro) — the base that shows during title fill-up
    bg: 'radial-gradient(ellipse at 50% 60%, #0f4d35 0%, #06241a 50%, #020e08 100%)',
    accent: '#10b981',
    title: '',
    subtitle: '',
  },
  {
    // Panel 1 — MIS HOBBYS
    bg: 'radial-gradient(ellipse at 50% 60%, #1a1a6e 0%, #0c0c3d 50%, #050518 100%)',
    accent: '#6366f1',
    title: 'MIS HOBBYS',
    subtitle: 'Lo que me apasiona fuera del código',
  },
  {
    // Panel 2 — MIS GUSTOS
    bg: 'radial-gradient(ellipse at 50% 60%, #6b1d5e 0%, #2d0a27 50%, #120410 100%)',
    accent: '#ec4899',
    title: 'MIS GUSTOS',
    subtitle: 'Las cosas que definen mi estilo',
  },
  {
    // Panel 3 — YO
    bg: 'radial-gradient(ellipse at 50% 60%, #7a3f14 0%, #241206 50%, #0e0804 100%)',
    accent: '#f59e0b',
    title: 'YO',
    subtitle: 'Quién soy más allá del trabajo',
  },
];

const PANEL_COUNT = PANELS.length;

const TITLES = [
  'ABOUT ME',
  'MY HOBBYS',
  'MY INTERESTS',
  'ME'
];

interface AboutSectionProps {
  scrollProgress: number; // 0.0 → 4.0
}

export default function AboutSection({ scrollProgress }: AboutSectionProps) {
  const panelTrackRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const isFirstRender = useRef(true);

  // ── Scroll the background panel track ───────────────────────────────────────
  // Translates the track container vertically like in PortfolioSection
  useEffect(() => {
    const track = panelTrackRef.current;
    if (!track) return;

    const viewportHeight = window.innerHeight;
    // Keep background static at Panel 0 during title animation (0->1)
    // and translate by 100vh for each subsequent step (1->4)
    const panelScroll = Math.min(PANELS.length - 1, Math.max(0, scrollProgress - 1));
    const yTarget = -panelScroll * viewportHeight;

    gsap.to(track, {
      y: yTarget,
      duration: 0.2,
      ease: 'none',
      overwrite: 'auto',
    });
  }, [scrollProgress]);

  // ── Image entrance (only during first panel 0→1) ────────────────────────────
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const introProgress = Math.min(scrollProgress, 1);
    gsap.to(img, {
      y: (1 - introProgress) * 45,
      duration: 0.2,
      ease: 'none',
      overwrite: 'auto',
    });
  }, [scrollProgress]);

  // ── Title fill-up animation (only during first panel 0→1) ──────────────────
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const introProgress = Math.min(scrollProgress, 1);

    if (isFirstRender.current) {
      isFirstRender.current = false;
      gsap.set(title, { '--fill-percent': `${introProgress * 100}%` });
    } else {
      gsap.to(title, {
        '--fill-percent': `${introProgress * 100}%`,
        duration: 0.2,
        ease: 'none',
        overwrite: 'auto',
      });
    }
  }, [scrollProgress]);

  // ── Scroll the titles to keep them fixed relative to viewport (reveal-clip effect) ──
  useEffect(() => {
    const titleEls = titleRefs.current;
    const viewportHeight = window.innerHeight;
    const panelScroll = Math.min(PANELS.length - 1, Math.max(0, scrollProgress - 1));
    const introProgress = Math.min(scrollProgress, 1);
    const followOffset = (1 - introProgress) * 45;

    titleEls.forEach((el, idx) => {
      if (!el) return;

      // Compensate parent track translation to keep the title fixed in the viewport,
      // plus the followOffset for the first title during the intro phase.
      const yTarget = (panelScroll - idx) * viewportHeight + (idx === 0 ? followOffset : 0);

      gsap.to(el, {
        y: yTarget,
        duration: 0.2,
        ease: 'none',
        overwrite: 'auto',
      });
    });
  }, [scrollProgress]);



  return (
    <div className="w-full h-full min-h-screen relative select-none text-white overflow-hidden">

      {/* Self-contained CSS */}
      <style>{`
        .fill-up-text {
          --fill-percent: 0%;
          background: linear-gradient(
            to top, 
            #ffffff 0%, 
            #ffffff var(--fill-percent, 0%), 
            transparent var(--fill-percent, 0%), 
            transparent 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.25);
        }
        .about-bg-title {
          position: absolute;
          left: 0;
          width: 100%;
          text-align: center;
          top: 12vh;
          font-size: 14vw;
          transform: scale(1.2);
          transform-origin: top center;
        }
        @media (min-width: 768px) {
          .about-bg-title {
            top: auto;
            bottom: 36vh;
            font-size: 15vw;
            transform: scale(1.75);
            transform-origin: bottom center;
          }
        }
      `}</style>

      {/* ═══════ SCROLLING BACKGROUND TRACK ═══════
           4 stacked full-screen panels. The entire track translates up
           behind the pinned model, like the Zara effect. */}
      <div
        ref={panelTrackRef}
        className="absolute inset-x-0 top-0 w-full pointer-events-none z-0"
        style={{ height: `${PANEL_COUNT * 100}vh` }}
      >
        {PANELS.map((panel, i) => (
          <div
            key={i}
            className="relative w-full overflow-hidden"
            style={{
              height: '100vh',
              background: panel.bg,
            }}
          >
            {/* Atmospheric glow blob — HIDDEN on mobile (blur extremely expensive) */}
            <div
              className="hidden md:block absolute left-1/2 -translate-x-1/2 rounded-full blur-[140px] md:blur-[200px] pointer-events-none"
              style={{
                bottom: '25vh',
                width: '60vw',
                height: '60vw',
                maxWidth: '850px',
                maxHeight: '850px',
                backgroundColor: panel.accent,
                opacity: 0.25,
              }}
            />

            {/* Panel separator line */}
            {i > 0 && (
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${panel.accent}40, transparent)`,
                }}
              />
            )}

            {/* Title behind head for this panel */}
            <h1
              ref={(el) => {
                titleRefs.current[i] = el;
                if (i === 0) {
                  (titleRef as any).current = el;
                }
              }}
              className="about-bg-title font-display font-black uppercase select-none leading-none z-0 pointer-events-none whitespace-nowrap fill-up-text"
              style={{
                '--fill-percent': i === 0 ? undefined : '100%',
              } as any}
            >
              {TITLES[i]}
            </h1>

            {/* Render HobbiesDoodles only on panel 1 (MIS HOBBYS) — conditionally to save GPU */}
            {i === 1 && scrollProgress > 1.2 && scrollProgress < 2.8 && <HobbiesDoodles />}

            {/* Render InterestsDoodles only on panel 2 (MIS GUSTOS / MY INTERESTS) — conditionally */}
            {i === 2 && scrollProgress > 2.2 && scrollProgress < 3.8 && <InterestsDoodles />}

            {/* Render MeDoodles only on panel 3 (YO / ME) — conditionally */}
            {i === 3 && scrollProgress > 3.2 && <MeDoodles />}
          </div>
        ))}
      </div>

      {/* ═══════ PINNED CONTENT (stays fixed in place) ═══════ */}
      <div className="absolute inset-0 flex items-end justify-center z-10 px-0 md:px-8">



        {/* Photo container — pinned at the bottom */}
        <div
          ref={imgRef}
          className="w-full h-[55vh] sm:w-[70vw] sm:h-[75vh] md:w-[45vw] md:h-[85vh] overflow-hidden z-10 relative"
        >
          <img
            src="/Marco1.webp"
            alt="Marco"
            loading="lazy"
            className="w-full h-full object-cover object-[50%_15%]"
          />
        </div>
      </div>

      {/* Fixed "if you even care" hover carousel button */}
      <IfYouEvenCareButton scrollProgress={scrollProgress} />
    </div>
  );
}
