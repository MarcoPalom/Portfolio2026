export default function FastLearnerIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none">
      <defs>
        <mask id="fastlearner-lucide-mask">
          {/* Everything white stays solid white */}
          <rect width="100" height="100" fill="white" />
          
          {/* Rocket outline in black */}
          <g stroke="black" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Rocket Body */}
            <path d="M 50,18 C 50,18 64,30 64,52 L 64,72 L 36,72 L 36,52 C 36,30 50,18 50,18 Z" />
            {/* Rocket Fins */}
            <path d="M 36,60 L 24,72 L 36,72" />
            <path d="M 64,60 L 76,72 L 64,72" />
            {/* Thrust Flame */}
            <path d="M 44,72 L 50,84 L 56,72" />
            {/* Window */}
            <circle cx="50" cy="42" r="5" />
          </g>
        </mask>
      </defs>
      
      {/* Solid white card with cutout applied */}
      <rect width="100" height="100" rx="20" fill="white" mask="url(#fastlearner-lucide-mask)" />
    </svg>
  );
}
