export default function CalmDiagram() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.1" fill="none">
      {/* Outer Border Box */}
      <rect x="6" y="6" width="88" height="88" rx="8" strokeOpacity="0.8" />
      
      {/* Top-Left Label */}
      <text x="12" y="16" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace" fontWeight="bold">03</text>
      
      {/* Sine Wave & Balance Drawing */}
      <g strokeOpacity="0.8">
        {/* Center Line Axis */}
        <line x1="16" y1="53" x2="84" y2="53" strokeDasharray="3 3" className="opacity-40" />
        
        {/* Smooth Sine Wave */}
        <path d="M 18,53 Q 32,25 46,53 T 74,53 T 82,53" strokeWidth="1.4" />
        
        {/* Wave Amplitude markers */}
        <line x1="32" y1="28" x2="32" y2="53" strokeDasharray="1.5 1.5" />
        <circle cx="32" cy="28" r="2" fill="currentColor" stroke="none" />
        
        {/* Wave Frequency markers */}
        <line x1="18" y1="50" x2="18" y2="56" />
        <line x1="46" y1="50" x2="46" y2="56" />
        <line x1="74" y1="50" x2="74" y2="56" />
      </g>
      
      {/* Technical Pointer Line pointing to Amplitude Crest */}
      {/* Starts near crest (32, 28), goes up-left to (18, 18), then horizontal to (10, 18) */}
      <polyline points="32,28 18,18 10,18" strokeOpacity="0.7" strokeWidth="0.8" />
      
      {/* Pointer Text Annotation */}
      <text x="12" y="15" fill="currentColor" stroke="none" fontSize="5" fontFamily="monospace">AMP_L.HZ</text>
      
      {/* Bottom-Right Circle Badge */}
      <circle cx="85" cy="85" r="4" strokeOpacity="0.4" />
      <text x="83.5" y="87" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace" fontWeight="bold">3</text>
    </svg>
  );
}
