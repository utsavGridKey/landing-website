"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LaptopScreen from "./LaptopScreen";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  return (
    <>
      <LaptopScreen />
      {/* <MobileScreen /> */}
    </>
  );
}
