export default function CalmIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none">
      <defs>
        <mask id="calm-lucide-mask">
          {/* Everything white stays solid white */}
          <rect width="100" height="100" fill="white" />
          
          {/* Balanced Zen Stones outline in black */}
          <g stroke="black" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Base Stone */}
            <ellipse cx="50" cy="74" rx="26" ry="10" />
            {/* Middle Stone */}
            <ellipse cx="50" cy="54" rx="18" ry="8" />
            {/* Top Stone */}
            <ellipse cx="50" cy="36" rx="11" ry="6" />
            
            {/* Small Balance Dot/Sparkle on top */}
            <circle cx="50" cy="22" r="2.5" fill="black" />
          </g>
        </mask>
      </defs>
      
      {/* Solid white card with cutout applied */}
      <rect width="100" height="100" rx="20" fill="white" mask="url(#calm-lucide-mask)" />
    </svg>
  );
}
