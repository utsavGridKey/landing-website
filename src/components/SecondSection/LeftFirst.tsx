/* eslint-disable @next/next/no-img-element */
"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SolarShareIcon from "../../assets/solarShare.svg";
import useLeftFirst from "./useLeftFirst";

gsap.registerPlugin(ScrollTrigger);

export default function LeftSection() {
  const {
    secondSectionContainerRef,
    leftHandContentRef,
    chooseORef,
    rightHandContentRef,
    platformRef,
    threeDotDestinationRef,
    boxRef1,
    boxRef2,
    boxRef3,
    boxRef4,
    whyChooseSectionRef,
    threeDotsContainerRef,
    secondContentRef,
    thirdContentRef,
    toolsRef,
  } = useLeftFirst();

  return (
    <div>
      <div ref={secondSectionContainerRef} className="bg-black relative ">
        <div
          ref={boxRef1}
          className="w-screen p-4 flex flex-col items-center justify-center gap-2 absolute top-0"
        >
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
              opacity: 0.2,
              size: 12,
            },
            {
              name: "Frictionless Order Execution",
              icon: "",
              opacity: 0.4,
              size: 14,
            },
          ].map((_, i) => {
            return (
              <div
                key={i}
                className="dot rounded-[16px]  bg-black-900 flex items-center gap-4 p-4 justify-center"
              >
                <SolarShareIcon color="#fff" height={_.size} width={_.size} />

                <p
                  className={`text-white font-bold`}
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

        <div
          ref={boxRef4}
          className="w-screen p-4 flex flex-col items-center justify-center gap-2 absolute top-0"
        >
          <div className="absolute">
            {Array.from({ length: 3 }).map((_, i) => {
              return (
                <div
                  key={i}
                  className="three-dot rounded-[16px]  bg-white h-4 w-4 m-3 "
                ></div>
              );
            })}
          </div>
          {[
            {
              name: "PPF / EPF",
              icon: "",
              opacity: 0.2,
              size: 12,
            },
            {
              name: "Bonds",
              icon: "",
              opacity: 0.4,
              size: 14,
            },
            {
              name: "AIF",
              icon: "",
              opacity: 0.6,
              size: 16,
            },
            {
              name: "Mutual Funds",
              icon: "",
              opacity: 0.8,
              size: 18,
            },
            {
              name: "Equity Basket",
              icon: "",
              opacity: 1,
              size: 24,
            },
            {
              name: "PMS",
              icon: "",
              opacity: 0.8,
              size: 18,
            },
            {
              name: "Private Equity",
              icon: "",
              opacity: 0.6,
              size: 16,
            },
            {
              name: "Fixed Deposit",
              icon: "",
              opacity: 0.4,
              size: 14,
            },
            {
              name: "Gold / Silver",
              icon: "",
              opacity: 0.2,
              size: 12,
            },
          ].map((_, i) => {
            return (
              <div
                key={i}
                className="dot rounded-[16px]  bg-black-900 flex items-center gap-4 p-4 justify-center"
              >
                <SolarShareIcon color="#fff" height={_.size} width={_.size} />
                <p
                  className={`text-white font-bold`}
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

        <section
          ref={threeDotsContainerRef}
          className="h-screen flex items-center justify-center "
        >
          <div
            ref={boxRef3}
            className="w-1/2  flex items-center justify-center shadow-2xl "
          >
            <div
              ref={leftHandContentRef}
              className="flex flex-col w-[80%] gap-4 ml-50 rounded-full bg-[#000f13]"
              style={{
                boxShadow: "0 0 1000px 200px #000f13",
              }}
            >
              <div className="border border-grey-700  rounded-[8px] p-2 w-fit">
                <p className="text-grey-500 uppercase text-">tech tools</p>
              </div>
              <p className="bg-gradient-to-r from-[#006580] via-[#107281] to-[#4CA485] inline-block text-transparent bg-clip-text text-[64px] font-bold">
                Your Back-Office, Mid-Office & Front-Office, Digitized.{" "}
              </p>
              <div>
                <p className="text-grey-500 text-2xl">
                  Your clients don’t invest in silos, why should your tools?
                </p>
              </div>
            </div>
          </div>
          <div
            ref={boxRef2}
            className="w-1/2  flex items-center justify-center "
          >
            <div
              ref={rightHandContentRef}
              className="flex flex-col w-[80%] gap-4 rounded-full bg-[#000f13]"
              style={{
                boxShadow: "0 0 1000px 200px #000f13",
              }}
            >
              <div className="border border-grey-700  rounded-[8px] p-2 w-fit">
                <p className="text-grey-500 uppercase text-">
                  Financial assets
                </p>
              </div>
              <p className="bg-gradient-to-r from-[#006580] via-[#107281] to-[#4CA485] inline-block text-transparent bg-clip-text text-6xl font-bold">
                Integrated Holistic Portfolio Management Starts Here{" "}
              </p>
              <div>
                <p className="text-grey-500 text-2xl">
                  Our intuitive app simplifies tracking and managing diverse
                  financial assets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            ref={platformRef}
            className="text-white absolute top-30 h-screen w-screen flex flex-col justify-center items-center gap-2 opacity-0 "
          >
            <p className="bg-gradient-to-r from-[#006580] via-[#107281] to-[#4CA485] inline-block text-transparent bg-clip-text text-[48px] font-bold">
              One Platform, Many Solutions!
            </p>
            <div className="flex items-center w-1/3 gap-5">
              <p ref={threeDotDestinationRef} className="w-[50px]">
                I am
              </p>
              <div
                data-property-1="Selected"
                className="w-full px-4 py-3 bg-[#111111] rounded-xl  outline-1 outline-offset-[-1px] outline-[#006580] inline-flex justify-start items-center gap-4"
              >
                <div className="flex-1 justify-start text-[#e0e0e0] text-sm font-medium font-['Inter'] uppercase tracking-wider">
                  Registered Investment Advisor
                </div>
                <div className="size-5 inline-flex flex-col justify-center items-center gap-2.5">
                  <div className="w-[12.50px] h-[7.20px] bg-white" />
                </div>
              </div>
            </div>
            <section className="flex items-center w-screen m-auto px-20">
              <div className="w-1/2 flex justify-center flex-col items-center">
                <div className="self-stretch justify-start text-[#ececec] text-[40px] font-medium font-['Inter'] leading-[52px]">
                  Stay informed through data driven insights
                </div>{" "}
                <div className="self-stretch justify-start text-[#828282] text-xl font-normal font-['Inter'] leading-loose">
                  Gain valuable insights and analysis of your investments and
                  make better informed decisions.
                  <br />
                  Advisor dashboards to get a comprehensive view of your
                  business
                  <br />
                  Holdings Summary to get holistic perspective of client
                  investments
                </div>
              </div>
              <div className="w-1/2 flex justify-center items-center ">
                <img
                  src="/productImg2.svg"
                  alt=""
                  width={"60%"}
                  height={"auto"}
                />
              </div>
            </section>
          </div>
        </section>

        <section
          ref={whyChooseSectionRef}
          className="absolute opacity-0 flex-col gap-4 h-screen w-screen top-0 flex justify-center items-center  "
          style={{
            background:
              "radial-gradient(circle,rgba(0, 35, 43, 0.8) 0%, rgba(0, 0, 0, 1) 50%)",
          }}
        >
          <p className="text-center justify-start  text-[55.04px] text-white font-medium font-['Inter']">
            Why Ch
            <span className="inline-block text-white" ref={chooseORef}>
              o
            </span>
            ose us?
          </p>
          <p className="w-[703.78px] text-center justify-start  text-base text-white font-normal font-['Inter'] leading-7">
            Advisory runs on trust. Our platform helps you deliver personal
            experiences, build client confidence, and turn complexity into
            lasting growth. With every feature designed for clarity and ease,
            you stay focused on what matters most: your clients.
          </p>
        </section>

        <section>
          {/* Second content (two-column section) */}
          <div
            ref={secondContentRef}
            id="secondContentRef"
            className="w-full h-full absolute top-0 flex justify-center items-center"
          >
            <div className="flex flex-row w-full h-full">
              {/* Left section */}
              <div className="w-1/2 flex items-center justify-center p-12">
                <p className="bg-[linear-gradient(142deg,#006580_3.91%,#107281_47.82%,#4CA485_113.7%)] bg-clip-text text-transparent text-6xl font-bold">
                  Built for trust. Designed for growth. Focused on you.
                </p>
              </div>

              {/* Right section with scrollable grid */}
              <div className="w-1/2 relative overflow-hidden h-[95vh] m-auto">
                <div
                  ref={toolsRef}
                  className="gap-4 p-6 h-full w-full flex flex-col"
                >
                  {Array.from({ length: 10 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center bg-amber-100 bg-opacity-50 rounded-md transition-all hover:bg-opacity-100 hover:shadow-md min-h-1/4"
                    >
                      <p className="text-black text-sm font-medium">
                        Item {index + 1}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Third content */}
          <div
            ref={thirdContentRef}
            className="absolute bottom-0 opacity-0 h-full w-full bg-amber-300 text-4xl font-bold text-center text-black flex"
          >
            <div className="w-1/2 bg-white">adad</div>
            <div className="w-1/2 bg-white">adsad</div>
          </div>
        </section>
      </div>
    </div>
  );
}
