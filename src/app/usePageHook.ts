/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";
import { useAppContext } from "./appContent";

gsap.registerPlugin(ScrollTrigger);

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
    animationRef,
  } = useAppContext();

  const dotsPerRing = 40;
  const spacingZ = 20;
  const speed = 0.1;
  const visibleDepth = 250;
  const rings = Math.ceil(visibleDepth / spacingZ) + 2;

  useEffect(() => {
    if (!mainDivContinerRef.current) return;
    const dots =
      mainDivContinerRef.current.querySelectorAll<HTMLDivElement>(".dot");

    function animate() {
      dots.forEach((dot) => {
        const [x, y, z] = dot.dataset.pos!.split(",").map(Number);
        let newZ = z + speed;
        if (newZ > 1000) newZ -= rings * spacingZ;

        dot.dataset.pos = `${x},${y},${newZ}`;
        dot.style.transform = `translate3d(${x}px, ${y}px, ${newZ}px)`;
      });
      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [rings, dotsPerRing, spacingZ, speed]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainDivContinerRef.current,
          start: "top top",
          end: "+=12000",
          scrub: true,
          pin: true,
        },
      });

      const liDots = gsap.utils.toArray<HTMLDivElement>(
        mainDivContinerRef.current?.querySelectorAll(".nine-dot") || []
      );

      const liDotTexts = gsap.utils.toArray<HTMLParagraphElement>(
        mainDivContinerRef.current?.querySelectorAll(".nine-dot p") || []
      );

      const liDotSvg = gsap.utils.toArray<HTMLParagraphElement>(
        mainDivContinerRef.current?.querySelectorAll(".nine-dot svg") || []
      );

      const nineDotsContainer = gsap.utils.toArray<HTMLParagraphElement>(
        mainDivContinerRef.current?.querySelectorAll(".dots-container") || []
      );

      const securityTrustPoints = gsap.utils.toArray<HTMLParagraphElement>(
        mainDivContinerRef.current?.querySelectorAll(".security-trust-point") ||
          []
      );
      const el = document.getElementsByTagName("body")[0];

      tl.fromTo(
        heroSectionRef.current,
        {
          opacity: 1,
          x: 0,
          y: 0,
        },
        {
          opacity: 0,
          x: 0,
          y: -500,
          zIndex: 0,
        },
        "removingHeroAndShowingDots"
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
        },
        "removingHeroAndShowingDots"
      );
      tl.to(liDots, {
        opacity: 1,
        borderRadius: 8,
        width: "auto",
        height: "auto",
        background: "#222",
      });
      tl.to(
        liDotTexts,
        {
          color: "#ffffff",
        },
        "<"
      );
      tl.to(
        liDotSvg,
        {
          color: "#ffffff",
        },
        "<"
      );
      tl.fromTo(
        nineDotsLeftRef.current,
        {
          opacity: 0,
          y: 500,
        },
        {
          opacity: 1,
          y: 0,
        }
      );
      tl.to({}, { duration: 1 });
      tl.to(nineDotsLeftRef.current, {
        opacity: 0,
        y: -500,
      });
      tl.to([liDotSvg, liDotTexts], {
        color: "transparent",
      });
      tl.to(liDots, {
        x: () => (el?.clientWidth ?? 0) / 5,
        y: 0,
        width: "4px",
        background: "#fff",
        height: "4px",
      });
      tl.to(
        nineDotsContainer,
        {
          width: "100vw",
        },
        "<"
      );
      tl.to(
        liDotTexts,
        {
          color: "#fff",
          opacity: 0,
          textContent: (i: any) =>
            [
              "PPF / EPF",
              "Bonds",
              "AIF",
              "Mutual Funds",
              "Equity Basket",
              "PMS",
              "Private Equity",
              "Fixed Deposit",
              "Precious Metals / Gold ",
            ][i],
        },
        "<"
      );
      tl.to(liDots, {
        opacity: 1,
        borderRadius: 8,
        width: "auto",
        height: "auto",
        background: "#222",
      });
      tl.to(liDotTexts, {
        color: "#fff",
        opacity: (i: any) => [0.2, 0.4, 0.6, 0.8, 1, 0.8, 0.6, 0.4, 0.2][i],
      });
      tl.to(
        liDotSvg,

        {
          color: "#ffffff",
        },
        "<"
      );
      tl.fromTo(
        nineDotsRightRef.current,
        {
          opacity: 0,
          y: 500,
        },
        {
          opacity: 1,
          y: 0,
        }
      );
      tl.to({}, { duration: 1 });
      tl.to(nineDotsRightRef.current, {
        opacity: 0,
        y: -500,
      });
      tl.to(
        liDots,
        {
          x: () => (el?.clientWidth ?? 0) / 5,
          y: 0,
          width: "4px",
          height: "4px",
        },
        "<"
      );
      tl.to(
        liDots,
        {
          opacity: 0,
        },
        "<"
      );
      tl.to(
        liDotTexts,
        {
          opacity: 0,
        },
        "<"
      );
      tl.to(
        liDotSvg,
        {
          opacity: 0,
        },
        "<"
      );
      tl.to(
        [liDots[4], liDots[5], liDots[3]],
        {
          opacity: 1,
          background: "#fff",
        },
        "<"
      );
      tl.to([liDots[4], liDots[5], liDots[3]], {
        x: (i) => {
          const dest = threeDotDestinationRef.current;
          if (!dest) return 0;

          const destBox = dest.getBoundingClientRect();

          return destBox.left + destBox.width / 1.1 + i * 5;
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
            6
          );
        },
        scale: 0.12,
        ease: "power2.inOut",
      });
      tl.fromTo(performanceSolutionRef.current, { opacity: 0 }, { opacity: 1 });
      tl.to({}, { duration: 1 });
      tl.to(performanceSolutionRef.current, {
        y: -600,
        opacity: 0,
      });
      tl.fromTo(
        whyChooseSectionRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
      tl.to(
        [liDots[4], liDots[5], liDots[3]],
        {
          x: window.innerWidth / 2,
          y: window.innerHeight / 8,
          ease: "power2.inOut",
          scale: 0.5,
          opacity: 0,
        },
        "<"
      );
      tl.to(chooseORef.current, {
        scale: 20,
        ease: "power2.inOut",
        background: "#fff",
        transformOrigin: "center center", // important
      });
      tl.fromTo(
        navbarRef.current,
        { background: "rgba(255, 255, 255, 0.05)" },
        { background: "#ffffff88" }
      );
      tl.fromTo(
        secondContentRef.current,
        { opacity: 0, z: -400, transformPerspective: 1000 },
        { opacity: 1, z: 0, duration: 1.5, ease: "power3.out" },
        "<"
      );
      tl.to(
        toolsRef.current,
        {
          y: () =>
            -(toolsRef.current!.scrollHeight - toolsRef.current!.clientHeight),
          duration: 3,
          ease: "none",
        },
        "+=0.5"
      );
      tl.fromTo(
        secondContentRef.current,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -400, ease: "power3.out" }
      );
      tl.fromTo(
        thirdContentRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "power3.out" }
      );

      tl.fromTo(
        securityTrustPoints[0],
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, ease: "power3.out" }
      );
      tl.fromTo(
        securityTrustPoints[1],
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, ease: "power3.out" }
      );
      tl.fromTo(
        securityTrustPoints[2],
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, ease: "power3.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return {
    mainDivContinerRef,
    navbarRef,
  };
};

export default usePageHook;
