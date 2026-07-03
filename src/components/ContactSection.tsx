
import ContactCard from './ContactCard';

interface ContactSectionProps {
  scrollProgress: number; // 0.0 → 1.0
}

export default function ContactSection({ scrollProgress }: ContactSectionProps) {
  // Translate from 100% (fully off-screen below) to 0% (in place)
  const yPercent = (1 - scrollProgress) * 100;


  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-8 select-none overflow-hidden">
      {/* Cinematic Glowing Background Orb — HIDDEN on mobile */}
      <div className="hidden lg:block absolute bottom-[30%] right-[20%] w-[40%] h-[40%] bg-blue-700/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden lg:block absolute top-[20%] left-[10%] w-[25%] h-[25%] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Title Container (always visible) */}
      <div className="flex flex-col items-center justify-center text-center z-10 pointer-events-none">
        <h1
          className="font-display text-[15vw] lg:text-[10vw] leading-[0.8] uppercase text-blue-500/80 tracking-tighter"
          style={{
            transform: 'scaleY(1.4)',
            transformOrigin: 'center center',
            letterSpacing: '-0.04em',
          }}
        >
          Contact
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-light text-white/40 uppercase tracking-widest mt-8 font-sans flex items-center justify-center">
          <span>Let's work together</span>
          <span
            className="w-2.5 h-2.5 border border-white/30 inline-block mx-4"
            style={{ borderWidth: '1.5px' }}
          />
          <span>Drop me a line</span>
        </p>
      </div>

      {/* ═══════ FOOTER CARD (slides up to cover the whole screen) ═══════ */}
      <ContactCard yPercent={yPercent} />
    </div>
  );
}
