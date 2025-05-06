import React from "react";

const contentBlocks = [
  {
    title: "Secure the AI-scale data center",
    description:
      "Segment your workloads, protect against vulnerabilities, and address your fundamental cybersecurity challenges with Cisco Hypershield, a groundbreaking, new AI-native architecture.",
    button: "Explore Cisco Hypershield",
    imgSrc: "/assets/itemsImage/hp-featured990x507.jpg",
    imgAlt: "Cisco Hypershield Dashboard",
    reverse: false,
  },
  {
    title: "Intelligent. Simple. Resilient. Get AI-ready connectivity.",
    description:
      "Monetize your network and service capabilities with an architecture built for smart, seamless delivery. Cut complexity by converging network layers and services. Assure user experiences with AI-powered automation, observability, and security.",
    button: "Explore Agile Services Networking",
    imgSrc: "/assets/itemsImage/hp-supporting-1176x662.jpg",
    imgAlt: "Agile Networking",
    reverse: true,
  },
];

export default function ResponsiveContentSections() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto space-y-20">
        {contentBlocks.map((block, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              block.reverse
                ? "md:flex-col-reverse lg:flex-row-reverse"
                : "md:flex-col-reverse lg:flex-row"
            } items-center gap-10`}
          >
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                {block.title}
              </h2>
              <p className="text-gray-700 text-lg mb-6">{block.description}</p>
              <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-50 transition">
                {block.button}
              </button>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={block.imgSrc}
                alt={block.imgAlt}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
