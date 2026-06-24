export default function FastLearnerDiagram() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.1" fill="none">
      {/* Outer Border Box */}
      <rect x="6" y="6" width="88" height="88" rx="8" strokeOpacity="0.8" />
      
      {/* Top-Left Label */}
      <text x="12" y="16" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace" fontWeight="bold">02</text>
      
      {/* Exponential Growth Graph Drawing */}
      <g strokeOpacity="0.8">
        {/* Graph Axes */}
        <line x1="20" y1="78" x2="82" y2="78" /> {/* X axis */}
        <line x1="20" y1="20" x2="20" y2="78" /> {/* Y axis */}
        
        {/* Grid helper lines */}
        <line x1="20" y1="60" x2="80" y2="60" strokeDasharray="1.5 2.5" className="opacity-30" />
        <line x1="20" y1="40" x2="80" y2="40" strokeDasharray="1.5 2.5" className="opacity-30" />
        <line x1="50" y1="20" x2="50" y2="78" strokeDasharray="1.5 2.5" className="opacity-30" />
        <line x1="80" y1="20" x2="80" y2="78" strokeDasharray="1.5 2.5" className="opacity-30" />
        
        {/* Growth Curve Path */}
        <path d="M 20,78 Q 45,74 60,50 T 80,24" strokeWidth="1.5" />
        
        {/* Dot at peak value */}
        <circle cx="80" cy="24" r="2.5" fill="currentColor" stroke="none" />
      </g>
      
      {/* Technical Pointer Line pointing to Curve Peak */}
      {/* Starts near peak (80, 24), goes up-left to (32, 18), then horizontal to (14, 18) */}
      <polyline points="80,24 32,18 10,18" strokeOpacity="0.7" strokeWidth="0.8" />
      
      {/* Pointer Text Annotation */}
      <text x="12" y="15" fill="currentColor" stroke="none" fontSize="5" fontFamily="monospace">VEL_X.100</text>
      
      {/* Bottom-Right Circle Badge */}
      <circle cx="85" cy="85" r="4" strokeOpacity="0.4" />
      <text x="83.5" y="87" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace" fontWeight="bold">2</text>
    </svg>
  );
}
