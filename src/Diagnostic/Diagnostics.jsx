import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import { NavigationContext } from '../Context/Navigation';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Hematology from './Pages/subPages/Hematology';
import Microbiology from './Pages/subPages/MicroBiology';
import Serology from './Pages/subPages/Seroligy';
import Biochemistry from './Pages/subPages/BioChemistry';
import Radiology from './Pages/subPages/Radiology';
import Services from './Pages/Services';
import Blog from './Pages/Blogs';
import FullBlog from './Pages/subPages/FullBlog';
import OffersList from './Pages/Offers';
import Career from './Pages/Career';
import Login from './Components/Login';
import Register from './Components/Register';
import UserDashboard from './Pages/UserDashboard';
import Appointment from './Pages/Appointment';
import BillingPage from './Pages/BillingPage';
import SendResetEmail from '../accounts/SendResetEmail';
import ResetPassword from '../accounts/ResetPassword';
import MembershipPage from './Pages/Membership';
import PackagesPage from './Pages/Packages';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

import ProtectedRoute from './Components/ProtectedRoute';

const Diagnostics = () => {
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
                        <Route path="About" element={<About />} />
                        <Route path="Contact" element={<Contact />} />
                        <Route path="Hematology" element={<Hematology />} />
                        <Route path="MicroBiology" element={<Microbiology />} />
                        <Route path="Serology" element={<Serology />} />
                        <Route path="BioChemistry" element={<Biochemistry />} />
                        <Route path="Radiology" element={<Radiology />} />
                        <Route path="Services" element={<Services />} />
                        <Route path="Blogs" element={<Blog />} />
                        <Route path="blog/:id" element={<FullBlog />} />
                        <Route path="offers" element={<OffersList />} />
                        <Route path="Career" element={<Career />} />
                        <Route path="Login" element={<Login />} />
                        <Route path="Register" element={<Register />} />
                        <Route
                            path="UserDashboard"
                            element={
                                <ProtectedRoute>
                                    <UserDashboard />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="Appointment" element={<Appointment />} />
                        <Route path="billing/:appointmentId" element={<BillingPage />} />
                        <Route path="forgot-password" element={<SendResetEmail />} />
                        <Route
                            path="reset-password/:uidb64/:token"
                            element={<ResetPassword />}
                        />
                        <Route path="membership" element={<MembershipPage />} />
                        <Route path="packages" element={<PackagesPage />} />

                    </Routes>

                    {/* <Routes location={location} key={location.pathname}>
                        <Route path="/diagnostic" element={<Home />} />
                        <Route path="/diagnostic/About" element={<About />} />
                        <Route path="/diagnostic/Contact" element={<Contact />} />
                        <Route path="/diagnostic/Hematology" element={<Hematology />} />
                        <Route path="/diagnostic/MicroBiology" element={<Microbiology />} />
                        <Route path="/diagnostic/Serology" element={<Serology />} />
                        <Route path="/diagnostic/BioChemistry" element={<Biochemistry />} />
                        <Route path="/diagnostic/Radiology" element={<Radiology />} />
                        <Route path="/diagnostic/Services" element={<Services />} />
                        <Route path="/diagnostic/Blogs" element={<Blog />} />
                        <Route path="/diagnostic/blog/:id" element={<FullBlog />} />
                        <Route path="/diagnostic/offers" element={<OffersList />} />
                        <Route path="/diagnostic/Career" element={<Career />} />
                        <Route path="/diagnostic/Login" element={<Login />} />
                        <Route path="/diagnostic/Register" element={<Register />} />
                        <Route
                            path="/diagnostic/UserDashboard"
                            element={
                                <ProtectedRoute>
                                    <UserDashboard />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/diagnostic/Appointment" element={<Appointment />} />
                        <Route path="/diagnostic/billing/:appointmentId" element={<BillingPage />} />
                        <Route path="/diagnostic/forgot-password" element={<SendResetEmail />} />
                        <Route
                            path="/diagnostic/reset-password/:uidb64/:token"
                            element={<ResetPassword />}
                        />
                        <Route path="/diagnostic/membership" element={<MembershipPage />} />
                        <Route path="/diagnostic/packages" element={<PackagesPage />} />
                    </Routes> */}

                </motion.div>
            </AnimatePresence>
            <Footer />

        </>
    )
}

export default Diagnostics