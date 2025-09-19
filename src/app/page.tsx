"use client";
import FloatingNavbar from "@/components/Nabvar";
import LeftSection from "@/components/SecondSection/LeftFirst";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePageHook } from "./usePageHook";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const {
    containerRef,
    dotRef,
    firstTextRef,
    oRef,
    secondContentRef,
    thirdContentRef,
    toolsRef,
  } = usePageHook();

  return (
    <div className="overflow-x-hidden relative bg-black">
      <FloatingNavbar secondContentRef={secondContentRef} />
      <LeftSection />
    </div>
  );
}
