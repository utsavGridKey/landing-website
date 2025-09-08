/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import gsap from "gsap";
import { useEffect } from "react";

export default function DotTunnel() {
  useEffect(() => {
    gsap.utils.toArray(".dot").forEach((dot: any) => {
      gsap.to(dot, {
        x: `+=${gsap.utils.random(-200, 200)}`, // little horizontal movement
        y: `+=${gsap.utils.random(-200, 200)}`, // little vertical movement
        duration: gsap.utils.random(1, 3), // random speed
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.1,
      });
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "black",
      }}
    >
      {Array.from({ length: 300 }).map((_, i) => (
        <div
          key={i}
          className="dot"
          style={{
            position: "absolute",
            top: `${Math.random() * 100}vh`, // random Y
            left: `${Math.random() * 100}vw`, // random X
            background: "#ffffff55",
            width: "5px",
            height: "5px",
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
}
