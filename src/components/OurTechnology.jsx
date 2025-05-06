import React from "react";

const techItems = [
  {
    label: "Networking",
    image: "/assets/ourTech/networking.webp",
  },
  {
    label: "Observability",
    image: "/assets/ourTech/observability.png",
  },
  {
    label: "Security",
    image: "/assets/ourTech/security.webp",
  },
  {
    label: "Collaboration",
    image: "/assets/ourTech/collaboration.webp",
  },
  {
    label: "Computing",
    image: "/assets/ourTech/computing.webp",
  },
  {
    label: "AI",
    image: "/assets/ourTech/ai.webp",
  },
];

export default function OurTechnology() {
  return (
    <section className="bg-gray-50 min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl text-center text-gray-900 mb-12">
          Our technology
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {techItems.map((item) => (
            <div
              key={item.label}
              className="w-full max-w-[320px] bg-white p-1 lg:p-6 border border-gray-200 hover:border-gray-400 rounded-xl shadow-sm flex flex-col items-center text-center transition hover:shadow-md"
            >
              <img
                src={item.image}
                alt={item.label}
                className="h-28 object-contain mb-2 lg:mb-4"
              />
              <span className="text-sm lg:text-lg font-medium text-gray-800">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
