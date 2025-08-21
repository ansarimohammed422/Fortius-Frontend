// import React, { useState, useEffect, useRef, useContext } from "react";
// import classNames from "classnames";
// import { MyLinks } from "../Button";
// import { MdOutlineMiscellaneousServices } from "react-icons/md";

// import { NavigationContext } from "../../Context/Navigation";

// const Dropdown = (props) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const dropdownRef = useRef(null); // Ref for the dropdown element
//   const defaultClass =
//     "text-3xl font-black hover:text-blue-950 transition-all ease-linear duration-500 text-teal-400";
//   const TestsServices = [
//     "Hematology",
//     "MicroBiology",
//     "Serology",
//     "BioChemistry",
//     "Radiology",
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false); // Close dropdown if click is outside
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative inline-block text-left" ref={dropdownRef}>
//       <button
//         className={classNames(props.customClass, defaultClass)}
//         onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
//       >
//         Services
//       </button>

//       {isOpen && (
//         <div
//           className={`${
//             isScrolled
//               ? "bg-white hover:ring hover:ring-teal-400"
//               : "bg-teal-400/30 filter backdrop-blur-lg hover:ring hover:ring-blue-950"
//           } absolute right-0 mt-8 w-48 rounded-xl shadow-xl z-10 transition-all ease-linear duration-500`}
//         >
//           <ul className="py-1 px-1">
//             {TestsServices.map((Services, index) => (
//               <li key={index} className="py-1 bg-transparent text-center">
//                 <MyLinks
//                   path={`/${Services}`}
//                   LName={Services}
//                   customClass={` ${
//                     isScrolled ? "" : "!text-blue-950 hover:!text-blue-950/50"
//                   }   !text-xl text-center w-auto `}
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// const SidebarDropdown = (props) => {
//   const TestsServices = [
//     "Hematology",
//     "MicroBiology",
//     "Serology",
//     "BioChemistry",
//     "Radiology",
//   ];
//   const SideDrop = useRef(null); // Ref for the dropdown element

//   const { isScrolled } = useContext(NavigationContext);

//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (SideDrop.current && !SideDrop.current.contains(event.target)) {
//         setIsOpen(false); // Close dropdown if click is outside
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="w-full m-0" ref={SideDrop}>
//       {/* Dropdown Button */}
//       <button
//         onClick={toggleDropdown}
//         className={`flex items-center gap-3 w-full px-4 py-2 text-left sm:text-3xl text-lg font-black  hover:shadow-blue-950 hover:shadow-inner rounded-lg
//           ${isOpen ? "!bg-teal-400 text-blue-950" : ""}
//           ${
//             isScrolled
//               ? "bg-white text-teal-400 shadow-lg border border-teal-400 hover:bg-blue-950 hover:text-teal-400"
//               : "bg-transparent text-blue-950"
//           }
//         ${isOpen & isScrolled ? "!bg-teal-400 !text-blue-950" : ""}
//         transition-all ease-linear duration-300`}
//       >
//         <div className="flex justify-between items-center w-full">
//           <div className="flex gap-3 items-center">
//             <MdOutlineMiscellaneousServices />
//             <span>Services</span>
//           </div>
//           <div>
//             <svg
//               className={`w-6 h-6 transition-transform ease-linear duration-150 ${
//                 isOpen ? "rotate-180" : ""
//               }`}
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={4}
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </div>
//         </div>
//       </button>

//       {/* Dropdown Menu */}
//       <ul
//         className={`overflow-hidden  space-y-0 py-0 rounded-xl  transition-all duration-300 ease-linear ${
//           isOpen
//             ? "max-h-screen opacity-100 mt-2"
//             : "max-h-0 opacity-0 pointer-events-none "
//         } ${
//           isScrolled
//             ? "bg-gray-50 hover:shadow-blue-950 hover:shadow-inner"
//             : "bg-transparent hover:shadow-blue-950 hover:shadow-inner"
//         }`}
//       >
//         {TestsServices.map((Services, index) => (
//           <li key={index} className="px-4 py-2 bg-transparent text-left">
//             <MyLinks
//               path={`/${Services}`}
//               LName={Services}
//               customClass={`${
//                 isScrolled
//                   ? ""
//                   : "!text-blue-950  hover:!text-teal-400 hover:shadow-black hover:drop-shadow-lg "
//               } !text-xl !text-left w-auto m-0`}
//               LFunc={props.dropFunc}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dropdown;
// export { SidebarDropdown };

import React, { useState, useEffect, useRef, useContext } from "react";
import classNames from "classnames";
import { MyLinks } from "../Button";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { NavigationContext } from "../../Context/Navigation";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const defaultClass =
    "text-xl sm:text-2xl md:text-3xl font-black hover:text-blue-950 transition-all ease-linear duration-500 text-teal-400";

  const TestsServices = [
    "Hematology",
    "MicroBiology",
    "Serology",
    "BioChemistry",
    "Radiology",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        className={classNames(props.customClass, defaultClass)}
        onClick={() => setIsOpen(!isOpen)}
      >
        Services
      </button>

      {isOpen && (
        <div
          className={`${
            isScrolled
              ? "bg-white hover:ring hover:ring-teal-400"
              : "bg-teal-400/30 filter backdrop-blur-lg hover:ring hover:ring-blue-950"
          } absolute right-0 mt-6 sm:mt-8 w-40 sm:w-48 rounded-xl shadow-xl z-10 transition-all ease-linear duration-500`}
        >
          <ul className="py-1 px-1">
            {TestsServices.map((Services, index) => (
              <li key={index} className="py-1 bg-transparent text-center">
                <MyLinks
                  path={`/${Services}`}
                  LName={Services}
                  customClass={` ${
                    isScrolled ? "" : "!text-blue-950 hover:!text-blue-950/50"
                  } text-base sm:!text-lg md:!text-xl text-center w-auto`}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const SidebarDropdown = (props) => {
  const TestsServices = [
    "Hematology",
    "MicroBiology",
    "Serology",
    "BioChemistry",
    "Radiology",
  ];
  const SideDrop = useRef(null);
  const { isScrolled } = useContext(NavigationContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (SideDrop.current && !SideDrop.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full m-0" ref={SideDrop}>
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className={`flex items-center gap-2 sm:gap-3 w-full px-3 sm:px-4 py-2 text-left text-base sm:text-lg md:text-2xl font-black
          hover:shadow-blue-950 hover:shadow-inner rounded-lg
          ${isOpen ? "!bg-teal-400 text-blue-950" : ""}
          ${
            isScrolled
              ? "bg-white text-teal-400 shadow-lg border border-teal-400 hover:bg-blue-950 hover:text-teal-400"
              : "bg-transparent text-blue-950"
          }
        ${isOpen & isScrolled ? "!bg-teal-400 !text-blue-950" : ""}
        transition-all ease-linear duration-300`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2 sm:gap-3 items-center">
            <MdOutlineMiscellaneousServices className="text-lg sm:text-xl md:text-2xl" />
            <span>Services</span>
          </div>
          <div>
            <svg
              className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform ease-linear duration-150 ${
                isOpen ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </button>

      {/* Dropdown Menu */}
      <ul
        className={`overflow-hidden space-y-0 py-0 rounded-xl transition-all duration-300 ease-linear ${
          isOpen
            ? "max-h-screen opacity-100 mt-2"
            : "max-h-0 opacity-0 pointer-events-none"
        } ${
          isScrolled
            ? "bg-gray-50 hover:shadow-blue-950 hover:shadow-inner"
            : "bg-transparent hover:shadow-blue-950 hover:shadow-inner"
        }`}
      >
        {TestsServices.map((Services, index) => (
          <li
            key={index}
            className="px-3 sm:px-4 py-2 bg-transparent text-left"
          >
            <MyLinks
              path={`/${Services}`}
              LName={Services}
              customClass={`${
                isScrolled
                  ? ""
                  : "!text-blue-950 hover:!text-teal-400 hover:shadow-black hover:drop-shadow-lg"
              } text-base sm:!text-lg md:!text-xl !text-left w-auto m-0`}
              LFunc={props.dropFunc}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
export { SidebarDropdown };
