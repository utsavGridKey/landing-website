import { useAppContext } from "@/app/appContent";
import { Globe } from "./magicui/globe";

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
  );
};

export default Thirdrefcontainer;
