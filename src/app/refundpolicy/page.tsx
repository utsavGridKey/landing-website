const RefundPolicy = () => {
  return (
    <div className="py-24 bg-[#111] flex items-center justify-center flex-col">
      <div className="flex justify-center flex-col items-center  py-24 bg-[#111] gap-6">
        <p className="self-stretch text-center justify-start text-3xl font-normal font-['Inter'] leading-10 text-white">
          Terms & Conditions
        </p>
        <p className="max-w-[784px]  self-stretch  text-grey-300  my-6">
          At Gridkey Technologies, we stand by the quality of our
          products/services and want you to be fully satisfied with your
          purchase. We offer a 30-day money-back guarantee from the date of
          purchase. If you are not completely satisfied with our services, you
          may request a full refund within this period. To initiate a refund,
          please contact us at info@gridkey.in. Refunds are not available after
          30 days from the purchase date.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
