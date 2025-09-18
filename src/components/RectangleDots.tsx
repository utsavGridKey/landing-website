"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function RectangleDots() {
  const containerOneRef = useRef<HTMLDivElement>(null);

  const dotsPerRing = 50;

  const halfWidth = 300;

  const halfHeight = 150;

  const spacingZ = 20;

  const speed = 0.3;

  const visibleDepth = 450;

  const rings = Math.ceil(visibleDepth / spacingZ) + 2;

  useEffect(() => {
    if (!containerOneRef.current) return;

    const dots =
      containerOneRef.current.querySelectorAll<HTMLDivElement>(".dot");

    gsap.ticker.add(() => {
      dots.forEach((dot) => {
        const [x, y, z] = dot.dataset.pos!.split(",").map(Number);
        let newZ = z + speed;
        if (newZ > 1000) newZ -= rings * spacingZ;

        dot.dataset.pos = `${x},${y},${newZ}`;
        dot.style.transform = `translate3d(${x}px, ${y}px, ${newZ}px)`;
      });
    });
  }, [rings, dotsPerRing, spacingZ, speed, containerOneRef]);

  return (
    <div
      ref={containerOneRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        perspective: "1000px",
        overflow: "hidden",
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
            <div className="size- px-3 py-2.5 bg-[#222222]/40 rounded-[100px] backdrop-blur-[20px] inline-flex justify-center items-center gap-2">
              <Image
                src="/verifiedCheck.svg"
                alt="Verified check"
                width={20}
                height={20}
                priority
              />{" "}
              <div className="text-center justify-start text-[#cce0e6] text-sm font-normal font-['Inter'] leading-snug">
                Some trustworthy small line{" "}
              </div>
            </div>
            <div className="self-stretch text-center justify-start text-white text-[56px] font-semibold font-['Inter']">
              Smarter Wealth
              <br />
              Management Starts Here
            </div>
            <div className="w-[376px] text-center justify-start text-[#cce0e6] text-base font-normal font-['Inter'] leading-7">
              All your investments, reports, and compliance, simplified into one
              powerful platform.
            </div>
          </div>
          <div className="size- inline-flex justify-center items-center gap-4">
            <div
              data-button-label="true"
              data-show-heading-icon="false"
              data-show-tailing-icon="false"
              data-white-button="Default"
              className="w-40 px-6 py-4 rounded-sm outline-1 outline-offset-[-1px] outline-[#d5dee5] flex justify-center items-center gap-2 overflow-hidden"
            >
              <div className="justify-start text-white text-sm font-medium font-['Inter']">
                Request a Demo
              </div>
            </div>
            <div
              data-blue-buttons="Default"
              data-button-label="true"
              data-show-heading-icon="false"
              data-show-tailing-icon="true"
              className="w-40 px-6 py-4 bg-linear-52 from-[#006580] via-[#107281] via 40% to-[#4ca485] rounded-sm flex justify-center items-center gap-2 overflow-hidden"
            >
              <div className="justify-start text-white text-sm font-medium font-['Inter']">
                Get Started
              </div>
              <div className="size-4 relative overflow-hidden">
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
                background: "#006580",
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
              }}
            />
          );
        }),
      )}
    </div>
  );
}
