export default function AboutSection() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center relative px-8 select-none">
      {/* Cinematic Glowing Background Orb */}
      <div className="absolute bottom-[20%] left-[20%] w-[40%] h-[40%] bg-emerald-700/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Title Container */}
      <div className="flex flex-col items-center justify-center text-center z-10 pointer-events-none">
        <h1 
          className="font-display text-[15vw] lg:text-[10vw] leading-[0.8] uppercase text-green-500/85 tracking-tighter" 
          style={{ 
            transform: 'scaleY(1.4)', 
            transformOrigin: 'center center',
            letterSpacing: '-0.04em'
          }}
        >
          About Me
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-light text-white/40 uppercase tracking-widest mt-8 font-sans flex items-center justify-center">
          <span>Desarrollador</span>
          <span className="w-2.5 h-2.5 border border-white/30 inline-block mx-4" style={{ borderWidth: '1.5px' }} />
          <span>Diseñador</span>
          <span className="w-2.5 h-2.5 border border-white/30 inline-block mx-4" style={{ borderWidth: '1.5px' }} />
          <span>Creador</span>
        </p>
      </div>
    </div>
  );
}
