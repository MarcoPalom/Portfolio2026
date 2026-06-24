export default function SneakerIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none">
      <defs>
        <mask id="sneaker-lucide-mask">
          {/* Everything white stays solid white */}
          <rect width="100" height="100" fill="white" />
          
          {/* Sneaker outline in black */}
          <g fill="black" stroke="black" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Sneaker Body Path */}
            <path 
              d="M 18,66 
                 L 82,66 
                 C 82,66 84,60 80,56 
                 C 76,52 64,52 58,42 
                 C 52,32 44,28 36,28 
                 C 32,28 30,34 30,38 
                 L 22,46 
                 C 16,50 14,58 18,66 Z" 
            />
            {/* Bottom Sole line (to separate sole details in white) */}
            <line x1="20" y1="61" x2="80" y2="61" stroke="white" strokeWidth="2" />
            
            {/* Laces detail in white */}
            <line x1="38" y1="36" x2="44" y2="44" stroke="white" strokeWidth="1.8" />
            <line x1="42" y1="34" x2="48" y2="42" stroke="white" strokeWidth="1.8" />
          </g>
        </mask>
      </defs>
      
      {/* Solid white card with cutout applied */}
      <rect width="100" height="100" rx="20" fill="white" mask="url(#sneaker-lucide-mask)" />
    </svg>
  );
}
