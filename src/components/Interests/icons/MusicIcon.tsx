export default function MusicIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none">
      <defs>
        <mask id="music-lucide-mask">
          {/* Everything white stays solid white */}
          <rect width="100" height="100" fill="white" />
          
          {/* Music Note outline in black */}
          <g fill="none" stroke="black" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Music note path */}
            <path d="M65 15 L65 65" />
            <circle cx="50" cy="65" r="15" fill="black" />
            <path d="M65 25 C65 25 50 20 35 30 L35 70" />
            <circle cx="20" cy="70" r="15" fill="black" />
          </g>
        </mask>
      </defs>
      
      {/* Solid white card with cutout applied */}
      <rect width="100" height="100" rx="20" fill="white" mask="url(#music-lucide-mask)" />
    </svg>
  );
}
