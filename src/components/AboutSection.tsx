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
        <p className="text-base sm:text-lg lg:text-xl font-light text-white/40 uppercase tracking-widest mt-8 font-sans">
          Desarrollador &nbsp;&bull;&nbsp; Diseñador &nbsp;&bull;&nbsp; Creador
        </p>
      </div>
    </div>
  );
}
