import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

const topLinks = [
  "About Cisco",
  "Contact Us",
  "Careers",
  "Connect with a partner",
];

const bottomLinks = [
  "Feedback",
  "Help",
  "Terms & Conditions",
  "Privacy",
  "Cookies / Do not sell or share",
  "Accessibility",
  "Trademarks",
  "Supply Chain Transparency",
  "Newsroom",
  "Sitemap",
];

const socialIcons = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaXTwitter />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
  { icon: <FaYoutube />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f6f7f8] text-gray-700 text-sm">
      <div className="container mx-auto px-4 py-10 space-y-8">
        {/* Top links and social icons */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {topLinks.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:underline whitespace-nowrap"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex gap-4 text-xl text-gray-600">
            {socialIcons.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-blue-600 transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <hr className="border-t border-gray-300" />

        {/* Bottom legal links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {bottomLinks.map((link, idx) => (
            <a key={idx} href="#" className="hover:underline whitespace-nowrap">
              {link}
            </a>
          ))}
        </div>

        <p className="text-gray-500 mt-4 text-sm">©2025 Cisco Systems, Inc.</p>
      </div>
    </footer>
  );
}
