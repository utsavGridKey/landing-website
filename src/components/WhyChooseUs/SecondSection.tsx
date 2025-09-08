const SecondSection = ({ secondTextRef }: { secondTextRef: any }) => {
  return (
    <div
      ref={secondTextRef}
      className="w-full h-full absolute top-0 flex justify-center items-center "
    >
      <div className="flex flex-row w-full h-full">
        {/* Left section with text */}
        <div className="w-1/2 flex items-center justify-center p-12">
          <p className="bg-[linear-gradient(142deg,#006580_3.91%,#107281_47.82%,#4CA485_113.7%)] bg-clip-text text-transparent text-6xl font-bold">
            Built for trust. Designed for growth. Focused on you.
          </p>
        </div>

        {/* Right section with grid background */}
        <div className="w-1/2 relative over">
          <div className="gap-4 p-6 h-full w-full flex flex-col ">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-amber-100 bg-opacity-50 rounded-md transition-all hover:bg-opacity-100 hover:shadow-md min-h-1/4"
              >
                <p className="text-black text-sm font-medium">
                  Item {index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
