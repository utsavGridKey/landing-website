import Link from "next/link";
import FooterGrid from "./FooterGrid";

const Footer = () => {
  return (
    <div className="w-screen">
      <div className="relative gap-5  w-full flex flex-col items-center justify-center overflow-hidden   bg-[#163F4A] min-h-[350px] md:min-h-[450px]">
        <p className="text-center justify-center text-white font-medium font-['Inter'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Book a Discovery Call
        </p>

        <p className="self-stretch text-center justify-center text-[#d5dee5] text-base font-normal font-['Inter'] leading-[27px]">
          See where automation can take your wealth advisory business
        </p>
        <div className="flex flex-row items-center justify-center gap-5">
          <button className="cursor-pointer z-20">
            <Link
              href="https://calendly.com/gridkey/introduction-to-gridkey-platform?month=2024-01"
              target="_blank"
              className="w-40 border-white border-1 px-6 py-4 rounded-sm  outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2 overflow-hidden"
            >
              <div className="justify-start text-white  text-sm font-medium font-['Inter']">
                Request a Demo
              </div>
            </Link>
          </button>
          <button className="cursor-pointer z-20">
            <Link
              href="https://gridkey.in/app/dashboard"
              className="w-40 px-6 py-4 bg-white rounded-sm outline outline-offset-[-1px] outline-[#d5dee5] inline-flex justify-center items-center gap-2 overflow-hidden"
            >
              <div className="justify-start text-[#163f4a] text-sm font-medium font-['Inter']">
                Get Started
              </div>
            </Link>
          </button>
          <FooterGrid />
        </div>
      </div>
      <div className="w-full px-[124px] py-[60px] bg-[#131313] inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
        <div className="self-stretch inline-flex justify-center items-start gap-8 flex-col md:flex-row">
          <div className="inline-flex flex-col justify-start items-start gap-8">
            <div className="self-stretch justify-start text-white text-base font-medium font-['Inter'] leading-normal">
              Gridkey Technologies Private Limited
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch inline-flex justify-center items-center gap-2">
                <div className="size-4 relative overflow-hidden">
                  <img src={"/address.svg"} alt="" />
                </div>
                <div className="flex-1 justify-start text-[#828282] text-sm font-normal font-['Inter'] leading-normal">
                  Address
                </div>
              </div>
              <div className="self-stretch justify-start text-[#e0e0e0] text-sm font-normal font-['Inter'] leading-normal">
                509, International Finance Center, Fire Station, VIP Road, Vesu,
                Surat, Gujarat 395007
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch inline-flex justify-center items-center gap-2">
                <div className="size-4 relative overflow-hidden">
                  <img src={"/email.svg"} alt="" />
                </div>
                <div className="flex-1 justify-start text-[#828282] text-sm font-normal font-['Inter'] leading-normal">
                  Email Id
                </div>
              </div>
              <div className="self-stretch justify-start text-[#e0e0e0] text-sm font-normal font-['Inter'] leading-normal">
                info@gridkey.in
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch inline-flex justify-center items-center gap-2">
                <div className="size-4 relative overflow-hidden">
                  <img src={"/phone.svg"} alt="" />
                </div>
                <div className="flex-1 justify-start text-[#828282] text-sm font-normal font-['Inter'] leading-normal">
                  Phone No.
                </div>
              </div>
              <div className="self-stretch justify-start text-[#e0e0e0] text-sm font-normal font-['Inter'] leading-normal">
                +91 96386 39333
              </div>
            </div>
          </div>
          <div className="size- flex justify-start items-start gap-[60px]">
            <div className="w-[200px] inline-flex flex-col justify-start items-start gap-[27px]">
              <div className="self-stretch h-4 justify-center text-white text-base font-medium font-['Inter'] leading-none tracking-wide">
                Quick Links
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <Link
                  href={"/aboutus"}
                  data-color="Primary"
                  data-heading-icon="false"
                  data-property-1="Default"
                  data-tailing-icon="false"
                  className="size- inline-flex justify-start items-center gap-1"
                >
                  <div className="justify-center text-[#e0e0e0] text-[13px] font-medium font-['Inter'] leading-tight">
                    About Us
                  </div>
                </Link>
                <Link
                  href={"/term&condition"}
                  data-color="Primary"
                  data-heading-icon="false"
                  data-property-1="Default"
                  data-tailing-icon="false"
                  className="size- inline-flex justify-start items-center gap-1"
                >
                  <div className="justify-center text-[#e0e0e0] text-[13px] font-medium font-['Inter'] leading-tight">
                    Terms & Conditions
                  </div>
                </Link>
                <Link
                  href={"/privacypolicy"}
                  data-color="Primary"
                  data-heading-icon="false"
                  data-property-1="Default"
                  data-tailing-icon="false"
                  className="size- inline-flex justify-start items-center gap-1"
                >
                  <div className="justify-center text-[#e0e0e0] text-[13px] font-medium font-['Inter'] leading-tight">
                    Privacy Policy
                  </div>
                </Link>
                <Link
                  href={"/refundpolicy"}
                  data-color="Primary"
                  data-heading-icon="false"
                  data-property-1="Default"
                  data-tailing-icon="false"
                  className="size- inline-flex justify-start items-center gap-1"
                >
                  <div className="justify-center text-[#e0e0e0] text-[13px] font-medium font-['Inter'] leading-tight">
                    Refund Policy
                  </div>
                </Link>
                <Link
                  href={"/disclaimer"}
                  data-color="Primary"
                  data-heading-icon="false"
                  data-property-1="Default"
                  data-tailing-icon="false"
                  className="size- inline-flex justify-start items-center gap-1"
                >
                  <div className="justify-center text-[#e0e0e0] text-[13px] font-medium font-['Inter'] leading-tight">
                    Disclaimer
                  </div>
                </Link>
                <Link
                  href={"/contactus"}
                  data-color="Primary"
                  data-heading-icon="false"
                  data-property-1="Default"
                  data-tailing-icon="false"
                  className="size- inline-flex justify-start items-center gap-1"
                >
                  <div className="justify-center text-[#e0e0e0] text-[13px] font-medium font-['Inter'] leading-tight">
                    Contact Us
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch pt-6 border-t border-[#222222] flex flex-col justify-center items-center gap-6">
          <div className="text-right justify-start text-[#828282] text-xs font-normal font-['Inter']">
            Copyright © 2024 Gridkey Technologies Private Limited. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
