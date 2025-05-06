"use client";
import {
  BsDownload,
  BsAward,
  BsFileEarmarkText,
  BsCardChecklist,
  BsPeople,
  BsHeadset,
} from "react-icons/bs";

const quickLinks = [
  {
    label: "Downloads",
    href: "https://software.cisco.com/download/home",
    icon: "/assets/icons/icon_downloads.svg",
  },
  {
    label: "Certifications",
    href: "/site/us/en/learn/training-certifications/certifications/index.html",
    icon: "/assets/icons/icon_certifications.svg",
  },
  {
    label: "Cisco Validated",
    href: "https://www.cisco.com/c/en/us/solutions/cisco-validated.html",
    icon: "/assets/icons/icon_design-guides.svg",
  },
  {
    label: "Training",
    href: "/site/us/en/learn/training-certifications/training/index.html",
    icon: "/assets/icons/icon_training.svg",
  },
  {
    label: "Community",
    href: "https://community.cisco.com/",
    icon: "/assets/icons/icon_community.svg",
  },
  {
    label: "Support",
    href: "https://www.cisco.com/c/en/us/support/index.html",
    icon: "/assets/icons/icon_support.svg",
  },
];

export default function QuickTasks() {
  return (
    <section className="pb-7 pt-9 mb-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-12 gap-y-2 text-center">
          {quickLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex w-28 lg:w-fit flex-col items-center text-sm font-medium text-gray-900 hover:underline hover:font-extrabold transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mb-3">
                <img src={item.icon} alt={item.label} width={35} />
              </div>
              <span className="font-bold">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
