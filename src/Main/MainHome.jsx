import React from "react";
import ServiceCard from "./ServiceCards";
const services = [
  {
    title: "Diagnostic Center",
    description: "Explore human health tests and reports.",
    link: "/diagnostic",
    color: "bg-teal-400",
    para: "text-teal-200",
  },
  {
    title: "Veterinary Services",
    description: "Care and diagnostics for your pets.",
    link: "/veterinary",
    color: "bg-olive-500",
    para: "text-olive-200",
  },
];

const MainHome = () => {
  return (
    <div className="h-screen flex flex-col">
      {services.map((service, idx) => (
        <ServiceCard key={idx} {...service} />
      ))}
    </div>
  );
};

export default MainHome;
