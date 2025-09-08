"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const boxRef = useRef<HTMLDivElement>(null);
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const boxRef3 = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000", // longer scroll for all moves
          scrub: true,
          pin: true,
        },
      });

      // Start already at boxRef1 (top-left)
      gsap.set(boxRef.current, {
        x: () => boxRef1.current?.offsetLeft ?? 0,
        y: () => boxRef1.current?.offsetTop ?? 0,
      });

      // 1. box1 → box2
      tl.to(boxRef.current, {
        x: () => boxRef2.current?.offsetLeft ?? 0,
        y: () => boxRef2.current?.offsetTop ?? 0,
        ease: "none",
        duration: 10,
      });

      tl.to({}, { duration: 20 }); // pause at box2

      // 2. box2 → box3
      tl.to(boxRef.current, {
        x: () => boxRef3.current?.offsetLeft ?? 0,
        y: () => boxRef3.current?.offsetTop ?? 0,
        ease: "none",
        duration: 10,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[200vh] bg-gray-900 relative overflow-hidden"
    >
      {/* Position markers */}
      <div
        ref={boxRef1}
        className="w-20 h-20 bg-transparent fixed left-1/2 top-0"
      />
      <div
        ref={boxRef2}
        className="w-20 h-20 bg-transparent fixed right-10"
        style={{ top: window.innerHeight / 2 }}
      />
      <div
        ref={boxRef3}
        className="w-20 h-20 bg-transparent fixed left-1/4 bottom-[80vh]"
      />

      {/* Animated moving box */}
      <div ref={boxRef} className="w-20 h-20 bg-green-500 fixed" />
    </div>
  );
}
