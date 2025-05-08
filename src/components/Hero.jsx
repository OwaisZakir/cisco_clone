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
    <section className="relative flex flex-col lg:min-h-[70vh] overflow-hidden text-black lg:text-white font-light">
      {/* Mobile & Tablet Image (Top Banner) */}
      <div className="relative w-full h-[300px] lg:hidden">
        <Image
          src="/assets/hero/hero-image.webp"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Background Image for Large Screens */}
      <div className="hidden lg:block lg:absolute lg:inset-0 lg:-z-10">
        <Image
          src="/assets/hero/hero-image.webp"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto border-b border-gray-400 lg:border-b-0 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 z-10 lg:min-h-[70vh]">
        <div
          ref={contentRef}
          className="py-10 sm:py-16 flex flex-col justify-center lg:items-start lg:justify-center"
        >
          <p className="text-[1rem] font-semibold mb-3 text-black lg:text-white/90">
            San Diego, CA | June 8–12
          </p>
          <h1 className="text-4xl sm:text-5xl font-light leading-snug mb-2">
            Secure your spot
          </h1>
          <p className="text-black lg:text-white/80 text-base sm:text-lg mb-6 max-w-md  lg:mx-0 font-extralight">
            Join us at Cisco Live in San Diego to get the skills you need to
            transform your career.
          </p>
          <div>
            <button className="bg-blue-950 text-white  lg:bg-white lg:text-blue-950 font-semibold py-2.5 px-6 rounded-full hover:bg-gray-100 transition">
              Register now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
