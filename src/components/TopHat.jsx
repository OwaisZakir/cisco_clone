"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FiUser } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";

const items = [
  {
    label: "How to buy",
    href: "https://www.cisco.com/c/en/us/buy.html",
    type: "link",
  },
  {
    label: "Partners",
    type: "button",
    onClick: () => alert("Partners clicked"),
  },
  {
    label: "Log in",
    href: "/content/cdc/login.html?referer=/",
    type: "link",
    icon: <FiUser className="text-base" />,
  },
  {
    label: "EN US",
    type: "button",
    onClick: () => alert("Language selector clicked"),
    icon: <TfiWorld className="text-base" />,
  },
];

export default function TopHat() {
  const topHatRef = useRef(null);

  useGSAP(() => {
    gsap.from(topHatRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={topHatRef}
      className="bg-[var(--color-muted)] text-[var(--color-dark)] text-sm py-2 hidden lg:block"
    >
      <div className="container mx-auto font-[var(--font-primary)] flex justify-end items-center gap-6 px-4 md:px-8">
        {items.map(({ label, href, type, onClick, icon }, index) => (
          <div
            key={index}
            className="hidden md:flex items-center gap-1 hover:underline transition cursor-pointer"
          >
            {type === "link" ? (
              <a
                href={href}
                target="_self"
                rel="nofollow"
                aria-label={label}
                className="flex items-center gap-1"
              >
                {icon && icon}
                {label}
              </a>
            ) : (
              <button
                onClick={onClick}
                type="button"
                aria-label={label}
                className="flex items-center gap-1"
              >
                {icon && icon}
                {label}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
