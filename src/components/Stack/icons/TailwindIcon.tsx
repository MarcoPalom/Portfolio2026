export default function TailwindIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.2" fill="none">
      <defs>
        <filter id="wind-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04 0.09" numOctaves="2" result="noise" />
          <feOffset dx="0" dy="0" result="offsetNoise">
            <animate attributeName="dx" from="0" to="200" dur="5s" repeatCount="indefinite" />
          </feOffset>
          <feDisplacementMap in="SourceGraphic" in2="offsetNoise" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <g filter="url(#wind-filter)">
        <path d="M20 45 C30 25, 45 25, 55 45 C65 65, 75 65, 85 45 C75 65, 60 65, 50 45 C40 25, 25 25, 20 45 Z" strokeWidth="1.8" className="tw-wave" style={{ transformOrigin: '50px 45px' }} />
        <path d="M15 55 C25 35, 40 35, 50 55 C60 75, 75 75, 80 55 C75 75, 60 75, 50 55 C40 35, 25 35, 15 55 Z" strokeWidth="1.0" strokeDasharray="3 3" />
      </g>
      <line x1="50" y1="15" x2="50" y2="85" strokeWidth="0.5" strokeOpacity="0.2" />
    </svg>
  );
}
