"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SplitAnimation() {
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#animation-section",
          start: "top top", // start anim when section hits top
          end: "bottom top", // end when section leaves top
          scrub: true, // tie progress to scroll
          pin: true, // keep section fixed
        },
      });

      tl.to(div2Ref.current, {
        x: "-100%",
        opacity: 0,
        ease: "power3.inOut",
      })
        .to(
          div3Ref.current,
          {
            x: "100%",
            opacity: 0,
            ease: "power3.inOut",
          },
          "<", // run with previous
        )
        .fromTo(
          div4Ref.current,
          { opacity: 0 },
          { opacity: 1, ease: "power2.inOut" },
          "-=0.3", // overlap slightly
        );
    });

    ScrollTrigger.refresh(); // make sure scroll positions are recalculated

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-screen h-[200vh] bg-gray-800 text-white">
      {/* spacer before animation */}
      <div className="h-[100vh] flex items-center justify-center text-3xl">
        Scroll Down 👇
      </div>

      {/* animation section */}
      <div
        id="animation-section"
        className="relative w-screen h-screen overflow-hidden"
      >
        {/* Div 1 (static background) */}
        <div className="absolute inset-0 bg-gray-900" />

        {/* Div 2 (left half) */}
        <div
          ref={div2Ref}
          className="absolute left-0 top-0 w-1/2 h-full bg-blue-500"
        />

        {/* Div 3 (right half) */}
        <div
          ref={div3Ref}
          className="absolute right-0 top-0 w-1/2 h-full bg-green-500"
        />

        {/* Div 4 (fade in) */}
        <div
          ref={div4Ref}
          className="absolute inset-0 flex items-center justify-center bg-purple-600 text-4xl font-bold opacity-0"
        >
          Div 4 Content
        </div>
      </div>
    </div>
  );
}
