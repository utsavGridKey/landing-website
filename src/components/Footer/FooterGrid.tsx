/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { gsap } from "gsap";
import { useCallback, useEffect, useMemo, useRef } from "react";

interface Dot {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
}

export default function FooterGrid() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({ x: -1000, y: -1000 });
  const rafIdRef = useRef<number>(null);
  const isVisibleRef = useRef(false);

  const dotSize = 3;
  const gap = 15;
  const baseColor = "#ffffff22";
  const activeColor = "#63A387";
  const proximity = 50;
  const shockRadius = 20;
  const shockStrength = 28;

  const activeRgb = useMemo(() => hexToRgb(activeColor), []);
  const moveTimeout: any = undefined;

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
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap DPR at 2

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true, // Better performance
    });
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
    let lastDrawTime = 0;
    const targetFPS = 60;
    const frameTime = 1000 / targetFPS;

    const draw = (currentTime: number) => {
      if (!isVisibleRef.current) return;

      // Throttle to 60fps
      if (currentTime - lastDrawTime < frameTime) {
        rafIdRef.current = requestAnimationFrame(draw);
        return;
      }
      lastDrawTime = currentTime;

      const canvas = canvasRef.current;
      if (!canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: px, y: py } = pointerRef.current;

      // Batch drawing operations
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";

      for (const dot of dotsRef.current) {
        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;

        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy - 1000;

        let style = baseColor;
        let shouldGlow = false;

        if (dsq <= proxSq) {
          const r = activeRgb.r;
          const g = activeRgb.g;
          const b = activeRgb.b;
          style = `rgb(${r},${g},${b})`;
          shouldGlow = true;
        }

        ctx.fillStyle = style;

        if (shouldGlow) {
          ctx.shadowBlur = 100;
          ctx.shadowColor = "#ffffff";
        }

        ctx.beginPath();
        ctx.arc(ox, oy, dotSize / 1.5, 0, Math.PI * 2);
        ctx.fill();

        if (shouldGlow) {
          ctx.shadowBlur = 0;
          ctx.shadowColor = "transparent";
        }
      }

      rafIdRef.current = requestAnimationFrame(draw);
    };

    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          rafIdRef.current = requestAnimationFrame(draw);
        } else if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
        }
      },
      { threshold: 0.1 },
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      observer.disconnect();
    };
  }, [proximity, baseColor, activeColor]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      pointerRef.current.x = e.clientX - rect.left;
      pointerRef.current.y = e.clientY - rect.top;
    };

    const onClick = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      // Limit affected dots for performance
      const affectedDots = dotsRef.current.filter((dot) => {
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        return dist < shockRadius;
      });

      affectedDots.forEach((dot) => {
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        gsap.to(dot, {
          xOffset: (dot.cx - cx) * (shockStrength / dist),
          yOffset: (dot.cy - cy) * (shockStrength / dist),
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(dot, {
              xOffset: 0,
              yOffset: 0,
              duration: 1.2,
              ease: "elastic.out(1,0.6)",
            });
          },
        });
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("click", onClick);

    return () => {
      clearTimeout(moveTimeout);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  // Handle resize
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(buildGrid, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [buildGrid]);

  return (
    <div ref={wrapperRef} className="absolute inset-0 w-full h-[450px]">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
