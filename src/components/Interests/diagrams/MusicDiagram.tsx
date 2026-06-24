export default function MusicDiagram() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.1" fill="none">
      {/* Outer Border Box */}
      <rect x="6" y="6" width="88" height="88" rx="8" strokeOpacity="0.8" />
      
      {/* Top-Left Label */}
      <text x="12" y="16" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace" fontWeight="bold">01</text>
      
      {/* Cassette Tape Drawing */}
      <g strokeOpacity="0.8">
        {/* Cassette Body */}
        <rect x="20" y="32" width="60" height="38" rx="4" />
        <rect x="26" y="38" width="48" height="20" rx="2" />
        
        {/* Tape Reels */}
        <circle cx="38" cy="48" r="6" />
        <circle cx="38" cy="48" r="2" fill="currentColor" stroke="none" />
        
        <circle cx="62" cy="48" r="6" />
        <circle cx="62" cy="48" r="2" fill="currentColor" stroke="none" />
        
        {/* Bottom Trapezoid center piece */}
        <polygon points="32,70 68,70 62,64 38,64" />
      </g>
      
      {/* Technical Pointer Line pointing to Tape reels */}
      {/* Starts near tape reel (38, 48), goes up-left to (22, 22), then horizontal to (12, 22) */}
      <polyline points="38,48 22,22 10,22" strokeOpacity="0.7" strokeWidth="0.8" />
      
      {/* Pointer Text Annotation */}
      <text x="14" y="20" fill="currentColor" stroke="none" fontSize="5" fontFamily="monospace">REEL_SPOOL</text>
      
      {/* Bottom-Right Circle Badge */}
      <circle cx="85" cy="85" r="4" strokeOpacity="0.4" />
      <text x="83.5" y="87" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace" fontWeight="bold">1</text>
    </svg>
  );
}
