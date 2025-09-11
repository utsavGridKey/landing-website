"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function RectangleDots() {
  const containerOneRef = useRef<HTMLDivElement>(null);

  const totalDots = 500; // total number of dots
  const areaWidth = 600; // horizontal spread
  const areaHeight = 300; // vertical spread
  const spacingZ = 20;
  const speed = 0.3;
  const visibleDepth = 500;
  const rings = Math.ceil(visibleDepth / spacingZ) + 2;

  useEffect(() => {
    if (!containerOneRef.current) return;

    const dots =
      containerOneRef.current.querySelectorAll<HTMLDivElement>(".dot");

    gsap.ticker.add(() => {
      dots.forEach((dot) => {
        const [x, y, z] = dot.dataset.pos!.split(",").map(Number);
        let newZ = z + speed;
        if (newZ > 1000) newZ -= rings * spacingZ;

        dot.dataset.pos = `${x},${y},${newZ}`;
        dot.style.transform = `translate3d(${x}px, ${y}px, ${newZ}px)`;
      });
    });
  }, [rings, spacingZ, speed, containerOneRef]);

  return (
    <div
      ref={containerOneRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        perspective: "1000px",
        overflow: "hidden",
        background: "black",
      }}
    >
      <div
        style={{
          background: "black",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70vw",
          height: "50vh",
          zIndex: 9999,
          boxShadow: "0 0 4000px 150px #000000",
        }}
      />
      {Array.from({ length: totalDots }).map((_, i) => {
        const x = gsap.utils.random(-areaWidth, areaWidth);
        const y = gsap.utils.random(-areaHeight, areaHeight);
        const z = gsap.utils.random(0, 1000);

        return (
          <div
            key={i}
            className="dot"
            data-pos={`${x},${y},${z}`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "#006580",
              transform: `translate3d(${x}px, ${y}px, ${z}px)`,
            }}
          />
        );
      })}
    </div>
  );
}
