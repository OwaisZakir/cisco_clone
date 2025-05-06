"use client";

import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaAngleRight } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navbarRef = useRef(null);

  const navLinks = [
    { label: "Products and Services", href: "#products" },
    { label: "Solutions", href: "#solutions" },
    { label: "Support", href: "#support" },
    { label: "Learn", href: "#learn" },
  ];

  // Animate navbar on mount
  useGSAP(() => {
    if (typeof window !== "undefined" && navbarRef.current) {
      gsap.from(navbarRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, []);

  // Close mobile menu on route change or Escape key

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      ref={navbarRef}
      className="w-full bg-white shadow-sm font-sans z-50 relative "
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4 sm:gap-6">
          <img
            src="/assets/logo/cisco-logo.svg"
            alt="Cisco"
            className="h-8 lg:h-12  w-auto object-contain"
          />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10 text-[16px] font-semibold text-gray-900">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`hover:text-blue-600 transition ${
                  pathname === link.href ? "text-blue-600" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button className="hidden lg:block text-[14px] sm:text-[15px] font-semibold text-blue-600 border border-blue-600 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 hover:bg-blue-50 transition">
            Trials and demos
          </button>
          <div className="flex items-center gap-1 sm:gap-3 text-gray-700 hover:text-black cursor-pointer transition text-sm sm:text-base">
            <span className=" lg:hidden font-semibold text-[1rem] mr-4">
              Log in
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 text-gray-700 hover:text-black cursor-pointer transition text-sm sm:text-base">
            <span className="hidden sm:inline">Search</span>
            <FiSearch className="text-[18px] sm:text-[20px]" />
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-[2.5rem] text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden container mx-auto border-t-1">
          <nav className="flex flex-col  gap-7 mt-4 text-[17px] font-medium text-gray-800">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={handleLinkClick}
                className="hover:text-blue-600 transition px-4"
              >
                <div className="flex justify-between items-center">
                  <span>{link.label}</span>
                  <span>
                    <FaAngleRight />
                  </span>
                </div>
              </a>
            ))}
            <div className="flex px-5">
              <button className=" text-[14px] sm:text-[15px] font-semibold text-blue-600 border border-blue-600 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 hover:bg-blue-50 transition">
                Trials and demos
              </button>
            </div>
            <div className="flex flex-col  gap-4 text-gray-700 hover:text-black cursor-pointer transition text-md sm:text-base">
              {[
                "How to buy",
                "Partner",
                { label: "EN US", icon: <TfiWorld /> },
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="border-t-1 pt-3 border-gray-500"
                >
                  {typeof item === "string" ? (
                    <span className="font-semibold px-4">{item}</span>
                  ) : (
                    <span className="flex items-center px-4 gap-1 pb-2">
                      {item.icon}
                      {item.label}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
