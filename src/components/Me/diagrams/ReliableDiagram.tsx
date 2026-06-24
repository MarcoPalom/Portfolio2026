export default function ReliableDiagram() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.1" fill="none">
      {/* Outer Border Box */}
      <rect x="6" y="6" width="88" height="88" rx="8" strokeOpacity="0.8" />
      
      {/* Top-Left Label */}
      <text x="12" y="16" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace" fontWeight="bold">01</text>
      
      {/* Anchor Drawing */}
      <g strokeOpacity="0.8">
        {/* Shank (vertical shaft) */}
        <line x1="50" y1="30" x2="50" y2="70" />
        
        {/* Shackle (top ring) */}
        <circle cx="50" cy="24" r="5" />
        
        {/* Stock (horizontal crossbar) */}
        <line x1="32" y1="36" x2="68" y2="36" />
        <line x1="32" y1="34" x2="32" y2="38" />
        <line x1="68" y1="34" x2="68" y2="38" />
        
        {/* Flukes (curved bottom hooks) */}
        <path d="M 30,58 C 30,76 70,76 70,58" />
        
        {/* Anchor Crown & Pointy Tips */}
        <path d="M 28,58 L 32,54 L 32,60 Z" fill="currentColor" stroke="none" />
        <path d="M 72,58 L 68,54 L 68,60 Z" fill="currentColor" stroke="none" />
        <circle cx="50" cy="70" r="2.5" fill="currentColor" stroke="none" />
      </g>
      
      {/* Technical Pointer Line pointing to Top Shackle Ring */}
      {/* Starts near shackle (50, 24), goes up-left to (28, 18), then horizontal to (12, 18) */}
      <polyline points="50,24 28,18 10,18" strokeOpacity="0.7" strokeWidth="0.8" />
      
      {/* Pointer Text Annotation */}
      <text x="12" y="15" fill="currentColor" stroke="none" fontSize="5" fontFamily="monospace">ANC_T.01</text>
      
      {/* Bottom-Right Circle Badge */}
      <circle cx="85" cy="85" r="4" strokeOpacity="0.4" />
      <text x="83.5" y="87" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace" fontWeight="bold">1</text>
    </svg>
  );
}
