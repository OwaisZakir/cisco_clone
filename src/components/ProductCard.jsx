"use client";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function ProductCard({
  label,
  href,
  image,
  description,
  button,
}) {
  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
      <img src={image} alt={label} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl  text-gray-900 mb-2">{label}</h3>
        <p className="text-lg leading-normal text-gray-700 mb-4">{description}</p>
        <a
          href={href}
          className=" font-semibold text-blue-600 hover:underline inline-flex items-center"
        >
          {button}
          <span>
            <FaAngleRight />
          </span>
        </a>
      </div>
    </div>
  );
}
