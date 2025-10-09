import BarChartIcon from "../assets/barChart.svg";
import BasketIcon from "../assets/basketWheel.svg";
import DocumentIcon from "../assets/document.svg";
import LineChartIcon from "../assets/lineChart.svg";
import MultiUserIcon from "../assets/multiUsers.svg";
import RupeeIcon from "../assets/rupee.svg";
import SolarShareIcon from "../assets/solarShare.svg";
import UserOnboardIcon from "../assets/userOnboard.svg";
import VerifyCheckIcon from "../assets/verifyCheck.svg";

const Dotcontianer = () => {
  return (
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
  );
};

export default Dotcontianer;
