"use client";
import Dotcontianer from "@/components/Dotcontianer";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import Ninedotleftref from "@/components/Ninedotleftref";
import Ninedotrightref from "@/components/Ninedotrightref";
import Perfomancesolution from "@/components/Perfomancesolution";
import Secondrefcontainer from "@/components/Secondrefcontainer";
import Whychoosesection from "@/components/Whychoosesection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import usePageHook from "./usePageHook";

gsap.registerPlugin(ScrollTrigger);

export default function LaptopScreen() {
  const { mainDivContinerRef, navbarRef } = usePageHook();

  return (
    <div className="relative hidden lg:block">
      <Navbar navbarRef={navbarRef} />
      <div
        ref={mainDivContinerRef}
        className="relative w-screen h-screen overflow-hidden bg-black"
      >
        {/**heroSectionRef================================================= */}
        <Herosection />
        {/**=============================================================== */}
        <Dotcontianer />
        {/**=============================================================== */}
        <Ninedotleftref />
        {/**=============================================================== */}
        <Ninedotrightref />
        {/**=============================================================== */}
        <Perfomancesolution />
        {/**=============================================================== */}
        <Whychoosesection />
        {/**=============================================================== */}
        <Secondrefcontainer />
        {/**=============================================================== */}
        {/* <Thirdrefcontainer /> */}
        {/**=============================================================== */}
      </div>
      <Footer />
    </div>
  );
}
