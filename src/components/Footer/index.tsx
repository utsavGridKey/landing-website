import FooterGrid from "./FooterGrid";

const Footer = () => {
  return (
    <div className="relative  w-full flex flex-col items-center justify-center overflow-hidden  border bg-[#163F4A] min-h-[450px]">
      <FooterGrid />
      <p className="text-4xl text-white">Start your free trial today</p>
      <p className="text-white">
        Put your marketing on autopilot and focus on scaling. We’ll do all the
        heavy lifting for your while you grow your business.
      </p>
      <div>
        <button>Request Demo</button>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Footer;
