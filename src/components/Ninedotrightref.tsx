import { useAppContext } from "@/app/appContent";

const Ninedotrightref = () => {
  const { nineDotsRightRef } = useAppContext();
  return (
    <div
      ref={nineDotsRightRef}
      className="h-full w-1/2 flex items-center justify-center absolute opacity-0 right-0 top-1/2 -translate-y-1/2 px-4  linear-gradient-bg"
    >
      <div className="flex flex-col w-full md:w-[90%] gap-4 rounded-full ">
        <div className="border border-grey-700  rounded-[8px] p-2 w-fit">
          <p className="text-grey-500 uppercase text-">Financial assets</p>
        </div>
        <p className="bg-gradient-to-r from-[#006580] via-[#107281] to-[#4CA485] inline-block text-transparent bg-clip-text text-[48px] leading-tight">
          Integrated Holistic Portfolio Management Starts Here
        </p>
        <div>
          <p className="text-grey-500 text-base md:text-2xl">
            Our intuitive app simplifies tracking and managing diverse financial
            assets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ninedotrightref;
