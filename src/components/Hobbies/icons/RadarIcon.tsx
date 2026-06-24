export default function RadarIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none">
      <defs>
        <mask id="search-lucide-mask">
          {/* Everything white stays solid white */}
          <rect width="100" height="100" fill="white" />
          
          {/* Magnifying Glass outline in black */}
          <g fill="none" stroke="black" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Circular lens frame */}
            <circle cx="44" cy="44" r="20" />
            
            {/* Handle extending bottom-right */}
            <line x1="58" y1="58" x2="80" y2="80" strokeWidth="7" />
          </g>
        </mask>
      </defs>
      
      {/* Solid white card with cutout applied */}
      <rect width="100" height="100" rx="20" fill="white" mask="url(#search-lucide-mask)" />
    </svg>
  );
}
