export default function TSIcon() {
  return (
    <svg viewBox="0 0 246 246" className="w-full h-full" fill="none">
      {/* Main outer square box outline */}
      <rect 
        x="10" 
        y="10" 
        width="226" 
        height="226" 
        rx="16" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        className="ts-rect"
        style={{ transformOrigin: '123px 123px' }}
      />
      {/* The hollow outline "TS" letters */}
      <g 
        className="ts-path"
        style={{ transformOrigin: '123px 123px' }}
      >
        <g transform="scale(10.25)">
          <path 
            d="M18.488 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" 
            fill="currentColor"
            fillOpacity="0.08"
            stroke="currentColor"
            strokeWidth="0.8"
          />
        </g>
      </g>
      {/* Blueprint Construction Accents */}
      {/* Dashed outer boundary */}
      <rect x="-10" y="-10" width="266" height="266" rx="20" strokeDasharray="8 8" strokeOpacity="0.25" strokeWidth="1.5" stroke="currentColor" className="ts-blueprint-border" style={{ transformOrigin: '123px 123px' }} />
      {/* Central crosshair lines */}
      <line x1="-30" y1="123" x2="276" y2="123" strokeDasharray="4 4" strokeOpacity="0.2" strokeWidth="1.5" stroke="currentColor" />
      <line x1="123" y1="-30" x2="123" y2="276" strokeDasharray="4 4" strokeOpacity="0.2" strokeWidth="1.5" stroke="currentColor" />
      {/* Construction corner circles */}
      <circle cx="-10" cy="-10" r="4" fill="currentColor" opacity="0.3" />
      <circle cx="256" cy="-10" r="4" fill="currentColor" opacity="0.3" />
      <circle cx="-10" cy="256" r="4" fill="currentColor" opacity="0.3" />
      <circle cx="256" cy="256" r="4" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
