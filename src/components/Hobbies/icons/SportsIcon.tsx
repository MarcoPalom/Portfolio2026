export default function SportsIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none">
      <defs>
        <mask id="trophy-lucide-mask">
          {/* Everything white stays solid white */}
          <rect width="100" height="100" fill="white" />
          
          {/* Trophy outline in black */}
          <g fill="none" stroke="black" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Trophy Cup */}
            <path d="M 30,22 L 70,22 L 70,44 C 70,55 61,64 50,64 C 39,64 30,55 30,44 Z" />
            
            {/* Left Handle */}
            <path d="M 30,28 C 20,28 20,40 30,40" />
            
            {/* Right Handle */}
            <path d="M 70,28 C 80,28 80,40 70,40" />
            
            {/* Pedestal Stem */}
            <path d="M 50,64 L 50,78" />
            
            {/* Pedestal Base */}
            <path d="M 35,78 L 65,78" strokeWidth="6" />
          </g>
        </mask>
      </defs>
      
      {/* Solid white card with cutout applied */}
      <rect width="100" height="100" rx="20" fill="white" mask="url(#trophy-lucide-mask)" />
    </svg>
  );
}
