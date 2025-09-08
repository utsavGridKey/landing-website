"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function MergeAnimation() {
  useEffect(() => {
    // MERGE
    let boxes = gsap.utils.toArray<HTMLElement>(".small-box");
    const bigBox = document.querySelector(".big-box") as HTMLElement;

    if (!boxes.length || !bigBox) return;

    boxes = gsap.utils.shuffle(boxes);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".merge-section",
        start: "top top",
        end: "+=1500", // controls scroll length
        scrub: true,
        pin: true, // ✅ pin so scroll waits for animation
      },
    });

    boxes.forEach((box, i) => {
      tl.to(
        box,
        {
          x: () => {
            const bigRect = bigBox.getBoundingClientRect();
            const boxRect = box.getBoundingClientRect();
            const bigCenterX = bigRect.left + bigRect.width / 2;
            const boxCenterX = boxRect.left + boxRect.width / 2;
            return bigCenterX - boxCenterX;
          },
          y: () => {
            const bigRect = bigBox.getBoundingClientRect();
            const boxRect = box.getBoundingClientRect();
            const bigCenterY = bigRect.top + bigRect.height / 2;
            const boxCenterY = boxRect.top + boxRect.height / 2;
            return bigCenterY - boxCenterY;
          },
          scale: 0.2,
          opacity: 0,
          duration: 1,
        },
        i * 0.05,
      );
    });
  }, []);

  useEffect(() => {
    // DEMERGE
    let boxes = gsap.utils.toArray<HTMLElement>(".end-small-box");
    const bigBox = document.querySelector(".big-box") as HTMLElement; // same big box

    if (!boxes.length || !bigBox) return;

    boxes = gsap.utils.shuffle(boxes);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".end-merge-section",
        start: "top top",
        end: "+=1500", // ✅ length of scroll during demerge
        scrub: true,
        pin: true, // ✅ pin this section too
      },
    });

    // 1. Start inside big box
    boxes.forEach((box) => {
      const bigRect = bigBox.getBoundingClientRect();
      const boxRect = box.getBoundingClientRect();
      const bigCenterX = bigRect.left + bigRect.width / 2;
      const bigCenterY = bigRect.top + bigRect.height / 2;
      const boxCenterX = boxRect.left + boxRect.width / 2;
      const boxCenterY = boxRect.top + boxRect.height / 2;

      gsap.set(box, {
        x: bigCenterX - boxCenterX,
        y: bigCenterY - boxCenterY,
        scale: 0.2,
        opacity: 0,
      });
    });

    // 2. Animate outward
    boxes.forEach((box, i) => {
      tl.to(
        box,
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
        },
        i * 0.05,
      );
    });
  }, []);

  return (
    <main className="w-full">
      {/* MERGE SECTION */}
      <section className="merge-section relative min-h-screen flex flex-col items-center justify-center gap-10 bg-gray-100">
        <div className="relative w-full h-[400px]">
          {[...Array(4)].map((_, row) => (
            <div key={row} className="flex gap-4 justify-center mb-4">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="small-box w-12 h-12 bg-blue-500 rounded-md"
                />
              ))}
            </div>
          ))}
        </div>
        {/* 🔥 Single big box */}
        <div className="big-box w-64 h-64 bg-blue-700 rounded-lg" />
      </section>

      {/* DEMERGE SECTION */}
      <section className="end-merge-section relative min-h-screen flex flex-col items-center justify-center gap-10 bg-gray-100">
        <div className="relative w-full h-[400px]">
          {[...Array(4)].map((_, row) => (
            <div key={row} className="flex gap-4 justify-center mb-4">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="end-small-box w-12 h-12 bg-blue-500 rounded-md"
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
