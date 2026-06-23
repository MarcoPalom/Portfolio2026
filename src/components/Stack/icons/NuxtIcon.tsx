export default function NuxtIcon() {
  return (
    <div className="w-16 h-16 flex items-center justify-center select-none" style={{ perspective: '200px' }}>
      <div 
        className="w-10 h-10 relative nuxt-pyramid" 
        style={{ 
          transformStyle: 'preserve-3d',
          color: 'inherit'
        }}
      >
        {/* Base square */}
        <div 
          style={{ 
            position: 'absolute', 
            width: '40px', 
            height: '40px', 
            border: '1.2px solid currentColor', 
            transform: 'rotateX(90deg) translateZ(-20px)',
            opacity: 0.35,
            color: 'inherit'
          }} 
        />
        {/* Face 1 */}
        <div 
          style={{ 
            position: 'absolute', 
            width: '40px', 
            height: '40px', 
            transform: 'rotateY(0deg) translateZ(20px) rotateX(30deg)',
            transformOrigin: 'bottom center',
            color: 'inherit'
          }}
        >
          <svg viewBox="0 0 40 40" className="w-full h-full stroke-current" fill="none" strokeWidth="1.2">
            <polygon points="20,0 0,40 40,40" />
          </svg>
        </div>
        {/* Face 2 */}
        <div 
          style={{ 
            position: 'absolute', 
            width: '40px', 
            height: '40px', 
            transform: 'rotateY(90deg) translateZ(20px) rotateX(30deg)',
            transformOrigin: 'bottom center',
            color: 'inherit'
          }}
        >
          <svg viewBox="0 0 40 40" className="w-full h-full stroke-current" fill="none" strokeWidth="1.2">
            <polygon points="20,0 0,40 40,40" />
          </svg>
        </div>
        {/* Face 3 */}
        <div 
          style={{ 
            position: 'absolute', 
            width: '40px', 
            height: '40px', 
            transform: 'rotateY(180deg) translateZ(20px) rotateX(30deg)',
            transformOrigin: 'bottom center',
            color: 'inherit'
          }}
        >
          <svg viewBox="0 0 40 40" className="w-full h-full stroke-current" fill="none" strokeWidth="1.2">
            <polygon points="20,0 0,40 40,40" />
          </svg>
        </div>
        {/* Face 4 */}
        <div 
          style={{ 
            position: 'absolute', 
            width: '40px', 
            height: '40px', 
            transform: 'rotateY(270deg) translateZ(20px) rotateX(30deg)',
            transformOrigin: 'bottom center',
            color: 'inherit'
          }}
        >
          <svg viewBox="0 0 40 40" className="w-full h-full stroke-current" fill="none" strokeWidth="1.2">
            <polygon points="20,0 0,40 40,40" />
          </svg>
        </div>
      </div>
    </div>
  );
}
