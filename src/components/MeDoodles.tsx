import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ReliableIcon from './Me/icons/ReliableIcon';
import FastLearnerIcon from './Me/icons/FastLearnerIcon';
import CalmIcon from './Me/icons/CalmIcon';
import FunnyIcon from './Me/icons/FunnyIcon';
import ReliableDiagram from './Me/diagrams/ReliableDiagram';
import FastLearnerDiagram from './Me/diagrams/FastLearnerDiagram';
import CalmDiagram from './Me/diagrams/CalmDiagram';
import FunnyDiagram from './Me/diagrams/FunnyDiagram';

interface DoodleProps {
  className?: string;
}

// ─── Me SVG Doodles ──────────────────────────────────────────────────

// 1. Shield Doodle (Reliable / Confiable)
const ShieldDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      <path 
        d="M 80,20 C 105,20 120,28 120,28 L 120,58 C 120,78 98,90 80,94 C 62,90 40,78 40,58 L 40,28 C 40,28 55,20 80,20 Z" 
        className="animate-[pulse_3s_infinite_alternate]"
      />
      {/* Outer defense rings */}
      <circle cx="80" cy="54" r="28" strokeDasharray="2 4" className="opacity-40 animate-[spinTape_15s_linear_infinite]" />
      
      {/* Inner tick detail */}
      <path d="M 68,54 L 76,62 L 94,44" strokeWidth="1.6" className="stroke-[#f59e0b] animate-[drawCircle_4s_infinite]" />
    </svg>
  </div>
);

// 2. Anchor Doodle (Reliable / Confiable)
const AnchorDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      <g className="origin-[80px_20px] animate-[compassDraft_6s_infinite_ease-in-out]">
        {/* Ring & Shaft */}
        <circle cx="80" cy="25" r="8" />
        <line x1="80" y1="33" x2="80" y2="78" />
        <line x1="62" y1="46" x2="98" y2="46" />
        
        {/* Curved hooks */}
        <path d="M 52,62 C 52,86 108,86 108,62" strokeWidth="1.5" />
        <path d="M 48,62 L 56,62" />
        <path d="M 104,62 L 112,62" />
        <circle cx="80" cy="80" r="3.5" fill="white" />
        
        {/* Chain wraps */}
        <path d="M 74,27 C 72,35 88,38 80,48 C 72,58 88,62 80,72" strokeDasharray="3 2" className="opacity-60" />
      </g>
    </svg>
  </div>
);

// 3. Rocket Doodle (Fast Learner / Aprendizaje Rápido)
const RocketDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      <g className="animate-[sneakerBounce_2s_infinite_ease-in-out]">
        {/* Diagonal Rocket blasting off to top-right */}
        <g transform="translate(80, 50) rotate(45) translate(-80, -50)">
          <path d="M 80,20 C 80,20 92,30 92,52 L 92,72 L 68,72 L 68,52 C 68,30 80,20 80,20 Z" />
          <path d="M 68,60 L 56,72 L 68,72" />
          <path d="M 92,60 L 104,72 L 92,72" />
          
          {/* Flame lines with flicker animation */}
          <path d="M 74,74 L 80,88 L 86,74" className="stroke-[#f59e0b] animate-[pulse_0.15s_infinite_alternate]" />
          <path d="M 77,74 L 80,82 L 83,74" className="stroke-white animate-[pulse_0.2s_infinite_alternate]" />
        </g>
        
        {/* Motion/speed trails */}
        <line x1="30" y1="80" x2="50" y2="60" strokeDasharray="2 3" className="opacity-40" />
        <line x1="45" y1="85" x2="60" y2="70" strokeDasharray="2 3" className="opacity-40" />
      </g>
    </svg>
  </div>
);

// 4. Brain Doodle (Fast Learner / Aprendizaje Rápido)
const BrainDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      {/* Brain Outline hemispheres */}
      <path d="M 80,25 C 65,25 55,32 55,46 C 55,54 60,58 65,62 C 60,66 60,74 72,74 C 76,74 80,72 80,68 C 80,72 84,74 88,74 C 100,74 100,66 95,62 C 100,58 105,54 105,46 C 105,32 95,25 80,25 Z" />
      <path d="M 80,25 L 80,68" strokeDasharray="2 2" className="opacity-50" />
      
      {/* Spark nodes blinking */}
      <g fill="#f59e0b" stroke="none">
        <circle cx="68" cy="38" r="2.5" className="animate-[blink_1.2s_infinite]" />
        <circle cx="92" cy="38" r="2.5" className="animate-[blink_1.2s_infinite_0.4s]" />
        <circle cx="64" cy="52" r="2.5" className="animate-[blink_1.2s_infinite_0.8s]" />
        <circle cx="96" cy="52" r="2.5" className="animate-[blink_1.2s_infinite_0.2s]" />
        <circle cx="80" cy="46" r="2.5" className="animate-[blink_1.2s_infinite_0.6s]" />
      </g>
      
      {/* Neural connect lines */}
      <line x1="68" y1="38" x2="80" y2="46" strokeWidth="0.8" className="opacity-40" />
      <line x1="92" y1="38" x2="80" y2="46" strokeWidth="0.8" className="opacity-40" />
      <line x1="64" y1="52" x2="80" y2="46" strokeWidth="0.8" className="opacity-40" />
      <line x1="96" y1="52" x2="80" y2="46" strokeWidth="0.8" className="opacity-40" />
    </svg>
  </div>
);

// 5. Zen Doodle (Calmado / Calm)
const ZenDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      {/* Concentric ripples from center water drop */}
      <circle cx="80" cy="50" r="4" fill="white" className="animate-[pulse_2s_infinite]" />
      <circle cx="80" cy="50" r="16" className="stroke-[#f59e0b] animate-[drawCircle_4s_infinite_ease-out]" strokeDasharray="100" strokeDashoffset="100" />
      <circle cx="80" cy="50" r="32" strokeDasharray="4 4" className="opacity-40 animate-[spinTape_25s_linear_infinite]" />
      <circle cx="80" cy="50" r="44" className="stroke-white/50 animate-[drawCircle_4s_infinite_ease-out_1.5s]" strokeDasharray="300" strokeDashoffset="300" />
    </svg>
  </div>
);

// 6. Cloud Doodle (Calmado / Calm)
const CloudDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      {/* Breathing Cloud silhouette */}
      <path 
        d="M 50,65 Q 40,65 42,52 Q 44,38 58,40 Q 64,28 78,30 Q 94,28 98,42 Q 112,42 110,55 Q 110,65 96,65 Z" 
        className="animate-[sneakerBounce_4s_infinite_ease-in-out]" 
      />
      {/* Soft wind/breeze lines flowing underneath */}
      <path d="M 36,75 L 124,75" strokeDasharray="5 5" className="opacity-30 animate-[flyPlane_8s_infinite_linear]" />
      <path d="M 44,82 L 108,82" strokeDasharray="3 4" className="opacity-20 animate-[flyPlane_6s_infinite_linear_1s]" />
    </svg>
  </div>
);

// 7. Smile Doodle (Gracioso / Funny)
const SmileDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      {/* Handdrawn happy smiley */}
      <circle cx="80" cy="50" r="28" />
      
      {/* Left eye wink path, Right eye dot */}
      <path d="M 66,45 Q 70,41 74,45" className="stroke-[1.5]" />
      <circle cx="92" cy="45" r="2.5" fill="white" />
      
      {/* Happy open tongue smile */}
      <path d="M 66,58 C 66,58 80,72 94,58 Z" fill="none" />
      
      {/* Sparkles */}
      <g stroke="#f59e0b" strokeWidth="1" className="animate-[pulse_1.5s_infinite_alternate]">
        {/* Top-Right Sparkle */}
        <line x1="115" y1="24" x2="115" y2="32" />
        <line x1="111" y1="28" x2="119" y2="28" />
      </g>
      <g stroke="#f59e0b" strokeWidth="1" className="animate-[pulse_1.5s_infinite_alternate_0.7s]">
        {/* Bottom-Left Sparkle */}
        <line x1="45" y1="68" x2="45" y2="76" />
        <line x1="41" y1="72" x2="49" y2="72" />
      </g>
    </svg>
  </div>
);


export default function MeDoodles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('.doodle-item');
    if (items) {
      items.forEach((item, index) => {
        gsap.to(item, {
          y: 'random(-10, 10)',
          x: 'random(-6, 6)',
          duration: 'random(3.0, 5.0)',
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: index * 0.25
        });
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-10">
      
      {/* 
        Irregular, spaced-out collage layout without any diagonal rotations or overlaps:
        - All elements are perfectly straight (rotate-0).
        - Explicitly separated vertical and horizontal coordinates prevent overlaps.
        - Sizes vary organically (different widths and heights).
        - Bound below 'ME' text (top > 64vh) and outside the central photo.
      */}

      {/* ─── DESKTOP COLLAGE VIEW ─── */}

      {/* ─── LEFT COLLAGE AREA (Reliable & Fast Learner) ─── */}

      {/* Row 1: Shield Doodle & Reliable Icon */}
      <ShieldDoodle className="absolute left-[4vw] top-[64vh] w-[130px]" />
      <div className="doodle-item absolute left-[17vw] top-[64vh] w-[70px] pointer-events-auto select-none">
        <ReliableIcon />
      </div>

      {/* Row 2: Reliable Diagram & Anchor Doodle */}
      <div className="doodle-item absolute left-[11vw] top-[73vh] w-[75px] pointer-events-auto select-none">
        <ReliableDiagram />
      </div>
      <AnchorDoodle className="absolute left-[3vw] top-[75vh] w-[100px]" />

      {/* Row 3: Rocket Doodle & Fast Learner Icon */}
      <RocketDoodle className="absolute left-[13vw] top-[83vh] w-[110px]" />
      <div className="doodle-item absolute left-[4vw] top-[84vh] w-[75px] pointer-events-auto select-none">
        <FastLearnerIcon />
      </div>

      {/* Row 4: Fast Learner Diagram */}
      <div className="doodle-item absolute left-[10vw] top-[91vh] w-[75px] pointer-events-auto select-none">
        <FastLearnerDiagram />
      </div>


      {/* ─── RIGHT COLLAGE AREA (Calm & Funny) ─── */}

      {/* Row 1: Zen Doodle & Calm Icon */}
      <ZenDoodle className="absolute right-[16vw] top-[64vh] w-[120px]" />
      <div className="doodle-item absolute right-[4vw] top-[64vh] w-[80px] pointer-events-auto select-none">
        <CalmIcon />
      </div>

      {/* Row 2: Calm Diagram & Cloud Doodle */}
      <div className="doodle-item absolute right-[10vw] top-[73vh] w-[75px] pointer-events-auto select-none">
        <CalmDiagram />
      </div>
      <CloudDoodle className="absolute right-[18vw] top-[74vh] w-[100px]" />

      {/* Row 3: Smile Doodle & Funny Icon */}
      <SmileDoodle className="absolute right-[3vw] top-[81vh] w-[120px]" />
      <div className="doodle-item absolute right-[16vw] top-[82vh] w-[75px] pointer-events-auto select-none">
        <FunnyIcon />
      </div>

      {/* Row 4: Brain Doodle & Funny Diagram */}
      <BrainDoodle className="absolute right-[11vw] top-[90vh] w-[110px]" />
      <div className="doodle-item absolute right-[3vw] top-[90vh] w-[75px] pointer-events-auto select-none">
        <FunnyDiagram />
      </div>


      {/* ─── MOBILE COLLAGE VIEW (sitting in the free area top-[5vh] to top-[38vh]) ─── */}
      <div className="md:hidden absolute inset-0 w-full h-full pointer-events-none">
        {/* Reliable Trio Mobile */}
        <ShieldDoodle className="absolute left-[3vw] top-[6vh] w-[60px]" />
        <div className="doodle-item absolute left-[20vw] top-[6vh] w-[30px] pointer-events-auto select-none">
          <ReliableIcon />
        </div>
        <div className="doodle-item absolute left-[29vw] top-[6vh] w-[40px] pointer-events-auto select-none">
          <ReliableDiagram />
        </div>

        {/* Fast Learner Trio Mobile */}
        <RocketDoodle className="absolute right-[3vw] top-[6vh] w-[60px]" />
        <div className="doodle-item absolute right-[20vw] top-[5vh] w-[30px] pointer-events-auto select-none">
          <FastLearnerIcon />
        </div>
        <div className="doodle-item absolute right-[29vw] top-[6vh] w-[40px] pointer-events-auto select-none">
          <FastLearnerDiagram />
        </div>

        {/* Calm Trio Mobile */}
        <div className="doodle-item absolute left-[3vw] top-[16vh] w-[32px] pointer-events-auto select-none">
          <CalmIcon />
        </div>
        <div className="doodle-item absolute left-[12vw] top-[16vh] w-[35px] pointer-events-auto select-none">
          <CalmDiagram />
        </div>
        <ZenDoodle className="absolute left-[22vw] top-[16vh] w-[60px]" />

        {/* Funny Trio Mobile */}
        <div className="doodle-item absolute right-[3vw] top-[16vh] w-[32px] pointer-events-auto select-none">
          <FunnyIcon />
        </div>
        <div className="doodle-item absolute right-[12vw] top-[16vh] w-[35px] pointer-events-auto select-none">
          <FunnyDiagram />
        </div>
        <SmileDoodle className="absolute right-[22vw] top-[16vh] w-[60px]" />

        {/* Extra Doodles Mobile */}
        <AnchorDoodle className="absolute left-[4vw] top-[27vh] w-[60px]" />
        <BrainDoodle className="absolute right-[4vw] top-[27vh] w-[60px]" />
        <CloudDoodle className="absolute left-[36vw] top-[27vh] w-[60px]" />
      </div>


      {/* ── Custom SVG Animations ───────────────────────────────────── */}
      <style>{`
        /* Hide mobile doodles on desktop screen widths */
        @media (min-width: 768px) {
          .md\\:hidden {
            display: none !important;
          }
        }
        /* Hide desktop doodles on mobile screen widths */
        @media (max-width: 767px) {
          .absolute.left-\\[4vw\\],
          .absolute.left-\\[17vw\\],
          .absolute.left-\\[11vw\\],
          .absolute.left-\\[3vw\\],
          .absolute.left-\\[13vw\\],
          .absolute.left-\\[10vw\\],
          .absolute.right-\\[16vw\\],
          .absolute.right-\\[4vw\\],
          .absolute.right-\\[10vw\\],
          .absolute.right-\\[18vw\\],
          .absolute.right-\\[3vw\\],
          .absolute.right-\\[11vw\\] {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
