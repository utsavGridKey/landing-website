import { useAppContext } from "@/app/appContent";
import { optionsData } from "@/app/utils";
import { motion } from "motion/react";
import { useState } from "react";
import DropdownIcon from "../assets/dropdown.svg";

const Perfomancesolution = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { performanceSolutionRef, threeDotDestinationRef } = useAppContext();
  const [selectedOption, setSelectedOption] = useState(
    "Registered Investment Advisor",
  );

  return (
    <div
      ref={performanceSolutionRef}
      className="w-full h-full flex-col flex items-center justify-center absolute gap-4 opacity-0 z-10 px-4"
    >
      <p className="bg-gradient-to-r from-[#006580]  to-[#4CA485] inline-block text-transparent bg-clip-text text-3xl md:text-[64px] font-bold leading-tight text-center">
        One Platform, Many Solutions!
      </p>
      <div className="flex items-center w-full justify-center gap-3 md:gap-6">
        <p className="text-white text-sm md:text-[20px] text-nowrap">
          {`I'M A`}
          <span ref={threeDotDestinationRef} />
        </p>

        <div className="relative min-w-[340px]">
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            data-property-1="Selected"
            className="w-full px-4 py-3 bg-[#111111] rounded-xl  outline-1 outline-offset-[-1px] outline-[#006580] inline-flex justify-start items-center gap-4 "
            aria-haspopup="listbox"
            aria-expanded={openDropdown}
          >
            <div className="flex-1 justify-start text-[#e0e0e0] text-sm font-medium font-['Inter'] uppercase tracking-wider">
              {selectedOption}
            </div>
            <div className="size-5 inline-flex flex-col justify-center items-center gap-2.5">
              <DropdownIcon
                color="#fff"
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
                  className="px-4 py-2 text-sm text-[#e0e0e0] hover:bg-[#222222] hover:text-white cursor-pointer rounded-lg"
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
        .map((opt) => (
          <motion.div
            key={opt.name}
            initial={{ opacity: 0, y: 500 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              minHeight: "calc(100vh - 40%)",
            }}
          >
            <section
              key={opt.name}
              className="flex flex-col md:flex-row items-center w-screen px-6 md:px-20 mt-10 md:mt-20 gap-8 md:gap-0"
            >
              <div className="w-full md:w-1/2 flex justify-center flex-col items-center">
                <div className="self-stretch text-[#ececec] text-2xl md:text-[40px] font-medium leading-[1.3] md:leading-[52px] text-center md:text-left">
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
              <div className="w-full md:w-1/2 flex justify-center items-center ">
                <img src={opt.imgSrc} alt="" className="w-[60%] h-auto" />
              </div>
            </section>
          </motion.div>
        ))}
    </div>
  );
};

export default Perfomancesolution;
