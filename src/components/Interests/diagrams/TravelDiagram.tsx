export default function TravelDiagram() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.1" fill="none">
      {/* Outer Border Box */}
      <rect x="6" y="6" width="88" height="88" rx="8" strokeOpacity="0.8" />
      
      {/* Top-Left Label */}
      <text x="12" y="16" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace" fontWeight="bold">03</text>
      
      {/* Compass Drawing */}
      <g strokeOpacity="0.8">
        {/* Outer Dial Circle */}
        <circle cx="50" cy="53" r="25" />
        <circle cx="50" cy="53" r="22" strokeDasharray="1.5 2" className="opacity-60" />
        
        {/* Inner Hub */}
        <circle cx="50" cy="53" r="3" />
        
        {/* Compass Needle (pointing North-East / Top-Right) */}
        <polygon points="50,53 54,40 50,34" fill="currentColor" stroke="none" />
        <polygon points="50,53 46,40 50,34" stroke="currentColor" fill="none" />
        <polygon points="50,53 46,66 50,72" className="opacity-50" />
        <polygon points="50,53 54,66 50,72" className="opacity-50" />
        
        {/* Ticks for Cardinal Directions */}
        <line x1="50" y1="28" x2="50" y2="31" /> {/* North */}
        <line x1="50" y1="75" x2="50" y2="78" /> {/* South */}
        <line x1="25" y1="53" x2="28" y2="53" /> {/* West */}
        <line x1="72" y1="53" x2="75" y2="53" /> {/* East */}
        
        {/* Cardinal Texts */}
        <text x="48.5" y="27" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace">N</text>
        <text x="48.5" y="83" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace">S</text>
        <text x="76" y="55" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace">E</text>
        <text x="20" y="55" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace">W</text>
      </g>
      
      {/* Technical Pointer Line pointing to North Needle */}
      {/* Starts near compass North needle tip (50, 36), goes up-left to (26, 20), then horizontal to (12, 20) */}
      <polyline points="50,36 26,20 10,20" strokeOpacity="0.7" strokeWidth="0.8" />
      
      {/* Pointer Text Annotation */}
      <text x="14" y="18" fill="currentColor" stroke="none" fontSize="5" fontFamily="monospace">BRG_N</text>
      
      {/* Bottom-Right Circle Badge */}
      <circle cx="85" cy="85" r="4" strokeOpacity="0.4" />
      <text x="83.5" y="87" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace" fontWeight="bold">3</text>
    </svg>
  );
}
