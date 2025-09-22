"use client";
import useLeftFirst from "@/components/SecondSection/useLeftFirst";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SolarShareIcon from "../assets/solarShare.svg";

gsap.registerPlugin(ScrollTrigger);

export default function LeftSection() {
  const {
    dotsPerRing,
    spacingZ,
    rings,
    mainDivContinerRef,
    halfWidth,
    halfHeight,
    heroSectionRef,
  } = useLeftFirst();

  return (
    <div
      ref={mainDivContinerRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
        background: "black",
      }}
    >
      {/**heroSectionRef================================================= */}
      <div
        ref={heroSectionRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          perspective: "1000px",
          overflowX: "hidden",
          background: "black",
        }}
      >
        <div
          style={{
            background: "black",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70vw",
            minHeight: "50vh",
            zIndex: 9999,
            boxShadow: "0 0 4000px 150px #000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 40,
          }}
        >
          <div className="w-[784px] inline-flex flex-col justify-start items-center gap-10">
            <div className="self-stretch flex flex-col justify-start items-center gap-5">
              <div className="px-3 py-2.5 bg-[#222222]/40 rounded-[100px] backdrop-blur-[20px] inline-flex justify-center items-center gap-2">
                <Image
                  src="/verifiedCheck.svg"
                  alt="Verified check"
                  width={20}
                  height={20}
                  priority
                />
                <div className="text-center text-neutral-100 text-sm">
                  Simplify. Streamline. Succeed
                </div>
              </div>
              <div className="self-stretch text-center text-white text-[56px] font-semibold">
                One Platform to Power Your Entire Wealth Business
              </div>
              <div className="w-[600px] text-center text-neutral-300 text-base leading-7">
                Designed for Family Offices, Financial Advisors, Portfolio
                Managers, Brokers, and Wealth Businesses seeking to manage and
                scale their business.
              </div>
            </div>
            <div className="inline-flex justify-center items-center gap-4">
              <div className="w-40 px-6 py-4 rounded-sm outline-[#d5dee5] flex justify-center items-center gap-2">
                <div className="text-white text-sm font-medium">
                  Request a Demo
                </div>
              </div>
              <div className="w-40 px-6 py-4 bg-gradient-to-r from-[#006580] via-[#107281] to-[#4ca485] rounded-sm flex justify-center items-center gap-2">
                <div className="text-white text-sm font-medium">
                  Get Started
                </div>
                <div className="size-4 relative">
                  <Image
                    src="/rightArrow.svg"
                    alt="Arrow check"
                    width={20}
                    height={20}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {[...Array(rings)].map((_, ring) =>
          [...Array(dotsPerRing)].map((_, dot) => {
            const side = Math.floor(dot / (dotsPerRing / 4));
            const progress = (dot % (dotsPerRing / 4)) / (dotsPerRing / 4);
            let x = 0,
              y = 0;

            if (side === 0) {
              x = -halfWidth + progress * (2 * halfWidth);
              y = -halfHeight;
            } else if (side === 1) {
              x = halfWidth;
              y = -halfHeight + progress * (2 * halfHeight);
            } else if (side === 2) {
              x = halfWidth - progress * (2 * halfWidth);
              y = halfHeight;
            } else {
              x = -halfWidth;
              y = halfHeight - progress * (2 * halfHeight);
            }

            const z = 1000 - ring * spacingZ;

            return (
              <div
                key={`${ring}-${dot}`}
                className="dot"
                data-pos={`${x},${y},${z}`}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "3px",
                  height: "3px",
                  borderRadius: "50%",
                  background: "#00b3b3",
                  transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                  willChange: "transform", // ⚡ GPU acceleration
                }}
              />
            );
          }),
        )}
      </div>
      {/**================================================= */}
      <div className="dots-container absolute  flex justify-center items-center gap-4 flex-col pointer-events-none h-[100vh] w-[100vw]">
        {[
          {
            name: "Streamlined Fee Tracking",
            icon: "",
            opacity: 0.2,
            size: 12,
          },
          {
            name: "Data-Driven Insights & Analytics",
            icon: "",
            opacity: 0.4,
            size: 14,
          },
          {
            name: "Intuitive Lead Handling",
            icon: "",
            opacity: 0.6,
            size: 16,
          },
          {
            name: "Comprehensive Client Reporting",
            icon: "",
            opacity: 0.8,
            size: 18,
          },
          {
            name: "Smooth Client Onboarding",
            icon: "",
            opacity: 1,
            size: 24,
          },
          {
            name: "Seamless Portfolio Management",
            icon: "",
            opacity: 0.8,
            size: 18,
          },
          {
            name: "Scalable Partner Ecosystem",
            icon: "",
            opacity: 0.6,
            size: 16,
          },
          {
            name: "Effortless Compliance",
            icon: "",
            opacity: 0.4,
            size: 14,
          },
          {
            name: "Frictionless Order Execution",
            icon: "",
            opacity: 0.2,
            size: 12,
          },
        ].map((_, i) => {
          return (
            <div
              key={i}
              className="w-4 h-4 nine-dot rounded-[16px]  bg-black-900 flex items-center gap-4 p-4 justify-center text-nowrap opacity-0"
            >
              <SolarShareIcon color="#fff" height={_.size} width={_.size} />
              <p
                className={`text-white font-bold opacity-0`}
                style={{
                  fontSize: _.size,
                  opacity: _.opacity,
                }}
              >
                {_.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
