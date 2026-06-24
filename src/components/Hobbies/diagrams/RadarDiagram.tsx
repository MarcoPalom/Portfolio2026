export default function RadarDiagram() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.1" fill="none">
      {/* Outer Border Box */}
      <rect x="6" y="6" width="88" height="88" rx="8" strokeOpacity="0.8" />
      
      {/* Top-Left Label */}
      <text x="12" y="16" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace" fontWeight="bold">05</text>
      
      {/* Radar Drawing */}
      <g strokeOpacity="0.8">
        {/* Concentric circles */}
        <circle cx="50" cy="53" r="30" />
        <circle cx="50" cy="53" r="20" strokeDasharray="2 2" strokeOpacity="0.5" />
        <circle cx="50" cy="53" r="10" strokeOpacity="0.3" />
        
        {/* Crosshair lines */}
        <line x1="50" y1="20" x2="50" y2="86" strokeDasharray="3 3" strokeOpacity="0.3" />
        <line x1="17" y1="53" x2="83" y2="53" strokeDasharray="3 3" strokeOpacity="0.3" />
        
        {/* Radar Sweep Line */}
        <line x1="50" y1="53" x2="50" y2="23" strokeWidth="1.6" />
        
        {/* Blips */}
        <circle cx="38" cy="41" r="2" fill="currentColor" stroke="none" />
        <circle cx="38" cy="41" r="4.5" strokeDasharray="1 1" />
        
        <circle cx="64" cy="65" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="58" cy="38" r="1" fill="currentColor" stroke="none" />
      </g>
      
      {/* Technical Pointer Line pointing to blip */}
      {/* Starts near blip (38, 41), goes up-left to (22, 22), then horizontal to (12, 22) */}
      <polyline points="38,41 22,22 10,22" strokeOpacity="0.7" strokeWidth="0.8" />
      
      {/* Pointer Text Annotation */}
      <text x="14" y="20" fill="currentColor" stroke="none" fontSize="5" fontFamily="monospace">BLIP_ACQ</text>
      
      {/* Bottom-Right Circle Badge */}
      <circle cx="85" cy="85" r="4" strokeOpacity="0.4" />
      <text x="83.5" y="87" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace" fontWeight="bold">5</text>
    </svg>
  );
}
