export default function NodeIcon() {
  return (
    <div className="w-16 h-16 flex items-center justify-center select-none node-3d-cube-container" style={{ perspective: '200px' }}>
      <div 
        className="w-10 h-10 relative node-3d-cube" 
        style={{ 
          transformStyle: 'preserve-3d',
          color: 'inherit'
        }}
      >
        {/* Front face */}
        <div 
          style={{ 
            position: 'absolute', 
            width: '40px', 
            height: '40px', 
            border: '1.2px solid currentColor', 
            transform: 'rotateY(0deg) translateZ(20px)',
            opacity: 0.8,
            color: 'inherit'
          }} 
        />
        {/* Back face */}
        <div 
          style={{ 
            position: 'absolute', 
            width: '40px', 
            height: '40px', 
            border: '1.2px solid currentColor', 
            transform: 'rotateY(180deg) translateZ(20px)',
            opacity: 0.8,
            color: 'inherit'
          }} 
        />
        {/* Left face */}
        <div 
          style={{ 
            position: 'absolute', 
            width: '40px', 
            height: '40px', 
            border: '1.2px solid currentColor', 
            transform: 'rotateY(-90deg) translateZ(20px)',
            opacity: 0.8,
            color: 'inherit'
          }} 
        />
        {/* Right face */}
        <div 
          style={{ 
            position: 'absolute', 
            width: '40px', 
            height: '40px', 
            border: '1.2px solid currentColor', 
            transform: 'rotateY(90deg) translateZ(20px)',
            opacity: 0.8,
            color: 'inherit'
          }} 
        />
        {/* Top face */}
        <div 
          style={{ 
            position: 'absolute', 
            width: '40px', 
            height: '40px', 
            border: '1.2px solid currentColor', 
            transform: 'rotateX(90deg) translateZ(20px)',
            opacity: 0.8,
            color: 'inherit'
          }} 
        />
        {/* Bottom face */}
        <div 
          style={{ 
            position: 'absolute', 
            width: '40px', 
            height: '40px', 
            border: '1.2px solid currentColor', 
            transform: 'rotateX(-90deg) translateZ(20px)',
            opacity: 0.8,
            color: 'inherit'
          }} 
        />
        {/* Center dot */}
        <div 
          style={{ 
            position: 'absolute', 
            width: '6px', 
            height: '6px', 
            backgroundColor: 'currentColor', 
            borderRadius: '50%',
            left: '17px',
            top: '17px',
            transform: 'translateZ(0px)',
            color: 'inherit'
          }} 
        />
      </div>
    </div>
  );
}
