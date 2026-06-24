import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MusicIcon from './Interests/icons/MusicIcon';
import DesignIcon from './Interests/icons/DesignIcon';
import TravelIcon from './Interests/icons/TravelIcon';
import SneakerIcon from './Interests/icons/SneakerIcon';
import MusicDiagram from './Interests/diagrams/MusicDiagram';
import DesignDiagram from './Interests/diagrams/DesignDiagram';
import TravelDiagram from './Interests/diagrams/TravelDiagram';
import SneakerDiagram from './Interests/diagrams/SneakerDiagram';

interface DoodleProps {
  className?: string;
}

// ─── Interest SVG Doodles ───────────────────────────────────────────

// 1. Cassette Doodle (Music)
const CassetteDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      <rect x="25" y="25" width="110" height="58" rx="6" />
      <rect x="35" y="32" width="90" height="28" rx="2" />
      
      {/* Tape Reels with spinning animation */}
      <g className="origin-[58px_46px] animate-[spinTape_6s_linear_infinite]">
        <circle cx="58" cy="46" r="10" strokeDasharray="3 3" />
        <circle cx="58" cy="46" r="3" fill="white" />
        <line x1="58" y1="36" x2="58" y2="56" />
        <line x1="48" y1="46" x2="68" y2="46" />
      </g>
      <g className="origin-[102px_46px] animate-[spinTape_6s_linear_infinite]">
        <circle cx="102" cy="46" r="10" strokeDasharray="3 3" />
        <circle cx="102" cy="46" r="3" fill="white" />
        <line x1="102" y1="36" x2="102" y2="56" />
        <line x1="92" y1="46" x2="112" y2="46" />
      </g>

      <path d="M 58,46 L 102,46" strokeDasharray="2 3" className="opacity-40" />
      <polygon points="45,83 115,83 105,73 55,73" />
      <circle cx="35" cy="73" r="2.5" />
      <circle cx="125" cy="73" r="2.5" />
    </svg>
  </div>
);

// 2. Headphones Doodle (Music)
const HeadphonesDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      {/* Headband */}
      <path d="M 50,55 A 30,30 0 0,1 110,55" strokeWidth="1.5" />
      
      {/* Earcups */}
      <rect x="40" y="50" width="12" height="22" rx="4" />
      <rect x="108" y="50" width="12" height="22" rx="4" />
      
      {/* Internal detail */}
      <line x1="46" y1="50" x2="46" y2="72" strokeDasharray="1 2" />
      <line x1="114" y1="50" x2="114" y2="72" strokeDasharray="1 2" />
      
      {/* Soundwaves pulsing */}
      <path d="M 28,50 A 15,15 0 0,0 28,72" className="stroke-[#ec4899] animate-[wavePulse_2s_infinite]" />
      <path d="M 20,44 A 23,23 0 0,0 20,78" className="stroke-[#ec4899]/60 animate-[wavePulse_2s_infinite_0.4s]" />
      
      <path d="M 132,50 A 15,15 0 0,1 132,72" className="stroke-[#ec4899] animate-[wavePulse_2s_infinite]" />
      <path d="M 140,44 A 23,23 0 0,1 140,78" className="stroke-[#ec4899]/60 animate-[wavePulse_2s_infinite_0.4s]" />
    </svg>
  </div>
);

// 3. Geometry Doodle (Design)
const GeometryDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      {/* Compass Drawing tool */}
      <g className="origin-[80px_20px] animate-[compassDraft_5s_infinite_ease-in-out]">
        <polyline points="80,20 62,70" />
        <polyline points="80,20 98,70" />
        <circle cx="80" cy="20" r="3.5" fill="white" />
        <line x1="68" y1="45" x2="92" y2="45" />
        
        {/* Lead/Pen nib */}
        <path d="M 98,70 L 96,75 L 100,75 Z" fill="white" />
        <circle cx="62" cy="70" r="1.5" fill="white" />
      </g>
      
      {/* Circles being drawn */}
      <circle 
        cx="80" 
        cy="70" 
        r="18" 
        strokeDasharray="120" 
        strokeDashoffset="120" 
        className="stroke-[#ec4899] animate-[drawCircle_5s_infinite_ease-in-out]" 
      />
      <circle cx="80" cy="70" r="30" strokeDasharray="3 3" className="opacity-30" />
      <line x1="40" y1="70" x2="120" y2="70" strokeDasharray="2 4" className="opacity-30" />
    </svg>
  </div>
);

// 4. Plane Doodle (Travel)
const PlaneDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      {/* Dotted path */}
      <path 
        id="flightPath" 
        d="M 20,70 C 40,20 120,20 140,70" 
        strokeDasharray="4 4" 
        className="opacity-40" 
      />
      
      {/* Animated plane along path */}
      <g className="animate-[flyPlane_4s_infinite_linear]">
        {/* Simplistic Plane drawing facing path direction */}
        <path d="M -8,0 L 4,-3 L 10,0 L 4,3 Z" fill="white" />
        <path d="M 2,-3 L 0,-10 L 4,-10 L 5,-3 Z" fill="white" />
        <path d="M 2,3 L 0,10 L 4,10 L 5,3 Z" fill="white" />
        <path d="M -6,0 L -8,-3 L -7,-3 L -5,0 Z" fill="white" />
      </g>
    </svg>
  </div>
);

// 5. Globe Doodle (Travel)
const GlobeDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      <circle cx="80" cy="50" r="35" />
      
      {/* Latitude grid lines */}
      <line x1="45" y1="50" x2="115" y2="50" />
      <path d="M 50,30 Q 80,42 110,30" strokeDasharray="2 2" className="opacity-60" />
      <path d="M 50,70 Q 80,58 110,70" strokeDasharray="2 2" className="opacity-60" />
      
      {/* Longitude rotating-style ellipses */}
      <ellipse cx="80" cy="50" rx="20" ry="35" />
      <ellipse cx="80" cy="50" rx="9" ry="35" strokeDasharray="1.5 2.5" className="opacity-40" />
      <line x1="80" y1="15" x2="80" y2="85" />
      
      {/* Orbit ring */}
      <path 
        d="M 32,62 A 50,22 45 0,1 128,38" 
        className="stroke-[#ec4899] stroke-[1.5] animate-[drawCircle_6s_infinite_linear]" 
        strokeDasharray="180" 
        strokeDashoffset="180" 
      />
    </svg>
  </div>
);

// 6. Sneaker Doodle (Sneaker)
const SneakerDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      <g className="animate-[sneakerBounce_3s_infinite_ease-in-out]">
        {/* Sneaker Wireframe profile */}
        <path d="M 30,70 L 130,70 C 133,62 131,52 124,47 C 114,40 100,42 90,32 C 82,24 72,20 62,20 C 56,20 52,28 50,34 L 38,44 C 28,49 24,60 30,70 Z" />
        
        {/* Tread details */}
        <path d="M 35,70 L 35,74 M 45,70 L 45,74 M 55,70 L 55,74 M 65,70 L 65,74 M 75,70 L 75,74 M 85,70 L 85,74 M 95,70 L 95,74 M 105,70 L 105,74 M 115,70 L 115,74 M 125,70 L 125,74" strokeWidth="1" />
        
        {/* Laces */}
        <line x1="62" y1="28" x2="70" y2="38" />
        <line x1="68" y1="26" x2="76" y2="36" />
        
        {/* Action speed lines behind sneaker */}
        <line x1="14" y1="36" x2="26" y2="36" strokeDasharray="3 3" className="opacity-50" />
        <line x1="10" y1="48" x2="22" y2="48" strokeDasharray="3 3" className="opacity-50" />
        <line x1="16" y1="60" x2="24" y2="60" strokeDasharray="3 3" className="opacity-50" />
      </g>
    </svg>
  </div>
);

// 7. Sole Doodle (Sneaker Footprint)
const SoleDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      {/* Double footprints steps trail */}
      <g className="opacity-40 animate-[pulse_3s_infinite_alternate]">
        <path d="M 40,25 C 40,15 52,12 55,22 C 58,32 50,42 52,52 C 54,62 48,70 42,70 C 36,70 32,60 34,48 C 36,36 40,35 40,25 Z" strokeDasharray="2 2" />
        <path d="M 52,22 L 56,20 M 50,30 L 54,28 M 48,40 L 52,38" />
      </g>
      <g className="opacity-80 animate-[pulse_3s_infinite_alternate_1.5s]">
        <path d="M 100,35 C 100,25 112,22 115,32 C 118,42 110,52 112,62 C 114,72 108,80 102,80 C 96,80 92,70 94,58 C 96,46 100,45 100,35 Z" />
        {/* Waffle grip grids */}
        <line x1="97" y1="48" x2="111" y2="48" />
        <line x1="96" y1="56" x2="110" y2="56" />
        <line x1="98" y1="64" x2="108" y2="64" />
      </g>
    </svg>
  </div>
);


export default function InterestsDoodles() {
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
        - Bound below 'MY INTERESTS' text (top > 64vh) and outside the central photo.
      */}

      {/* ─── DESKTOP COLLAGE VIEW ─── */}

      {/* ─── LEFT COLLAGE AREA (Música & Diseño) ─── */}

      {/* Row 1: Cassette Doodle & Music Icon */}
      <CassetteDoodle className="absolute left-[4vw] top-[64vh] w-[130px]" />
      <div className="doodle-item absolute left-[17vw] top-[64vh] w-[70px] pointer-events-auto select-none">
        <MusicIcon />
      </div>

      {/* Row 2: Music Diagram & Headphones Doodle */}
      <div className="doodle-item absolute left-[11vw] top-[73vh] w-[75px] pointer-events-auto select-none">
        <MusicDiagram />
      </div>
      <HeadphonesDoodle className="absolute left-[3vw] top-[75vh] w-[100px]" />

      {/* Row 3: Geometry Doodle & Design Icon */}
      <GeometryDoodle className="absolute left-[13vw] top-[83vh] w-[110px]" />
      <div className="doodle-item absolute left-[4vw] top-[84vh] w-[75px] pointer-events-auto select-none">
        <DesignIcon />
      </div>

      {/* Row 4: Design Diagram */}
      <div className="doodle-item absolute left-[10vw] top-[91vh] w-[75px] pointer-events-auto select-none">
        <DesignDiagram />
      </div>


      {/* ─── RIGHT COLLAGE AREA (Travel & Sneakers) ─── */}

      {/* Row 1: Sneaker Doodle & Sneaker Icon */}
      <SneakerDoodle className="absolute right-[16vw] top-[64vh] w-[120px]" />
      <div className="doodle-item absolute right-[4vw] top-[64vh] w-[80px] pointer-events-auto select-none">
        <SneakerIcon />
      </div>

      {/* Row 2: Sneaker Diagram & Sole Doodle */}
      <div className="doodle-item absolute right-[10vw] top-[73vh] w-[75px] pointer-events-auto select-none">
        <SneakerDiagram />
      </div>
      <SoleDoodle className="absolute right-[18vw] top-[74vh] w-[100px]" />

      {/* Row 3: Globe Doodle & Travel Icon */}
      <GlobeDoodle className="absolute right-[3vw] top-[81vh] w-[120px]" />
      <div className="doodle-item absolute right-[16vw] top-[82vh] w-[75px] pointer-events-auto select-none">
        <TravelIcon />
      </div>

      {/* Row 4: Plane Doodle & Travel Diagram */}
      <PlaneDoodle className="absolute right-[11vw] top-[90vh] w-[110px]" />
      <div className="doodle-item absolute right-[3vw] top-[90vh] w-[75px] pointer-events-auto select-none">
        <TravelDiagram />
      </div>


      {/* ─── MOBILE COLLAGE VIEW (sitting in the free area top-[5vh] to top-[38vh]) ─── */}
      <div className="md:hidden absolute inset-0 w-full h-full pointer-events-none">
        {/* Music Trio Mobile */}
        <CassetteDoodle className="absolute left-[3vw] top-[6vh] w-[60px]" />
        <div className="doodle-item absolute left-[20vw] top-[6vh] w-[30px] pointer-events-auto select-none">
          <MusicIcon />
        </div>
        <div className="doodle-item absolute left-[29vw] top-[6vh] w-[40px] pointer-events-auto select-none">
          <MusicDiagram />
        </div>

        {/* Sneaker Trio Mobile */}
        <SneakerDoodle className="absolute right-[3vw] top-[6vh] w-[60px]" />
        <div className="doodle-item absolute right-[20vw] top-[5vh] w-[30px] pointer-events-auto select-none">
          <SneakerIcon />
        </div>
        <div className="doodle-item absolute right-[29vw] top-[6vh] w-[40px] pointer-events-auto select-none">
          <SneakerDiagram />
        </div>

        {/* Travel Trio Mobile */}
        <div className="doodle-item absolute left-[3vw] top-[16vh] w-[32px] pointer-events-auto select-none">
          <TravelIcon />
        </div>
        <div className="doodle-item absolute left-[12vw] top-[16vh] w-[35px] pointer-events-auto select-none">
          <TravelDiagram />
        </div>
        <PlaneDoodle className="absolute left-[22vw] top-[16vh] w-[60px]" />

        {/* Design Trio Mobile */}
        <div className="doodle-item absolute right-[3vw] top-[16vh] w-[32px] pointer-events-auto select-none">
          <DesignIcon />
        </div>
        <div className="doodle-item absolute right-[12vw] top-[16vh] w-[35px] pointer-events-auto select-none">
          <DesignDiagram />
        </div>
        <GeometryDoodle className="absolute right-[22vw] top-[16vh] w-[60px]" />

        {/* Extra Doodles Mobile */}
        <HeadphonesDoodle className="absolute left-[4vw] top-[27vh] w-[60px]" />
        <SoleDoodle className="absolute right-[4vw] top-[27vh] w-[60px]" />
        <GlobeDoodle className="absolute left-[36vw] top-[27vh] w-[60px]" />
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

        @keyframes spinTape {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes wavePulse {
          0%, 100% { transform: scale(0.95); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes compassDraft {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes drawCircle {
          0% { stroke-dashoffset: 120; }
          45% { stroke-dashoffset: 0; }
          55% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -120; }
        }
        @keyframes flyPlane {
          0% { motion-offset: 0%; offset-distance: 0%; }
          100% { motion-offset: 100%; offset-distance: 100%; }
        }
        /* Polyfill/Alternative path animation for SVG plane */
        @keyframes flyPlane {
          0% { transform: translate(16px, 70px) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translate(80px, 20px) rotate(0deg); }
          90% { opacity: 1; }
          100% { transform: translate(144px, 70px) rotate(45deg); opacity: 0; }
        }
        @keyframes sneakerBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
      `}</style>
    </div>
  );
}
