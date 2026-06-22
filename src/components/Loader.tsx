import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'expanding' | 'fading' | 'done'>('loading');

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Linear and smooth loading increments
      const increment = Math.floor(Math.random() * 8) + 4;
      current = Math.min(100, current + increment);
      setProgress(current);

      if (current === 100) {
        clearInterval(interval);
        
        // Transition 1: Scale up the square to resolve into the logo
        setTimeout(() => {
          setPhase('expanding');
          
          // Transition 2: Fade out the entire black curtain
          setTimeout(() => {
            setPhase('fading');
            
            // Transition 3: Finish loader
            setTimeout(() => {
              setPhase('done');
              onComplete();
            }, 800); // fade out duration
          }, 1000); // logo display duration
        }, 200); // brief pause at 100%
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0a0b0e] select-none transition-all duration-700 ease-in-out ${
      phase === 'fading' ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Background glow burst during expansion */}
      <div className={`absolute inset-0 bg-white/3 transition-opacity duration-1000 ${
        phase === 'expanding' ? 'opacity-100' : 'opacity-0'
      }`} />

      {/* Centered column container */}
      <div className="flex flex-col items-center justify-center gap-8 relative">
        
        {/* The Square Box & Logo Area (Above) */}
        <div className="relative w-[300px] h-[150px] flex items-center justify-center">
          
          {/* The White Frame (stretches to 300x150 and fades when done) */}
          <div 
            className="border-[3px] border-white rounded-lg transition-all duration-700 ease-out absolute"
            style={{
              width: phase === 'expanding' ? '300px' : '56px',
              height: phase === 'expanding' ? '150px' : '56px',
              opacity: phase === 'expanding' ? 0 : 1,
            }}
          />

          {/* The Logo (scales and fades in as the frame expands) */}
          <div className={`absolute flex items-center justify-center transition-all duration-700 ease-out ${
            phase === 'expanding'
              ? 'scale-100 opacity-100'
              : 'scale-0 opacity-0 pointer-events-none'
          }`}>
            <img 
              src="/LOGO.png" 
              alt="Logo" 
              className="w-[240px] h-[120px] object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            />
          </div>

        </div>

        {/* The Loading Bar & Percent (Below) */}
        {/* Fades out as soon as the expansion phase starts */}
        <div className={`flex flex-col items-center gap-3 transition-all duration-300 ${
          phase !== 'loading' ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}>
          
          {/* Horizontal Progress Bar */}
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage Counter */}
          <span className="text-[10px] font-sans font-semibold tracking-widest text-white/40 uppercase">
            {progress}% Loaded
          </span>

        </div>

      </div>
    </div>
  );
}
