export default function BezierIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none">
      <defs>
        <mask id="palette-lucide-mask">
          {/* Everything white stays solid white */}
          <rect width="100" height="100" fill="white" />

          {/* Paint Palette outline in black */}
          <g stroke="black" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Palette Body */}
            <path
              d="M 50,15 
                 C 25,15 15,25 15,50 
                 C 15,68 25,75 35,80 
                 C 38,81 40,84 41,87 
                 C 42,90 45,92 50,92 
                 C 75,92 85,82 85,50 
                 C 85,25 75,15 50,15 Z"
              fill="none"
            />

            {/* Paint drops (holes) */}
            <circle cx="35" cy="38" r="4.5" fill="black" />
            <circle cx="50" cy="30" r="4.5" fill="black" />
            <circle cx="65" cy="38" r="4.5" fill="black" />
            <circle cx="62" cy="58" r="4.5" fill="black" />

            {/* Thumbhole */}
            <circle cx="36" cy="62" r="6" fill="black" />
          </g>
        </mask>
      </defs>

      {/* Solid white card with cutout applied */}
      <rect width="100" height="100" rx="20" fill="white" mask="url(#palette-lucide-mask)" />
    </svg>
  );
}
