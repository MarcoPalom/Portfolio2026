export default function BassIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none">
      <defs>
        <mask id="bass-clear-guitar-mask">
          {/* Everything white stays solid white */}
          <rect width="100" height="100" fill="white" />
          
          {/* Clean, bold electric bass guitar silhouette in black */}
          <g fill="black" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Bass Body */}
            <path 
              d="M 40,84 
                 C 33,84 28,79 28,72 
                 C 28,66 33,63 36,60 
                 C 34,55 31,52 30,46 
                 C 34,48 38,51 40,54 
                 C 42,48 45,51 47,56 
                 C 49,60 52,65 52,72 
                 C 52,79 47,84 40,84 Z" 
            />
            
            {/* Neck (thick black line) */}
            <line x1="40" y1="54" x2="40" y2="24" strokeWidth="4.5" />
            
            {/* Headstock */}
            <path d="M 37,24 L 43,24 L 43,15 L 37,17 Z" />
            
            {/* 4 Tuning Pegs (2 on each side of the headstock) */}
            <circle cx="33" cy="18" r="1.5" />
            <circle cx="33" cy="22" r="1.5" />
            <circle cx="47" cy="18" r="1.5" />
            <circle cx="47" cy="22" r="1.5" />
            
            {/* Bridge (white line highlight inside body to keep details clean) */}
            <line x1="37" y1="78" x2="43" y2="78" stroke="white" strokeWidth="1" />
          </g>
        </mask>
      </defs>
      
      {/* Solid white card with cutout applied */}
      <rect width="100" height="100" rx="20" fill="white" mask="url(#bass-clear-guitar-mask)" />
    </svg>
  );
}
