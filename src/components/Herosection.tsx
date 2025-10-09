import { useAppContext } from "@/app/appContent";
import Image from "next/image";

const Herosection = () => {
  const { heroSectionRef } = useAppContext();
  const dotsPerRing = 30; // 🔽 reduce for smoother perf
  const halfWidth = 150;
  const halfHeight = 100;
  const spacingZ = 20;
  const visibleDepth = 500;
  const rings = Math.ceil(visibleDepth / spacingZ) + 2;

  return (
    <div
      ref={heroSectionRef}
      className="Herosection absolute h-full w-full perspective-[1000px] z-10"
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
            <button
              data-property-1="Default"
              className="w-40 px-6 py-4 rounded-sm  outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2 overflow-hidden"
            >
              <div className="justify-start text-white text-sm font-medium font-['Inter']">
                Request a Demo
              </div>
            </button>
            <button className="w-40 px-6 py-4 bg-gradient-to-r from-[#006580] via-[#107281] to-[#4ca485] rounded-sm flex justify-center items-center gap-2">
              <div className="text-white text-sm font-medium">Get Started</div>
              <div className="size-4 relative">
                <Image
                  src="/rightArrow.svg"
                  alt="Arrow check"
                  width={20}
                  height={20}
                  priority
                />
              </div>
            </button>
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
                width: "1.5px",
                height: "1.5px",
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
  );
};

export default Herosection;
