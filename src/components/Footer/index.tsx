import FooterGrid from "./FooterGrid";

const Footer = () => {
  return (
    <div className="w-screen">
      <div className="relative gap-5  w-full flex flex-col items-center justify-center overflow-hidden  border bg-[#163F4A] min-h-[450px]">
        <p className="text-center justify-center text-white text-5xl font-medium font-['Inter']">
          Book a Discovery Call
        </p>{" "}
        <p className="self-stretch text-center justify-center text-[#d5dee5] text-base font-normal font-['Inter'] leading-[27px]">
          See where automation can take your wealth advisory business
        </p>
        <div className="flex flex-row items-center justify-center gap-5">
          <button className="cursor-pointer z-20">
            <div
              data-property-1="Default"
              className="w-40 px-6 py-4 rounded-sm  outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2 overflow-hidden"
            >
              <div className="justify-start text-white text-sm font-medium font-['Inter']">
                Request a Demo
              </div>
            </div>
          </button>
          <button className="cursor-pointer z-20">
            <div
              data-button-label="true"
              data-show-heading-icon="false"
              data-show-tailing-icon="true"
              data-white-button="Default"
              className="w-40 px-6 py-4 bg-white rounded-sm outline outline-offset-[-1px] outline-[#d5dee5] inline-flex justify-center items-center gap-2 overflow-hidden"
            >
              <div className="justify-start text-[#163f4a] text-sm font-medium font-['Inter']">
                Get Started
              </div>
            </div>
          </button>
          <FooterGrid />
        </div>
      </div>
      <div className="w-full px-[124px] py-[60px] bg-[#131313] inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
        <div className="self-stretch inline-flex justify-between items-start">
          <div className="w-[450px] inline-flex flex-col justify-start items-start gap-8">
            <div className="self-stretch justify-start text-white text-base font-medium font-['Inter'] leading-normal">
              Gridkey Technologies Private Limited
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch inline-flex justify-center items-center gap-2">
                <div className="size-4 relative overflow-hidden">
                  <div className="w-[11.67px] h-[14.33px] left-[2.17px] top-[0.83px] absolute border-[1.20px] border-[#828282]" />
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
                  <div className="w-[13.33px] h-[10.67px] left-[1.33px] top-[2.67px] absolute rounded-xs outline outline-offset-[-0.50px] outline-[#828282]" />
                  <div className="w-2 h-[2.73px] left-[4px] top-[5.33px] absolute outline outline-offset-[-0.50px] outline-[#828282]" />
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
                  <div className="size-[13px] left-[1.51px] top-[1.49px] absolute border-8 border-[#828282]" />
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
                <div
                  data-color="Primary"
                  data-heading-icon="false"
                  data-property-1="Default"
                  data-tailing-icon="false"
                  className="size- inline-flex justify-start items-center gap-1"
                >
                  <div className="justify-center text-[#e0e0e0] text-[13px] font-medium font-['Inter'] leading-tight">
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
                  <div className="justify-center text-[#e0e0e0] text-[13px] font-medium font-['Inter'] leading-tight">
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
                  <div className="justify-center text-[#e0e0e0] text-[13px] font-medium font-['Inter'] leading-tight">
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
                  <div className="justify-center text-[#e0e0e0] text-[13px] font-medium font-['Inter'] leading-tight">
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
                  <div className="justify-center text-[#e0e0e0] text-[13px] font-medium font-['Inter'] leading-tight">
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
                  <div className="justify-center text-[#e0e0e0] text-[13px] font-medium font-['Inter'] leading-tight">
                    Contact Us
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[416px] self-stretch inline-flex flex-col justify-start items-start gap-14">
            <div className="self-stretch inline-flex justify-start items-end gap-4">
              <div
                data-helper-text="No"
                data-info-icon="false"
                data-label="false"
                data-show-icon="true"
                data-state="Default"
                className="flex-1 inline-flex flex-col justify-end items-start gap-3"
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
                      <div className="flex-1 justify-start text-[#44484f] text-sm font-medium font-['Inter']">
                        Email Id
                      </div>
                    </div>
                  </div>
                  <div className="size-4 relative overflow-hidden">
                    <div className="w-[13.33px] h-[10.67px] left-[1.33px] top-[2.67px] absolute rounded-xs outline outline-offset-[-0.50px] outline-[#697586]" />
                    <div className="w-2 h-[2.73px] left-[4px] top-[5.33px] absolute outline outline-offset-[-0.50px] outline-[#697586]" />
                  </div>
                </div>
              </div>
              <div
                data-blue-buttons="Default"
                data-button-label="true"
                data-show-heading-icon="false"
                data-show-tailing-icon="true"
                className="size- p-3 bg-linear-52 from-[#006580] via-[#107281] via 40% to-[#4ca485] rounded-sm flex justify-center items-center gap-2 overflow-hidden"
              >
                <div className="justify-start text-white text-xs font-semibold font-['Inter']">
                  Get In Touch
                </div>
                <div className="size-4 relative overflow-hidden">
                  <div className="w-[9.33px] h-0 left-[3.33px] top-[8px] absolute outline outline-offset-[-0.60px] outline-white" />
                  <div className="w-[4.67px] h-[9.33px] left-[8px] top-[3.33px] absolute outline outline-offset-[-0.60px] outline-white" />
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-8">
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
