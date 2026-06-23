export default function StackBanner() {
  return (
    <div className="col-span-1 sm:col-span-2 border border-white/10 bg-black/20 rounded-2xl p-6 flex flex-row items-center justify-between relative overflow-hidden h-full min-h-[140px] md:min-h-0">
      {/* Stretched Title container taking up exactly half the width of its container */}
      <div className="w-1/2 h-full flex items-center mr-6 flex-none">
        <svg viewBox="0 0 260 80" preserveAspectRatio="none" className="w-full h-full fill-current text-[#f5f5f7] select-none font-bold uppercase">
          <text 
            x="0" 
            y="72" 
            textLength="260" 
            lengthAdjust="spacingAndGlyphs" 
            className="font-display" 
            fontSize="85" 
            fontWeight="900" 
            letterSpacing="-2" 
            style={{ transformOrigin: 'center center' }}
          >
            STACK
          </text>
        </svg>
      </div>

      {/* Subtitle stacked as a small paragraph */}
      <p className="text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-widest max-w-[160px] leading-relaxed select-none z-10 self-end mb-2 mr-16">
        Tecnologías, Librerías, Editores & Recursos Técnicos
      </p>
      
      {/* Square '00' logo element in top right corner matching LOGO.png aesthetics */}
      <div className="absolute top-6 right-6 w-8 h-8 border border-white bg-transparent rounded-none flex items-center justify-center shadow-none select-none z-10">
        <span className="font-sans font-black text-xs text-white tracking-tighter">00</span>
      </div>
    </div>
  );
}
