// import { useState, useContext, useEffect, useRef } from "react";
// import { AuthContext } from "../../Context/AuthContext";
// import { Link } from "react-router-dom";
// import { IoPersonCircleSharp } from "react-icons/io5";
// import { NavigationContext } from "../../Context/Navigation";

// const ProfileDropdown = () => {
//     const { isScrolled } = useContext(NavigationContext);
//     const { user, logout } = useContext(AuthContext);
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null); // Ref for dropdown

//     // ✅ Close dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         };

//         document.addEventListener("click", handleClickOutside);
//         return () => {
//             document.removeEventListener("click", handleClickOutside);
//         };
//     }, []);

//     return (
//         <div className="relative" ref={dropdownRef}>
//             {/* Profile Icon/Button */}
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className={` p-0 m-0 w-fit h-fit rounded-full border-2 border-transparent animate-border
//                     ${isScrolled ? "text-teal-400 hover:text-blue-950 [background:linear-gradient(45deg,#ffffff,theme(colors.white)_50%,#ffffff)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.teal.400)_80%,_theme(colors.blue.950)_86%,_theme(colors.blue.950)_90%,_theme(colors.blue.950)_94%,_theme(colors.blue.950))_border-box]" : "text-blue-950 hover:text-blue-950/70 [background:linear-gradient(45deg,#2dd4bf,theme(colors.teal.400)_50%,#2dd4bf)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.blue.950)_80%,_theme(colors.teal.400)_86%,_theme(colors.teal.400)_90%,_theme(colors.teal.400)_94%,_theme(colors.teal.400))_border-box]"}
//                     transition-all ease-linear duration-300`}
//             >
//                 <IoPersonCircleSharp size={40} className="m-0 p-0" />
//             </button>

//             {/* ✅ Dropdown Menu */}
//             {isOpen && (
//                 <div
//                     className={`absolute right-0 mt-5 w-40 border border-blue-950 rounded-lg shadow-xl
//                     ${isScrolled ? "bg-white text-teal-400" : "bg-teal-400/30 backdrop-blur-md text-blue-950"}`}
//                 >
//                     {user ? (
//                         <>
//                             <button
//                                 onClick={() => {
//                                     logout();
//                                     setIsOpen(false);
//                                 }}
//                                 className="block w-full text-left px-4 py-2 hover:bg-blue-950 text-xl font-bold hover:text-teal-400 transition-all rounded-t-lg"
//                             >
//                                 Logout
//                             </button>
//                             <Link
//                                 to="/UserDashboard"
//                                 onClick={() => setIsOpen(false)}
//                                 className="block px-4 py-2 hover:bg-blue-950 hover:text-teal-400 text-xl font-bold transition-all ease-linear duration-300"
//                             >
//                                 Profile
//                             </Link>
//                             <Link
//                                 to="/membership"
//                                 onClick={() => setIsOpen(false)}
//                                 className="block px-4 py-2 hover:bg-blue-950 hover:text-teal-400 text-xl font-bold transition-all ease-linear duration-300 rounded-b-lg"
//                             >
//                                 Memberhip
//                             </Link>
//                         </>
//                     ) : (
//                         <>
//                             <Link
//                                 to="/login"
//                                 onClick={() => setIsOpen(false)}
//                                 className="block px-4 py-2 hover:bg-blue-950 hover:text-teal-400 text-xl font-bold transition-all ease-linear duration-300 rounded-t-lg"
//                             >
//                                 Login
//                             </Link>
//                             <Link
//                                 to="/register"
//                                 onClick={() => setIsOpen(false)}
//                                 className="block px-4 py-2 hover:bg-blue-950 hover:text-teal-400 text-xl font-bold transition-all ease-linear duration-300 rounded-b-lg"
//                             >
//                                 Register
//                             </Link>
//                         </>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProfileDropdown;

import { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { NavigationContext } from "../../Context/Navigation";

const ProfileDropdown = () => {
  const { isScrolled } = useContext(NavigationContext);
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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
        className={`p-0 m-0 w-fit h-fit rounded-full border-2 border-transparent animate-border
          ${
            isScrolled
              ? "text-teal-400 hover:text-blue-950 [background:linear-gradient(45deg,#ffffff,theme(colors.white)_50%,#ffffff)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.teal.400)_80%,_theme(colors.blue.950)_86%,_theme(colors.blue.950)_90%,_theme(colors.blue.950)_94%,_theme(colors.blue.950))_border-box]"
              : "text-blue-950 hover:text-blue-950/70 [background:linear-gradient(45deg,#2dd4bf,theme(colors.teal.400)_50%,#2dd4bf)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.blue.950)_80%,_theme(colors.teal.400)_86%,_theme(colors.teal.400)_90%,_theme(colors.teal.400)_94%,_theme(colors.teal.400))_border-box]"
          }
          transition-all ease-linear duration-300`}
      >
        <IoPersonCircleSharp
          size={32} // smaller on mobile
          className="sm:w-10 sm:h-10 w-8 h-8 m-0 p-0"
        />
      </button>

      {/* ✅ Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute right-0 mt-3 sm:mt-5 w-32 sm:w-40 border border-blue-950 rounded-lg shadow-xl z-20
            ${
              isScrolled
                ? "bg-white text-teal-400"
                : "bg-teal-400/30 backdrop-blur-md text-blue-950"
            }`}
        >
          {user ? (
            <>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 sm:px-4 py-2 hover:bg-blue-950 text-sm sm:text-base md:text-lg font-bold hover:text-teal-400 transition-all rounded-t-lg"
              >
                Logout
              </button>
              <Link
                to="/UserDashboard"
                onClick={() => setIsOpen(false)}
                className="block px-3 sm:px-4 py-2 hover:bg-blue-950 hover:text-teal-400 text-sm sm:text-base md:text-lg font-bold transition-all ease-linear duration-300"
              >
                Profile
              </Link>
              <Link
                to="/membership"
                onClick={() => setIsOpen(false)}
                className="block px-3 sm:px-4 py-2 hover:bg-blue-950 hover:text-teal-400 text-sm sm:text-base md:text-lg font-bold transition-all ease-linear duration-300 rounded-b-lg"
              >
                Membership
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block px-3 sm:px-4 py-2 hover:bg-blue-950 hover:text-teal-400 text-sm sm:text-base md:text-lg font-bold transition-all ease-linear duration-300 rounded-t-lg"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block px-3 sm:px-4 py-2 hover:bg-blue-950 hover:text-teal-400 text-sm sm:text-base md:text-lg font-bold transition-all ease-linear duration-300 rounded-b-lg"
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
