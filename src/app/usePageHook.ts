import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const usePageHook = () => {
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
          // markers: true, // remove later
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
        { opacity: 1, duration: 0.3, ease: "power1.in" },
        "<",
      );

      // Step 2: Zoom + glow
      tl.to(firstTextRef.current, {
        scale: () => Math.max(window.innerWidth, window.innerHeight) / 10,
        duration: 1.5,
        ease: "power2.inOut",
        textShadow: "0px 2px 400px rgba(255,255,255)",
      });

      // Step 2.5: Fade background to white
      tl.to(
        containerRef.current,
        { backgroundColor: "#ffffff", duration: 1, ease: "power2.inOut" },
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

      // Step 6: Transition to third content
      tl.fromTo(
        secondContentRef.current,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -800, duration: 1.5, ease: "power3.out" },
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

  return {
    containerRef,
    dotRef,
    firstTextRef,
    oRef,
    secondContentRef,
    thirdContentRef,
    toolsRef,
  };
};
