const Disclaimer = () => {
  return (
    <div className="py-24 bg-[#111] flex items-center justify-center flex-col w-screen normal-gradient-bg">
      <div className="flex justify-center flex-col items-center  py-24  gap-6">
        <p className="self-stretch text-center justify-start text-3xl font-normal font-['Inter'] leading-10 text-white">
          Disclaimer
        </p>
        <p className="max-w-[784px]  self-stretch  text-grey-300  my-6">
          We are not SEBI-registered Research Analysts (RA) or Investment
          Advisers (RIA). Our role is solely as a technology and software
          solutions provider. We do not solicit investments, provide financial
          advice, or recommend any investment products or strategies in any
          manner. Users are advised to consult with their financial advisors or
          other professionals before making any investment decisions.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
