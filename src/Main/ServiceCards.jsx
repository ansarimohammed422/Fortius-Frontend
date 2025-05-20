// src/components/home/ServiceCard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ title, description, link, color, para }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (expanded) {
      // After expand animation (~600ms), navigate
      const timer = setTimeout(() => {
        navigate(link);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [expanded, navigate, link]);

  return (
    <div
      onClick={() => setExpanded(true)}
      className={`
        cursor-pointer
        ${color}
        text-white
        flex
        flex-col
        justify-center
        items-center
        transition-all
        duration-500
        ease-in-out
        overflow-hidden

        ${
          expanded
            ? "fixed top-0 left-0 w-full h-full z-50 rounded-none"
            : "w-full  h-1/2"
        }
      `}
    >
      <h2 className="text-blue-950 text-7xl font-bold mb-3">{title}</h2>
      {!expanded && (
        <p className={`${para} text-2xl  text-center px-4`}>{description}</p>
      )}
    </div>
  );
};

export default ServiceCard;
