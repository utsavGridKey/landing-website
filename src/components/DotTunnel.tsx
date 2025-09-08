"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function DotTunnel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const dotsPerRing = 35; // dots per circle
  const radius = 200; // tunnel radius
  const spacingZ = 100; // distance between rings
  const speed = 4; // movement speed
  const visibleDepth = 2000; // how far tunnel is rendered
  const rotationSpeed = 0.01; // <-- new: rotation speed

  const rings = Math.ceil(visibleDepth / spacingZ) + 2;

  useEffect(() => {
    if (!containerRef.current) return;

    const dots = containerRef.current.querySelectorAll<HTMLDivElement>(".dot");

    let angleOffset = 0;

    gsap.ticker.add(() => {
      angleOffset += rotationSpeed; // slowly rotate the tunnel

      dots.forEach((dot) => {
        const [baseX, baseY, z] = dot.dataset.pos!.split(",").map(Number);
        let newZ = z + speed;

        // recycle when it crosses camera
        if (newZ > 1000) newZ -= rings * spacingZ;

        // Apply rotation using angleOffset
        const angle = Math.atan2(baseY, baseX) + angleOffset;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        dot.dataset.pos = `${baseX},${baseY},${newZ}`;
        dot.style.transform = `translate3d(${x}px, ${y}px, ${newZ}px)`;
      });
    });
  }, [rings, dotsPerRing, radius, spacingZ, speed]);

  return (
    <div
      ref={containerRef}
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
          width: "200px",
          height: "200px",
          zIndex: 9999,
          boxShadow: "0 0 5050px 300px #000000",
          borderRadius: "50%",
        }}
      />
      {[...Array(rings)].map((_, ring) =>
        [...Array(dotsPerRing)].map((_, dot) => {
          const angle = (dot / dotsPerRing) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const z = -ring * spacingZ;

          return (
            <div
              key={`${ring}-${dot}`}
              className="dot"
              data-pos={`${x},${y},${z}`}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#ffffff",
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
              }}
            />
          );
        }),
      )}
    </div>
  );
}
