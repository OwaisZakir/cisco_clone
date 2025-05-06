import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const insideCiscoItems = [
  {
    category: "Press release",
    title:
      "Cisco showcases simplicity, security and AI readiness at Cisco Live Amsterdam",
    link: "Read press release",
    href: "https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2025/m02/cisco-live-amsterdam-2025.html",
  },
  {
    category: "Annual report",
    title:
      "Our first-ever State of AI Security report shares key developments, trends, and predictions for AI security",
    link: "Read the report",
    href: "https://www.cisco.com/c/en/us/products/security/state-of-ai-security.html",
  },
  {
    category: "Keynote",
    title:
      "Cisco executives address how to connect and protect organizations in the AI era",
    link: "Watch keynote",
    href: "https://www.ciscolive.com/on-demand/on-demand-library.html?search=KEYGEN-1111#/",
  },
  {
    category: "Research study",
    title:
      "How IT can help unleash industrial security and better protect critical infrastructure",
    link: "Get IDC InfoBrief",
    href: "https://www.cisco.com/site/us/en/products/security/industrial-security/idc-infobrief.html",
  },
  {
    category: "Event",
    title: "Cisco U. Spotlight 2025. Get ready to: Learn. Connect. Innovate.",
    link: "Register now",
    href: "https://mkto.cisco.com/ciscouspotlight.html?utm_campaign=spotlight2025&utm_source=web&utm_medium=cdc-h",
  },
  {
    category: "Blog",
    title: "Cisco wins Industrial IoT Company of the Year 2025",
    link: "Read more",
    href: "https://blogs.cisco.com/industrial-iot/cisco-recognized-as-the-industrial-iot-company-of-the-year-2025",
  },
];

export default function InsideCisco() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto px-2 lg:px-10">
        {/* Top Heading - hidden on small screens */}
        <div className="hidden lg:flex justify-between items-center mb-14">
          <h2 className="text-3xl text-gray-800">Inside Cisco</h2>
          <div className="flex gap-4 text-lg text-blue-600 font-semibold">
            {["More news", "More events"].map((item, index) => (
              <a href="#" className="hover:underline" key={index}>
                <span className="flex items-center gap-1">
                  <span>{item}</span>
                  <FaAngleRight className="font-medium" />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Title for mobile */}
        <h2 className="md:hidden text-2xl font-semibold text-gray-800 mb-8">
          Inside Cisco
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {insideCiscoItems.map((item, index) => (
            <div key={index} className="text-left space-y-3">
              <h4 className="text-sm font-semibold text-gray-800">
                {item.category}
              </h4>
              <p className="text-lg md:text-xl font-light text-gray-800">
                {item.title}
              </p>
              <a
                href={item.href}
                className="text-blue-600 text-md font-medium hover:underline inline-flex items-center gap-1 group"
              >
                {item.link}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Links at bottom for mobile only */}
        <div className="md:hidden mt-12 border-t border-gray-500 pt-8 flex justify-center gap-8 text-blue-600 text-base font-semibold">
          {["More news", "More events"].map((item, index) => (
            <a href="#" className="hover:underline" key={index}>
              <span className="flex items-center gap-1">
                <span>{item}</span>
                <FaAngleRight className="font-medium" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
