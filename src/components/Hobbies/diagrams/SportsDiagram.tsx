export default function SportsDiagram() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.1" fill="none">
      {/* Outer Border Box */}
      <rect x="6" y="6" width="88" height="88" rx="8" strokeOpacity="0.8" />
      
      {/* Top-Left Label */}
      <text x="12" y="16" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace" fontWeight="bold">04</text>
      
      {/* Soccer Ball Drawing */}
      <g strokeOpacity="0.8">
        <circle cx="50" cy="53" r="26" />
        
        {/* Central Pentagon Panel */}
        <polygon points="50,45 58,51 55,60 45,60 42,51" />
        
        {/* Radiating Lines */}
        <line x1="50" y1="45" x2="50" y2="33" />
        <line x1="58" y1="51" x2="68" y2="48" />
        <line x1="55" y1="60" x2="61" y2="70" />
        <line x1="45" y1="60" x2="39" y2="70" />
        <line x1="42" y1="51" x2="32" y2="48" />
        
        {/* Outer Pentagon lines */}
        <line x1="43" y1="29" x2="57" y2="29" />
        <line x1="72" y1="39" x2="76" y2="49" />
        <line x1="69" y1="75" x2="59" y2="78" />
        <line x1="31" y1="75" x2="41" y2="78" />
        <line x1="28" y1="39" x2="24" y2="49" />
      </g>
      
      {/* Technical Pointer Line pointing to soccer ball center panel */}
      {/* Starts near center panel (50, 48), goes up-left to (26, 20), then horizontal to (12, 20) */}
      <polyline points="50,48 26,20 10,20" strokeOpacity="0.7" strokeWidth="0.8" />
      
      {/* Pointer Text Annotation */}
      <text x="14" y="18" fill="currentColor" stroke="none" fontSize="5" fontFamily="monospace">PANEL_SEC</text>
      
      {/* Bottom-Right Circle Badge */}
      <circle cx="85" cy="85" r="4" strokeOpacity="0.4" />
      <text x="83.5" y="87" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace" fontWeight="bold">4</text>
    </svg>
  );
}
