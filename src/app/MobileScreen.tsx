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
import { optionsData } from "./utils";

const MobileScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    "Registered Investment Advisor",
  );

  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="bg-[#000] relative block lg:hidden">
      <div className="z-20 sticky left-0 top-4  w-full h-16 p-4 bg-white/5 rounded-[32px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.10)] outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-[10px] inline-flex flex-col justify-start items-start gap-8 overflow-hidden">
        <div className="self-stretch inline-flex justify-between items-center">
          <Image width={115} height={31} alt="a" src="/fullLogo.svg" />
          <div className="size-6 relative rounded-md flex justify-center items-center">
            <button>
              <Image width={100} height={100} alt="a" src="/burgermenu.svg" />
            </button>
          </div>
        </div>
        <div className="self-stretch opacity-0 flex flex-col justify-center items-center">
          <div className="self-stretch py-2 inline-flex justify-center items-center gap-2">
            <div className="justify-center text-white text-base font-semibold  leading-normal">
              Our Solutions
            </div>
          </div>
          <div
            data-heading-icon="true"
            data-hover="Off"
            data-label="true"
            data-property-1="Default"
            data-tailing-icon="true"
            className="self-stretch py-2 inline-flex justify-center items-center gap-2"
          >
            <div className="justify-center text-white text-base font-semibold  leading-normal">
              About Us
            </div>
          </div>
          <div
            data-heading-icon="true"
            data-hover="Off"
            data-label="true"
            data-property-1="Default"
            data-tailing-icon="true"
            className="self-stretch py-2 inline-flex justify-center items-center gap-2"
          >
            <div className="justify-center text-white text-base font-semibold  leading-normal">
              Contact Us
            </div>
          </div>
        </div>
        <div
          data-property-1="Default"
          className="self-stretch px-4 py-3 opacity-0 bg-linear-52 from-[#006580] via-[#107281] via 40% to-[#4ca485] rounded-[50px] inline-flex justify-center items-center gap-2 overflow-hidden"
        >
          <div className="justify-start text-white text-sm font-medium ">
            Sign In
          </div>
          <div className="size-4 relative overflow-hidden">
            <div className="w-[9.33px] h-0 left-[3.33px] top-[8px] absolute outline-[1.20px] outline-offset-[-0.60px] outline-[#f6f8f9]" />
            <div className="w-[4.67px] h-[9.33px] left-[8px] top-[3.33px] absolute outline-[1.20px] outline-offset-[-0.60px] outline-white" />
          </div>
        </div>
      </div>
      {/**------------------------------------------------------------------------------- */}
      <div className="p-4  w-full self-stretch h-[700px] inline-flex flex-col justify-center items-center gap-8">
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
          <div className="self-stretch text-center justify-start text-white text-[32px] font-medium  leading-[51.20px]">
            One Platform to Power
            <br />
            Your Entire Wealth Business
          </div>
          <div className="self-stretch text-center justify-start text-[#9aa4b2] text-xs font-normal  leading-snug">
            Designed for Family Offices, Financial Advisors, Portfolio Managers,
            Brokers, and Wealth Businesses seeking to manage and scale their
            business.
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-center items-center gap-4">
          <div
            data-property-1="Default"
            className="self-stretch px-6 py-4 bg-linear-52 from-[#006580] via-[#107281] via 40% to-[#4ca485] rounded-sm inline-flex justify-center items-center gap-2 overflow-hidden"
          >
            <div className="justify-start text-white text-sm font-medium ">
              Get Started
            </div>
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
          </div>
          <div
            data-property-1="Default"
            className="self-stretch px-6 py-4 rounded-sm outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2 overflow-hidden"
          >
            <div className="justify-start text-white text-sm font-medium ">
              Request a Demo
            </div>
          </div>
        </div>
      </div>
      {/**------------------------------------------------------------------------------- */}
      <div className="p-4 w-full self-stretch py-10 inline-flex flex-col justify-start items-center gap-8">
        <div className="self-stretch relative flex flex-col justify-start items-center gap-4">
          <div
            data-dropdown="false"
            data-property-1="Default"
            className="size- px-4 py-2.5 rounded-lg outline-1 outline-offset-[-1px] outline-[#828282] inline-flex justify-center items-center gap-2"
          >
            <div className="text-center justify-start text-[#bdbdbd] text-[10px] font-medium  uppercase leading-none tracking-widest">
              tech tools
            </div>
          </div>
          <div className="self-stretch text-center justify-start text-[#006580] text-[32px] font-medium  leading-[44.80px]">
            Your Back-Office,
            <br />
            Mid-Office & Front-Office, Digitized.{" "}
          </div>
          <div className="self-stretch text-center justify-start text-[#828282] text-sm font-normal  leading-snug">
            Your clients don’t invest in silos, why should your tools?
          </div>
          <div className="w-[308px] h-[300px] left-[26px] top-[-26px] absolute opacity-20 bg-linear-52 from-[#006580] via-[#107281] via 40% to-[#4ca485] blur-[100px]" />
        </div>
        <div className="size- flex flex-col justify-start items-center gap-3">
          {[
            {
              name: "Streamlined Fee Tracking",
              icon: RupeeIcon,
              iconSize: 20,
              size: 12,
            },
            {
              name: "Data-Driven Insights & Analytics",
              icon: LineChartIcon,
              iconSize: 20,
              size: 14,
            },
            {
              name: "Intuitive Lead Handling",
              icon: MultiUserIcon,
              iconSize: 20,
              size: 16,
            },
            {
              name: "Comprehensive Client Reporting",
              icon: DocumentIcon,
              iconSize: 24,
              size: 18,
            },
            {
              name: "Smooth Client Onboarding",
              icon: UserOnboardIcon,
              iconSize: 40,
              size: 24,
            },
            {
              name: "Seamless Portfolio Management",
              icon: BarChartIcon,
              iconSize: 24,
              size: 18,
            },
            {
              name: "Scalable Partner Ecosystem",
              icon: SolarShareIcon,
              iconSize: 20,
              size: 16,
            },
            {
              name: "Effortless Compliance",
              icon: VerifyCheckIcon,
              iconSize: 20,
              size: 14,
            },
            {
              name: "Frictionless Order Execution",
              icon: BasketIcon,
              size: 12,
              iconSize: 20,
            },
          ].map((_, i) => {
            return (
              <div
                key={i}
                className="size- p-3 bg-[#222222] rounded-[91.67px] inline-flex justify-start items-center gap-2"
              >
                <_.icon
                  style={{
                    minHeight: 24,
                    minWidth: 24,
                  }}
                  height={24}
                  width={24}
                />
                <p
                  className={`text-white font-bold`}
                  style={{
                    fontSize: _.size,
                  }}
                >
                  {_.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/**------------------------------------------------------------------------------- */}
      <div className="p-4 w-full self-stretch py-10 inline-flex flex-col justify-start items-center gap-8">
        <div className="self-stretch relative flex flex-col justify-start items-center gap-4">
          <div
            data-dropdown="false"
            data-property-1="Default"
            className="size- px-4 py-2.5 rounded-lg outline-1 outline-offset-[-1px] outline-[#828282] inline-flex justify-center items-center gap-2"
          >
            <div className="text-center justify-start text-[#bdbdbd] text-[10px] font-medium  uppercase leading-none tracking-widest">
              Financial assets
            </div>
          </div>
          <div className="self-stretch text-center justify-start text-[#006580] text-[32px] font-medium  leading-[44.80px]">
            Integrated Holistic
            <br />
            Portfolio Management Starts Here
          </div>
          <div className="self-stretch text-center justify-start text-[#828282] text-sm font-normal  leading-snug">
            Our intuitive app simplifies tracking and managing diverse financial
            assets.
          </div>
          <div className="w-[308px] h-[300px] left-[29px] top-[-26px] absolute opacity-20 bg-linear-52 from-[#006580] via-[#107281] via 40% to-[#4ca485] blur-[100px]" />
        </div>
        <div className="size- flex flex-col justify-start items-center gap-3">
          {[
            {
              name: "Streamlined Fee Tracking",
              icon: RupeeIcon,
              iconSize: 20,
              size: 12,
            },
            {
              name: "Data-Driven Insights & Analytics",
              icon: LineChartIcon,
              iconSize: 20,
              size: 14,
            },
            {
              name: "Intuitive Lead Handling",
              icon: MultiUserIcon,
              iconSize: 20,
              size: 16,
            },
            {
              name: "Comprehensive Client Reporting",
              icon: DocumentIcon,
              iconSize: 24,
              size: 18,
            },
            {
              name: "Smooth Client Onboarding",
              icon: UserOnboardIcon,
              iconSize: 40,
              size: 24,
            },
            {
              name: "Seamless Portfolio Management",
              icon: BarChartIcon,
              iconSize: 24,
              size: 18,
            },
            {
              name: "Scalable Partner Ecosystem",
              icon: SolarShareIcon,
              iconSize: 20,
              size: 16,
            },
            {
              name: "Effortless Compliance",
              icon: VerifyCheckIcon,
              iconSize: 20,
              size: 14,
            },
            {
              name: "Frictionless Order Execution",
              icon: BasketIcon,
              size: 12,
              iconSize: 20,
            },
          ].map((_, i) => {
            return (
              <div
                key={i}
                className="size- p-3 bg-[#222222] rounded-[91.67px] inline-flex justify-start items-center gap-2"
              >
                <_.icon
                  style={{
                    minHeight: 24,
                    minWidth: 24,
                  }}
                  height={24}
                  width={24}
                />
                <p
                  className={`text-white font-bold`}
                  style={{
                    fontSize: _.size,
                  }}
                >
                  {_.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/**------------------------------------------------------------------------------- */}
      <div className="p-4 w-full self-stretch py-10 inline-flex flex-col justify-start items-center gap-8">
        <div className="self-stretch text-center justify-start text-[#006580] text-[40px] font-medium  leading-[52px]">
          One Platform,
          <br />
          Many Solutions!
        </div>
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
          <div className="justify-start text-white text-lg font-medium  uppercase">
            I’m a...
          </div>
          <div className="w-full relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              data-property-1="Selected"
              className="w-full px-4 py-3 bg-[#111111] rounded-xl  outline-1 outline-offset-[-1px] outline-[#006580] inline-flex justify-start items-center gap-4 "
              aria-haspopup="listbox"
              aria-expanded={openDropdown}
            >
              <div className="flex-1 justify-start text-[#e0e0e0] text-sm font-medium  uppercase tracking-wider">
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
          .map((opt) => {
            return (
              <section
                key={opt.name}
                className="flex flex-col items-center w-full "
              >
                <div className="w-full flex justify-center flex-col items-center">
                  <div className="self-stretch text-[#ececec] text-2xl md:text-[40px] font-medium leading-[1.3] md:leading-[52px] text-center">
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
                <div className="w-full flex justify-center items-center">
                  <img
                    src={opt.imgSrc}
                    alt=""
                    className="w-3/4 md:w-1/2 h-auto"
                  />
                </div>
              </section>
            );
          })}
      </div>
      {/**------------------------------------------------------------------------------- */}
      <div className="p-4 w-full self-stretch py-[200px] inline-flex flex-col justify-start items-center gap-5">
        <div className="self-stretch relative flex flex-col justify-start items-center gap-4">
          <div className="size-[361px] left-0 top-[-90.21px] absolute opacity-50 bg-linear-52 from-[#006580] via-[#107281] via 40% to-[#4ca485] rounded-full blur-[200px]" />
          <div className="self-stretch text-center justify-start text-white text-[32px] font-medium ">
            Why Choose us?
          </div>
          <div className="self-stretch text-center justify-start text-[#e0e0e0] text-sm font-normal  leading-[25.20px]">
            Advisory runs on trust. Our platform helps you deliver personal
            experiences, build client confidence, and turn complexity into
            lasting growth. With every feature designed for clarity and ease,
            you stay focused on what matters most: your clients.
          </div>
        </div>
      </div>
      {/**------------------------------------------------------------------------------- */}
      <div className="p-4 w-full px-4 py-10 relative bg-white inline-flex flex-col justify-start items-start overflow-hidden">
        <div className="w-[393px] h-[649px] left-0 top-[45.79px] absolute  z-0 overflow-hidden">
          <div className="w-0 h-[365.90px] left-[-10.84px] top-0 absolute outline-[0.68px] outline-offset-[-0.34px] outline-[#e6f0f3]" />
          <div className="w-0 h-[393px] left-[393px] top-[119.79px] absolute origin-top-left rotate-90 outline-[0.68px] outline-offset-[-0.34px] outline-[#e6f0f3]" />
          <div className="w-0 h-[417.39px] left-[417.39px] top-[258.16px] absolute origin-top-left rotate-90 outline-[0.68px] outline-offset-[-0.34px] outline-[#e6f0f3]" />
          <div className="w-0 h-[417.39px] left-[417.39px] top-[189.05px] absolute origin-top-left rotate-90 outline-[0.68px] outline-offset-[-0.34px] outline-[#e6f0f3]" />
          <div className="w-0 h-[417.39px] left-[417.39px] top-[327.27px] absolute origin-top-left rotate-90 outline-[0.68px] outline-offset-[-0.34px] outline-[#e6f0f3]" />
          <div className="w-0 h-[417.39px] left-[417.39px] top-[465.50px] absolute origin-top-left rotate-90 outline-[0.68px] outline-offset-[-0.34px] outline-[#e6f0f3]" />
          <div className="w-0 h-[417.39px] left-[417.39px] top-[534.61px] absolute origin-top-left rotate-90 outline-[0.68px] outline-offset-[-0.34px] outline-[#e6f0f3]" />
          <div className="w-0 h-[417.39px] left-[417.39px] top-[396.39px] absolute origin-top-left rotate-90 outline-[0.68px] outline-offset-[-0.34px] outline-[#e6f0f3]" />
          <div className="w-0 h-[609.83px] left-[138.91px] top-0 absolute outline-[0.68px] outline-offset-[-0.34px] outline-[#e6f0f3]" />
          <div className="w-0 h-[609.83px] left-[69.79px] top-0 absolute outline-[0.68px] outline-offset-[-0.34px] outline-[#e6f0f3]" />
          <div className="w-0 h-[609.83px] left-[208.02px] top-0 absolute outline-[0.68px] outline-offset-[-0.34px] outline-[#e6f0f3]" />
          <div className="w-0 h-[609.83px] left-[346.25px] top-0 absolute outline-[0.68px] outline-offset-[-0.34px] outline-[#e6f0f3]" />
          <div className="w-0 h-[609.83px] left-[277.13px] top-0 absolute outline-[0.68px] outline-offset-[-0.34px] outline-[#e6f0f3]" />
          <div className="size-1 left-[275.50px] top-[117.91px] absolute bg-[#006580] rounded-full" />
          <div className="size-1 left-[136.50px] top-[255.91px] absolute bg-[#006580] rounded-full" />
          <div className="size-1 left-[275.50px] top-[393.91px] absolute bg-[#006580] rounded-full" />
          <div className="size-1 left-[276.50px] top-[256.91px] absolute opacity-0 bg-[#006580] rounded-full" />
          <div className="size-1 left-[137.50px] top-[117.91px] absolute opacity-0 bg-[#338499] rounded-full" />
          <div className="size-1 left-[137.50px] top-[394.91px] absolute opacity-0 bg-[#338499] rounded-full" />
        </div>
        <div className="self-stretch flex flex-col justify-start items-center gap-8 z-10">
          <div className="self-stretch text-center justify-start text-[#006580] text-[32px] font-semibold  leading-[41.60px]">
            Built on trust.
            <br />
            Driven by insight.
            <br />
            Made for you.
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-12">
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
            ].map((dataItem, index) => {
              return (
                <div
                  key={index}
                  className="self-stretch rounded-[10.84px] flex flex-col justify-start items-center"
                >
                  <dataItem.icon />
                  <div className="self-stretch flex flex-col justify-start items-start gap-[2.71px]">
                    <div className="self-stretch text-center justify-start text-[#333333] text-base font-semibold  leading-tight">
                      {dataItem?.title}
                    </div>
                    <div className="self-stretch text-center justify-start text-[#4f4f4f] text-sm font-medium  leading-snug">
                      {dataItem?.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/**------------------------------------------------------------------------------- */}
      <div className="p-4 w-full  px-4 py-10 relative bg-white inline-flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <img className="w-[91px] h-[100px]" src="/security1.svg" />
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-start text-[#006580] text-[32px] font-semibold  leading-[41.60px]">
              Security Built Into Every Layer
            </div>
            <div className="self-stretch justify-start text-[#333333] text-xs font-normal  leading-tight">
              Where regulatory compliance, client trust, and business growth
              align seamlessly through technology.
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-12">
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
                <div
                  key={index}
                  className="w-[269px] rounded-[10.84px] flex flex-col justify-start items-start"
                >
                  <img src="/security1.svg" alt="" height={24} width={24} />
                  <div className="self-stretch flex flex-col justify-start items-center gap-[2.71px]">
                    <div className="self-stretch justify-start text-[#333333] text-base font-semibold  leading-tight">
                      {dataItem.title}
                    </div>
                    <div className="self-stretch justify-start text-[#4f4f4f] text-sm font-medium  leading-snug">
                      {dataItem.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/**------------------------------------------------------------------------------- */}
      <div className="p-4 w-full  py-12 bg-[#111111] inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-white text-base font-medium  leading-normal">
              Gridkey Technologies Private Limited
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch inline-flex justify-center items-center gap-2">
                <div className="size-4 relative overflow-hidden">
                  <div className="w-[11.67px] h-[14.33px] left-[2.17px] top-[0.83px] absolute border-[1.20px] border-[#828282]" />
                </div>
                <div className="flex-1 justify-start text-[#828282] text-sm font-normal  leading-normal">
                  Address
                </div>
              </div>
              <div className="self-stretch justify-start text-[#e0e0e0] text-sm font-normal  leading-normal">
                509, International Finance Center, Fire Station, VIP Road, Vesu,
                Surat, Gujarat 395007
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch inline-flex justify-center items-center gap-2">
                <div className="size-4 relative overflow-hidden">
                  <div className="w-[13.33px] h-[10.67px] left-[1.33px] top-[2.67px] absolute rounded-xs outline-1 outline-offset-[-0.50px] outline-[#828282]" />
                  <div className="w-2 h-[2.73px] left-[4px] top-[5.33px] absolute outline-1 outline-offset-[-0.50px] outline-[#828282]" />
                </div>
                <div className="flex-1 justify-start text-[#828282] text-sm font-normal  leading-normal">
                  Email Id
                </div>
              </div>
              <div className="self-stretch justify-start text-[#e0e0e0] text-sm font-normal  leading-normal">
                info@gridkey.in
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch inline-flex justify-center items-center gap-2">
                <div className="size-4 relative overflow-hidden">
                  <div className="size-[13px] left-[1.51px] top-[1.48px] absolute border-8 border-[#828282]" />
                </div>
                <div className="flex-1 justify-start text-[#828282] text-sm font-normal  leading-normal">
                  Phone No.
                </div>
              </div>
              <div className="self-stretch justify-start text-[#e0e0e0] text-sm font-normal  leading-normal">
                +91 96386 39333
              </div>
            </div>
          </div>
          <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-[#222222]" />
          <div className="self-stretch flex flex-col justify-start items-start gap-[27px]">
            <div className="self-stretch h-4 justify-center text-white text-base font-medium  leading-none tracking-wide">
              Quick Links
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div
                data-color="Primary"
                data-heading-icon="false"
                data-property-1="Default"
                data-tailing-icon="false"
                className="size- inline-flex justify-start items-center gap-1"
              >
                <div className="justify-center text-[#e0e0e0] text-[13px] font-medium  leading-tight">
                  About Us
                </div>
              </div>
              <div
                data-color="Primary"
                data-heading-icon="false"
                data-property-1="Default"
                data-tailing-icon="false"
                className="size- inline-flex justify-start items-center gap-1"
              >
                <div className="justify-center text-[#e0e0e0] text-[13px] font-medium  leading-tight">
                  Terms & Conditions
                </div>
              </div>
              <div
                data-color="Primary"
                data-heading-icon="false"
                data-property-1="Default"
                data-tailing-icon="false"
                className="size- inline-flex justify-start items-center gap-1"
              >
                <div className="justify-center text-[#e0e0e0] text-[13px] font-medium  leading-tight">
                  Privacy Policy
                </div>
              </div>
              <div
                data-color="Primary"
                data-heading-icon="false"
                data-property-1="Default"
                data-tailing-icon="false"
                className="size- inline-flex justify-start items-center gap-1"
              >
                <div className="justify-center text-[#e0e0e0] text-[13px] font-medium  leading-tight">
                  Refund Policy
                </div>
              </div>
              <div
                data-color="Primary"
                data-heading-icon="false"
                data-property-1="Default"
                data-tailing-icon="false"
                className="size- inline-flex justify-start items-center gap-1"
              >
                <div className="justify-center text-[#e0e0e0] text-[13px] font-medium  leading-tight">
                  Disclaimer
                </div>
              </div>
              <div
                data-color="Primary"
                data-heading-icon="false"
                data-property-1="Default"
                data-tailing-icon="false"
                className="size- inline-flex justify-start items-center gap-1"
              >
                <div className="justify-center text-[#e0e0e0] text-[13px] font-medium  leading-tight">
                  Contact Us
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-[#222222]" />
          <div className="self-stretch flex flex-col justify-start items-start gap-14">
            <div className="self-stretch flex flex-col justify-end items-start gap-4">
              <div
                data-helper-text="No"
                data-info-icon="false"
                data-label="false"
                data-show-icon="true"
                data-state="Default"
                className="self-stretch flex flex-col justify-end items-start gap-3"
              >
                <div className="self-stretch px-3 py-3.5 border-b border-[#9aa4b2] inline-flex justify-center items-center gap-2.5">
                  <div
                    data-left-icon="no"
                    data-right-icon="no"
                    className="flex-1 flex justify-start items-center gap-3"
                  >
                    <div
                      data-addons="None"
                      data-text="Placeholder"
                      className="flex-1 flex justify-start items-center gap-1"
                    >
                      <div className="flex-1 justify-start text-[#44484f] text-sm font-medium ">
                        Email Id
                      </div>
                    </div>
                  </div>
                  <div className="size-4 relative overflow-hidden">
                    <div className="w-[13.33px] h-[10.67px] left-[1.33px] top-[2.67px] absolute rounded-xs outline-1 outline-offset-[-0.50px] outline-[#697586]" />
                    <div className="w-2 h-[2.73px] left-[4px] top-[5.33px] absolute outline-1 outline-offset-[-0.50px] outline-[#697586]" />
                  </div>
                </div>
              </div>
              <div
                data-blue-buttons="Default"
                data-button-label="true"
                data-show-heading-icon="false"
                data-show-tailing-icon="true"
                className="self-stretch p-3 bg-linear-52 from-[#006580] via-[#107281] via 40% to-[#4ca485] rounded-sm inline-flex justify-center items-center gap-2 overflow-hidden"
              >
                <div className="justify-start text-white text-xs font-semibold ">
                  Get In Touch
                </div>
                <div className="size-4 relative overflow-hidden">
                  <div className="w-[9.33px] h-0 left-[3.33px] top-[8px] absolute outline-[1.20px] outline-offset-[-0.60px] outline-white" />
                  <div className="w-[4.67px] h-[9.33px] left-[8px] top-[3.33px] absolute outline-[1.20px] outline-offset-[-0.60px] outline-white" />
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-center items-center gap-8">
              <div className="size-6 flex justify-center items-center gap-3 overflow-hidden">
                <div className="w-[10.40px] h-[19px] bg-[#e0e0e0]" />
              </div>
              <div className="size-6 inline-flex flex-col justify-center items-center gap-3">
                <div className="w-[18px] h-[16.31px] bg-[#e0e0e0]" />
              </div>
              <div className="size-6 inline-flex flex-col justify-center items-center gap-3 overflow-hidden">
                <div className="w-[19.06px] h-[18px] bg-[#e0e0e0]" />
              </div>
              <div className="size-6 flex justify-center items-center gap-3">
                <div className="size-5 bg-[#e0e0e0]" />
              </div>
              <div className="size-6 inline-flex flex-col justify-center items-center gap-3">
                <div className="w-6 h-[17.41px] bg-[#e0e0e0]" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch pt-6 border-t border-[#222222] flex flex-col justify-center items-center gap-6">
          <div className="self-stretch text-center justify-start text-[#828282] text-xs font-normal  leading-tight">
            Copyright © 2024 Gridkey Technologies Private Limited.
            <br />
            All rights reserved.
          </div>
        </div>
      </div>
      {/**------------------------------------------------------------------------------- */}
    </div>
  );
};

export default MobileScreen;
