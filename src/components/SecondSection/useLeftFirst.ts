import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const useLeftFirst = () => {
  const secondSectionContainerRef = useRef<HTMLDivElement>(null);
  const whyChooseSectionRef = useRef<HTMLDivElement>(null);
  const leftHandContentRef = useRef<HTMLDivElement>(null);
  const rightHandContentRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const threeDotsContainerRef = useRef<HTMLDivElement>(null);
  const threeDotDestinationRef = useRef<HTMLDivElement>(null);
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const boxRef3 = useRef<HTMLDivElement>(null);
  const boxRef4 = useRef<HTMLDivElement>(null);
  const chooseORef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstTextRef = useRef<HTMLParagraphElement>(null);
  const oRef = useRef<HTMLSpanElement>(null);
  const secondContentRef = useRef<HTMLDivElement>(null);
  const thirdContentRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: secondSectionContainerRef.current,
          start: "top top",
          end: "+=11000",
          scrub: true,
          pin: true,
        },
      });
      const liDots = gsap.utils.toArray<HTMLDivElement>(
        boxRef1.current?.querySelectorAll(".dot") || [],
      );
      const newLiDots = gsap.utils.toArray<HTMLDivElement>(
        boxRef4.current?.querySelectorAll(".dot") || [],
      );
      const threeDots = gsap.utils.toArray<HTMLDivElement>(
        boxRef4.current?.querySelectorAll(".three-dot") || [],
      );
      tl.fromTo(
        liDots,
        {
          x: () => gsap.utils.random(-500, 0),
          y: () => gsap.utils.random(-200, 0),
          opacity: 0,
          scale: 0.1,
        },
        {
          x: (boxRef2.current?.offsetLeft ?? 0) - window.innerWidth / 5,
          y: (boxRef2.current?.offsetTop ?? 0) - window.innerHeight / 4,
          opacity: 1,
          scale: 1,
          ease: "power1.out",
        },
      );
      tl.fromTo(
        leftHandContentRef.current,
        {
          x: 0,
          y: 1000,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
        },
      );
      tl.to(
        leftHandContentRef.current,
        {
          x: 0,
          y: -1000,
          opacity: 0,
        },
        "vanish",
      );
      tl.to(
        liDots,
        {
          scale: 0.3,
          borderRadius: 1000,
          x: (boxRef2.current?.offsetLeft ?? 0) - window.innerWidth / 5,
          y: (boxRef2.current?.offsetTop ?? 0) - window.innerHeight / 4,
        },
        "vanish",
      );
      tl.fromTo(
        newLiDots,
        {
          x: (boxRef2.current?.offsetLeft ?? 0) - window.innerWidth / 5,
          y: (boxRef2.current?.offsetTop ?? 0) - window.innerHeight / 4,
          opacity: 0,
          scale: 0.3,
          duration: 0.1,
        },
        {
          opacity: 1,
          duration: 0.1,
          borderRadius: 1000,
          scale: 0.3,
        },
      );
      tl.to(liDots, {
        scale: 0.3,
        opacity: 0,
        duration: 0.1,
      });
      tl.to(newLiDots, {
        x: (boxRef3.current?.offsetLeft ?? 0) - window.innerWidth / 4,
        y: (boxRef3.current?.offsetTop ?? 0) - window.innerHeight / 7,
        opacity: 1,
        scale: 1,
        borderRadius: 16,
        ease: "power1.out",
      });
      tl.fromTo(
        rightHandContentRef.current,
        {
          x: 0,
          y: 1000,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
        },
      );
      tl.to(rightHandContentRef.current, {
        x: 0,
        y: -1000,
        opacity: 0,
      });
      tl.to(
        newLiDots,
        {
          x: (boxRef3.current?.offsetLeft ?? 0) - window.innerWidth / 4,
          y: (boxRef3.current?.offsetTop ?? 0) - window.innerHeight / 7,
          opacity: 0,
          scale: 1,
          ease: "power1.out",
        },
        "fading9DotsShowing3Dots",
      );
      tl.fromTo(
        threeDots,
        {
          x: (boxRef3.current?.offsetLeft ?? 0) - window.innerWidth / 4,
          y: (boxRef3.current?.offsetTop ?? 0) - window.innerHeight / 7,
          opacity: 0,
          borderRadius: 8,
          ease: "power1.out",
          zIndex: 9999,
        },
        {
          opacity: 1,
          zIndex: 9999,
        },
        "fading9DotsShowing3Dots",
      );
      // MOVING THE THREE DOTS FROM ITS PLACE TO THE I AM...
      tl.to(
        threeDots,
        {
          x: (i) => {
            const targetRect =
              threeDotDestinationRef.current?.getBoundingClientRect();
            const dotRect = threeDots[i].getBoundingClientRect();
            if (!targetRect) return 0;

            // Move to the right edge of the "I am..." text, add spacing for each dot
            const baseX = targetRect.right - window.innerWidth / 3.9;
            return baseX - dotRect.left + i * 8; // 14px spacing
          },
          y: (i) => {
            const targetRect =
              threeDotDestinationRef.current?.getBoundingClientRect();
            const dotRect = threeDots[i].getBoundingClientRect();
            if (!targetRect) return 0;

            // Align vertically with the middle of the text
            const baseY =
              targetRect.top + targetRect.height - window.innerHeight / 1.31;
            const dotCenterY = dotRect.top + dotRect.height / 2;
            return baseY - dotCenterY;
          },
          scale: 0.2,
          opacity: 1,
          ease: "power2.out",
          duration: 2,
        },
        "withTheThreeDots",
      );
      tl.fromTo(
        platformRef.current,
        {
          x: 0,
          y: 1000,
          opacity: 0,
          ease: "power1.out",
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          ease: "power1.out",
        },
        "withTheThreeDots",
      );
      tl.to(
        platformRef.current,
        {
          x: 0,
          y: -1000,
          opacity: 0,
          ease: "power1.out",
        },
        "dotsToOWithFading",
      );
      // MOVING THE THREE DOTS FROM ITS PLACE TO THE DOWNWARDS
      tl.to(
        threeDots,
        {
          x: 0,
          y: 180,
          scale: 1,
          opacity: 1,
          ease: "power2.out",
        },
        "dotsToOWithFading",
      );
      tl.to(
        threeDots[0],
        {
          x: 0,
          y: 240,
          opacity: 0,
          ease: "power2.inOut",
        },
        "mergeIntoO",
      );
      tl.to(
        threeDots[1],
        {
          x: 0,
          y: 210,
          opacity: 0,
          ease: "power2.inOut",
        },
        "mergeIntoO",
      );
      /**===================================================================== */
      tl.to(
        threeDots[2],
        {
          scale: 0,
          ease: "power2.inOut",
        },
        "showOandHideDot",
      );
      tl.fromTo(
        whyChooseSectionRef.current,
        {
          x: 0,
          y: 0,
          opacity: 0,
          scale: 0.2,
          duration: 2,
        },
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
        },
        "showOandHideDot",
      );
      tl.fromTo(
        chooseORef.current,
        {
          scale: 1,
          duration: 2,
          opacity: 1,
        },
        {
          scale: 200,
          duration: 2,
          background: "#fff",
        },
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
    });

    return () => ctx.revert();
  }, []);

  return {
    secondSectionContainerRef,
    leftHandContentRef,
    chooseORef,
    rightHandContentRef,
    platformRef,
    threeDotDestinationRef,
    boxRef1,
    boxRef2,
    boxRef3,
    boxRef4,
    whyChooseSectionRef,
    threeDotsContainerRef,
    dotRef,
    containerRef,
    firstTextRef,
    oRef,
    secondContentRef,
    thirdContentRef,
    toolsRef,
  };
};

export default useLeftFirst;
