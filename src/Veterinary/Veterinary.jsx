import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { NavigationContext } from "../Context/Navigation";
import Sidebar from "./Components/Sidebar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

const Veterinary = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const value = {
    sidebarOpen,
    setSidebarOpen,
    isScrolled,
    setIsScrolled,
    isHidden,
    setIsHidden,
    lastScrollY,
    setLastScrollY,
  };
  return (
    <>
      <NavigationContext.Provider value={value}>
        <Navbar setOpen={setSidebarOpen} isOpen={sidebarOpen} />
        <Sidebar isOpen={sidebarOpen} />
      </NavigationContext.Provider>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};
export default Veterinary;
