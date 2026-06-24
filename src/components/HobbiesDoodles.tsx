import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import GamepadIcon from './Hobbies/icons/GamepadIcon';
import BezierIcon from './Hobbies/icons/BezierIcon';
import BassIcon from './Hobbies/icons/BassIcon';
import SportsIcon from './Hobbies/icons/SportsIcon';
import RadarIcon from './Hobbies/icons/RadarIcon';
import GamepadDiagram from './Hobbies/diagrams/GamepadDiagram';
import BezierDiagram from './Hobbies/diagrams/BezierDiagram';
import BassDiagram from './Hobbies/diagrams/BassDiagram';
import SportsDiagram from './Hobbies/diagrams/SportsDiagram';
import RadarDiagram from './Hobbies/diagrams/RadarDiagram';

interface DoodleProps {
  className?: string;
}

// ─── Doodle SVGs without any cards or text ──────────────────────────

const GamepadDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      <path 
        d="M 30,30 L 130,30 C 145,30 155,42 150,60 C 145,78 135,88 120,88 C 110,88 100,75 80,75 C 60,75 50,88 40,88 C 25,88 15,78 10,60 C 5,42 15,30 30,30 Z" 
        className="animate-[pulse_4s_infinite_ease-in-out]"
      />
      <path d="M 35,55 L 45,55 M 40,50 L 40,60" />
      <circle cx="40" cy="55" r="7" strokeDasharray="2 2" className="opacity-40" />
      <g className="animate-[moveJoy_6s_infinite_ease-in-out]">
        <circle cx="62" cy="62" r="10" />
        <circle cx="62" cy="62" r="2" fill="white" />
      </g>
      <g className="animate-[moveJoy_6s_infinite_ease-in-out_2s]">
        <circle cx="98" cy="62" r="10" />
        <circle cx="98" cy="62" r="2" fill="white" />
      </g>
      <circle cx="120" cy="50" r="3.5" className="animate-[blink_1.5s_infinite_step-end]" />
      <circle cx="128" cy="58" r="3.5" className="animate-[blink_1.5s_infinite_step-end_0.5s]" />
      <circle cx="112" cy="58" r="3.5" className="animate-[blink_1.5s_infinite_step-end_1s]" />
      <circle cx="120" cy="66" r="3.5" className="animate-[blink_1.5s_infinite_step-end_0.7s]" />
      <line x1="72" y1="46" x2="78" y2="42" />
      <line x1="82" y1="46" x2="88" y2="42" />
    </svg>
  </div>
);

const BezierDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      <circle cx="80" cy="50" r="30" strokeDasharray="3 3" className="animate-[spin_20s_linear_infinite] opacity-30" />
      <path 
        d="M 20,70 C 40,20 120,20 140,70" 
        className="stroke-[#6366f1] stroke-[1.8] animate-[drawBezier_5s_infinite_ease-in-out]" 
        strokeDasharray="200" 
        strokeDashoffset="200" 
      />
      <line x1="20" y1="70" x2="40" y2="20" strokeDasharray="2 2" className="opacity-50" />
      <line x1="140" y1="70" x2="120" y2="20" strokeDasharray="2 2" className="opacity-50" />
      <rect x="17" y="67" width="6" height="6" fill="black" stroke="white" />
      <rect x="137" y="67" width="6" height="6" fill="black" stroke="white" />
      <circle cx="40" cy="20" r="3" fill="white" />
      <circle cx="120" cy="20" r="3" fill="white" />
      <g className="animate-[movePen_5s_infinite_ease-in-out]">
        <path d="M -10,-10 L 0,0 L -3,-13 Z" fill="white" />
        <path d="M 0,0 L 10,10" className="stroke-white" />
      </g>
    </svg>
  </div>
);

const BassDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      <line x1="10" y1="20" x2="150" y2="20" strokeDasharray="1 3" className="opacity-30" />
      <line x1="10" y1="40" x2="150" y2="40" strokeDasharray="1 3" className="opacity-30" />
      <line x1="10" y1="60" x2="150" y2="60" strokeDasharray="1 3" className="opacity-30" />
      <line x1="10" y1="80" x2="150" y2="80" strokeDasharray="1 3" className="opacity-30" />
      <line x1="30" y1="15" x2="30" y2="85" className="opacity-50" />
      <line x1="65" y1="15" x2="65" y2="85" className="opacity-50" />
      <line x1="100" y1="15" x2="100" y2="85" className="opacity-50" />
      <line x1="135" y1="15" x2="135" y2="85" className="opacity-50" />
      <path 
        d="M 10,50 Q 30,20 50,50 T 90,50 T 130,50 T 150,50" 
        className="stroke-[#6366f1] stroke-[1.5] animate-[waveFreq_3s_infinite_ease-in-out]" 
      />
      <path 
        d="M 10,50 Q 30,70 50,50 T 90,50 T 130,50 T 150,50" 
        className="stroke-[#6366f1]/40 stroke-[1.0] animate-[waveFreq2_3s_infinite_ease-in-out]" 
      />
      <line x1="10" y1="25" x2="150" y2="25" className="stroke-white/80 stroke-[2.0]" />
      <line x1="10" y1="41" x2="150" y2="41" className="stroke-white/80 stroke-[1.6] animate-[stringVibe_0.15s_infinite_alternate]" />
      <line x1="10" y1="57" x2="150" y2="57" className="stroke-white/80 stroke-[1.2]" />
      <line x1="10" y1="73" x2="150" y2="73" className="stroke-white/80 stroke-[0.8]" />
      <circle cx="47.5" cy="49" r="2.5" fill="white" />
      <circle cx="117.5" cy="49" r="2.5" fill="white" />
    </svg>
  </div>
);

const TacticDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      <rect x="15" y="15" width="130" height="70" strokeDasharray="3 3" className="opacity-30" />
      <line x1="80" y1="15" x2="80" y2="85" strokeDasharray="3 3" className="opacity-30" />
      <circle cx="80" cy="50" r="15" strokeDasharray="3 3" className="opacity-30" />
      <path 
        d="M 25,50 Q 50,25 70,40" 
        strokeDasharray="4 2" 
        className="stroke-[#6366f1] animate-[drawTactic_4s_infinite_ease-in-out]" 
      />
      <path d="M 68,36 L 73,42 L 66,43" fill="none" className="stroke-[#6366f1]" />
      <path 
        d="M 70,40 Q 100,75 135,50" 
        strokeDasharray="4 2" 
        className="stroke-white animate-[drawTactic_4s_infinite_ease-in-out_1s]" 
      />
      <path d="M 130,55 L 136,49 L 134,57" fill="none" className="stroke-white" />
      <g className="animate-[pulse_1.5s_infinite_alternate]">
        <line x1="20" y1="46" x2="28" y2="54" className="stroke-white" />
        <line x1="28" y1="46" x2="20" y2="54" className="stroke-white" />
      </g>
      <g className="animate-[pulse_1.5s_infinite_alternate_0.5s]">
        <line x1="66" y1="36" x2="74" y2="44" className="stroke-[#6366f1]" />
        <line x1="74" y1="36" x2="66" y2="44" className="stroke-[#6366f1]" />
      </g>
      <circle cx="138" cy="48" r="4.5" className="animate-[pulse_1.5s_infinite_alternate_1s]" />
      <circle cx="95" cy="30" r="4.5" className="opacity-40" />
      <g className="animate-[moveBall_4s_infinite_ease-in-out]">
        <circle cx="0" cy="0" r="4" fill="white" />
        <circle cx="0" cy="0" r="6" stroke="white" strokeWidth="0.8" strokeDasharray="2 1" />
      </g>
    </svg>
  </div>
);

const RadarDoodle = ({ className = '' }: DoodleProps) => (
  <div className={`doodle-item ${className} pointer-events-auto select-none`}>
    <svg viewBox="0 0 160 100" className="w-full h-auto stroke-white/70 stroke-[1.2] fill-none hover:stroke-white transition-colors duration-300">
      <circle cx="80" cy="50" r="40" />
      <circle cx="50" cy="50" r="25" strokeDasharray="3 3" className="opacity-60" />
      <circle cx="80" cy="50" r="10" className="opacity-30" />
      <line x1="80" y1="5" x2="80" y2="95" strokeDasharray="2 2" className="opacity-30" />
      <line x1="35" y1="50" x2="125" y2="50" strokeDasharray="2 2" className="opacity-30" />
      <line 
        x1="80" 
        y1="50" 
        x2="80" 
        y2="10" 
        className="stroke-[#6366f1] stroke-[1.5] origin-[80px_50px] animate-[radarSweep_4s_linear_infinite]" 
      />
      <g className="animate-[blipPulse_4s_infinite_ease-out]">
        <circle cx="60" cy="30" r="3" fill="white" />
        <circle cx="60" cy="30" r="6" stroke="white" strokeWidth="0.5" />
      </g>
      <g className="animate-[blipPulse_4s_infinite_ease-out_1.5s]">
        <circle cx="105" cy="65" r="3" fill="#6366f1" />
        <circle cx="105" cy="65" r="6" stroke="#6366f1" strokeWidth="0.5" />
      </g>
      <g className="animate-[blipPulse_4s_infinite_ease-out_3.2s]">
        <circle cx="90" cy="25" r="2" fill="white" className="opacity-80" />
      </g>
    </svg>
  </div>
);


export default function HobbiesDoodles() {
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
        - Bound below 'MY HOBBYS' text (top > 64vh) and outside the central photo.
      */}

      {/* ─── DESKTOP COLLAGE VIEW ─── */}

      {/* ─── LEFT COLLAGE AREA (Gamepad & Bezier) ─── */}

      {/* Row 1: Gamepad Doodle (Large) & Gamepad Icon (Small) */}
      <GamepadDoodle className="absolute left-[4vw] top-[64vh] w-[140px]" />
      <div className="doodle-item absolute left-[18vw] top-[64vh] w-[60px] pointer-events-auto select-none">
        <GamepadIcon />
      </div>

      {/* Row 2: Gamepad Diagram (Medium) & Bezier Diagram (Small) */}
      <div className="doodle-item absolute left-[12vw] top-[74vh] w-[75px] pointer-events-auto select-none">
        <GamepadDiagram />
      </div>
      <div className="doodle-item absolute left-[4vw] top-[75vh] w-[60px] pointer-events-auto select-none">
        <BezierDiagram />
      </div>

      {/* Row 3: Bezier Doodle (Medium) & Bezier Icon (Large) */}
      <BezierDoodle className="absolute left-[4vw] top-[84vh] w-[110px]" />
      <div className="doodle-item absolute left-[16vw] top-[83vh] w-[80px] pointer-events-auto select-none">
        <BezierIcon />
      </div>


      {/* ─── RIGHT COLLAGE AREA (Bass, Radar & Sports) ─── */}

      {/* Row 1: Bass Doodle (Medium) & Bass Icon (Large) */}
      <BassDoodle className="absolute right-[16vw] top-[64vh] w-[110px]" />
      <div className="doodle-item absolute right-[4vw] top-[64vh] w-[80px] pointer-events-auto select-none">
        <BassIcon />
      </div>

      {/* Row 2: Bass Diagram (Medium) & Radar Icon (Small) */}
      <div className="doodle-item absolute right-[10vw] top-[73vh] w-[75px] pointer-events-auto select-none">
        <BassDiagram />
      </div>
      <div className="doodle-item absolute right-[18vw] top-[74vh] w-[60px] pointer-events-auto select-none">
        <RadarIcon />
      </div>

      {/* Row 3: Radar Doodle (Large) & Radar Diagram (Medium) */}
      <RadarDoodle className="absolute right-[3vw] top-[81vh] w-[130px]" />
      <div className="doodle-item absolute right-[16vw] top-[82vh] w-[75px] pointer-events-auto select-none">
        <RadarDiagram />
      </div>

      {/* Row 4: Tactic Doodle (Large), Sports Icon (Medium) & Sports Diagram (Medium) */}
      <TacticDoodle className="absolute right-[11vw] top-[90vh] w-[120px]" />
      <div className="doodle-item absolute right-[3vw] top-[90vh] w-[65px] pointer-events-auto select-none">
        <SportsIcon />
      </div>
      <div className="doodle-item absolute right-[20vw] top-[90vh] w-[70px] pointer-events-auto select-none">
        <SportsDiagram />
      </div>


      {/* ─── MOBILE COLLAGE VIEW (sitting in the free area top-[23vh] to top-[42vh]) ─── */}
      <div className="md:hidden absolute inset-0 w-full h-full pointer-events-none">
        {/* Gamepad Trio Mobile */}
        <GamepadDoodle className="absolute left-[3vw] top-[23vh] w-[60px]" />
        <div className="doodle-item absolute left-[18vw] top-[23vh] w-[30px] pointer-events-auto select-none">
          <GamepadIcon />
        </div>
        <div className="doodle-item absolute left-[26vw] top-[23vh] w-[40px] pointer-events-auto select-none">
          <GamepadDiagram />
        </div>

        {/* Bass Trio Mobile */}
        <BassDoodle className="absolute right-[3vw] top-[23vh] w-[60px]" />
        <div className="doodle-item absolute right-[18vw] top-[23vh] w-[30px] pointer-events-auto select-none">
          <BassIcon />
        </div>
        <div className="doodle-item absolute right-[26vw] top-[23vh] w-[40px] pointer-events-auto select-none">
          <BassDiagram />
        </div>

        {/* Bezier Trio Mobile */}
        <div className="doodle-item absolute left-[3vw] top-[31vh] w-[35px] pointer-events-auto select-none">
          <BezierIcon />
        </div>
        <div className="doodle-item absolute left-[12vw] top-[31vh] w-[35px] pointer-events-auto select-none">
          <BezierDiagram />
        </div>
        <BezierDoodle className="absolute left-[21vw] top-[31vh] w-[60px]" />

        {/* Radar Trio Mobile */}
        <div className="doodle-item absolute right-[3vw] top-[31vh] w-[35px] pointer-events-auto select-none">
          <RadarIcon />
        </div>
        <div className="doodle-item absolute right-[12vw] top-[31vh] w-[35px] pointer-events-auto select-none">
          <RadarDiagram />
        </div>
        <RadarDoodle className="absolute right-[21vw] top-[31vh] w-[60px]" />

        {/* Sports Trio Mobile */}
        <TacticDoodle className="absolute left-[12vw] top-[39vh] w-[60px]" />
        <div className="doodle-item absolute left-[27vw] top-[39vh] w-[35px] pointer-events-auto select-none">
          <SportsIcon />
        </div>
        <div className="doodle-item absolute left-[37vw] top-[39vh] w-[40px] pointer-events-auto select-none">
          <SportsDiagram />
        </div>
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
          .absolute.left-\\[18vw\\],
          .absolute.left-\\[12vw\\],
          .absolute.left-\\[16vw\\],
          .absolute.right-\\[16vw\\],
          .absolute.right-\\[4vw\\],
          .absolute.right-\\[10vw\\],
          .absolute.right-\\[18vw\\],
          .absolute.right-\\[3vw\\],
          .absolute.right-\\[20vw\\] {
            display: none !important;
          }
        }

        @keyframes drawBezier {
          0% { stroke-dashoffset: 200; }
          45% { stroke-dashoffset: 0; }
          55% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -200; }
        }
        @keyframes movePen {
          0% { transform: translate(20px, 70px); opacity: 0; }
          5% { opacity: 1; }
          45% { transform: translate(140px, 70px); }
          50% { opacity: 0; }
          100% { transform: translate(20px, 70px); opacity: 0; }
        }
        @keyframes moveJoy {
          0%, 100% { transform: translate(0px, 0px); }
          25% { transform: translate(1.5px, -1.5px); }
          50% { transform: translate(-2px, 1.5px); }
          75% { transform: translate(1.5px, 2px); }
        }
        @keyframes blink {
          0%, 100% { fill: transparent; }
          50% { fill: white; }
        }
        @keyframes waveFreq {
          0%, 100% { d: path("M 10,50 Q 30,20 50,50 T 90,50 T 130,50 T 150,50"); }
          50% { d: path("M 10,50 Q 30,80 50,50 T 90,50 T 130,50 T 150,50"); }
        }
        @keyframes waveFreq2 {
          0%, 100% { d: path("M 10,50 Q 30,70 50,50 T 90,50 T 130,50 T 150,50"); }
          50% { d: path("M 10,50 Q 30,30 50,50 T 90,50 T 130,50 T 150,50"); }
        }
        @keyframes stringVibe {
          0% { transform: translateY(-0.3px); }
          100% { transform: translateY(0.3px); }
        }
        @keyframes drawTactic {
          0% { stroke-dashoffset: 60; }
          60% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes moveBall {
          0% { transform: translate(25px, 50px); opacity: 0; }
          5% { opacity: 1; }
          30% { transform: translate(70px, 40px); }
          55% { transform: translate(135px, 50px); }
          80% { opacity: 1; }
          90%, 100% { opacity: 0; }
        }
        @keyframes radarSweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blipPulse {
          0% { opacity: 0; }
          10% { opacity: 1; }
          50% { opacity: 0.1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
