export default function BassDiagram() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.1" fill="none">
      {/* Outer Border Box */}
      <rect x="6" y="6" width="88" height="88" rx="8" strokeOpacity="0.8" />
      
      {/* Top-Left Label */}
      <text x="12" y="16" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace" fontWeight="bold">03</text>
      
      {/* Bass Guitar Drawing (Diagonal) */}
      <g strokeOpacity="0.8">
        {/* Bass Body */}
        <path 
          d="M 24,76 
             C 17,72 14,64 16,56 
             C 18,48 26,46 30,44 
             C 34,42 35,35 33,30 
             C 38,35 40,41 43,40 
             C 46,39 45,32 44,27 
             C 49,34 50,41 54,45 
             C 58,49 65,49 63,58 
             C 61,67 50,80 40,82 
             C 30,84 31,80 24,76 Z" 
        />
        
        {/* Pickups */}
        <rect x="34" y="56" width="7" height="2" transform="rotate(-40 37.5 57)" strokeWidth="0.8" />
        <rect x="39" y="51" width="7" height="2" transform="rotate(-40 42.5 52)" strokeWidth="0.8" />
        
        {/* Bridge */}
        <rect x="25" y="67" width="5" height="3" transform="rotate(-40 27.5 68.5)" strokeWidth="0.8" />
        
        {/* Neck */}
        <path d="M 45,43 L 73,15" strokeWidth="3" />
        
        {/* Headstock */}
        <path d="M 72,16 L 82,6 C 84,4 87,7 85,9 L 75,19 Z" />
        
        {/* Tuning pegs */}
        <circle cx="75" cy="8" r="1" />
        <circle cx="79" cy="4" r="1" />
        <circle cx="81" cy="13" r="1" />
        <circle cx="85" cy="9" r="1" />
      </g>
      
      {/* Technical Pointer Line pointing to pickups */}
      {/* Starts near pickups center (38, 54), goes up-left to (22, 24), then horizontal to (12, 24) */}
      <polyline points="38,54 22,24 10,24" strokeOpacity="0.7" strokeWidth="0.8" />
      
      {/* Pointer Text Annotation */}
      <text x="14" y="22" fill="currentColor" stroke="none" fontSize="5" fontFamily="monospace">COIL_PU.4</text>
      
      {/* Bottom-Right Circle Badge */}
      <circle cx="85" cy="85" r="4" strokeOpacity="0.4" />
      <text x="83.5" y="87" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace" fontWeight="bold">3</text>
    </svg>
  );
}
