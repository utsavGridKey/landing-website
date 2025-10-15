/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { useCallback, useEffect, useMemo, useRef } from "react";

gsap.registerPlugin(InertiaPlugin);

interface Dot {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  _inertiaApplied: boolean;
}

export default function FooterGrid() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({ x: 0, y: 0 });

  const dotSize = 3;
  const gap = 15;
  const baseColor = "#ffffff22";
  const activeColor = "#63A387";
  const proximity = 50;
  const shockRadius = 20;
  const shockStrength = 28;

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  function hexToRgb(hex: string) {
    const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!m) return { r: 0, g: 0, b: 0 };
    return {
      r: parseInt(m[1], 16),
      g: parseInt(m[2], 16),
      b: parseInt(m[3], 16),
    };
  }

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    const cols = Math.floor((width + gap) / (dotSize + gap));
    const rows = Math.floor((height + gap) / (dotSize + gap));
    const cell = dotSize + gap;

    const dots: Dot[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          cx: x * cell + gap / 2,
          cy: y * cell + gap / 2,
          xOffset: 0,
          yOffset: 0,
          _inertiaApplied: false,
        });
      }
    }
    dotsRef.current = dots;
  }, []);

  useEffect(() => {
    buildGrid();

    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const proxSq = proximity * proximity;

    let rafId: number;
    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: px, y: py } = pointerRef.current;

      for (const dot of dotsRef.current) {
        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;

        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy - 1000;

        let style = baseColor;
        let shadowBlur = 0;
        let shadowColor = "transparent";
        if (dsq <= proxSq) {
          const r = activeRgb.r;
          const g = activeRgb.g;
          const b = activeRgb.b;
          style = `rgb(${r},${g},${b})`;
          shadowBlur = 100; // glow intensity
          shadowColor = "#ffffff"; // same color glow
        }

        ctx.beginPath();
        ctx.arc(ox, oy, dotSize / 1.5, 0, Math.PI * 2);
        ctx.fillStyle = style;
        // Apply glow
        ctx.shadowBlur = shadowBlur;
        ctx.shadowColor = shadowColor;
        ctx.fill();
        // Reset shadow so it doesn't bleed into other dots
        ctx.shadowBlur = 0;
        ctx.shadowColor = "transparent";
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafId);
  }, [proximity, baseRgb, activeRgb, baseColor]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = canvasRef.current!.getBoundingClientRect();
      pointerRef.current.x = e.clientX - rect.left;
      pointerRef.current.y = e.clientY - rect.top;
    };

    const onClick = (e: MouseEvent) => {
      const rect = canvasRef.current!.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (dist < shockRadius) {
          gsap.to(dot, {
            xOffset: (dot.cx - cx) * (shockStrength / dist),
            yOffset: (dot.cy - cy) * (shockStrength / dist),
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: 12.2,
                ease: "elastic.out(1,0.6)",
              });
            },
          });
        }
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="absolute inset-0 w-full h-[450px]">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
