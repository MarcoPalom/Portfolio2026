export default function GSAPIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.2" fill="none">
      <defs>
        <linearGradient id="gsap-glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      
      {/* Central crosshair lines */}
      <line x1="50" y1="5" x2="50" y2="95" strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.3" />
      <line x1="5" y1="50" x2="95" y2="50" strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.3" />
      
      {/* Technical outer measuring rings */}
      <circle cx="50" cy="50" r="44" strokeWidth="0.5" strokeDasharray="6 6" strokeOpacity="0.2" className="gsap-outer-ring" style={{ transformOrigin: '50px 50px' }} />
      <circle cx="50" cy="50" r="40" strokeWidth="1.0" strokeOpacity="0.15" />
      
      {/* Rotating Clover Logo Group */}
      <g className="gsap-pulse-wrapper" style={{ transformOrigin: '50px 50px' }}>
        <g className="gsap-clover" style={{ transformOrigin: '50px 50px' }}>
          {/* Top-Left circle */}
          <circle cx="37" cy="37" r="14.5" fill="url(#gsap-glow-grad)" strokeWidth="1.5" />
          {/* Top-Right circle */}
          <circle cx="63" cy="37" r="14.5" fill="url(#gsap-glow-grad)" strokeWidth="1.5" />
          {/* Bottom-Left circle */}
          <circle cx="37" cy="63" r="14.5" fill="url(#gsap-glow-grad)" strokeWidth="1.5" />
          {/* Bottom-Right circle */}
          <circle cx="63" cy="63" r="14.5" fill="url(#gsap-glow-grad)" strokeWidth="1.5" />
          
          {/* Inner tiny ticks on centers of circles */}
          <circle cx="37" cy="37" r="1" fill="currentColor" opacity="0.5" />
          <circle cx="63" cy="37" r="1" fill="currentColor" opacity="0.5" />
          <circle cx="37" cy="63" r="1" fill="currentColor" opacity="0.5" />
          <circle cx="63" cy="63" r="1" fill="currentColor" opacity="0.5" />
        </g>
      </g>
      
      {/* Central target tick */}
      <circle cx="50" cy="50" r="2" fill="currentColor" />
    </svg>
  );
}
