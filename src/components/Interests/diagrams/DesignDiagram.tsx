export default function DesignDiagram() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.1" fill="none">
      {/* Outer Border Box */}
      <rect x="6" y="6" width="88" height="88" rx="8" strokeOpacity="0.8" />
      
      {/* Top-Left Label */}
      <text x="12" y="16" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace" fontWeight="bold">02</text>
      
      {/* Protractor / Geometry Wheel Drawing */}
      <g strokeOpacity="0.8">
        {/* Base semicircle */}
        <path d="M 22,68 A 28,28 0 0,1 78,68 Z" />
        <path d="M 32,68 A 18,18 0 0,1 68,68 Z" />
        
        {/* Center mark */}
        <line x1="50" y1="64" x2="50" y2="72" />
        <line x1="46" y1="68" x2="54" y2="68" />
        
        {/* Angle Ticks */}
        <line x1="50" y1="40" x2="50" y2="36" />
        <line x1="30" y1="50" x2="27" y2="48" />
        <line x1="70" y1="50" x2="73" y2="48" />
        <line x1="38" y1="38" x2="35" y2="35" />
        <line x1="62" y1="38" x2="65" y2="35" />
      </g>
      
      {/* Technical Pointer Line pointing to 90 degrees mark */}
      {/* Starts near top center (50, 36), goes up-left to (28, 18), then horizontal to (12, 18) */}
      <polyline points="50,36 28,18 10,18" strokeOpacity="0.7" strokeWidth="0.8" />
      
      {/* Pointer Text Annotation */}
      <text x="12" y="15" fill="currentColor" stroke="none" fontSize="5" fontFamily="monospace">DEG_GRID.90</text>
      
      {/* Bottom-Right Circle Badge */}
      <circle cx="85" cy="85" r="4" strokeOpacity="0.4" />
      <text x="83.5" y="87" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace" fontWeight="bold">2</text>
    </svg>
  );
}
