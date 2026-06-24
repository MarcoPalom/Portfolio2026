export default function FunnyDiagram() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.1" fill="none">
      {/* Outer Border Box */}
      <rect x="6" y="6" width="88" height="88" rx="8" strokeOpacity="0.8" />
      
      {/* Top-Left Label */}
      <text x="12" y="16" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace" fontWeight="bold">04</text>
      
      {/* Smile Arc Geometry Drawing */}
      <g strokeOpacity="0.8">
        {/* Smile Arc */}
        <path d="M 28,46 Q 50,68 72,46" strokeWidth="1.6" />
        
        {/* Radius center guide */}
        <circle cx="50" cy="46" r="1.5" fill="currentColor" stroke="none" />
        
        {/* Diagonal Angle guide lines */}
        <line x1="50" y1="46" x2="28" y2="46" strokeDasharray="2 2" className="opacity-40" />
        <line x1="50" y1="46" x2="72" y2="46" strokeDasharray="2 2" className="opacity-40" />
        <line x1="50" y1="46" x2="50" y2="57" strokeDasharray="1.5 2" className="opacity-60" />
        
        {/* Angle Arc representation */}
        <path d="M 40,46 A 10,10 0 0,0 50,56" strokeWidth="0.8" />
        <text x="39" y="54" fill="currentColor" stroke="none" fontSize="4.5" fontFamily="monospace">θ</text>
        
        {/* Corner points */}
        <circle cx="28" cy="46" r="2" />
        <circle cx="72" cy="46" r="2" />
      </g>
      
      {/* Technical Pointer Line pointing to Right Mouth Corner */}
      {/* Starts near right mouth corner (72, 46), goes up-left to (32, 22), then horizontal to (14, 22) */}
      <polyline points="72,46 32,22 10,22" strokeOpacity="0.7" strokeWidth="0.8" />
      
      {/* Pointer Text Annotation */}
      <text x="14" y="20" fill="currentColor" stroke="none" fontSize="5" fontFamily="monospace">ARC_S.DEG</text>
      
      {/* Bottom-Right Circle Badge */}
      <circle cx="85" cy="85" r="4" strokeOpacity="0.4" />
      <text x="83.5" y="87" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace" fontWeight="bold">4</text>
    </svg>
  );
}
