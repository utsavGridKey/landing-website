"use client";

import { useEffect, useRef } from "react";

export default function WavesAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // --- Wave Layers Setup ---
    type WaveDot = { x: number; y: number; row: number };
    type WaveLayer = {
      dots: WaveDot[];
      spacing: number;
      waveHeight: number;
      speed: number;
      size: number;
      color: string;
    };

    const layers: WaveLayer[] = [];
    const numLayers = 10; // number of wave layers
    const rows = 1; // rows per layer

    for (let l = 0; l < numLayers; l++) {
      const spacing = 30;
      const waveHeight = 50 + l * 2; // taller waves for deeper layers
      const speed = 0.01 + l * 0.002; // slower for back layers
      const size = Math.max(3 - l * 0.1, 1); // keep visible
      const layerOffset = l * 20; // <-- spacing between layers
      const color = "255,255,255"; // white dots

      const dots: WaveDot[] = [];
      for (let r = 0; r < rows; r++) {
        for (let x = 0; x < width; x += spacing) {
          dots.push({
            x,
            y: height - 100 + r * spacing + layerOffset,
            row: r,
          });
        }
      }

      layers.push({
        dots,
        spacing,
        waveHeight,
        speed,
        size,
        color,
      });
    }

    let tick = 0;

    const animate = () => {
      if (!ctx) return;
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      // Draw multiple wave layers
      layers.forEach((layer, li) => {
        layer.dots.forEach((dot, i) => {
          const phase = dot.row * 0.5 + li * 0.3; // offset per layer
          const y =
            dot.y +
            Math.sin(i * 0.2 + tick * layer.speed + phase) * layer.waveHeight;

          const alpha = 1 - li * 0.08; // fade farther layers
          ctx.fillStyle = `rgba(${layer.color},${alpha})`;

          ctx.beginPath();
          ctx.arc(dot.x, y, layer.size, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      tick++;
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen min-w-screen relative">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full bg-black"
      />
    </div>
  );
}
