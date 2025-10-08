"use client";
import Navbar from "@/components/Navbar";

export default function AboutUs() {
  return (
    <div className="bg-[#111111] flex flex-col justify-center items-center">
      <Navbar />
      <div className="self-stretch pt-[150px] pb-[100px] relative bg-[#111111] inline-flex flex-col justify-start items-center gap-20">
        <div className="w-[988px] flex flex-col justify-start items-center gap-8">
          <div className="self-stretch flex flex-col justify-start items-center gap-4">
            <div className="self-stretch text-center justify-start text-white text-[40px] font-normal font-['Inter'] leading-[52px]">
              Revolutionizing Wealth Management
            </div>
            <div className="self-stretch text-center justify-start text-[#bdbdbd] text-sm font-normal font-['Inter'] leading-[25.20px]">
              {`At Gridkey, we simplify wealth management. Our mission is to
              empower businesses and individuals to make smarter financial
              choices. With a focus on innovation and integrity, we've developed
              products that transform wealth management. Founded by finance
              enthusiasts and tech experts, our team combines extensive
              experience in finance, technology, and business development.`}
            </div>
          </div>
          <img
            className="self-stretch h-[499px] rounded-lg"
            src="https://placehold.co/988x499"
          />
        </div>
        <div className="w-[988px] inline-flex justify-start items-center gap-10">
          <img
            className="flex-1 h-[300px] rounded-lg"
            src="https://placehold.co/474x300"
          />
          <div className="flex-1 inline-flex flex-col justify-start items-center gap-4">
            <div className="self-stretch justify-start text-white text-[32px] font-normal font-['Inter'] leading-[41.60px]">
              Our Story
            </div>
            <div className="self-stretch justify-start text-[#bdbdbd] text-sm font-normal font-['Inter'] leading-[25.20px]">
              {`At Gridkey, we simplify wealth management. Our mission is to
              empower businesses and individuals to make smarter financial
              choices. With a focus on innovation and integrity, we've developed
              products that transform wealth management. Founded by finance
              enthusiasts and tech experts, our team combines extensive
              experience in finance, technology, and business development.`}
            </div>
          </div>
        </div>
        <div className="w-[988px] inline-flex justify-start items-center gap-10">
          <div className="flex-1 inline-flex flex-col justify-start items-center gap-4">
            <div className="self-stretch justify-start text-white text-[32px] font-normal font-['Inter'] leading-[41.60px]">
              Our Mission
            </div>
            <div className="self-stretch justify-start text-[#bdbdbd] text-sm font-normal font-['Inter'] leading-[25.20px]">
              At Gridkey, our mission is to revolutionize wealth management
              <br />
              by providing intuitive, data-driven solutions that empower
              <br />
              advisors and investors to achieve their financial goals.
              <br />
              We are committed to delivering cutting-edge technology,
              <br />
              unparalleled support, and actionable insights to our users,
              <br />
              helping them navigate the complexities of the financial world
              <br />
              with confidence and ease.
            </div>
          </div>
          <img
            className="flex-1 h-[300px] rounded-lg"
            src="https://placehold.co/474x300"
          />
        </div>
      </div>
      <div className="w-full py-20 bg-[#222222] inline-flex flex-col justify-start items-center gap-10 overflow-hidden">
        <div className="w-[768px] flex flex-col justify-start items-center gap-2">
          <div className="self-stretch text-center justify-start text-[#e0e0e0] text-[32px] font-medium font-['Inter'] tracking-tight">
            The People Behind the Mission
          </div>
          <div className="self-stretch text-center justify-start text-[#828282] text-sm font-medium font-['Inter'] leading-[21px] tracking-tight">
            Founders with a passion for finance, technology, and advisor
            success.
          </div>
        </div>
        <div className="w-[988px] inline-flex justify-between items-center">
          <div
            data-property-1="Default"
            className="w-[274px] inline-flex flex-col justify-center items-start gap-4"
          >
            <div className="self-stretch h-[350px] rounded-lg inline-flex justify-start items-center gap-2 overflow-hidden">
              <img
                className="flex-1 self-stretch mix-blend-luminosity"
                src="https://placehold.co/274x350"
              />
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-1">
              <div className="justify-start text-[#bdbdbd] text-xl font-medium font-['Inter']">
                Ritesh Lahoti
              </div>
              <div className="justify-start text-[#828282] text-xs font-normal font-['Inter'] leading-tight">
                Ex-NIMMS|10+ years in startups & strategy
              </div>
            </div>
          </div>
          <div
            data-property-1="Default"
            className="w-[274px] inline-flex flex-col justify-center items-start gap-4"
          >
            <div className="self-stretch h-[350px] rounded-lg inline-flex justify-start items-center gap-2 overflow-hidden">
              <img
                className="flex-1 self-stretch mix-blend-luminosity"
                src="https://placehold.co/274x350"
              />
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-1">
              <div className="justify-start text-[#bdbdbd] text-xl font-medium font-['Inter']">
                Piyush Sarawagi
              </div>
              <div className="justify-start text-[#828282] text-xs font-normal font-['Inter'] leading-tight">
                CFA|SEBI registered RIA 8+ years in finance{" "}
              </div>
            </div>
          </div>
          <div
            data-property-1="Default"
            className="w-[274px] inline-flex flex-col justify-center items-start gap-4"
          >
            <div className="self-stretch h-[350px] rounded-lg inline-flex justify-start items-center gap-2 overflow-hidden">
              <img
                className="flex-1 self-stretch mix-blend-luminosity"
                src="https://placehold.co/274x350"
              />
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-1">
              <div className="justify-start text-[#bdbdbd] text-xl font-medium font-['Inter']">
                Deep Jethloja
              </div>
              <div className="justify-start text-[#828282] text-xs font-normal font-['Inter'] leading-tight">
                IIT Roorkee|Ex-PhonePe 4+ years in tech
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
