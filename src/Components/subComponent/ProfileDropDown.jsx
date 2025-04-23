import { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { NavigationContext } from "../../Context/Navigation";

const ProfileDropdown = () => {
    const { isScrolled } = useContext(NavigationContext);
    const { user, logout } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Ref for dropdown

    // ✅ Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Profile Icon/Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={` 
                    ${isScrolled ? "text-teal-400 hover:text-blue-950" : "text-blue-950 hover:text-blue-950/70"}
                    transition-all ease-linear duration-300`}
            >
                <IoPersonCircleSharp size={40} />
            </button>

            {/* ✅ Dropdown Menu */}
            {isOpen && (
                <div
                    className={`absolute right-0 mt-5 w-40 border border-blue-950 rounded-lg shadow-xl 
                    ${isScrolled ? "bg-white text-teal-400" : "bg-teal-400/30 backdrop-blur-md text-blue-950"}`}
                >
                    {user ? (
                        <>
                            <button
                                onClick={() => {
                                    logout();
                                    setIsOpen(false);
                                }}
                                className="block w-full text-left px-4 py-2 hover:bg-blue-950 text-xl font-bold hover:text-teal-400 transition-all rounded-t-lg"
                            >
                                Logout
                            </button>
                            <Link
                                to="/UserDashboard"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 hover:bg-blue-950 hover:text-teal-400 text-xl font-bold transition-all ease-linear duration-300 rounded-b-lg"
                            >
                                Profile
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 hover:bg-blue-950 hover:text-teal-400 text-xl font-bold transition-all ease-linear duration-300 rounded-t-lg"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 hover:bg-blue-950 hover:text-teal-400 text-xl font-bold transition-all ease-linear duration-300 rounded-b-lg"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
