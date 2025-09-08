"use client";

import { useEffect, useRef } from "react";

export default function DotsAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fov = 500;
    const depth = 1000;

    type Star = { x: number; y: number; z: number };
    type Layer = {
      spacingX: number;
      spacingY: number;
      speed: number;
      sizeFactor: number;
      color: string;
      stars: Star[];
    };

    const layers: Layer[] = Array.from({ length: 10 }, () => ({
      spacingX: 200,
      spacingY: 200,
      speed: 3, // random speed between 2–8
      sizeFactor: 2, // random size
      color: "white",
      stars: [],
    }));

    // create stars for each layer
    layers.forEach((layer) => {
      for (let gy = -height; gy < height; gy += layer.spacingY) {
        for (let gx = -width; gx < width; gx += layer.spacingX) {
          layer.stars.push({ x: gx, y: gy, z: Math.random() * depth });
        }
      }
    });

    const animate = () => {
      if (!ctx) return;
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      layers.forEach((layer) => {
        ctx.fillStyle = layer.color;
        layer.stars.forEach((star) => {
          star.z -= layer.speed;
          if (star.z <= 0) star.z = depth;

          const k = fov / star.z;
          const sx = star.x * k + width / 2;
          const sy = star.y * k + height / 2;

          const size = (2 - star.z / depth) * layer.sizeFactor;
          ctx.beginPath();
          ctx.arc(sx, sy, size, 0, 2 * Math.PI);
          ctx.fill();
        });
      });

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
      <div className="h-100 w-200 bg-black  z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_100px_144px_#000] rounded-full" />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full bg-black"
      />
    </div>
  );
}
