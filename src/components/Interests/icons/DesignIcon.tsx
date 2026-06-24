export default function DesignIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none">
      <defs>
        <mask id="design-lucide-mask">
          {/* Everything white stays solid white */}
          <rect width="100" height="100" fill="white" />
          
          {/* Pen tool outline in black */}
          <g stroke="black" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Pen Nib Body */}
            <path d="M 50,80 L 53,62 L 72,43 C 76,39 81,39 85,43 C 89,47 89,52 85,56 L 66,75 L 50,80 Z" fill="black" />
            
            {/* Diagonal drawing line */}
            <path d="M 20,80 L 50,50" />
            
            {/* Anchor circle */}
            <circle cx="50" cy="50" r="3.5" fill="black" />
          </g>
        </mask>
      </defs>
      
      {/* Solid white card with cutout applied */}
      <rect width="100" height="100" rx="20" fill="white" mask="url(#design-lucide-mask)" />
    </svg>
  );
}
