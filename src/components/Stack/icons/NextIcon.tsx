export default function NextIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="1.2" fill="none">
      <circle cx="50" cy="50" r="42" strokeDasharray="3 3" className="next-circle" style={{ transformOrigin: '50px 50px' }} />
      <path d="M32 68 V32 L68 68 V32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="68" cy="68" r="2.5" fill="currentColor" />
      <line x1="15" y1="15" x2="85" y2="85" strokeWidth="0.5" strokeOpacity="0.15" />
    </svg>
  );
}
