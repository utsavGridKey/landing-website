/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import { useCallback, useLayoutEffect } from "react";
import { useAppContext } from "./appContent";

const usePageHook = () => {
  const {
    heroSectionRef,
    nineDotsLeftRef,
    performanceSolutionRef,
    whyChooseSectionRef,
    chooseORef,
    thirdContentRef,
    threeDotDestinationRef,
    navbarRef,
    nineDotsRightRef,
    mainDivContinerRef,
    toolsRef,
    secondContentRef,
  } = useAppContext();

  // Memoize selectors to avoid recalculating
  const getElements = useCallback(() => {
    if (!mainDivContinerRef.current) return null;

    return {
      liDots: gsap.utils.toArray<HTMLDivElement>(
        mainDivContinerRef.current.querySelectorAll(".nine-dot"),
      ),
      liDotTexts: gsap.utils.toArray<HTMLParagraphElement>(
        mainDivContinerRef.current.querySelectorAll(".nine-dot p"),
      ),
      liDotSvg: gsap.utils.toArray<HTMLElement>(
        mainDivContinerRef.current.querySelectorAll(".nine-dot svg"),
      ),
      nineDotsContainer: gsap.utils.toArray<HTMLElement>(
        mainDivContinerRef.current.querySelectorAll(".dots-container"),
      ),
      securityTrustPoints: gsap.utils.toArray<HTMLElement>(
        mainDivContinerRef.current.querySelectorAll(".security-trust-point"),
      ),
    };
  }, [mainDivContinerRef]);

  useLayoutEffect(() => {
    const elements = getElements();
    if (!elements) return;

    const {
      liDots,
      liDotTexts,
      liDotSvg,
      nineDotsContainer,
      securityTrustPoints,
    } = elements;
    const el = document.body;

    // Reduce scroll distance for better performance
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainDivContinerRef.current,
          start: "top top",
          end: "+=20000", // Reduced from 20000
          scrub: 1, // Smoother scrubbing
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Optimize animations with will-change and force3D
      tl.fromTo(
        heroSectionRef.current,
        { opacity: 1, x: 0, y: 0 },
        {
          opacity: 0,
          y: -500,
          force3D: true,
        },
        "removingHeroAndShowingDots",
      );

      tl.fromTo(
        liDots,
        {
          opacity: 0,
          x: () => gsap.utils.random(-500, 0),
          y: () => gsap.utils.random(-500, 0),
        },
        {
          opacity: 1,
          x: () => (el?.clientWidth ?? 0) / 5,
          y: 0,
          borderRadius: 100,
          background: "#fff",
          force3D: true,
        },
        "removingHeroAndShowingDots",
      );

      tl.to(liDots, {
        opacity: 1,
        borderRadius: 16,
        width: "auto",
        height: "auto",
        background: "#222",
        force3D: true,
      });

      tl.to(liDotTexts, { color: "#ffffff" }, "<");
      tl.to(liDotSvg, { color: "#ffffff" }, "<");

      tl.fromTo(
        nineDotsLeftRef.current,
        { opacity: 0, y: 500 },
        { opacity: 1, y: 0, force3D: true },
      );

      tl.to(nineDotsLeftRef.current, {
        opacity: 0,
        y: -500,
        force3D: true,
      });

      tl.to([liDotSvg, liDotTexts], { color: "transparent" });

      tl.to(liDots, {
        x: () => (el?.clientWidth ?? 0) / 5,
        y: 0,
        width: "4px",
        background: "#fff",
        height: "4px",
        force3D: true,
      });

      tl.to(nineDotsContainer, { width: "100vw" }, "<");

      tl.to(liDots, {
        opacity: 1,
        borderRadius: 16,
        width: "auto",
        height: "auto",
        background: "#222",
        force3D: true,
      });

      tl.to(
        liDotTexts,
        {
          color: "#ffffff",
          duration: 0.3,
        },
        "<",
      );

      tl.to(liDotSvg, { color: "#ffffff" }, "<");

      tl.fromTo(
        nineDotsRightRef.current,
        { opacity: 0, y: 500 },
        { opacity: 1, y: 0, force3D: true },
      );

      tl.to(nineDotsRightRef.current, {
        opacity: 0,
        y: -500,
        force3D: true,
      });

      tl.to(
        liDots,
        {
          x: () => (el?.clientWidth ?? 0) / 5,
          y: 0,
          width: "4px",
          height: "4px",
          force3D: true,
        },
        "<",
      );

      tl.to(liDots, { opacity: 0 }, "<");
      tl.to(liDotTexts, { opacity: 0 }, "<");
      tl.to(liDotSvg, { opacity: 0 }, "<");

      tl.to(
        [liDots[4], liDots[5], liDots[3]],
        {
          opacity: 1,
          background: "#fff",
        },
        "<",
      );

      tl.to([liDots[4], liDots[5], liDots[3]], {
        x: (i) => {
          const dest = threeDotDestinationRef.current;
          if (!dest) return 0;
          return dest.getBoundingClientRect().right - 10 + i * 5;
          // window.innerWidth / 2.49 + i * 5,
        },
        y: (i, dot) => {
          const dest = threeDotDestinationRef.current;
          if (!dest) return 0;
          const dotBox = (dot as HTMLElement).getBoundingClientRect();
          const destBox = dest.getBoundingClientRect();
          return (
            destBox.top +
            destBox.height / 2 -
            (dotBox.top + dotBox.height / 2) +
            5
          );
        },
        scale: 0.12,
        ease: "power2.inOut",
        force3D: true,
      });

      tl.fromTo(performanceSolutionRef.current, { opacity: 0 }, { opacity: 1 });

      tl.to({}, { duration: 0.5 });

      tl.to(performanceSolutionRef.current, {
        y: -600,
        opacity: 0,
        force3D: true,
      });

      tl.fromTo(whyChooseSectionRef.current, { opacity: 0 }, { opacity: 1 });

      tl.to(
        [liDots[4], liDots[5], liDots[3]],
        {
          x: window.innerWidth / 2,
          y: window.innerHeight / 8,
          ease: "power2.inOut",
          scale: 0.5,
          opacity: 0,
          force3D: true,
        },
        "<",
      );

      tl.to(chooseORef.current, {
        scale: 20,
        ease: "power2.inOut",
        background: "#fff",
        transformOrigin: "center center",
        force3D: true,
      });

      tl.fromTo(
        navbarRef.current,
        { background: "rgba(255, 255, 255, 0.05)" },
        { background: "#ffffff88" },
      );

      tl.fromTo(
        secondContentRef.current,
        { opacity: 0, z: -400, transformPerspective: 1000 },
        {
          opacity: 1,
          z: 0,
          duration: 1,
          ease: "power3.out",
          force3D: true,
        },
        "<",
      );

      tl.to(
        toolsRef.current,
        {
          y: () =>
            -(toolsRef.current!.scrollHeight - toolsRef.current!.clientHeight),
          duration: 2, // Reduced duration
          ease: "none",
          force3D: true,
        },
        "+=0.5",
      );

      tl.fromTo(
        secondContentRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -400,
          ease: "power3.out",
          force3D: true,
        },
      );

      tl.fromTo(
        thirdContentRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          force3D: true,
        },
      );

      securityTrustPoints.forEach((point, index) => {
        tl.fromTo(
          point,
          { opacity: 0, y: 200 },
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            force3D: true,
          },
          index === 0 ? undefined : "-=0.2",
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return {
    mainDivContinerRef,
    navbarRef,
  };
};

export default usePageHook;
