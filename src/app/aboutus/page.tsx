"use client";
import Footer from "@/components/Footer";
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
          <video autoPlay loop muted playsInline className="w-full h-auto">
            <source src="/aboutus.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-[988px] inline-flex justify-start items-center gap-10">
          <img className="flex-1 h-[300px] rounded-lg" src="visionBehind.svg" />
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
          <img className="flex-1 h-[300px] rounded-lg" src="buildGridkey.svg" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
