export default function ReactIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.2" fill="none">
      <g className="react-svg" style={{ transformOrigin: '50px 50px' }}>
        <ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(0 50 50)" />
        <ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(120 50 50)" />
      </g>
      <circle cx="50" cy="50" r="5" className="fill-white/10" />
      <line x1="50" y1="10" x2="50" y2="90" strokeDasharray="3 3" strokeOpacity="0.2" />
      <line x1="10" y1="50" x2="90" y2="50" strokeDasharray="3 3" strokeOpacity="0.2" />
    </svg>
  );
}
