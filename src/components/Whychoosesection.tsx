import { useAppContext } from "@/app/appContent";

const Whychoosesection = () => {
  const { whyChooseSectionRef, chooseORef } = useAppContext();

  return (
    <section
      ref={whyChooseSectionRef}
      className="absolute flex-col gap-4 w-full top-0 flex justify-center items-center opacity-0 h-full px-4"
      style={{
        background:
          "radial-gradient(circle,rgba(0, 35, 43, 0.8) 0%, rgba(0, 0, 0, 1) 50%)",
      }}
    >
      <p
        ref={chooseORef}
        className="text-center justify-start text-3xl md:text-[55.04px] text-white font-medium font-['Inter']"
      >
        Why Choose us?
      </p>
      <p className="w-full max-w-[703.78px] px-2 md:px-0 text-center justify-start text-sm md:text-base text-white font-normal font-['Inter'] leading-6 md:leading-7">
        Advisory runs on trust. Our platform helps you deliver personal
        experiences, build client confidence, and turn complexity into lasting
        growth. With every feature designed for clarity and ease, you stay
        focused on what matters most: your clients.
      </p>
    </section>
  );
};

export default Whychoosesection;
