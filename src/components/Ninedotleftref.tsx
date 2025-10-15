import { useAppContext } from "@/app/appContent";

const Ninedotleftref = () => {
  const { nineDotsLeftRef } = useAppContext();

  return (
    <div
      ref={nineDotsLeftRef}
      className="w-full md:w-1/2 flex items-center justify-center absolute opacity-0 top-1/2 -translate-y-1/2 px-4"
    >
      <div
        className="flex flex-col w-full md:w-[80%] gap-4 rounded-full bg-[#000f13]"
        style={{
          boxShadow: "0 0 1000px 200px #000f13",
        }}
      >
        <div className="border border-grey-700  rounded-[8px] p-2 w-fit">
          <p className="text-grey-500 uppercase text-">tech tools</p>
        </div>
        <p className="bg-gradient-to-r from-[#006580] via-[#107281] to-[#4CA485] inline-block text-transparent bg-clip-text text-[48px] leading-tight">
          Your Back-Office, Mid-Office & Front-Office, Digitized.{" "}
        </p>
        <div>
          <p className="text-grey-500 text-base md:text-2xl">
            Your clients don’t invest in silos, why should your tools?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ninedotleftref;
