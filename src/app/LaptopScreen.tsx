/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/components/Footer";
import { Globe } from "@/components/magicui/globe";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useState } from "react";
import BarChartIcon from "../assets/barChart.svg";
import BasketIcon from "../assets/basketWheel.svg";
import DocumentIcon from "../assets/document.svg";
import DropdownIcon from "../assets/dropdown.svg";
import LineChartIcon from "../assets/lineChart.svg";
import MultiUserIcon from "../assets/multiUsers.svg";
import RupeeIcon from "../assets/rupee.svg";
import SolarShareIcon from "../assets/solarShare.svg";
import UserOnboardIcon from "../assets/userOnboard.svg";
import VerifyCheckIcon from "../assets/verifyCheck.svg";
import usePageHook from "./usePageHook";
import { optionsData } from "./utils";

gsap.registerPlugin(ScrollTrigger);

export default function LaptopScreen() {
  const {
    // rings,
    // spacingZ,
    // halfWidth,
    // halfHeight,
    // dotsPerRing,
    heroSectionRef,
    nineDotsLeftRef,
    nineDotsRightRef,
    mainDivContinerRef,
    whyChooseSectionRef,
    threeDotDestinationRef,
    performanceSolutionRef,
    chooseORef,
    toolsRef,
    secondContentRef,
    thirdContentRef,
    menuOpen,
    setMenuOpen,
    productsOpen,
    setProductsOpen,
    navbarRef,
    openDropdown,
    setOpenDropdown,
  } = usePageHook();

  const [selectedOption, setSelectedOption] = useState(
    "Registered Investment Advisor",
  );

  return (
    <div className="relative hidden lg:block">
      <nav
        ref={navbarRef}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full px-4 md:px-6 py-3 flex items-center justify-between w-[94%] md:w-[90%] max-w-7xl transition-colors duration-500`}
        role="navigation"
        aria-label="Main navigation"
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.05)",
          border: `1px solid rgba(255, 255, 255, 0.10)`,
          boxShadow: `0 4px 16px 0 rgba(0, 0, 0, 0.10)`,
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/fullLogo.svg"
            alt="fullLogo"
            width={120}
            height={40}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white relative">
          <li
            className="hover:text-gray-300 cursor-pointer relative group"
            style={{
              mixBlendMode: "difference",
            }}
          >
            Our Products
            {/* Dropdown */}
            <ul className="absolute top-full left-0 mt-2 w-48 bg-white/90 text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Product 1
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Product 2
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Product 3
              </li>
            </ul>
          </li>
          <li
            style={{
              mixBlendMode: "difference",
            }}
            className=" hover:text-gray-300 cursor-pointer"
          >
            About Us
          </li>
          <li
            style={{
              mixBlendMode: "difference",
            }}
            className="hover:text-gray-300 cursor-pointer"
          >
            Contact Us
          </li>
        </ul>

        {/* Desktop Sign In Button */}
        <button
          className="hidden md:flex px-4 py-3 gap-2 rounded-full text-white items-center hover:opacity-90 transition"
          style={{
            background: `linear-gradient(142deg, #006580 14.86%, #107281 71.32%, #4CA485 156.01%)`,
          }}
        >
          Sign In
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M3.33325 8.5H12.6666"
              stroke="#F6F8F9"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 3.83301L12.6667 8.49967L8 13.1663"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1 ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-16 right-4 bg-white/90 backdrop-blur-md shadow-lg rounded-lg p-4 w-[88vw] max-w-sm flex flex-col gap-4 md:hidden"
            role="menu"
            aria-label="Mobile"
          >
            <div>
              <button
                className="flex justify-between items-center w-full text-left text-black font-medium"
                onClick={() => setProductsOpen(!productsOpen)}
                aria-expanded={productsOpen}
                aria-controls="mobile-products"
              >
                Our Products
                <span>{productsOpen ? "▲" : "▼"}</span>
              </button>
              {productsOpen && (
                <ul
                  id="mobile-products"
                  className="mt-2 flex flex-col gap-2 pl-2 text-gray-700"
                  role="menu"
                >
                  <li className="hover:text-black cursor-pointer ">
                    Product 1
                  </li>
                  <li className="hover:text-black cursor-pointer">Product 2</li>
                  <li className="hover:text-black cursor-pointer">Product 3</li>
                </ul>
              )}
            </div>
            <button className="text-black text-left">About Us</button>
            <button className="text-black text-left">Contact Us</button>
            <button
              className="px-4 py-3 rounded-full text-white flex items-center justify-center"
              style={{
                background: `linear-gradient(142deg, #006580 14.86%, #107281 71.32%, #4CA485 156.01%)`,
              }}
            >
              Sign In
            </button>
          </div>
        )}
      </nav>
      <div
        ref={mainDivContinerRef}
        className="relative w-screen h-screen overflow-hidden bg-black"
      >
        {/**heroSectionRef================================================= */}
        <div
          ref={heroSectionRef}
          className="absolute h-full w-full perspective-[1000px] z-10"
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
                </button>
              </div>
            </div>
          </div>
          {/* {[...Array(rings)].map((_, ring) =>
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
          )} */}
        </div>
        {/**=============================================================== */}
        <div className="dots-container absolute flex justify-center items-start gap-2 flex-col pointer-events-none h-full w-[60vw] md:w-[50vw] right-0 top-0">
          {[
            {
              name: "Streamlined Fee Tracking",
              icon: RupeeIcon,
              iconSize: 20,
              opacity: 0.2,
              size: 12,
            },
            {
              name: "Data-Driven Insights & Analytics",
              icon: LineChartIcon,
              iconSize: 20,
              opacity: 0.4,
              size: 14,
            },
            {
              name: "Intuitive Lead Handling",
              icon: MultiUserIcon,
              opacity: 0.6,
              iconSize: 20,
              size: 16,
            },
            {
              name: "Comprehensive Client Reporting",
              icon: DocumentIcon,
              opacity: 0.8,
              iconSize: 24,
              size: 18,
            },
            {
              name: "Smooth Client Onboarding",
              icon: UserOnboardIcon,
              opacity: 1,
              iconSize: 40,
              size: 24,
            },
            {
              name: "Seamless Portfolio Management",
              icon: BarChartIcon,
              opacity: 0.8,
              iconSize: 24,
              size: 18,
            },
            {
              name: "Scalable Partner Ecosystem",
              icon: SolarShareIcon,
              opacity: 0.6,
              iconSize: 20,
              size: 16,
            },
            {
              name: "Effortless Compliance",
              icon: VerifyCheckIcon,
              opacity: 0.4,
              iconSize: 20,
              size: 14,
            },
            {
              name: "Frictionless Order Execution",
              icon: BasketIcon,
              opacity: 0.2,
              size: 12,
              iconSize: 20,
            },
          ].map((_, i) => {
            return (
              <div
                key={i}
                className="w-1 h-1 nine-dot rounded-[16px]  bg-black-900 flex items-center gap-4 p-4 justify-start text-nowrap opacity-0"
              >
                <_.icon
                  style={{
                    minHeight: _.iconSize,
                    minWidth: _.iconSize,
                    color: "transparent",
                  }}
                  height={_.iconSize}
                  width={_.iconSize}
                />
                <p
                  className={`text-transparent font-bold`}
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
        {/**=============================================================== */}
        <div
          ref={nineDotsLeftRef}
          className="w-full md:w-1/2 flex items-center justify-center absolute opacity-0 top-1/2 -translate-y-1/2 px-4"
        >
          <div
            className="flex flex-col w-full md:w-[80%] gap-4 rounded-full bg-[#000f13]"
            style={{
              boxShadow: "0 0 1000px 200px #000f13",
            }}
          >
            <div className="border border-grey-700  rounded-[8px] p-2 w-fit">
              <p className="text-grey-500 uppercase text-">tech tools</p>
            </div>
            <p className="bg-gradient-to-r from-[#006580] via-[#107281] to-[#4CA485] inline-block text-transparent bg-clip-text text-[48px] leading-tight">
              Your Back-Office, Mid-Office & Front-Office, Digitized.{" "}
            </p>
            <div>
              <p className="text-grey-500 text-base md:text-2xl">
                Your clients don’t invest in silos, why should your tools?
              </p>
            </div>
          </div>
        </div>
        {/**=============================================================== */}
        <div
          ref={nineDotsRightRef}
          className="w-full md:w-1/2 flex items-center justify-center absolute opacity-0 right-0 top-1/2 -translate-y-1/2 px-4"
        >
          <div
            className="flex flex-col w-full md:w-[90%] gap-4 rounded-full bg-[#000f13]"
            style={{
              boxShadow: "0 0 1000px 200px #000f13",
            }}
          >
            <div className="border border-grey-700  rounded-[8px] p-2 w-fit">
              <p className="text-grey-500 uppercase text-">Financial assets</p>
            </div>
            <p className="bg-gradient-to-r from-[#006580] via-[#107281] to-[#4CA485] inline-block text-transparent bg-clip-text text-[48px] leading-tight">
              Integrated Holistic Portfolio Management Starts Here
            </p>
            <div>
              <p className="text-grey-500 text-base md:text-2xl">
                Our intuitive app simplifies tracking and managing diverse
                financial assets.
              </p>
            </div>
          </div>
        </div>
        {/**=============================================================== */}
        <div
          ref={performanceSolutionRef}
          className="w-full h-full flex-col flex items-center justify-center absolute gap-4 opacity-0 z-10 px-4"
        >
          <p className="bg-gradient-to-r from-[#006580]  to-[#4CA485] inline-block text-transparent bg-clip-text text-3xl md:text-[64px] font-bold leading-tight text-center">
            One Platform, Many Solutions!
          </p>
          <div className="flex items-center w-full md:w-1/2 gap-3 md:gap-6">
            <p
              ref={threeDotDestinationRef}
              className="text-white text-sm md:text-[20px] text-nowrap"
            >
              {`I'M A`}
            </p>

            <div
              className="relative w-full "
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                data-property-1="Selected"
                className="w-full px-4 py-3 bg-[#111111] rounded-xl  outline-1 outline-offset-[-1px] outline-[#006580] inline-flex justify-start items-center gap-4 "
                aria-haspopup="listbox"
                aria-expanded={openDropdown}
              >
                <div className="flex-1 justify-start text-[#e0e0e0] text-sm font-medium font-['Inter'] uppercase tracking-wider">
                  {selectedOption}
                </div>
                <div className="size-5 inline-flex flex-col justify-center items-center gap-2.5">
                  <DropdownIcon
                    color="transparent"
                    style={{
                      minHeight: 14,
                      minWidth: 14,
                    }}
                  />
                </div>
              </button>
              {openDropdown && (
                <div
                  className="absolute mt-2 w-full bg-[#1a1a1a] rounded-xl shadow-lg border border-[#00658022] z-10"
                  role="listbox"
                >
                  {optionsData.map((option) => (
                    <div
                      key={option.name}
                      onClick={() => {
                        setSelectedOption(option.name);
                        setOpenDropdown(false);
                      }}
                      className="px-4 py-2 text-sm text-[#e0e0e0] hover:bg-[#006580] hover:text-white cursor-pointer rounded-lg"
                      role="option"
                      aria-selected={
                        selectedOption === option.name ? "true" : "false"
                      }
                    >
                      {option.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {optionsData
            .filter((opt) => opt.name === selectedOption)
            .map((opt) => (
              <section
                key={opt.name}
                className="flex flex-col md:flex-row items-center w-screen px-6 md:px-20 mt-10 md:mt-20 gap-8 md:gap-0"
              >
                <div className="w-full md:w-1/2 flex justify-center flex-col items-center">
                  <div className="self-stretch text-[#ececec] text-2xl md:text-[40px] font-medium leading-[1.3] md:leading-[52px] text-center md:text-left">
                    {opt.title}
                  </div>
                  <ol className="self-stretch text-[#828282] text-base md:text-xl font-normal leading-loose list-disc list-outside mt-4 md:ml-6 ml-4">
                    {opt.descriptions.map((desc, index) => (
                      <li key={index} className="text-[14px]">
                        {desc}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <img
                    src={opt.imgSrc}
                    alt=""
                    className="w-3/4 md:w-1/2 h-auto"
                  />
                </div>
              </section>
            ))}
        </div>
        {/**=============================================================== */}
        <section
          ref={whyChooseSectionRef}
          className="absolute flex-col gap-4 w-full top-0 flex justify-center items-center opacity-0 h-full px-4"
          style={{
            background:
              "radial-gradient(circle,rgba(0, 35, 43, 0.8) 0%, rgba(0, 0, 0, 1) 50%)",
          }}
        >
          <p
            ref={chooseORef}
            className="text-center justify-start text-3xl md:text-[55.04px] text-white font-medium font-['Inter']"
          >
            Why Choose us?
          </p>
          <p className="w-full max-w-[703.78px] px-2 md:px-0 text-center justify-start text-sm md:text-base text-white font-normal font-['Inter'] leading-6 md:leading-7">
            Advisory runs on trust. Our platform helps you deliver personal
            experiences, build client confidence, and turn complexity into
            lasting growth. With every feature designed for clarity and ease,
            you stay focused on what matters most: your clients.
          </p>
        </section>
        {/**=============================================================== */}
        <section
          ref={secondContentRef}
          id="secondContentRef"
          className="w-full h-full absolute top-0 flex justify-center items-center px-4"
        >
          <div className="flex flex-col md:flex-row w-full h-full gap-8 md:gap-0">
            {/* Left section */}
            <div className="w-full md:w-1/2 flex items-center justify-center ">
              <p className="bg-[linear-gradient(142deg,#006580_3.91%,#107281_47.82%,#4CA485_113.7%)] bg-clip-text text-transparent text-3xl md:text-6xl font-bold leading-tight text-center md:text-left">
                Built on trust. <br />
                Driven by insight. <br />
                Made for you.{" "}
              </p>
            </div>

            {/* Right section with scrollable grid */}
            <div className="w-full md:w-1/2 relative overflow-hidden h-[70vh] md:h-[95vh] m-auto">
              <InteractiveGridPattern width={150} height={150} />
              <div
                ref={toolsRef}
                className="p-6 h-full w-full flex flex-col gap-4"
              >
                {[
                  {
                    title: "Founder’s Vision",
                    description:
                      "Industry experts with a vision to revolutionize wealth management space.",
                    icon: SolarShareIcon,
                  },
                  {
                    title: "Client-Centric Approach",
                    description:
                      "We ensure that every feature is designed to meet the unique needs of our users.",
                    icon: SolarShareIcon,
                  },
                  {
                    title: "Holistic Wealth Management",
                    description:
                      "Gridkey covers every aspect of wealth management in one integrated platform.",
                    icon: SolarShareIcon,
                  },
                  {
                    title: "Intuitive Tools",
                    description:
                      "Leverage cutting-edge tools for growing your advisory business.",
                    icon: SolarShareIcon,
                  },
                  {
                    title: "Data Driven Insights",
                    description:
                      "Make informed decision with insights and reports, empowering you to stay aheah in the game",
                    icon: SolarShareIcon,
                  },
                  {
                    title: "Innovation at Core",
                    description:
                      "We continuosly strive to bring innovative solutions to simpliy complex financial landscape.",
                    icon: SolarShareIcon,
                  },
                ].map((dataItem, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center bg-transparent bg-opacity-50 rounded-md transition-all hover:bg-opacity-100 hover:shadow-md min-h-1/3"
                  >
                    <div className="w-1/2 ">
                      <p className="self-stretch justify-start text-[#333333] text-xl font-semibold font-['Inter'] leading-relaxed">
                        {dataItem.title}
                      </p>{" "}
                      <p className="self-stretch justify-start text-[#4f4f4f] text-sm font-medium font-['Inter'] leading-snug max-w-2/3">
                        {dataItem.description}
                      </p>
                    </div>
                    <img src="/founder.svg" alt="" className="opacity-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/**=============================================================== */}
        <section
          ref={thirdContentRef}
          className="absolute bottom-0 opacity-0 h-full w-full text-2xl md:text-4xl font-bold  text-black flex px-6 md:px-28"
        >
          <div className="w-full md:w-1/2 md:pl-10 h-screen flex flex-col items-start justify-center gap-6 md:gap-10 ">
            <img src="/security1.svg" alt="" />
            <div>
              <p className="bg-[linear-gradient(142deg,#006580_3.91%,#107281_47.82%,#4CA485_113.7%)] bg-clip-text text-transparent text-2xl md:text-5xl font-semibold leading-tight">
                Security You Can Trust
              </p>
              <p className="self-stretch justify-start text-[#333333] text-sm md:text-base font-normal font-['Inter'] leading-relaxed">
                Where regulatory compliance, client trust, and business growth
                align seamlessly through technology.
              </p>
            </div>
            <ol className="w-full">
              {[
                {
                  title: "Cloud-based platform",
                  description:
                    "Access your wealth management tools securely from anywhere.",
                  icon: "",
                },
                {
                  title: "Cutting-edge web security",
                  description:
                    "AI-powered monitoring and firewalls protect your data from threats.",
                  icon: "",
                },
                {
                  title: "Secure 256-bit SSL for max safety",
                  description:
                    "Industry-leading encryption keeps transactions and client information safe.",
                  icon: "",
                },
              ].map((dataItem, index) => {
                return (
                  <li
                    key={index}
                    className="security-trust-point flex items-start gap-4 justify-start mb-9 opacity-0"
                  >
                    <img src="/security1.svg" alt="" height={24} width={24} />
                    <div className="flex flex-col gap-2 items-start justify-start">
                      <p className="self-stretch justify-start text-[#333333] text-sm md:text-base font-semibold font-['Inter'] leading-tight">
                        {dataItem.title}
                      </p>
                      <p className="self-stretch justify-start text-[#4f4f4f] text-xs font-medium font-['Inter'] leading-tight">
                        {dataItem.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="hidden md:block w-full bg-white relative">
            <Globe
              config={{
                width: 100,
                height: 100,
                onRender: () => {},
                devicePixelRatio: 1.78,
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
        </section>
        {/**=============================================================== */}
      </div>
      <Footer />
    </div>
  );
}
