"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function RectangleDots() {
  const containerOneRef = useRef<HTMLDivElement>(null);

  const dotsPerRing = 50;

  const halfWidth = 300;

  const halfHeight = 150;

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
  }, [rings, dotsPerRing, spacingZ, speed, containerOneRef]);

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
      {[...Array(rings)].map((_, ring) =>
        [...Array(dotsPerRing)].map((_, dot) => {
          const side = Math.floor(dot / (dotsPerRing / 4));
          const progress = (dot % (dotsPerRing / 4)) / (dotsPerRing / 4);

          let x = 0,
            y = 0;

          if (side === 0) {
            x = -halfWidth + progress * (2 * halfWidth);
            y = -halfHeight;
          } else if (side === 1) {
            x = halfWidth;
            y = -halfHeight + progress * (2 * halfHeight);
          } else if (side === 2) {
            x = halfWidth - progress * (2 * halfWidth);
            y = halfHeight;
          } else {
            x = -halfWidth;
            y = halfHeight - progress * (2 * halfHeight);
          }

          const z = 1000 - ring * spacingZ;

          return (
            <div
              key={`${ring}-${dot}`}
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
        }),
      )}
    </div>
  );
}
