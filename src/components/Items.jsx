import React from "react";
import ProductCard from "./ProductCard";

const items = [
  {
    label: "Cisco 8000 Series Routers",
    href: "https://www.cisco.com/site/us/en/products/networking/sdwan-routers/8000-series/index.html",
    image:
      "/assets/itemsImage/homepage-featured-story-8000-series-routers-750x422.jpg",
    description:
      "Power your metro, core, and data center networks with Silicon One-based platforms built for the speed and scale of AI.",
    button: "Explore Cisco 8000 Series",
  },
  {
    label: "Introducing Cisco AI Defense",
    href: "https://www.cisco.com/site/us/en/products/security/ai-defense/index.html",
    image: "/assets/itemsImage/hp-featured-ai-defense-990x507.jpg",
    description:
      "Cisco AI Defense safeguards the development and usage of AI applications so that enterprises can advance their AI initiatives with confidence.",
    button: "Explore AI Defense",
  },
  {
    label: "Cisco Nexus Hyperfabric",
    href: "https://www.cisco.com/site/us/en/products/networking/data-center-networking/nexus-hyperfabric/index.html#tabs-35d568e0ff-item-194f491212-tab",
    image: "/assets/itemsImage/hp-featured-hyperfabric-1200x675.jpg",
    description: "Simply design, build, and manage network fabrics anywhere.",
    button: "Explore Cisco Nexus Hyperfabric ",
  },
];

function Items() {
  return (
    <section className="container mx-auto px-4 ">
      <div className="main_heading px-5 lg:px-0 mt-16 text-[rgb(27, 28, 29)]  text-center text-4xl lg:text-[2.5rem] font-[350]">
        <h2 className="leading-none">
          Latest products and innovations across Cisco
        </h2>
      </div>
      <div className="boxes_parent flex flex-wrap justify-center gap-6 mt-16 mb-10">
        {items.map((item) => (
          <ProductCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Items;
