"use client";

export default function AboutUs() {
  return (
    <div className="bg-[#111111] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 normal-gradient-bg w-screen">
      <div className="w-full pt-24 pb-16 md:pt-[150px] md:pb-[100px] flex flex-col justify-start items-center gap-16 md:gap-20">
        {/* Section 1 */}
        <div className="w-full max-w-[988px] flex flex-col justify-start items-center gap-6 md:gap-8">
          <div className="text-center flex flex-col justify-start items-center gap-3 md:gap-4">
            <h1 className="text-white text-3xl sm:text-4xl md:text-[40px] font-normal font-['Inter'] leading-snug md:leading-[52px]">
              Revolutionizing Wealth Management
            </h1>
            <p className="text-[#bdbdbd] text-sm sm:text-base md:text-lg font-normal font-['Inter'] leading-relaxed md:leading-[25.20px]">
              {`At Gridkey, we simplify wealth management. Our mission is to
              empower businesses and individuals to make smarter financial
              choices. With a focus on innovation and integrity, we've developed
              products that transform wealth management. Founded by finance
              enthusiasts and tech experts, our team combines extensive
              experience in finance, technology, and business development.`}
            </p>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg"
          >
            <source src="/aboutus.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Section 2 - Our Story */}
        <div className="w-full max-w-[988px] flex flex-col md:flex-row justify-start items-center gap-8 md:gap-10">
          <img
            className="w-full md:w-1/2 h-[220px] sm:h-[260px] md:h-[300px] rounded-lg object-cover"
            src="visionBehind.svg"
            alt="Vision Behind"
          />
          <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start gap-3 md:gap-4">
            <h2 className="text-white text-2xl sm:text-3xl md:text-[32px] font-normal font-['Inter'] leading-tight md:leading-[41.60px] text-center md:text-left">
              Our Story
            </h2>
            <p className="text-[#bdbdbd] text-sm sm:text-base md:text-lg font-normal font-['Inter'] leading-relaxed md:leading-[25.20px] text-center md:text-left">
              Gridkey was founded to solve a clear problem in wealth management.
              Advisors needed one reliable platform to track and manage
              multi-asset portfolios across multiple clients and families.
              <br />
              The tools available were slow, fragmented, and unable to match the
              pace of modern finance. Gridkey was built to change that.
              <br />
              Our platform streamlines operations, empowers advisors with
              control, and delivers a seamless experience for clients. What
              began as a gap in the industry has become our mission: making
              wealth management simpler, smarter, and built for growth.
            </p>
          </div>
        </div>

        {/* Section 3 - Our Mission */}
        <div className="w-full max-w-[988px] flex flex-col md:flex-row-reverse justify-start items-center gap-8 md:gap-10">
          <img
            className="w-full md:w-1/2 h-[220px] sm:h-[260px] md:h-[300px] rounded-lg object-cover"
            src="buildGridkey.svg"
            alt="Build Gridkey"
          />
          <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start gap-3 md:gap-4">
            <h2 className="text-white text-2xl sm:text-3xl md:text-[32px] font-normal font-['Inter'] leading-tight md:leading-[41.60px] text-center md:text-left">
              Our Mission
            </h2>
            <p className="text-[#bdbdbd] text-sm sm:text-base md:text-lg font-normal font-['Inter'] leading-relaxed md:leading-[25.20px] text-center md:text-left">
              At Gridkey, our mission is to revolutionize wealth management by
              providing intuitive, data-driven solutions that empower advisors
              and investors to achieve their financial goals. We are committed
              to delivering cutting-edge technology, unparalleled support, and
              actionable insights to our users, helping them navigate the
              complexities of the financial world with confidence and ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
