const ContactUs = () => {
  return (
    <div className="py-24 w-screen bg-[#111] flex items-center justify-center flex-col normal-gradient-bg">
      <div className="max-w-[786px] flex justify-center flex-col items-center  py-8  gap-6">
        <div className=" inline-flex flex-col justify-start items-start gap-10">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-white text-3xl font-normal font-['Inter'] leading-10 ">
              Have questions?
              <br />
              We’re here to help you!
            </div>
            <div className="self-stretch justify-start text-grey-300 text-sm font-normal font-['Inter'] leading-6">
              Get help with pricing and plans, schedule a demo, explore
              use-cases for your team, and more.
            </div>
          </div>
          <div className="self-stretch p-6 bg-black rounded-2xl  outline-1 outline-offset-[-1px] outline-black-900 backdrop-blur-[50px] flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-start text-white text-base font-medium font-['Inter'] leading-6">
              Contact Details
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch inline-flex justify-center items-center gap-2">
                <img src={"/address.svg"} alt="" />
                <div className="flex-1 justify-start text-grey-500 text-sm font-normal font-['Inter'] leading-6">
                  Address
                </div>
              </div>
              <div className="self-stretch justify-start text-grey-100 text-sm font-normal font-['Inter'] leading-6">
                509, International Finance Center, Fire Station, VIP Road, Vesu,
                Surat, Gujarat 395007
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch inline-flex justify-center items-center gap-2">
                <img src={"/email.svg"} alt="" />
                <div className="flex-1 justify-start text-grey-500 text-sm font-normal font-['Inter'] leading-6">
                  Email Id
                </div>
              </div>
              <div className="self-stretch justify-start text-grey-100 text-sm font-normal font-['Inter'] leading-6">
                info@gridkey.in
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch inline-flex justify-center items-center gap-2">
                <img src={"/phone.svg"} alt="" />
                <div className="flex-1 justify-start text-grey-500 text-sm font-normal font-['Inter'] leading-6">
                  Phone No.
                </div>
              </div>
              <div className="self-stretch justify-start text-grey-100 text-sm font-normal font-['Inter'] leading-6">
                +91 96386 39333
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-8">
              <button className="w-6 h-6 inline-flex flex-col justify-center items-center gap-3 cursor-pointer">
                <img src={"/twitter.svg"} alt="" />
              </button>
              <button className="w-6 h-6 inline-flex flex-col justify-center items-center gap-3 overflow-hidden cursor-pointer">
                <img src={"/linkedIn.svg"} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
