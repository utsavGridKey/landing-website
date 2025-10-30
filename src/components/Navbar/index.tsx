"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = ({ navbarRef }: { navbarRef?: any }) => {
  const { push } = useRouter();

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full px-4 md:px-6 py-3 flex items-center justify-between w-[94%] md:w-[90%] max-w-7xl transition-colors duration-500 gap-8`}
      role="navigation"
      aria-label="Main navigation"
      style={{
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.05)",
        border: `1px solid rgba(255, 255, 255, 0.10)`,
        boxShadow: `0 4px 16px 0 rgba(0, 0, 0, 0.10)`,
      }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          className="hover:cursor-pointer"
          src="/fullLogo.svg"
          alt="fullLogo"
          width={120}
          height={40}
          priority
          onClick={() => {
            push("/");
          }}
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-white relative ml-auto">
        <Link
          style={{
            mixBlendMode: "difference",
          }}
          className=" hover:text-gray-300 cursor-pointer"
          prefetch
          href={"/aboutus"}
        >
          About Us
        </Link>
        <Link
          href={"/contactus"}
          style={{
            mixBlendMode: "difference",
          }}
          className="hover:text-gray-300 cursor-pointer"
        >
          Contact Us
        </Link>
      </ul>

      {/* Desktop Sign In Button */}
      <button
        className="hidden md:flex px-4 py-3 gap-2 rounded-full text-white items-center hover:opacity-90 transition"
        style={{
          background: `linear-gradient(142deg, #006580 14.86%, #107281 71.32%, #4CA485 156.01%)`,
        }}
      >
        Sign In
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M3.33325 8.5H12.6666"
            stroke="#F6F8F9"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 3.83301L12.6667 8.49967L8 13.1663"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
