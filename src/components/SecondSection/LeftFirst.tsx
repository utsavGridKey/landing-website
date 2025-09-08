/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import RectangleDots from "@/components/RectangleDots";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function IntegratedAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  // refs for left content
  const leftRef = useRef<HTMLDivElement>(null);

  // refs for right animation
  const boxRef = useRef<HTMLDivElement>(null);
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const boxRef3 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /** Left side fade animation */
      if (leftRef.current) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=5000",
              scrub: true,
            },
          })
          .fromTo(
            leftRef.current,
            { y: 500, opacity: 0, delay: 2 },
            { y: 0, opacity: 1, delay: 5 },
          )
          .to(leftRef.current, { y: -500, opacity: 0 });
      }

      /** Right side train animation */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=8000",
          scrub: true,
          pin: true,
        },
      });

      gsap.set(boxRef.current, {
        x: () => boxRef1.current?.offsetLeft ?? 0,
        y: () => boxRef1.current?.offsetTop ?? 0,
        autoAlpha: 0,
      });

      const liDots: any = boxRef.current?.querySelectorAll(".dot");
      const liTexts: any = boxRef.current?.querySelectorAll(".text");

      tl.to(boxRef.current, {
        x: () => boxRef2.current?.offsetLeft ?? 0,
        y: () => boxRef2.current?.offsetTop ?? 0,
        ease: "none",
        duration: 2,
        autoAlpha: 1,
      });

      tl.to({}, { duration: 2 });

      tl.fromTo(
        liDots,
        { x: -50, y: -500, opacity: 0, scale: 0.2 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 4,
          stagger: 0.3,
          ease: "power1.out",
        },
      );

      tl.to({}, { duration: 2 });

      tl.to(liDots, { opacity: 0, duration: 2, ease: "power1.inOut" });
      tl.to(liTexts, {
        opacity: 1,
        duration: 4,
        stagger: 0.4,
        ease: "power1.out",
      });

      tl.to({}, { duration: 4 });

      tl.to(liTexts, { opacity: 0, duration: 2, ease: "power1.inOut" });
      tl.to(liDots, { opacity: 1, scale: 1, duration: 3, ease: "power1.out" });

      tl.to({}, { duration: 2 });

      tl.to(liDots, { opacity: 0.6, duration: 1.5 });

      tl.to(boxRef.current, {
        x: 0,
        y: () => boxRef3.current?.offsetTop ?? 0,
        ease: "none",
        duration: 3,
      });

      tl.to(liDots, { filter: "blur(0px)", opacity: 1, duration: 2 });
      tl.to(liDots, { filter: "blur(0px)", opacity: 0, duration: 2 });

      tl.to(liTexts, {
        opacity: 1,
        duration: 4,
        stagger: 0.4,
        ease: "power1.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <RectangleDots />
      <div
        ref={containerRef}
        className="min-h-screen bg-black flex flex-col md:flex-row gap-6 relative overflow-hidden p-4 sm:p-6"
      >
        <div
          ref={leftRef}
          className="flex flex-col items-center justify-center gap-4 w-full md:w-1/2 opacity-0 max-h-screen"
        >
          <img
            src="https://cdn.mos.cms.futurecdn.net/pkcDt3oXduaP7JmkXbJWFC-681-80.webp"
            alt="Sample"
            className="rounded-xl shadow-lg w-full max-w-sm md:max-w-md"
          />
          <div className="text-center md:text-left">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Content
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              This is some text on the left describing the image.
            </p>
          </div>
        </div>

        <div
          ref={boxRef1}
          className="w-12 h-12 bg-transparent absolute left-1/2 top-[10%]"
        />
        <div
          ref={boxRef2}
          className="w-12 h-12 bg-transparent absolute right-1/3 top-[30%]"
        />
        <div
          ref={boxRef3}
          className="w-12 h-12 absolute left-0 bottom-[65vh] "
        />

        <div
          ref={boxRef}
          className="absolute flex flex-col items-center justify-center text-white text-base sm:text-lg md:text-xl font-bold p-2 sm:p-4 space-y-2"
        >
          <ol className="space-y-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <li key={i} className="relative flex items-center justify-center">
                <span className="dot">●</span>
                <span className="text opacity-0">
                  <div className="bg-blue-950 border px-5 py-1">
                    ItemItemItemItem {i + 1}
                  </div>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
