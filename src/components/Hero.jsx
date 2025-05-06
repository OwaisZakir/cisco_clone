"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden text-white font-light">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/hero/hero-image.webp"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 z-10">
        <div ref={contentRef} className="py-16">
          <p className="text-[1rem] font-semibold mb-3 text-white/90">
            San Diego, CA | June 8–12
          </p>
          <h1 className="text-5xl sm:text-6xl font-light leading-snug mb-2">
            Secure your spot
          </h1>
          <p className="text-white/80 text-base sm:text-lg mb-6 max-w-md font-extralight">
            Join us at Cisco Live in San Diego to get the skills you need to
            transform your career.
          </p>
          <button className="bg-white text-blue-950 font-semibold py-2.5 px-6 rounded-full hover:bg-gray-100 transition">
            Register now
          </button>
        </div>
      </div>
    </section>
  );
}
