import { useEffect, useRef, useCallback } from 'react';

interface ImageSequenceProps {
  className?: string;
  imgClassName?: string;
  onTriggerFrame?: (frame: number) => void;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
}

const totalFrames = 20;

// Generate paths statically once to avoid recreation on every render
const allFramePaths = Array.from({ length: totalFrames }, (_, i) => {
  const part1 = i.toString().padStart(4, '0');
  const part2 = (i + 1).toString().padStart(2, '0');
  return `/secc1/marco_${part1}_${part2}.png.webp`;
});

export default function ImageSequence({ className, onTriggerFrame, style, imgStyle }: ImageSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const directionRef = useRef(1);
  const loadedRef = useRef(false);

  // Determine frame set — mobile uses every other frame (10 frames)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const framePaths = isMobile
    ? allFramePaths.filter((_, i) => i % 2 === 0)
    : allFramePaths;
  const frameCount = framePaths.length;

  // Draw a single frame to the canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = imagesRef.current[frameIndex];
    if (!canvas || !ctx || !img || !img.complete) return;

    // Clear and draw — only 1 image in VRAM at a time
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate object-contain positioning (bottom-aligned like object-right-bottom)
    const canvasW = canvas.width;
    const canvasH = canvas.height;
    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;

    const scale = Math.min(canvasW / imgW, canvasH / imgH);
    const drawW = imgW * scale;
    const drawH = imgH * scale;
    // Right-bottom alignment
    const drawX = canvasW - drawW;
    const drawY = canvasH - drawH;

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  // Preload images into JS Image objects (NOT in DOM)
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    framePaths.forEach((src, idx) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === framePaths.length) {
          loadedRef.current = true;
          // Draw first frame once all loaded
          drawFrame(0);
        }
      };
      img.onerror = () => {
        loadedCount++;
      };
      img.src = src;
      images[idx] = img;
    });

    imagesRef.current = images;
  }, [framePaths, drawFrame]);

  // Handle canvas sizing
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      // On mobile, use lower resolution (cap DPR at 1)
      const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) ctx.scale(dpr, dpr);

      // Redraw current frame after resize
      if (loadedRef.current) {
        // Reset scale before redraw
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        drawFrame(currentFrameRef.current);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [isMobile, drawFrame]);

  // Ping-pong animation loop
  useEffect(() => {
    // Slower on mobile (200ms vs 140ms)
    const intervalMs = isMobile ? 200 : 140;

    const interval = setInterval(() => {
      if (!loadedRef.current) return;

      let next = currentFrameRef.current + directionRef.current;

      if (next >= frameCount) {
        directionRef.current = -1;
        next = frameCount - 2;
      } else if (next < 0) {
        directionRef.current = 1;
        next = 1;
      }

      currentFrameRef.current = next;
      drawFrame(next);

      // Map mobile frame index back to original 20-frame index for trigger callback
      const originalFrameIndex = isMobile ? next * 2 : next;
      if (originalFrameIndex === 14 && onTriggerFrame) {
        onTriggerFrame(14);
      }
    }, intervalMs);

    return () => clearInterval(interval);
  }, [frameCount, isMobile, onTriggerFrame, drawFrame]);

  // Apply CSS filter from imgStyle to canvas
  const canvasStyle: React.CSSProperties = {
    ...(imgStyle || {}),
    position: 'absolute' as const,
    inset: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none' as const,
  };

  return (
    <div ref={containerRef} className={className || "relative w-full h-full"} style={style}>
      <canvas
        ref={canvasRef}
        style={canvasStyle}
      />
    </div>
  );
}
