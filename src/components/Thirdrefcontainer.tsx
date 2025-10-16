import { useAppContext } from "@/app/appContent";

const Thirdrefcontainer = () => {
  const { thirdContentRef } = useAppContext();

  return (
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
            Where regulatory compliance, client trust, and business growth align
            seamlessly through technology.
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
      <div className="hidden md:block w-full bg-white relative">GLOBe</div>
    </section>
  );
};

export default Thirdrefcontainer;
