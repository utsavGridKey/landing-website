"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const firstTextRef = useRef<HTMLParagraphElement>(null);
  const oRef = useRef<HTMLSpanElement>(null);
  const secondContentRef = useRef<HTMLDivElement>(null);
  const thirdContentRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !dotRef.current ||
      !oRef.current ||
      !firstTextRef.current ||
      !secondContentRef.current ||
      !toolsRef.current ||
      !thirdContentRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=5000",
          scrub: true,
          pin: true,
          markers: true, // remove later
        },
      });

      // Step 1: Fly "o" to "choose" position
      tl.to(dotRef.current, {
        x: () =>
          oRef.current!.getBoundingClientRect().left -
          dotRef.current!.getBoundingClientRect().left,
        y: () =>
          oRef.current!.getBoundingClientRect().top -
          dotRef.current!.getBoundingClientRect().top,
        scale: 1,
        duration: 1.5,
        ease: "power2.inOut",
      });

      // Step 1.5: Crossfade flying "o" → real "o"
      tl.to(dotRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
      });
      tl.to(
        oRef.current,
        {
          opacity: 1,
          duration: 0.3,
          ease: "power1.in",
        },
        "<",
      );

      // Step 2: Zoom + glow
      tl.to(firstTextRef.current, {
        scale: () => {
          const vw = window.innerWidth;
          const vh = window.innerHeight;
          return Math.max(vw, vh) / 10;
        },
        duration: 1.5,
        ease: "power2.inOut",
        textShadow: "0px 2px 400px rgba(255,255,255)",
      });

      // Step 2.5: Fade background to white
      tl.to(
        containerRef.current,
        {
          backgroundColor: "#ffffff",
          duration: 1,
          ease: "power2.inOut",
        },
        "<",
      );

      // Step 3: Fade out first text
      tl.to(
        firstTextRef.current,
        {
          opacity: 0,
          textShadow: "0px 0px 0px rgba(0,0,0,0)",
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5",
      );

      // Step 4: Fade in second content
      tl.fromTo(
        secondContentRef.current,
        { opacity: 0, z: -400, transformPerspective: 1000 },
        { opacity: 1, z: 0, duration: 1.5, ease: "power3.out" },
        "<",
      );

      // Step 5: Scroll right side toolsRef content upward
      tl.to(
        toolsRef.current,
        {
          y: () =>
            -(toolsRef.current!.scrollHeight - toolsRef.current!.clientHeight),
          duration: 3,
          ease: "none",
        },
        "+=0.5",
      );

      // ✅ Step 6: Fade in third content after scroll is done
      tl.fromTo(
        secondContentRef.current,
        { opacity: 1, y: 0 },
        { opacity: 1, y: -850, duration: 1.5, ease: "power3.out" },
        "+=0.5",
      );

      tl.fromTo(
        thirdContentRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
        "+=0.5",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col relative items-center justify-center h-screen overflow-hidden perspective-[1000px] bg-black text-white"
    >
      {/* Flying O */}
      <div ref={dotRef} className="absolute top-10 text-7xl font-bold">
        o
      </div>

      {/* First text */}
      <p
        ref={firstTextRef}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl relative z-10 font-bold text-center"
        style={{ transition: "text-shadow 0.3s ease" }}
      >
        Why Ch
        <span ref={oRef} className="inline-block opacity-0">
          o
        </span>
        ose us?
      </p>

      {/* Second content (two-column section) */}
      <div
        ref={secondContentRef}
        className="w-full h-full absolute top-0 flex justify-center items-center"
      >
        <div className="flex flex-row w-full h-full">
          {/* Left section */}
          <div className="w-1/2 flex items-center justify-center p-12">
            <p className="bg-[linear-gradient(142deg,#006580_3.91%,#107281_47.82%,#4CA485_113.7%)] bg-clip-text text-transparent text-6xl font-bold">
              Built for trust. Designed for growth. Focused on you.
            </p>
          </div>

          {/* Right section with scrollable grid */}
          <div className="w-1/2 relative overflow-hidden h-[95vh] m-auto">
            <div
              ref={toolsRef}
              className="gap-4 p-6 h-full w-full flex flex-col"
            >
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-amber-100 bg-opacity-50 rounded-md transition-all hover:bg-opacity-100 hover:shadow-md min-h-1/4"
                >
                  <p className="text-black text-sm font-medium">
                    Item {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Third content */}
      <div
        ref={thirdContentRef}
        className="absolute bottom-0 opacity-0 h-full w-full bg-amber-300 text-4xl font-bold text-center text-black flex"
      >
        <div className="w-1/2 bg-white">adad</div>
        <div className="w-1/2 bg-white">adsad</div>
      </div>
    </div>
  );
}
