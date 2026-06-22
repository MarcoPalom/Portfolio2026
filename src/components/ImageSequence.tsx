import { useEffect, useState, useRef } from 'react';

interface ImageSequenceProps {
  className?: string;
  imgClassName?: string;
  onTriggerFrame?: (frame: number) => void;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
}

const totalFrames = 20;

// Generate paths statically once to avoid recreation on every render
const frames = Array.from({ length: totalFrames }, (_, i) => {
  const part1 = i.toString().padStart(4, '0');
  const part2 = (i + 1).toString().padStart(2, '0');
  return `/secc1/marco_${part1}_${part2}.png.png`;
});

export default function ImageSequence({ className, imgClassName, onTriggerFrame, style, imgStyle }: ImageSequenceProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const directionRef = useRef(1); // 1 = forward, -1 = backward

  // Preload images once on mount to prevent any flickering
  useEffect(() => {
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Ping-pong (alternate) loop: runs 0 -> 19 -> 0
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => {
        let next = prev + directionRef.current;
        
        // Boundary check
        if (next >= totalFrames) {
          directionRef.current = -1; // Change to backward
          next = totalFrames - 2; // Jump to frame 18
        } else if (next < 0) {
          directionRef.current = 1; // Change to forward
          next = 1; // Jump to frame 1
        }

        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Trigger side effects outside the state rendering loop
  useEffect(() => {
    if (currentFrame === 14 && onTriggerFrame) {
      onTriggerFrame(14);
    }
  }, [currentFrame, onTriggerFrame]);

  const defaultClass = "relative w-full max-w-[500px] aspect-[4/3] mx-auto glass rounded-2xl p-4 flex items-center justify-center overflow-hidden group shadow-[0_0_50px_rgba(99,102,241,0.15)] hover:shadow-[0_0_60px_rgba(99,102,241,0.25)] transition-all duration-500";
  const defaultImgClass = "max-w-full max-h-full object-contain rounded-lg";

  return (
    <div className={className || defaultClass} style={style}>
      {/* Decorative elements only if using the default style */}
      {!className && (
        <>
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-purple-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-0 left-0 w-24 h-24 bg-brand-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
        </>
      )}

      {/* Main Image Sequence display */}
      <div className="relative z-10 w-full h-full flex items-end justify-center lg:justify-end">
        {frames.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Frame ${index}`}
            className={`absolute ${imgClassName || defaultImgClass} ${
              index === currentFrame ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={imgStyle}
          />
        ))}
      </div>
    </div>
  );
}
