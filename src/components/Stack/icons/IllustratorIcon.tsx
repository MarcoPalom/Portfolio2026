export default function IllustratorIcon() {
  return (
    <div className="w-16 h-16 flex items-center justify-center select-none ill-3d-container" style={{ perspective: '200px' }}>
      <div 
        className="w-16 h-16 relative ill-3d-wrapper" 
        style={{ 
          transformStyle: 'preserve-3d',
          color: 'inherit'
        }}
      >
        {/* Flat blueprint components */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            color: 'inherit',
            transform: 'translateZ(0px)'
          }}
        >
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
              style={{ transformOrigin: '123px 123px' }}
            />
            {/* Blueprint Construction Accents */}
            {/* Dashed outer boundary */}
            <rect x="-10" y="-10" width="266" height="266" rx="20" strokeDasharray="8 8" strokeOpacity="0.25" strokeWidth="1.5" stroke="currentColor" className="ill-blueprint-border" style={{ transformOrigin: '123px 123px' }} />
            {/* Central crosshair lines */}
            <line x1="-30" y1="123" x2="276" y2="123" strokeDasharray="4 4" strokeOpacity="0.2" strokeWidth="1.5" stroke="currentColor" />
            <line x1="123" y1="-30" x2="123" y2="276" strokeDasharray="4 4" strokeOpacity="0.2" strokeWidth="1.5" stroke="currentColor" />
            {/* Construction corner circles */}
            <circle cx="-10" cy="-10" r="4" fill="currentColor" opacity="0.3" />
            <circle cx="256" cy="-10" r="4" fill="currentColor" opacity="0.3" />
            <circle cx="-10" cy="256" r="4" fill="currentColor" opacity="0.3" />
            <circle cx="256" cy="256" r="4" fill="currentColor" opacity="0.3" />
          </svg>
        </div>

        {/* Rotating 3D "Ai" letters */}
        <div 
          className="ill-3d-letters"
          style={{
            position: 'absolute',
            inset: 0,
            transformStyle: 'preserve-3d',
            color: 'inherit'
          }}
        >
          {/* Volumetric SVG Extrusion Stack */}
          {Array.from({ length: 17 }).map((_, index) => {
            const zVal = -8 + index * 1.0; // from -8px to +8px in 1px steps
            const isFront = index === 16;
            const isBack = index === 0;
            return (
              <div 
                key={index}
                style={{
                  position: 'absolute',
                  inset: 0,
                  transform: `translateZ(${zVal}px)`,
                  color: 'inherit',
                  opacity: isFront ? 1 : isBack ? 0.4 : 0.25
                }}
              >
                <svg viewBox="0 0 246 246" className="w-full h-full" fill="none">
                  <g transform="scale(10.25)">
                    <path 
                      d="M14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16z M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859z M18.1 16.68c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7z M17.891 7.65c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z" 
                      fill={isFront || isBack ? "currentColor" : "none"}
                      fillOpacity={isFront || isBack ? 0.08 : 0}
                      stroke="currentColor"
                      strokeWidth={isFront || isBack ? 0.8 : 0.25}
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
