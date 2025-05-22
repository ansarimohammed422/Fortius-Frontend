import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { MyLinks } from "./Button";

// Function to generate a random solid color
const generateRandomColor = () => {
  const colors = [
    "#FF5733", // Red
    "#33FF57", // Green
    "#3357FF", // Blue
    "#FF33A1", // Pink
    "#F9D342", // Yellow
    "#9B59B6", // Purple
    "#1ABC9C", // Teal
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/dashboard/")
      .then((response) => setStats(response.data))
      .catch((error) => console.error("Error fetching dashboard data:", error));
  }, []);

  // Data array for rotating items
  const data = stats
    ? [
      { title: "Total Categories", value: stats.total_categories, info: <span className="text-xl">{ "Categories of diagnostic tests available." }</span> },
      { title: "Total Tests", value: stats.total_tests, info: <span className="text-xl">{ "Total number of tests performed at Fortius." }</span> },
      { title: "Total Appointments", value: stats.total_appointments, info: <span className="text-xl">{ "Appointments booked at Fortius Diagnostics." }</span> },
      { title: "Approved Appointments", value: stats.total_approved_appointments, info: <span className="text-xl">{ "Appointments that have been approved." }</span> },
      { title: "Approval Rate", value: `${stats.approval_rate}%`, info: <span className="text-xl">{ "Percentage of approved appointments." }</span> },
      { title: "Test Completion Rate", value: `${stats.test_completion_rate}%`, info: <span className="text-xl">{ "Percentage of completed tests." }</span> },
    ]
    
    : [];

  useEffect(() => {
    if (data.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval);
    }
  }, [data.length]);

  if (!stats)
    return (
      <p className="text-center text-lg font-semibold text-gray-800 animate-pulse">
        Loading dashboard...
      </p>
    );

  return (
    <section className="py-12 bg-white" id="Dashboard">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-blue-950 font-extrabold mb-4">Dashboard Overview</h2>
          <p className="text-gray-800 font-semibold text-lg">
            Get real-time insights into Fortius Diagnostics' key metrics.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="flex justify-center items-center"> {/* Centering the cards */}
          <AnimatePresence mode="wait">
            {data.length > 0 && (
              <motion.div
                key={currentIndex}
                className="flex justify-center items-center"
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.8 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <DashboardCard
                  title={data[currentIndex].title}
                  value={data[currentIndex].value}
                  info={data[currentIndex].info}
                  color={generateRandomColor()} // Apply the random solid color here
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const DashboardCard = ({ title, value, info, color }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-5 p-8 bg-teal-50 shadow-lg rounded-xl text-center border-2 border-teal-400 transition-transform duration-300 transform`}
      style={{
        width: "500px", // Rectangle card width
        height: "300px", // Rectangle card height
        // maxWidth: "400px", // Max width to prevent too large
        // maxHeight: "300px", // Max height to prevent too large
      }}
    >
      <p className="text-4xl font-semibold text-gray-700">{title}</p>
      <p
        className="text-7xl font-extrabold mt-2"
        style={{
          color: color, // Apply random color to the number text
        }}
      >
        {value}
      </p> {/* Solid color applied here */}
      <p className="text-gray-600 mt-2 text-2xl">{info}</p>
    </div>
  );
};

export default Dashboard;
