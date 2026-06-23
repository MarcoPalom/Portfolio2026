export default function FigmaIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.2" fill="none">
      <g>
        <circle cx="38" cy="30" r="12" />
        <circle cx="62" cy="30" r="12" />
        <circle cx="38" cy="50" r="12" />
        <circle cx="62" cy="50" r="12" />
        <path d="M26 70 A12 12 0 0038 82 A12 12 0 0038 58 Z" />
      </g>
      <circle cx="50" cy="50" r="44" strokeDasharray="4 4" strokeOpacity="0.2" className="figma-crosshair" style={{ transformOrigin: '50px 50px' }} />
    </svg>
  );
}
