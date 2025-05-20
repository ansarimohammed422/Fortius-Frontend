import { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Appointment from "./Pages/Appointment";
import About from "./Pages/About";
import ScrollToTop from "./Components/ScrollToTop";
import Contact from "./Pages/Contact";
import Hematology from "./Pages/subPages/Hematology";
import Microbiology from "./Pages/subPages/MicroBiology";
import Serology from "./Pages/subPages/Seroligy";
import Biochemistry from "./Pages/subPages/BioChemistry";
import Radiology from "./Pages/subPages/Radiology";
import Services from "./Pages/Services";
import Blog from "./Pages/Blogs";
import Sidebar from "./Components/Sidebar";
import FullBlog from "./Pages/subPages/FullBlog";
import { NavigationContext } from "./Context/Navigation";
import OffersList from "./Pages/Offers";
import Career from "./Pages/Career";
import Login from "./Components/Login";
import Register from "./Components/Register";
import UserDashboard from "./Pages/UserDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import BillingPage from "./Pages/BillingPage";
import SendResetEmail from "./accounts/SendResetEmail";
import ResetPassword from "./accounts/ResetPassword";
import MembershipPage from "./Pages/Membership";
import PackagesPage from "./Pages/Packages";
import { AppointmentProvider } from "./Context/AppointmentContext";
import MainHome from "./Main/MainHome";

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
      <NavigationContext.Provider value={value}>
        <Navbar setOpen={setSidebarOpen} isOpen={sidebarOpen} />
        <Sidebar isOpen={sidebarOpen} />
      </NavigationContext.Provider>

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
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<MainHome />} /> */}
            <Route path="/diagnostic" element={<Home />} />
            <Route path="/About" element={<About />} />
            {/* <Route path="/Appointment" element={<Appointment />} /> */}
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Hematology" element={<Hematology />} />
            <Route path="/MicroBiology" element={<Microbiology />} />
            <Route path="/Serology" element={<Serology />} />
            <Route path="/BioChemistry" element={<Biochemistry />} />
            <Route path="/Radiology" element={<Radiology />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Blogs" element={<Blog />} />
            <Route path="/blog/:id" element={<FullBlog />} />
            <Route path="/offers" element={<OffersList />} />
            <Route path="/Career" element={<Career />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route
              path="/UserDashboard"
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/Appointment" element={<Appointment />} />

            <Route path="/billing/:appointmentId" element={<BillingPage />} />

            <Route path="/forgot-password" element={<SendResetEmail />} />
            <Route
              path="/reset-password/:uidb64/:token"
              element={<ResetPassword />}
            />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/packages" element={<PackagesPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
