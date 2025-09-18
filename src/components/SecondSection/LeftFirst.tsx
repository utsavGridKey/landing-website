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
    rightHandContentRef,
    platformRef,
    threeDotDestinationRef,
    boxRef1,
    boxRef2,
    boxRef3,
    boxRef4,
    threeDotsContainerRef,
  } = useLeftFirst();

  return (
    <div ref={secondSectionContainerRef} className="bg-black relative ">
      <div
        ref={boxRef1}
        className="w-screen p-4 flex flex-col items-center justify-center gap-2 absolute top-0"
      >
        {[
          {
            name: "Portfolio Management",
            icon: "",
            opacity: 0.2,
            size: 12,
          },
          {
            name: "Trade Order Execution",
            icon: "",
            opacity: 0.4,
            size: 14,
          },
          {
            name: "Revenue Management",
            icon: "",
            opacity: 0.6,
            size: 16,
          },
          {
            name: "CRM",
            icon: "",
            opacity: 0.8,
            size: 18,
          },
          {
            name: "Basket",
            icon: "",
            opacity: 1,
            size: 24,
          },
          {
            name: "Client Engagement",
            icon: "",
            opacity: 0.8,
            size: 18,
          },
          {
            name: "Partner Ecosystem",
            icon: "",
            opacity: 0.6,
            size: 16,
          },
          {
            name: "Partner Ecosystem",
            icon: "",
            opacity: 0.4,
            size: 14,
          },
          {
            name: "Complaint Resolution",
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
            name: "Portfolio Management",
            icon: "",
            opacity: 0.2,
            size: 12,
          },
          {
            name: "Trade Order Execution",
            icon: "",
            opacity: 0.4,
            size: 14,
          },
          {
            name: "Revenue Management",
            icon: "",
            opacity: 0.6,
            size: 16,
          },
          {
            name: "CRM",
            icon: "",
            opacity: 0.8,
            size: 18,
          },
          {
            name: "Basket",
            icon: "",
            opacity: 1,
            size: 24,
          },
          {
            name: "Client Engagement",
            icon: "",
            opacity: 0.8,
            size: 18,
          },
          {
            name: "Partner Ecosystem",
            icon: "",
            opacity: 0.6,
            size: 16,
          },
          {
            name: "Partner Ecosystem",
            icon: "",
            opacity: 0.4,
            size: 14,
          },
          {
            name: "Complaint Resolution",
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
              A fully integrated suite of Tech Tools
            </p>
            <div>
              <p className="text-grey-500 text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vehicula massa in enim luctus. Rutrum arcu.
              </p>
            </div>
          </div>
        </div>
        <div ref={boxRef2} className="w-1/2  flex items-center justify-center ">
          <div
            ref={rightHandContentRef}
            className="flex flex-col w-[80%] gap-4 rounded-full bg-[#000f13]"
            style={{
              boxShadow: "0 0 1000px 200px #000f13",
            }}
          >
            <div className="border border-grey-700  rounded-[8px] p-2 w-fit">
              <p className="text-grey-500 uppercase text-">tech tools</p>
            </div>
            <p className="bg-gradient-to-r from-[#006580] via-[#107281] to-[#4CA485] inline-block text-transparent bg-clip-text text-6xl font-bold">
              A fully integrated suite of Tech Tools
            </p>
            <div>
              <p className="text-grey-500 text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vehicula massa in enim luctus. Rutrum arcu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          ref={platformRef}
          className="text-white absolute top-0 h-screen w-screen flex flex-col justify-center items-center gap-2 opacity-0"
        >
          <p className="bg-gradient-to-r from-[#006580] via-[#107281] to-[#4CA485] inline-block text-transparent bg-clip-text text-[48px] font-bold">
            One Platform, Many Solutions!
          </p>
          <div className="flex items-center w-1/3 gap-5">
            <p ref={threeDotDestinationRef} className="w-[50px]">
              I am
            </p>
            <div className="w-full border-b border-amber-300 p-2">asd</div>
          </div>
          <section className="flex items-center w-screen m-auto px-20">
            <div className="w-1/2 flex justify-center flex-col items-center">
              <div className="self-stretch justify-start text-[#ececec] text-[40px] font-medium font-['Inter'] leading-[52px]">
                Stay informed through data driven insights
              </div>{" "}
              <div className="self-stretch justify-start text-[#828282] text-xl font-normal font-['Inter'] leading-loose">
                Gain valuable insights and analysis of your investments and make
                better informed decisions.
                <br />
                Advisor dashboards to get a comprehensive view of your business
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
    </div>
  );
}
