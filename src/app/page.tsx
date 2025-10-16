"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LaptopScreen from "./LaptopScreen";
import MobileScreen from "./MobileScreen";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  return (
    <>
      <LaptopScreen />
      <MobileScreen />
    </>
  );
}
