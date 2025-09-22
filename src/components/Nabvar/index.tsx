"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function FloatingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolledIntoSecond, setScrolledIntoSecond] = useState(false);

  const secondContentRef = useRef<any>(null);

  useEffect(() => {
    const section = document.getElementById("secondContentRef");
    if (!section) return;

    secondContentRef.current = section;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setScrolledIntoSecond(entry.isIntersecting);
        });
      },
      { threshold: 1 },
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full px-6 py-3 flex items-center justify-between w-[90%] max-w-7xl transition-colors duration-500`}
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
          src="/fullLogo.svg"
          alt="fullLogo"
          width={120}
          height={40}
          priority
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-white relative">
        <li
          className="hover:text-gray-300 cursor-pointer relative group"
          style={{
            color: !scrolledIntoSecond ? "black" : "white",
          }}
        >
          Our Products
          {/* Dropdown */}
          <ul className="absolute top-full left-0 mt-2 w-48 bg-white/90 text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Product 1
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Product 2
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Product 3
            </li>
          </ul>
        </li>
        <li
          style={{
            color: !scrolledIntoSecond ? "black" : "white",
          }}
          className=" hover:text-gray-300 cursor-pointer"
        >
          About Us
        </li>
        <li
          style={{
            color: !scrolledIntoSecond ? "black" : "white",
          }}
          className="hover:text-gray-300 cursor-pointer"
        >
          Contact Us
        </li>
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

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden flex flex-col gap-1 ml-4"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white/90 backdrop-blur-md shadow-lg rounded-lg p-4 w-64 flex flex-col gap-4 md:hidden">
          <div>
            <button
              className="flex justify-between items-center w-full text-left text-black font-medium"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Our Products
              <span>{productsOpen ? "▲" : "▼"}</span>
            </button>
            {productsOpen && (
              <ul className="mt-2 flex flex-col gap-2 pl-2 text-gray-700">
                <li className="hover:text-black cursor-pointer ">Product 1</li>
                <li className="hover:text-black cursor-pointer">Product 2</li>
                <li className="hover:text-black cursor-pointer">Product 3</li>
              </ul>
            )}
          </div>
          <button className="text-black text-left">About Us</button>
          <button className="text-black text-left">Contact Us</button>
          <button
            className="px-4 py-3 rounded-full text-white flex items-center justify-center"
            style={{
              background: `linear-gradient(142deg, #006580 14.86%, #107281 71.32%, #4CA485 156.01%)`,
            }}
          >
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}
