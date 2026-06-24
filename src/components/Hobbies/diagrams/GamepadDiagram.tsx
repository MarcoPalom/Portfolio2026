export default function GamepadDiagram() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.1" fill="none">
      {/* Outer Border Box */}
      <rect x="6" y="6" width="88" height="88" rx="8" strokeOpacity="0.8" />
      
      {/* Top-Left Label */}
      <text x="12" y="16" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace" fontWeight="bold">01</text>
      
      {/* Gamepad Drawing */}
      <g strokeOpacity="0.8">
        <path 
          d="M 32,40 L 68,40 C 76,40 82,46 80,56 C 78,66 72,71 65,71 C 60,71 56,65 50,65 C 44,65 40,71 35,71 C 28,71 22,66 20,56 C 18,46 24,40 32,40 Z" 
          strokeWidth="1.2"
        />
        {/* D-Pad */}
        <path d="M 28,52 L 34,52 M 31,49 L 31,55" />
        <circle cx="31" cy="52" r="4.5" strokeDasharray="1 1.5" strokeOpacity="0.4" />
        
        {/* Joysticks */}
        <circle cx="43" cy="58" r="5" />
        <circle cx="43" cy="58" r="1.5" fill="currentColor" stroke="none" />
        
        <circle cx="57" cy="58" r="5" />
        <circle cx="57" cy="58" r="1.5" fill="currentColor" stroke="none" />
        
        {/* Action Buttons */}
        <circle cx="67" cy="51" r="1.8" />
        <circle cx="72" cy="56" r="1.8" />
        <circle cx="62" cy="56" r="1.8" />
        <circle cx="67" cy="61" r="1.8" />
      </g>
      
      {/* Technical Pointer Line pointing to D-pad */}
      {/* Starts near D-Pad center (31, 52), goes up-left to (18, 22), then horizontal to (12, 22) */}
      <polyline points="31,50 18,22 10,22" strokeOpacity="0.7" strokeWidth="0.8" />
      
      {/* Pointer Text Annotation */}
      <text x="14" y="20" fill="currentColor" stroke="none" fontSize="5" fontFamily="monospace">INPUT_DEV</text>
      
      {/* Bottom-Right Circle Badge */}
      <circle cx="85" cy="85" r="4" strokeOpacity="0.4" />
      <text x="83.5" y="87" fill="currentColor" stroke="none" fontSize="5.5" fontFamily="monospace" fontWeight="bold">1</text>
    </svg>
  );
}
