import { useAppContext } from "@/app/appContent";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import SolarShareIcon from "../assets/solarShare.svg";

const Secondrefcontainer = () => {
  const { secondContentRef, toolsRef } = useAppContext();

  return (
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
          <div ref={toolsRef} className="p-6 h-full w-full flex flex-col gap-4">
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
  );
};

export default Secondrefcontainer;
