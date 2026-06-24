export default function ReliableIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none">
      <defs>
        <mask id="reliable-lucide-mask">
          {/* Everything white stays solid white */}
          <rect width="100" height="100" fill="white" />
          
          {/* Reliable Shield outline in black */}
          <g stroke="black" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Shield Path */}
            <path d="M 50,18 C 66,18 78,24 78,24 L 78,52 C 78,68 64,78 50,82 C 36,78 22,68 22,52 L 22,24 C 22,24 34,18 50,18 Z" />
            {/* Checkmark inside Shield */}
            <path d="M 40,50 L 47,57 L 62,42" />
          </g>
        </mask>
      </defs>
      
      {/* Solid white card with cutout applied */}
      <rect width="100" height="100" rx="20" fill="white" mask="url(#reliable-lucide-mask)" />
    </svg>
  );
}
