import { useEffect, useRef } from 'react';

interface EvaporatingPixelsProps {
  bgIndex: number; // 0 to 3 (or 4, mapped to 0)
}

// Structured palettes for the pixel-art contour layer (border, middle, core, hot highlight)
const PALETTES = [
  {
    // Blue scheme
    border: '#1d4ed8', // Dark Blue
    middle: '#3b82f6', // Bright Blue
    core: '#22d3ee',   // Cyan
    hot: '#ffffff',    // White
  },
  {
    // Purple scheme
    border: '#6d28d9', // Dark Purple
    middle: '#a855f7', // Bright Purple
    core: '#f472b6',   // Pink
    hot: '#ffffff',    // White
  },
  {
    // Red/Yellow scheme (Classic Fire)
    border: '#b91c1c', // Dark Red
    middle: '#ef4444', // Red
    core: '#facc15',   // Yellow
    hot: '#ffffff',    // White
  },
  {
    // Green scheme
    border: '#15803d', // Dark Green
    middle: '#22c55e', // Green
    core: '#a3e635',   // Lime
    hot: '#ffffff',    // White
  },
];

interface Spark {
  gridX: number; // grid x coordinate (float for smooth movement)
  gridY: number; // grid y coordinate (float for smooth movement)
  life: number;  // 1.0 down to 0.0
  decay: number;
  vx: number;    // horizontal grid speed
  vy: number;    // vertical grid speed
  colorType: 'border' | 'middle';
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : { r: 255, g: 255, b: 255 };
}

export default function EvaporatingPixels({ bgIndex }: EvaporatingPixelsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bgIndexRef = useRef(bgIndex);
  const lastBgIndexRef = useRef(bgIndex);
  const flareIntensityRef = useRef(0.0);

  // Store active rendering colors for smooth palette morphing
  const activeColorsRef = useRef({
    border: { r: 185, g: 28, b: 28 },
    middle: { r: 239, g: 68, b: 68 },
    core: { r: 250, g: 204, b: 21 },
    hot: { r: 255, g: 255, b: 255 },
  });

  useEffect(() => {
    bgIndexRef.current = bgIndex;
  }, [bgIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const isMobile = window.innerWidth < 1024;
    const GRID_SIZE = isMobile ? 20 : 12; // Larger blocks on mobile = fewer draw calls
    const MAX_SPARKS = isMobile ? 30 : 200; // Cap sparks on mobile
    let sparks: Spark[] = [];
    let frameCount = 0; // For frame skipping on mobile

    const resizeCanvas = () => {
      const parentW = canvas.parentElement?.clientWidth || window.innerWidth;
      const parentH = canvas.parentElement?.clientHeight || window.innerHeight;

      // On mobile, reduce canvas resolution for performance
      const scale = isMobile ? 0.5 : 1;
      canvas.width = Math.ceil((parentW * scale) / GRID_SIZE) * GRID_SIZE;
      canvas.height = Math.ceil((parentH * scale) / GRID_SIZE) * GRID_SIZE;
      canvas.style.width = `${parentW}px`;
      canvas.style.height = `${parentH}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Profile boundary function (returns boundary x offset fraction relative to center)
    const getLeftBoundaryFraction = (v: number): number => {
      if (v < 0.20) return -999; // Above head
      if (v < 0.28) {
        // Forehead
        const p = (v - 0.20) / 0.08;
        return 0.03 + p * 0.03;
      }
      if (v < 0.38) {
        // Nose bridge and tip
        const p = (v - 0.28) / 0.10;
        return 0.06 + Math.sin(p * Math.PI * 0.5) * 0.05;
      }
      if (v < 0.41) {
        // Under nose
        const p = (v - 0.38) / 0.03;
        return 0.11 - p * 0.05;
      }
      if (v < 0.45) {
        // Lips
        const p = (v - 0.41) / 0.04;
        return 0.06 + Math.sin(p * Math.PI) * 0.025;
      }
      if (v < 0.50) {
        // Chin
        const p = (v - 0.45) / 0.05;
        return 0.06 + Math.sin(p * Math.PI * 0.5) * 0.035;
      }
      if (v < 0.60) {
        // Neck indentation
        const p = (v - 0.50) / 0.10;
        return 0.095 - Math.sin(p * Math.PI * 0.5) * 0.065;
      }
      // Chest / Shoulder curves out
      const p = (v - 0.60) / 0.40;
      return 0.03 + Math.pow(p, 1.5) * 0.16;
    };

    const render = () => {
      // Throttle to ~30fps on mobile (skip every other frame)

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const cols = w / GRID_SIZE;
      const rows = h / GRID_SIZE;
      const isMobile = window.innerWidth < 1024;

      frameCount++;
      if (isMobile && frameCount % 2 !== 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // ─── 1. DETECT COLOR SWITCH TO FLARE UP (AVIVAR) ───
      if (bgIndexRef.current !== lastBgIndexRef.current) {
        lastBgIndexRef.current = bgIndexRef.current;
        flareIntensityRef.current = 1.0;
      }
      // Slow decay for the flare-up effect (lasts about 1.5 seconds)
      flareIntensityRef.current = Math.max(0, flareIntensityRef.current - 0.022);

      // ─── 2. COLOR PALETTE SMOOTH LERP ───
      const targetPalette = PALETTES[bgIndexRef.current % 4];
      const targetBorderRgb = hexToRgb(targetPalette.border);
      const targetMiddleRgb = hexToRgb(targetPalette.middle);
      const targetCoreRgb = hexToRgb(targetPalette.core);
      const targetHotRgb = hexToRgb(targetPalette.hot);

      const active = activeColorsRef.current;
      const lerpSpeed = 0.08;

      active.border.r += (targetBorderRgb.r - active.border.r) * lerpSpeed;
      active.border.g += (targetBorderRgb.g - active.border.g) * lerpSpeed;
      active.border.b += (targetBorderRgb.b - active.border.b) * lerpSpeed;

      active.middle.r += (targetMiddleRgb.r - active.middle.r) * lerpSpeed;
      active.middle.g += (targetMiddleRgb.g - active.middle.g) * lerpSpeed;
      active.middle.b += (targetMiddleRgb.b - active.middle.b) * lerpSpeed;

      active.core.r += (targetCoreRgb.r - active.core.r) * lerpSpeed;
      active.core.g += (targetCoreRgb.g - active.core.g) * lerpSpeed;
      active.core.b += (targetCoreRgb.b - active.core.b) * lerpSpeed;

      active.hot.r += (targetHotRgb.r - active.hot.r) * lerpSpeed;
      active.hot.g += (targetHotRgb.g - active.hot.g) * lerpSpeed;
      active.hot.b += (targetHotRgb.b - active.hot.b) * lerpSpeed;

      const borderStyle = `rgb(${Math.round(active.border.r)}, ${Math.round(active.border.g)}, ${Math.round(active.border.b)})`;
      const middleStyle = `rgb(${Math.round(active.middle.r)}, ${Math.round(active.middle.g)}, ${Math.round(active.middle.b)})`;
      const coreStyle = `rgb(${Math.round(active.core.r)}, ${Math.round(active.core.g)}, ${Math.round(active.core.b)})`;
      const hotStyle = `rgb(${Math.round(active.hot.r)}, ${Math.round(active.hot.g)}, ${Math.round(active.hot.b)})`;

      // ─── 3. DRAW CONTOUR PIXEL-ART OUTLINE ───
      const center = isMobile ? w * 0.5 : w * 0.72;

      // During flare up (avivar), the outline expands outwards by up to 30%
      const baseScale = isMobile ? 1.7 : 0.95;
      const scale = baseScale * (1.0 + flareIntensityRef.current * 0.3);

      const topRowIndex = Math.floor(0.20 * rows);

      // Slower, more stable time progression
      const time = Date.now() * 0.0012;

      for (let gridY = topRowIndex; gridY < rows; gridY++) {
        const v = gridY / rows;
        const boundaryFraction = getLeftBoundaryFraction(v);
        if (boundaryFraction === -999) continue;

        const xPosition = center - boundaryFraction * scale * w;
        const gridX = Math.floor(xPosition / GRID_SIZE);

        // Add dynamic blocky flickering offset (flickering becomes more intense during flare up)
        const flickerSpeed = 5.0 + flareIntensityRef.current * 8.0;
        const flickerAmp = 1.1 + flareIntensityRef.current * 1.8;
        const flicker = Math.floor(Math.sin(time * flickerSpeed + gridY * 0.85) * flickerAmp + (Math.random() - 0.5) * 0.65);
        const snappedGridX = gridX + flicker;

        // Draw layered profile outline cells (4 pixel blocks wide)
        ctx.fillStyle = borderStyle;
        ctx.fillRect(snappedGridX * GRID_SIZE, gridY * GRID_SIZE, GRID_SIZE, GRID_SIZE);

        ctx.fillStyle = middleStyle;
        ctx.fillRect((snappedGridX + 1) * GRID_SIZE, gridY * GRID_SIZE, GRID_SIZE, GRID_SIZE);

        ctx.fillStyle = coreStyle;
        ctx.fillRect((snappedGridX + 2) * GRID_SIZE, gridY * GRID_SIZE, GRID_SIZE, GRID_SIZE);

        ctx.fillStyle = hotStyle;
        ctx.fillRect((snappedGridX + 3) * GRID_SIZE, gridY * GRID_SIZE, GRID_SIZE, GRID_SIZE);

        // Draw top horizontal cap to wrap the top of the head
        if (gridY >= topRowIndex && gridY < topRowIndex + 4) {
          const capDepth = gridY - topRowIndex;
          ctx.fillStyle =
            capDepth === 0 ? borderStyle :
              capDepth === 1 ? middleStyle :
                capDepth === 2 ? coreStyle : hotStyle;

          // Draw horizontal cells to the right to seal the head crown
          for (let dx = 4; dx < 10; dx++) {
            ctx.fillRect((snappedGridX + dx) * GRID_SIZE, gridY * GRID_SIZE, GRID_SIZE, GRID_SIZE);
          }
        }

        // Spawn pixel sparks breaking off to the left (wind/evaporation direction)
        // Spawning rate and speed explode during flare up!
        // On mobile: much lower spawn rate and capped count
        const baseSpawnChance = isMobile ? 0.94 : 0.84;
        const spawnChance = baseSpawnChance - flareIntensityRef.current * 0.35;
        if (Math.random() > spawnChance && sparks.length < MAX_SPARKS) {
          const flareMult = 1.0 + flareIntensityRef.current * 2.0;
          sparks.push({
            gridX: snappedGridX - 1,
            gridY: gridY,
            life: 1.0,
            decay: (0.025 + Math.random() * 0.045) / (1.0 + flareIntensityRef.current * 0.6),
            vx: (-0.4 - Math.random() * 1.2) * flareMult,
            vy: (-0.3 - Math.random() * 0.7) * flareMult,
            colorType: Math.random() > 0.55 ? 'border' : 'middle',
          });
        }
      }

      // ─── 4. UPDATE AND DRAW SPARKS ───
      sparks = sparks.filter((spark) => {
        spark.gridX += spark.vx;
        spark.gridY += spark.vy;
        spark.life -= spark.decay;

        // Apply a little horizontal turbulence to floating sparks
        spark.vx += (Math.random() - 0.5) * 0.15;

        if (spark.life <= 0 || spark.gridY < 0 || spark.gridX < 0 || spark.gridX >= cols) {
          return false;
        }

        const x = Math.floor(spark.gridX) * GRID_SIZE;
        const y = Math.floor(spark.gridY) * GRID_SIZE;

        ctx.fillStyle = spark.colorType === 'border' ? borderStyle : middleStyle;
        ctx.globalAlpha = spark.life;
        ctx.fillRect(x, y, GRID_SIZE, GRID_SIZE);
        ctx.globalAlpha = 1.0;

        return true;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[8]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
