"use client";
import { Globe } from "@/components/magicui/globe";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
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
    <div
      ref={containerRef}
      className="flex flex-col relative items-center justify-center h-screen overflow-hidden perspective-[1000px] bg-black text-white"
    >
      {/* Flying O */}
      <div
        ref={dotRef}
        className="absolute top-10 text-5xl sm:text-6xl md:text-7xl font-bold"
      >
        o
      </div>

      {/* First text */}
      <p
        ref={firstTextRef}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl relative z-10 font-bold text-center"
        style={{ transition: "text-shadow 0.3s ease" }}
      >
        Why Ch
        <span ref={oRef} className="inline-block opacity-0">
          o
        </span>
        ose us?
      </p>

      {/* Second content */}
      <div
        ref={secondContentRef}
        className="w-full h-full absolute top-0 flex flex-col lg:flex-row justify-center items-center"
      >
        {/* Left section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 text-center lg:text-left">
          <p className="bg-[linear-gradient(142deg,#006580_3.91%,#107281_47.82%,#4CA485_113.7%)] bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug">
            Built for trust. Designed for growth. Focused on you.
          </p>
        </div>

        {/* Right section with grid */}
        <div className="w-full lg:w-1/2 relative overflow-hidden h-[60vh] lg:h-[95vh] m-auto">
          <InteractiveGridPattern
            width={100}
            height={100}
            className="[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
          />

          <div
            ref={toolsRef}
            className="gap-4 p-4 sm:p-6 h-full w-full flex flex-col"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-transparent bg-opacity-50 rounded-md transition-all hover:bg-opacity-100 hover:shadow-md min-h-[100px] sm:min-h-[120px]"
              >
                <p className="text-black text-sm sm:text-base font-medium">
                  Item {index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third content */}
      <div
        ref={thirdContentRef}
        className="absolute bottom-0 opacity-0 h-full w-full text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black flex flex-col lg:flex-row"
      >
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-6">
          <p>adad</p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end h-full relative ">
          <Globe
            config={{
              width: 400,
              height: 400,
              onRender: () => {},
              devicePixelRatio: 1.785,
              phi: 0,
              theta: 0.3,
              dark: 0,
              diffuse: 0.4,
              mapSamples: 16000,
              mapBrightness: 1.2,
              baseColor: [0.89, 0.89, 0.89],
              markerColor: [0 / 255, 101 / 255, 128 / 255],
              glowColor: [1, 1, 1],
              markers: [
                { location: [14.5995, 120.9842], size: 0.04 },
                { location: [19.076, 72.8777], size: 0.04 },
                { location: [23.8103, 90.4125], size: 0.04 },
                { location: [30.0444, 31.2357], size: 0.04 },
                { location: [39.9042, 116.4074], size: 0.04 },
                { location: [-23.5505, -46.6333], size: 0.04 },
                { location: [19.4326, -99.1332], size: 0.04 },
                { location: [40.7128, -74.006], size: 0.04 },
                { location: [34.6937, 135.5022], size: 0.04 },
                { location: [41.0082, 28.9784], size: 0.04 },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}
