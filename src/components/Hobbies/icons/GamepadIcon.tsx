export default function GamepadIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none">
      <defs>
        <mask id="gamepad-lucide-mask">
          {/* Everything white stays solid white */}
          <rect width="100" height="100" fill="white" />
          
          {/* Clean, bold Gamepad outline in black */}
          <g fill="none" stroke="black" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Outer Controller Body */}
            <rect x="15" y="25" width="70" height="50" rx="16" />
            
            {/* D-Pad (cross shape) */}
            <path d="M 32,50 L 44,50" />
            <path d="M 38,44 L 38,56" />
            
            {/* Action Buttons */}
            <circle cx="68" cy="46" r="3" fill="black" />
            <circle cx="60" cy="54" r="3" fill="black" />
          </g>
        </mask>
      </defs>
      
      {/* Solid white card with cutout applied */}
      <rect width="100" height="100" rx="20" fill="white" mask="url(#gamepad-lucide-mask)" />
    </svg>
  );
}
