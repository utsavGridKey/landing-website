import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const useLeftFirst = () => {
  const mainDivContinerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);
  const dotsPerRing = 20; // 🔽 reduce for smoother perf
  const halfWidth = 200;
  const halfHeight = 150;
  const spacingZ = 15;
  const speed = 0.8;
  const visibleDepth = 500;
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
          end: "+=11000",
          scrub: true,
          pin: true,
        },
      });

      const liDots = gsap.utils.toArray<HTMLDivElement>(
        mainDivContinerRef.current?.querySelectorAll(".nine-dot") || [],
      );

      const liDotTexts = gsap.utils.toArray<HTMLParagraphElement>(
        mainDivContinerRef.current?.querySelectorAll(".nine-dot p") || [],
      );

      const el = document.getElementsByTagName("body")[0];
      console.log("first", el.clientWidth);

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
        },
        "removingHeroAndShowingDots",
      );
      tl.to(liDots, {
        opacity: 1,
        borderRadius: 16,
        width: "auto",
        height: "auto",
      });
      tl.to(
        liDotTexts,
        {
          opacity: 1,
          duration: 0.5,
          width: "auto",
          height: "auto",
        },
        "<",
      );
    });

    return () => ctx.revert();
  }, []);

  return {
    mainDivContinerRef,
    animationRef,
    dotsPerRing,
    halfWidth,
    halfHeight,
    spacingZ,
    speed,
    visibleDepth,
    rings,
    heroSectionRef,
  };
};

export default useLeftFirst;
