import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const useLeftFirst = () => {
  const secondSectionContainerRef = useRef<HTMLDivElement>(null);
  const leftHandContentRef = useRef<HTMLDivElement>(null);
  const rightHandContentRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const threeDotDestinationRef = useRef<HTMLDivElement>(null);
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const boxRef3 = useRef<HTMLDivElement>(null);
  const boxRef4 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: secondSectionContainerRef.current,
          start: "top top",
          end: "+=10000",
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
        platformRef.current?.querySelectorAll(".three-dot") || [],
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
          x: (boxRef2.current?.offsetLeft ?? 0) - 400,
          y: (boxRef2.current?.offsetTop ?? 0) - 200,
          opacity: 1,
          scale: 1,
          ease: "power1.out",
        },
      );
      {
        /**========================================================================================== */
      }
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
      {
        /**========================================================================================== */
      }
      tl.to(
        liDots,
        {
          scale: 0.3,
          borderRadius: 1000,
          x: (boxRef2.current?.offsetLeft ?? 0) - 500,
          y: (boxRef2.current?.offsetTop ?? 0) - 200,
        },
        "vanish",
      );
      tl.fromTo(
        newLiDots,
        {
          x: (boxRef2.current?.offsetLeft ?? 0) - 500,
          y: (boxRef2.current?.offsetTop ?? 0) - 200,
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
        x: (boxRef3.current?.offsetLeft ?? 0) - 700,
        y: (boxRef3.current?.offsetTop ?? 0) - 200,
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
      tl.to(newLiDots, {
        x: (boxRef3.current?.offsetLeft ?? 0) - 700,
        y: (boxRef3.current?.offsetTop ?? 0) - 200,
        opacity: 0,
        scale: 1,
        ease: "power1.out",
      });

      tl.fromTo(
        threeDots,
        {
          x: (boxRef3.current?.offsetLeft ?? 0) - 700,
          y: (boxRef3.current?.offsetTop ?? 0) - 500,
          opacity: 0,
          scale: 1,
          borderRadius: 8,
          ease: "power1.out",
          zIndex: 999,
        },
        {
          opacity: 1,
          zIndex: 999,
          scale: 1,
          borderRadius: 8,
        },
      );
      tl.fromTo(
        platformRef.current,
        {
          x: 0,
          y: 0,
          opacity: 0,
          ease: "power1.out",
        },
        {
          opacity: 1,
          ease: "power1.out",
        },
      );
      // MOVING THE THREE DOTS FROM ITS PLACE TO THE I AM...
      tl.to(threeDots, {
        x: (i) => {
          const targetRect =
            threeDotDestinationRef.current?.getBoundingClientRect();
          const dotRect = threeDots[i].getBoundingClientRect();
          if (!targetRect) return 0;

          // Move to the right edge of the "I am..." text, add spacing for each dot
          const baseX = targetRect.right - 710;
          return baseX - dotRect.left + i * 8; // 14px spacing
        },
        y: (i) => {
          const targetRect =
            threeDotDestinationRef.current?.getBoundingClientRect();
          const dotRect = threeDots[i].getBoundingClientRect();
          if (!targetRect) return 0;

          // Align vertically with the middle of the text
          const baseY = targetRect.top + targetRect.height - 150;
          const dotCenterY = dotRect.top + dotRect.height / 2;
          return baseY - dotCenterY;
        },
        scale: 0.2,
        opacity: 1,
        ease: "power2.out",
      });
      // MOVING THE THREE DOTS FROM ITS PLACE TO THE DOWNWARDS
      tl.to(threeDots, {
        x: 0,
        y: 500,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
      });
      // MERGE DOTS INTO CENTER
      tl.to(threeDots, {
        x: (i, el, arr) => {
          const centerX = arr[1].getBoundingClientRect().left; // middle dot
          const dotRect = el.getBoundingClientRect();
          return centerX - dotRect.left;
        },
        y: (i, el, arr) => {
          const centerY = arr[1].getBoundingClientRect().top;
          const dotRect = el.getBoundingClientRect();
          return centerY - dotRect.top;
        },
        scale: 1.2,
        ease: "power2.inOut",
        duration: 1,
      });
      // FADE OUT DOTS
      tl.to(
        threeDots,
        {
          opacity: 0,
          duration: 0.5,
        },
        ">",
      );

      // FADE IN ALPHABET "O"
      tl.fromTo(
        ".final-o",
        { opacity: 0, scale: 0.2 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(2)" },
      );
    });

    return () => ctx.revert();
  }, []);

  return {
    secondSectionContainerRef,
    leftHandContentRef,
    rightHandContentRef,
    platformRef,
    threeDotDestinationRef,
    boxRef1,
    boxRef2,
    boxRef3,
    boxRef4,
  };
};

export default useLeftFirst;
