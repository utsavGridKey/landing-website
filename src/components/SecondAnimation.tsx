"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SecondAnimation() {
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
          end: "+=8000", // same scroll distance
          scrub: true,
          pin: true,
        },
      });

      // Start hidden at box1
      gsap.set(boxRef.current, {
        x: () => boxRef1.current?.offsetLeft ?? 0,
        y: () => boxRef1.current?.offsetTop ?? 0,
        autoAlpha: 0,
      });

      const liDots: any = boxRef.current?.querySelectorAll(".dot");
      const liTexts: any = boxRef.current?.querySelectorAll(".text");

      // 1. box1 → box2
      tl.to(boxRef.current, {
        x: () => boxRef2.current?.offsetLeft ?? 0,
        y: () => boxRef2.current?.offsetTop ?? 0,
        ease: "none",
        duration: 2,
        autoAlpha: 1,
      });

      // pause
      tl.to({}, { duration: 2 });

      // 2. Dots fly in slowly
      tl.fromTo(
        liDots,
        {
          x: () => gsap.utils.random(-200, 0),
          y: () => gsap.utils.random(-200, 0),
          opacity: 0,
          scale: 0.2,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 6,
          stagger: 0.4,
          ease: "power1.out",
        },
      );

      // pause
      tl.to({}, { duration: 2 });

      // 3. Hide dots → Show text
      tl.to(liDots, {
        opacity: 0,
        duration: 3,
        ease: "power1.inOut",
      });

      tl.to(liTexts, {
        opacity: 1,
        duration: 5,
        stagger: 0.6,
        ease: "power1.out",
      });

      // pause
      tl.to({}, { duration: 6 });

      // 4. Hide text → Bring dots back
      tl.to(liTexts, {
        opacity: 0,
        duration: 3,
        ease: "power1.inOut",
      });

      // dots reappear with fade
      tl.to(liDots, {
        opacity: 1,
        scale: 1,
        duration: 5,
        ease: "power1.out",
      });

      // pause
      tl.to({}, { duration: 3 });

      // 5. box2 → box3 (dots with trail)
      tl.to(liDots, {
        opacity: 0.6,
        duration: 2,
      });

      tl.to(boxRef.current, {
        x: () => boxRef3.current?.offsetLeft ?? 0,
        y: () => boxRef3.current?.offsetTop ?? 0,
        ease: "none",
        duration: 12, // slower travel
        onUpdate: () => {
          // afterimage trail
          liDots?.forEach((dot: any) => {
            const clone = dot.cloneNode(true) as HTMLElement;
            clone.style.position = "absolute";
            clone.style.left = dot.getBoundingClientRect().left + "px";
            clone.style.top = dot.getBoundingClientRect().top + "px";
            clone.style.pointerEvents = "none";
            clone.style.opacity = "0.4";
            clone.style.filter = "blur(6px)";
            document.body.appendChild(clone);

            gsap.to(clone, {
              opacity: 0,
              scale: 0.5,
              duration: 1.2,
              ease: "power1.out",
              onComplete: () => clone.remove(),
            });
          });
        },
      });

      // 6. Reset dots after reaching box3
      tl.to(liDots, {
        filter: "blur(0px)",
        opacity: 1,
        duration: 6,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[200vh] bg-black relative overflow-hidden"
    >
      {/* invisible anchors */}
      <div
        ref={boxRef1}
        className="w-20 h-20 bg-transparent fixed left-1/2 top-0"
      />
      <div
        ref={boxRef2}
        className="w-20 h-20 bg-transparent fixed right-1/3"
        style={{ top: window.innerHeight / 3 }}
      />
      <div
        ref={boxRef3}
        className="w-20 h-20 bg-transparent fixed left-1/4 bottom-[95vh]"
      />

      {/* animated box */}
      <div
        ref={boxRef}
        className="fixed flex flex-col items-center justify-center text-white text-lg font-bold p-4 space-y-2"
      >
        <ol className="space-y-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <li key={i} className="relative flex items-center justify-center">
              <span className="dot">●</span>
              <span className="text absolute opacity-0 ">Item </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
