export default function TravelIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none">
      <defs>
        <mask id="travel-lucide-mask">
          {/* Everything white stays solid white */}
          <rect width="100" height="100" fill="white" />
          
          {/* Globe outline in black */}
          <g stroke="black" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Outer Circle */}
            <circle cx="50" cy="50" r="32" />
            
            {/* Equator & Latitude lines */}
            <line x1="18" y1="50" x2="82" y2="50" />
            
            {/* Longitude Ellipse */}
            <ellipse cx="50" cy="50" rx="14" ry="32" />
            <line x1="50" y1="18" x2="50" y2="82" />
          </g>
        </mask>
      </defs>
      
      {/* Solid white card with cutout applied */}
      <rect width="100" height="100" rx="20" fill="white" mask="url(#travel-lucide-mask)" />
    </svg>
  );
}
