
const SOCIAL_LINKS = [
  {
    label: 'Email',
    value: 'marco.palomo.dev@gmail.com',
    href: 'mailto:marco.palomo.dev@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22,4 L12,13 L2,4" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Marco Palomo',
    href: 'https://www.linkedin.com/in/marco-palomo-975a9928a',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: '@MarcoPalom',
    href: 'https://github.com/MarcoPalom',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@itsmarcop_',
    href: 'https://www.instagram.com/itsmarcop_/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const PRODUCT_LINKS = [
  {
    label: 'Doty Instagram',
    value: '@dotybytencia',
    href: 'https://www.instagram.com/dotybytencia/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Doty Website',
    value: 'doty.com.mx',
    href: 'https://doty.com.mx/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

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
          Contacto
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-light text-white/40 uppercase tracking-widest mt-8 font-sans flex items-center justify-center">
          <span>Trabajemos juntos</span>
          <span
            className="w-2.5 h-2.5 border border-white/30 inline-block mx-4"
            style={{ borderWidth: '1.5px' }}
          />
          <span>Escríbeme</span>
        </p>
      </div>

      {/* ═══════ FOOTER CARD (slides up from bottom on second scroll) ═══════ */}
      <div
        className="absolute inset-x-0 bottom-0 z-20"
        style={{ transform: `translate3d(0, ${yPercent}%, 0)` }}
      >
        {/* Top gradient fade so the card blends into the background */}
        <div className="h-16 bg-gradient-to-t from-[#061c24] to-transparent pointer-events-none" />

        <div className="bg-[#061c24] border-t border-white/[0.06] px-6 sm:px-10 md:px-16 pt-8 pb-6">
          {/* Footer Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

            {/* Column 1: Identity */}
            <div className="flex flex-col">
              <h2 className="text-xl sm:text-2xl font-display uppercase tracking-wide text-white leading-none">
                Marco Palomo
              </h2>
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/35 mt-1.5 mb-4">
                Developer & Designer
              </p>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 mt-auto">
                © 2026 Marco Palomo
              </p>
            </div>

            {/* Column 2: Social Links */}
            <div className="flex flex-col">
              <p className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/30 mb-3">
                Redes & Contacto
              </p>
              <div className="space-y-0.5">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 py-1.5 px-2 -mx-2 rounded-md transition-all duration-300 hover:bg-white/[0.04] pointer-events-auto"
                  >
                    <span className="text-white/25 group-hover:text-blue-400 transition-colors duration-300 flex-shrink-0">
                      {link.icon}
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[8px] font-mono uppercase tracking-[0.15em] text-white/20 leading-none mb-0.5">
                        {link.label}
                      </span>
                      <span className="text-xs text-white/60 group-hover:text-white transition-colors duration-300 truncate">
                        {link.value}
                      </span>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3 h-3 ml-auto text-white/0 group-hover:text-white/30 transition-all duration-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Products */}
            <div className="flex flex-col">
              <p className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/30 mb-3">
                Mis Productos
              </p>
              <div className="space-y-0.5">
                {PRODUCT_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 py-1.5 px-2 -mx-2 rounded-md transition-all duration-300 hover:bg-white/[0.04] pointer-events-auto"
                  >
                    <span className="text-white/25 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0">
                      {link.icon}
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[8px] font-mono uppercase tracking-[0.15em] text-white/20 leading-none mb-0.5">
                        {link.label}
                      </span>
                      <span className="text-xs text-white/60 group-hover:text-white transition-colors duration-300 truncate">
                        {link.value}
                      </span>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3 h-3 ml-auto text-white/0 group-hover:text-white/30 transition-all duration-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}
