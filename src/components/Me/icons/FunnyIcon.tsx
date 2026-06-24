export default function FunnyIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none">
      <defs>
        <mask id="funny-lucide-mask">
          {/* Everything white stays solid white */}
          <rect width="100" height="100" fill="white" />
          
          {/* Smiling Face outline in black */}
          <g stroke="black" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Face Circle */}
            <circle cx="50" cy="50" r="32" />
            
            {/* Eyes: Left eye winking (arc), Right eye open (dot) */}
            <path d="M 36,44 Q 40,40 44,44" /> {/* Left wink */}
            <circle cx="60" cy="44" r="3" fill="black" /> {/* Right eye dot */}
            
            {/* Smile Mouth with small corner ticks */}
            <path d="M 38,58 Q 50,70 62,58" />
          </g>
        </mask>
      </defs>
      
      {/* Solid white card with cutout applied */}
      <rect width="100" height="100" rx="20" fill="white" mask="url(#funny-lucide-mask)" />
    </svg>
  );
}
