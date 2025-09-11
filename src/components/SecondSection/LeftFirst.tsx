/* eslint-disable @next/next/no-img-element */

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function LeftSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // refs for left content
  const leftRef = useRef<HTMLDivElement>(null);

  // refs for right animation
  const boxRef = useRef<HTMLDivElement>(null);
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const boxRef3 = useRef<HTMLDivElement>(null);
  const boxRef4 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
            { y: 1000, opacity: 0, delay: 2 },
            { y: 0, opacity: 1, delay: 2 },
          )
          .to(leftRef.current, { y: -500, opacity: 0 });
      }

      /** Right side train animation */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=9000",
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
      // pick only 3 dots
      const firstThreeDots = Array.from(liDots).slice(0, 3);
      const restDots = Array.from(liDots).slice(3);

      tl.to(boxRef.current, {
        x: () => boxRef2.current?.offsetLeft ?? 0,
        y: () => boxRef2.current?.offsetTop ?? 0,
        ease: "none",
        duration: 2,
        autoAlpha: 1,
      });

      tl.fromTo(
        liDots,
        { x: -100, y: -500, opacity: 0, scale: 0.2 },
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

      tl.to(liDots, {
        opacity: 0,
        duration: 2,
        ease: "power1.inOut",
      });
      tl.to(liTexts, {
        opacity: 1,
        duration: 4,
        stagger: 0.4,
        ease: "power1.out",
      });
      tl.to(liTexts, { opacity: 0, duration: 2, ease: "power1.inOut" });
      tl.to(liDots, { opacity: 1, scale: 1, duration: 1, ease: "power1.out" });
      tl.to(liDots, { opacity: 0.6, duration: 1.5 });
      tl.to(boxRef.current, {
        x: 100,
        y: () => boxRef3.current?.offsetTop ?? 0,
        ease: "none",
        duration: 3,
      });
      tl.to(liDots, { filter: "blur(0px)", opacity: 1, duration: 1 });
      tl.to(liDots, { filter: "blur(0px)", opacity: 0, duration: 1 });
      tl.to(liTexts, {
        opacity: 1,
        duration: 1,
        stagger: 0.4,
        ease: "power1.out",
      });
      tl.to(liTexts, {
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      });
      gsap.set(restDots, { opacity: 0, scale: 0 });
      // Show only first 3 dots
      tl.to(firstThreeDots, {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Animate them to merge into boxRef4
      tl.to(firstThreeDots, {
        x: () =>
          (boxRef4.current?.offsetLeft ?? 0) -
          (boxRef.current?.offsetLeft ?? 0),
        y: () =>
          (boxRef4.current?.offsetTop ?? 0) - (boxRef.current?.offsetTop ?? 0),
        scale: 0.5,
        opacity: 0,
        duration: 5,
        stagger: 0.2,
        ease: "power2.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
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
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold">Content</p>
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
      <div ref={boxRef3} className="w-12 h-12 absolute left-5 bottom-[65vh] " />
      <div ref={boxRef4} className="w-12 h-12 absolute left-[50%] bottom-[0]" />

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
  );
}
