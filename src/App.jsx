import { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import MainHome from "./Main/MainHome";
import ScrollToTop from "./Diagnostic/Components/ScrollToTop";
import Diagnostics from "./Diagnostic/Diagnostics";
import Veterinary from "./Veterinary/Veterinary";

function App() {
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
      <AnimatePresence>
        <ScrollToTop />
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainHome />} />
            <Route path="/diagnostic/*" element={<Diagnostics />} />
            <Route path="/vet/*" element={<Veterinary />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
