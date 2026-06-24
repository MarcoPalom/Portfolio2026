export default function SneakerDiagram() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.1" fill="none">
      {/* Outer Border Box */}
      <rect x="6" y="6" width="88" height="88" rx="8" strokeOpacity="0.8" />
      
      {/* Top-Left Label */}
      <text x="12" y="16" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace" fontWeight="bold">04</text>
      
      {/* Sneaker Cushioning Drawing */}
      <g strokeOpacity="0.8">
        {/* Sneaker Outsole Profile */}
        <path d="M 18,52 L 28,52 C 34,52 38,55 42,58 L 52,65 C 56,68 62,69 70,69 L 82,69 C 84,69 86,67 86,65 L 86,63 C 86,59 82,57 78,57 L 70,57 C 62,57 56,53 52,48 L 46,41 C 42,36 36,33 30,33 L 22,33" />
        
        {/* Sole Tread Pattern */}
        <path d="M 70,69 L 68,73 M 74,69 L 72,73 M 78,69 L 76,73 M 82,69 L 80,73" />
        <path d="M 44,60 L 41,63 M 48,63 L 45,66 M 52,66 L 49,69" />
        
        {/* Air Cushion Chamber (represented by ellipses/ovals inside the heel sole) */}
        <rect x="62" y="61" width="16" height="5" rx="2.5" strokeDasharray="1.5 1.5" />
        <line x1="66" y1="61" x2="66" y2="66" />
        <line x1="70" y1="61" x2="70" y2="66" />
        <line x1="74" y1="61" x2="74" y2="66" />
      </g>
      
      {/* Technical Pointer Line pointing to Air Cushion Chamber */}
      {/* Starts near air chamber (70, 63), goes up-left to (32, 22), then horizontal to (14, 22) */}
      <polyline points="70,63 32,22 10,22" strokeOpacity="0.7" strokeWidth="0.8" />
      
      {/* Pointer Text Annotation */}
      <text x="14" y="20" fill="currentColor" stroke="none" fontSize="5" fontFamily="monospace">AIR_SO</text>
      
      {/* Bottom-Right Circle Badge */}
      <circle cx="85" cy="85" r="4" strokeOpacity="0.4" />
      <text x="83.5" y="87" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace" fontWeight="bold">4</text>
    </svg>
  );
}
