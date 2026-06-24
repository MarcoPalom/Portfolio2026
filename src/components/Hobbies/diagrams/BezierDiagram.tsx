export default function BezierDiagram() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.1" fill="none">
      {/* Outer Border Box */}
      <rect x="6" y="6" width="88" height="88" rx="8" strokeOpacity="0.8" />
      
      {/* Top-Left Label */}
      <text x="12" y="16" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace" fontWeight="bold">02</text>
      
      {/* Drawing Elements */}
      <g strokeOpacity="0.8">
        {/* Background Grid circle */}
        <circle cx="50" cy="50" r="24" strokeDasharray="1.5 2.5" strokeOpacity="0.2" />
        
        {/* Tangent Handle Lines */}
        <line x1="20" y1="70" x2="35" y2="30" strokeDasharray="2 2" strokeOpacity="0.5" />
        <line x1="80" y1="70" x2="65" y2="30" strokeDasharray="2 2" strokeOpacity="0.5" />
        
        {/* Handle Ends (Circles) */}
        <circle cx="35" cy="30" r="2.5" />
        <circle cx="65" cy="30" r="2.5" />
        
        {/* Anchors (Squares) */}
        <rect x="18" y="68" width="4" height="4" />
        <rect x="78" y="68" width="4" height="4" />
        
        {/* The Curve */}
        <path d="M 20,70 C 35,30 65,30 80,70" strokeWidth="1.3" />
        
        {/* Pen Cursor Tip */}
        <path d="M 50,30 L 53,35 L 47,35 Z" fill="currentColor" stroke="none" />
        <line x1="50" y1="35" x2="50" y2="43" />
      </g>
      
      {/* Technical Pointer Line pointing to Pen tip / Center Anchor */}
      {/* Starts near center pen tip (50, 32), goes up-left to (28, 18), then horizontal to (14, 18) */}
      <polyline points="50,32 28,18 10,18" strokeOpacity="0.7" strokeWidth="0.8" />
      
      {/* Pointer Text Annotation */}
      <text x="12" y="15" fill="currentColor" stroke="none" fontSize="5" fontFamily="monospace">NODE_CTRL</text>
      
      {/* Bottom-Right Circle Badge */}
      <circle cx="85" cy="85" r="4" strokeOpacity="0.4" />
      <text x="83.5" y="87" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace" fontWeight="bold">2</text>
    </svg>
  );
}
