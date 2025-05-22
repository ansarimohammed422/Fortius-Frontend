import React, { useContext, useEffect, useRef } from "react";
import { NavigationContext } from "../../Context/Navigation";
import { SidebarDropdown } from "./subComponant/DropDown";
import { MyLinks } from "./Button";
import { IoCalendar } from "react-icons/io5";
import { ImBlogger } from "react-icons/im";
import { TbTagsFilled } from "react-icons/tb";
import { FaUserTie } from "react-icons/fa6";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiFacebookBoxFill,
} from "react-icons/ri";
import { MdPermContactCalendar, MdHome } from "react-icons/md";
import { BsFillPatchExclamationFill } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const {
    sidebarOpen,
    setSidebarOpen, // Assuming setSidebarOpen is a function from context
    isScrolled,
  } = useContext(NavigationContext);

  const sidebarRef = useRef(null); // Reference to the sidebar

  // Close sidebar when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false); // Close sidebar
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSidebarOpen]);

  // Close sidebar when a link is clicked
  const handleLinkClick = () => {
    setSidebarOpen(false); // Close sidebar on link click
  };

  return (
    <aside
      ref={sidebarRef} // Attach ref to sidebar
      className={`fixed left-0 z-10 sm:w-80 w-60 h-screen px-4 py-8 flex flex-col gap-3
        overflow-y-auto transform transition-transform ease-linear duration-200
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} ${
        isScrolled
          ? "bg-gray-50 shadow-lg"
          : "bg-olive-500/30 filter backdrop-blur-md"
      }`}
    >
      {/* Logo Section */}
      <div className="flex justify-start items-center mb-5">
        <Link to={"/"}>
          <svg
            version="1.1"
            width="2.3125587in"
            height="0.62161005in"
            viewBox="0 0 166.50441 44.755945"
            id="svg82"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs id="defs82" />

            <g id="g87" transform="translate(-1075.6696,-1639.4829)">
              <path
                d="m 1132.5778,1664.2376 c 0,1.1394 0.911,2.0403 2.0628,2.0403 1.1515,0 2.0625,-0.9009 2.0625,-2.0403 v -5.299 h 7.2326 c 1.0444,0 1.875,-0.8216 1.875,-1.8549 0,-1.0333 -0.8306,-1.8546 -1.875,-1.8546 h -7.2326 v -3.9479 h 8.4378 c 1.0447,0 1.875,-0.8216 1.875,-1.8549 0,-1.0333 -0.8303,-1.8546 -1.875,-1.8546 h -10.5003 c -1.1518,0 -2.0628,0.901 -2.0628,2.0403 z m 24.9675,2.1994 c 5.7858,0 9.9915,-4.3191 9.9915,-9.5917 v -0.053 c 0,-5.2727 -4.152,-9.5387 -9.9382,-9.5387 -5.7858,0 -9.9912,4.319 -9.9912,9.5917 v 0.053 c 0,5.2727 4.1517,9.5387 9.9379,9.5387 z m 0.053,-3.7626 c -3.3214,0 -5.6787,-2.6494 -5.6787,-5.8291 v -0.053 c 0,-3.1797 2.3036,-5.7762 5.6254,-5.7762 3.3217,0 5.6787,2.6495 5.6787,5.8292 v 0.053 c 0,3.1793 -2.3036,5.7761 -5.6254,5.7761 z m 11.8954,1.5632 c 0,1.1394 0.911,2.0403 2.0628,2.0403 1.1515,0 2.0625,-0.9009 2.0625,-2.0403 v -4.0539 h 3.2947 l 4.0182,5.0342 c 0.4821,0.6095 1.0985,1.06 2.0359,1.06 0.991,0 1.9554,-0.7419 1.9554,-1.8813 0,-0.6358 -0.2679,-1.06 -0.6699,-1.5631 l -2.8664,-3.4448 c 2.2774,-0.9272 3.7504,-2.7288 3.7504,-5.6434 v -0.053 c 0,-1.7489 -0.5624,-3.206 -1.6068,-4.2393 -1.2326,-1.2191 -3.0809,-1.8813 -5.465,-1.8813 h -6.509 c -1.1518,0 -2.0628,0.901 -2.0628,2.0403 z m 4.1253,-7.6574 v -5.3257 h 4.0983 c 2.0091,0 3.2413,0.901 3.2413,2.6499 v 0.053 c 0,1.5635 -1.1518,2.6232 -3.1609,2.6232 z m 17.8953,7.6574 c 0,1.1394 0.911,2.0403 2.0629,2.0403 1.1518,0 2.0628,-0.9009 2.0628,-2.0403 v -12.9034 h 3.9642 c 1.0447,0 1.902,-0.8479 1.902,-1.8812 0,-1.0334 -0.8573,-1.8813 -1.902,-1.8813 h -12.0541 c -1.0447,0 -1.902,0.8479 -1.902,1.8813 0,1.0333 0.8573,1.8812 1.902,1.8812 h 3.9642 z m 11.4667,0 c 0,1.1394 0.9107,2.0403 2.0629,2.0403 1.1518,0 2.0621,-0.9009 2.0621,-2.0403 v -14.7846 c 0,-1.1394 -0.9103,-2.0403 -2.0621,-2.0403 -1.1522,0 -2.0629,0.9009 -2.0629,2.0403 z m 14.9222,2.1727 c 5.036,0 8.2236,-2.7555 8.2236,-8.3726 v -8.5847 c 0,-1.1394 -0.911,-2.0403 -2.0624,-2.0403 -1.1519,0 -2.0629,0.9009 -2.0629,2.0403 v 8.7437 c 0,2.9409 -1.5264,4.4511 -4.0446,4.4511 -2.5181,0 -4.0449,-1.5632 -4.0449,-4.5838 v -8.611 c 0,-1.1394 -0.911,-2.0403 -2.0628,-2.0403 -1.1515,0 -2.0625,0.9009 -2.0625,2.0403 v 8.717 c 0,5.4581 3.0805,8.2403 8.1165,8.2403 z m 17.3863,-0.026 c 4.045,0 6.8843,-2.0666 6.8843,-5.7498 v -0.053 c 0,-3.2323 -2.1428,-4.5838 -5.9466,-5.5641 -3.2413,-0.8212 -4.0449,-1.2187 -4.0449,-2.4377 v -0.053 c 0,-0.9007 0.8306,-1.6162 2.4107,-1.6162 1.286,0 2.5719,0.4505 3.9379,1.2454 0.3215,0.1854 0.6428,0.2914 1.0447,0.2914 1.0715,0 1.9288,-0.8213 1.9288,-1.8813 0,-0.7949 -0.4554,-1.351 -0.9107,-1.6161 -1.6875,-1.06 -3.67,-1.6429 -5.947,-1.6429 -3.8304,0 -6.5627,2.2257 -6.5627,5.5908 v 0.053 c 0,3.6828 2.4378,4.7161 6.2145,5.6701 3.1339,0.7949 3.777,1.3248 3.777,2.3581 v 0.053 c 0,1.0863 -1.0177,1.7489 -2.7052,1.7489 -1.8217,0 -3.3755,-0.6359 -4.7952,-1.6696 -0.2678,-0.1853 -0.6428,-0.3707 -1.1788,-0.3707 -1.0711,0 -1.9284,0.8212 -1.9284,1.8812 0,0.6359 0.3215,1.2187 0.7765,1.5368 2.0899,1.4838 4.581,2.2257 7.0451,2.2257 z"
                style={{ fill: "#092c5c", fillRule: "evenodd" }}
                id="path41"
              />
              <text x="1132.3875" y="1676.3601" id="text42">
                <tspan
                  fontFamily="'Arial Black'"
                  fontSize="8.5px"
                  fill="#7d8240"
                  id="tspan42"
                >
                  VET CARE
                </tspan>
              </text>
            </g>
            <g id="g86" transform="translate(-1075.6696,-1642.3473)">
              <g id="g85">
                <g id="g84">
                  <g id="g83">
                    <g id="g82">
                      <path
                        d="m 1084.9323,1642.3472 h 26.723 c 5.0937,0 9.2621,4.1235 9.2621,9.1622 v 26.4316 c 0,5.0387 -4.1684,9.1622 -9.2621,9.1622 h -26.723 c -5.0953,0 -9.2629,-4.1235 -9.2629,-9.1622 v -26.4316 c 0,-5.0387 4.1676,-9.1622 9.2629,-9.1622 z"
                        style={{ fill: "#61c1ae", fillRule: "evenodd" }}
                        id="path42"
                      />
                      <path
                        d="m 1085.922,1649.5386 h 22.5476 c 1.5515,0 2.8203,1.2552 2.8203,2.7896 0,1.5344 -1.2688,2.7896 -2.8203,2.7896 h -19.7414 v 19.5272 c 0,1.5344 -1.2693,2.7896 -2.8204,2.7896 -1.5515,0 -2.8203,-1.2552 -2.8203,-2.7896 v -22.3168 l 10e-4,-0.072 v -0.072 -0.071 l 0.01,-0.07 0.01,-0.07 0.01,-0.069 0.012,-0.069 0.013,-0.068 0.015,-0.068 0.017,-0.067 0.018,-0.066 0.02,-0.066 0.021,-0.065 0.023,-0.064 0.025,-0.063 0.026,-0.063 0.028,-0.062 0.029,-0.062 0.03,-0.06 v 0 l 0.032,-0.059 0.033,-0.059 0.035,-0.058 0.036,-0.057 v -5e-4 l 0.037,-0.056 v 0 l 0.039,-0.055 v 0 l 0.04,-0.054 v 0 l 0.042,-0.053 0.042,-0.052 v 0 l 0.044,-0.051 v 0 l 0.045,-0.05 v 0 l 0.046,-0.049 v -5e-4 l 0.047,-0.048 v 0 l 0.048,-0.047 v 0 l 0.049,-0.045 v -5e-4 l 0.051,-0.044 v 0 l 0.052,-0.043 v 0 l 0.053,-0.042 v -5e-4 l 0.053,-0.04 5e-4,-5e-4 0.054,-0.039 v 0 l 0.056,-0.038 v 0 l 0.056,-0.037 h 5e-4 l 0.057,-0.036 0.058,-0.034 v 0 l 0.06,-0.033 0.06,-0.032 v 0 l 0.061,-0.03 h 5e-4 l 0.062,-0.029 v 0 l 0.062,-0.027 v -5e-4 l 0.063,-0.025 5e-4,-5e-4 0.064,-0.024 v 0 l 0.065,-0.023 v 0 l 0.066,-0.021 v 0 l 0.066,-0.02 v 0 l 0.067,-0.018 v 0 l 0.068,-0.016 5e-4,-5e-4 0.068,-0.015 v 0 l 0.069,-0.013 v 0 l 0.069,-0.012 v 0 l 0.07,-0.01 v -5e-4 l 0.071,-0.01 v -5e-4 l 0.071,-0.01 h 5e-4 0.072 v 0 h 0.072 v 0 h 0.072 v 0 z"
                        style={{ fill: "#092c5c", fillRule: "evenodd" }}
                        id="path43"
                      />
                      <path
                        d="m 1094.3684,1674.645 v -11.1584 l 10e-4,-0.072 v -0.072 -0.071 l 0.01,-0.071 0.01,-0.07 0.01,-0.069 0.012,-0.069 v -5e-4 l 0.013,-0.068 0.015,-0.068 0.017,-0.067 v -5e-4 l 0.018,-0.066 0.02,-0.066 v -5e-4 l 0.021,-0.065 v 0 l 0.023,-0.064 v -5e-4 l 0.025,-0.063 0.026,-0.062 v -5e-4 l 0.028,-0.062 v 0 l 0.029,-0.061 0.031,-0.061 0.032,-0.06 v 0 l 0.033,-0.059 v 0 l 0.035,-0.058 v 0 l 0.036,-0.057 0.037,-0.057 0.039,-0.055 0.04,-0.054 v -5e-4 l 0.041,-0.053 v -5e-4 l 0.042,-0.052 0.044,-0.051 v -5e-4 l 0.045,-0.05 v 0 l 0.046,-0.049 0.047,-0.048 0.049,-0.047 0.049,-0.045 0.05,-0.044 v -5e-4 l 0.052,-0.043 v -5e-4 l 0.053,-0.042 v 0 l 0.054,-0.041 v -5e-4 l 0.055,-0.039 v 0 l 0.055,-0.038 v 0 l 0.057,-0.037 v -5e-4 l 0.057,-0.035 v -5e-4 l 0.059,-0.034 v -5e-4 l 0.059,-0.033 v 0 l 0.061,-0.032 v 0 l 0.061,-0.03 v -5e-4 l 0.062,-0.029 v 0 l 0.063,-0.027 v 0 l 0.064,-0.026 v 0 l 0.064,-0.024 v -5e-4 l 0.065,-0.023 v 0 l 0.065,-0.021 v 0 l 0.067,-0.02 v 0 l 0.067,-0.018 v 0 l 0.068,-0.016 v -5e-4 l 0.069,-0.015 v 0 l 0.069,-0.013 v 0 l 0.07,-0.011 v -5e-4 l 0.07,-0.01 v 0 l 0.071,-0.01 v 0 l 0.071,-0.01 v -5e-4 h 0.072 v -5e-4 h 0.072 v 0 h 0.072 v 0 h 11.2809 c 1.5515,0 2.8203,1.2552 2.8203,2.7896 0,1.5344 -1.2688,2.7896 -2.8203,2.7896 h -8.4605 v 8.3688 c 0,1.5344 -1.2689,2.7896 -2.8204,2.7896 -1.5515,0 -2.8203,-1.2552 -2.8203,-2.7896 z"
                        style={{ fill: "#092c5c", fillRule: "evenodd" }}
                        id="path44"
                      />
                      <g id="Layer1052">
                        <path
                          d="m 1104.7843,1678.2309 c 0.012,0.033 0.012,0.1258 0.014,0.1675 0,0.056 0,0.1144 0.01,0.1675 -0.067,0.056 -0.081,0.1118 -0.081,0.1736 0,0.059 0.01,0.1204 0.011,0.1822 0,0.099 0.033,0.7596 0.049,0.8069 0.01,0.028 0.029,0.067 0.049,0.094 0.1507,0.1916 0.4371,0.061 0.4313,-0.1753 0,-0.1901 -0.031,-0.5139 -0.042,-0.7239 0,-0.063 0,-0.1202 -0.01,-0.1825 0,-0.035 0,-0.053 -0.01,-0.089 -0.014,-0.041 -0.034,-0.063 -0.074,-0.081 l -0.023,-0.3561 c 0.033,-0.019 0.01,0 0.034,-0.01 0.6672,-0.1196 1.1999,-0.7161 1.2498,-1.3876 l 0.01,-0.2 c -5e-4,-0.106 -0.038,-0.2879 -0.071,-0.3962 -0.1942,-0.6251 -0.7523,-1.0745 -1.408,-1.0982 l -0.067,-6e-4 c -0.053,10e-5 -0.079,0 -0.1333,0 -0.1143,0.013 -0.128,0.01 -0.2641,0.04 -0.5808,0.1459 -1.0432,0.6306 -1.1587,1.2191 -0.025,0.126 -0.017,0.1708 -0.027,0.2671 -0.011,0.1015 0.01,0.07 0,0.1329 -0.01,0.08 0.071,0.3913 0.098,0.4609 0.192,0.4982 0.6132,0.8523 1.1387,0.9595 l 0.2342,0.028 c 0.017,3e-4 0.021,0 0.036,0 z"
                          style={{ fill: "#7d8240", fillRule: "evenodd" }}
                          id="path58"
                        />
                        <path
                          d="m 1103.8013,1675.8961 c -0.1387,0.178 -0.2153,0.3854 -0.248,0.5839 l -0.014,0.117 c -0.01,0.1055 -0.01,0.1225 0.01,0.2323 l 0.03,0.1647 c 0.025,0.097 0.049,0.1891 0.1057,0.2887 0.1809,0.3197 0.4714,0.5773 0.8377,0.6537 0.073,0.015 0.1543,0.035 0.2285,0.037 l 0.2875,-0.012 0.17,-0.035 c 0.075,-0.02 0.1527,-0.051 0.2287,-0.088 0.3978,-0.1958 0.6837,-0.637 0.7013,-1.0708 l -0.015,-0.2871 c -0.023,-0.1356 -0.064,-0.2743 -0.1294,-0.3986 -0.2146,-0.4073 -0.6094,-0.6675 -1.0614,-0.6938 h -0.1161 c -0.022,0 -0.035,0 -0.056,0 -0.03,0 -0.027,0 -0.061,0 -0.3658,0.064 -0.6456,0.1825 -0.8964,0.5046 z"
                          style={{ fill: "#f2f1ec", fillRule: "evenodd" }}
                          id="path59"
                        />
                        <g id="Layer1053">
                          <path
                            d="m 1104.7989,1677.2866 h -0.1344 l -0.01,-0.02 c -0.043,5e-4 -0.2768,-0.01 -0.2959,-2e-4 -0.012,0.01 -0.022,0.063 -7e-4,0.079 0.012,0.01 0.39,0.016 0.4307,0.012 0,0.071 -0.017,0.1155 -0.088,0.1135 l -0.41,-0.011 c -0.078,0 -0.082,0.054 -0.083,0.1273 l 1.071,0.029 c 0,-0.1001 -3e-4,-0.1286 -0.1061,-0.1323 l -0.1561,-0.2771 c -0.03,-0.053 -0.078,-0.087 -0.1426,-0.062 -0.064,0.025 -0.071,0.064 -0.077,0.1441 z"
                            style={{ fill: "#092c5c", fillRule: "evenodd" }}
                            id="path60"
                          />
                          <path
                            d="m 1104.9312,1675.9404 c -0.052,-0.016 -0.052,0.021 -0.071,0.059 -0.016,0.031 -0.03,0.064 -0.046,0.096 -0.032,0.064 -0.061,0.1303 -0.091,0.1931 -0.033,0.069 -0.1081,0.2181 -0.1365,0.2848 -0.028,0.066 -0.035,0.06 -4e-4,0.097 -0.01,0.01 -0.053,0.095 -0.054,0.1182 0.071,0.019 0.1339,0.084 0.1547,0.048 l 0.046,-0.098 c 0.025,0 0.038,0 0.05,-0.022 l 0.1205,-0.2542 c 0.032,-0.064 0,-0.028 -0.01,-0.1052 -0.01,-0.043 0.01,-0.084 0.029,-0.1136 0.07,-0.09 0.1111,-0.041 0.1311,-0.091 0.021,-0.052 0.061,-0.099 0.045,-0.1314 l -0.017,-0.021 c 0.01,-0.01 0.063,-0.1288 0.066,-0.1383 0.018,0 0.014,0.01 0.026,0 0.01,-0.01 0.011,-0.018 0.01,-0.029 -0.01,-0.023 -0.1566,-0.083 -0.1583,-0.083 -0.025,-0.01 -0.044,0.014 -0.037,0.035 0.01,0.017 0.019,0 -0.01,0.052 -0.013,0.025 -0.038,0.09 -0.053,0.1076 z"
                            style={{ fill: "#092c5c", fillRule: "evenodd" }}
                            id="path61"
                          />
                          <path
                            d="m 1105.148,1676.4832 c 0.055,0.052 0.086,0.075 0.1257,0.1559 0.034,0.07 0.049,0.1591 0.037,0.2451 -0.017,0.1214 -0.098,0.2385 -0.2028,0.2988 -0.014,0.01 -0.034,0.016 -0.047,0.027 0,0.015 0.071,0.1263 0.075,0.1296 0.08,-0.03 0.1984,-0.1467 0.2447,-0.2263 0.045,-0.078 0.062,-0.1226 0.075,-0.2166 0.02,-0.1399 -0.014,-0.2724 -0.085,-0.3787 -0.01,-0.011 -0.011,-0.018 -0.018,-0.028 -0.01,-0.01 -0.01,-0.01 -0.01,-0.014 -0.01,-0.01 -0.01,-0.01 -0.012,-0.015 l -0.057,-0.06 c -0.01,-0.01 -0.01,-0.01 -0.013,-0.01 -0.012,-0.01 -0.015,-0.015 -0.027,-0.024 0,0.01 5e-4,0 0,0.01 -0.023,0.047 0,0.038 -0.051,0.087 -0.012,0.013 -0.015,0.012 -0.029,0.022 z"
                            style={{ fill: "#092c5c", fillRule: "evenodd" }}
                            id="path62"
                          />
                          <path
                            d="m 1105.0433,1676.2067 c -0.088,0.015 -0.1432,0.113 -0.092,0.2021 0.067,0.1164 0.269,0.061 0.2443,-0.091 -0.013,-0.081 -0.092,-0.1216 -0.1523,-0.1114 z"
                            style={{ fill: "#092c5c", fillRule: "evenodd" }}
                            id="path63"
                          />
                          <path
                            d="m 1104.2435,1676.9769 c 0.016,0.014 0.4989,0.2191 0.5093,0.2195 0.015,-0.016 0.033,-0.057 0.038,-0.08 -0.029,-0.01 -0.3743,-0.1613 -0.4374,-0.1878 -0.017,-0.01 -0.058,-0.03 -0.075,-0.024 -0.013,0 -0.034,0.053 -0.035,0.071 z"
                            style={{ fill: "#092c5c", fillRule: "evenodd" }}
                            id="path64"
                          />
                          <path
                            d="m 1104.9036,1677.2076 c -0.045,0.015 -0.027,0.091 0.027,0.074 0.04,-0.012 0.03,-0.093 -0.027,-0.074 z"
                            style={{ fill: "#092c5c", fillRule: "evenodd" }}
                            id="path65"
                          />
                        </g>
                        <path
                          d="m 1110.7497,1679.0497 c -0.1901,-0.052 -0.3252,0.07 -0.7042,-0.1167 -0.424,-0.2085 -0.6663,-1.014 -0.046,-1.3872 0.2218,-0.133 0.3849,-0.1251 0.5508,0.02 0.1243,0.1089 -0.01,0.097 0.1505,0.067 -0.1342,-0.3586 -0.5712,-0.6984 -0.9102,-1.5382 -0.2576,-0.6379 -0.7521,-0.4653 -1.1812,-0.6466 -0.2047,-0.087 -0.4586,-0.2969 -0.4557,-0.5342 0.01,-0.4582 0.8093,-0.2693 1.0078,-1.1266 0.053,-0.228 0.1305,-0.5045 0,-0.7042 l -1.3972,0.3252 c -0.5404,0.2219 -0.8373,0.6792 -0.8635,1.1245 -0.03,0.5025 0.3836,0.6684 0.4102,1.4123 0.028,0.7505 -0.3969,1.7649 -0.2526,2.6438 0.1805,1.0958 1.3025,1.6244 2.2031,1.3718 0.4211,-0.118 1.1646,-0.5929 1.491,-0.9111 z"
                          style={{
                            fill: "#7d8240",
                            fillRule: "evenodd",
                            stroke: "#f2f1ec",
                            strokeWidth: 0.216,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeDasharray: "none",
                          }}
                          id="path66"
                        />
                        <path
                          d="m 1108.2393,1674.8786 c 0.256,0.7109 0.8068,0.4307 1.3196,0.7351 0.2077,0.123 0.2673,0.2843 0.3624,0.5087 0.2022,0.4782 0.424,0.7592 0.728,1.1716 0.1596,0.2168 0.1609,0.3315 0.071,0.5266 -0.036,0.078 -0.087,0.153 -0.1284,0.2422 -0.1505,0.3215 -0.1476,0.1852 -0.1768,0.1856 0.022,-0.2218 0.3161,-0.4541 -0.012,-0.663 -0.088,-0.037 -0.059,-0.053 -0.1922,-0.013 -0.4986,0.1497 -0.705,0.8522 -0.1451,1.2308 0.5216,0.3528 1.0336,0.017 1.6828,-0.3682 1.2288,-0.7288 2.091,-1.6732 1.3622,-2.9157 -0.389,-0.6633 -0.9185,-0.8251 -1.3939,-0.9631 l -0.7751,-0.1289 c -0.6025,-0.098 -0.1326,-0.5157 -1.2216,-1.1966 -0.096,-0.06 -0.2852,-0.1518 -0.379,-0.028 -0.089,0.1163 0.073,0.6746 -0.3348,1.1349 -0.2527,0.286 -0.5296,0.2539 -0.7668,0.5416 z"
                          style={{
                            fill: "#092c5c",
                            fillRule: "evenodd",
                            stroke: "#f2f1ec",
                            strokeWidth: 0.216,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeDasharray: "none",
                          }}
                          id="path67"
                        />
                        <path
                          d="m 1106.8042,1669.5429 c -0.7184,0.758 -0.5308,1.5736 0.052,2.3141 0.5858,0.7455 1.5785,0.9719 2.2723,0.2735 0.517,-0.5208 0.5154,-1.6419 -0.087,-2.3324 -0.5716,-0.655 -1.5373,-0.9944 -2.2373,-0.2552 z"
                          style={{
                            fill: "#7d8240",
                            fillRule: "evenodd",
                            stroke: "#f2f1ec",
                            strokeWidth: 0.216,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeDasharray: "none",
                          }}
                          id="path68"
                        />
                        <path
                          d="m 1103.7062,1671.5313 c -0.8739,0.8815 -0.059,2.7098 1.368,2.8182 0.3832,0.029 0.8815,-0.061 1.2209,-0.4453 1.2287,-1.3914 -1.1667,-3.8072 -2.5889,-2.3729 z"
                          style={{
                            fill: "#092c5c",
                            fillRule: "evenodd",
                            stroke: "#f2f1ec",
                            strokeWidth: 0.216,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeDasharray: "none",
                          }}
                          id="path69"
                        />
                        <path
                          d="m 1110.776,1670.308 c -1.057,0.9886 -0.4349,2.8019 0.7697,3.1013 0.3373,0.084 0.8714,0.023 1.2358,-0.3407 0.5295,-0.5287 0.6671,-1.5452 0.191,-2.304 -0.4924,-0.7839 -1.4802,-1.1266 -2.1965,-0.4566 z"
                          style={{
                            fill: "#092c5c",
                            fillRule: "evenodd",
                            stroke: "#f2f1ec",
                            strokeWidth: 0.216,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeDasharray: "none",
                          }}
                          id="path70"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </Link>
      </div>

      {/* Dropdown Section */}
      <div>
        <MyLinks
          path="/diagnostic"
          LName="Home"
          LIcon={<MdHome />}
          customClass={`flex sm:hidden items-center gap-3 sm:text-3xl text-lg w-full px-4 py-2 ${
            isScrolled
              ? " rounded-lg !bg-white text-teal-400 shadow-lg border border-teal-400 hover:!bg-blue-950 hover:!text-teal-400"
              : "!text-blue-950   hover:shadow-blue-950 hover:shadow-inner px-4 py-2 rounded-lg "
          }  `}
        />
      </div>
      <div>
        <SidebarDropdown dropFunc={handleLinkClick} />
      </div>

      {/* Links */}
      <div>
        <MyLinks
          path="/diagnostic/Appointment"
          customClass={`flex items-center gap-3 w-full px-4 py-2 text-left text-lg  sm:text-3xl font-black hover:shadow-blue-950 hover:shadow-inner rounded-lg ${
            isScrolled
              ? "!bg-white text-teal-400 shadow-lg border border-teal-400 hover:!bg-blue-950 hover:!text-teal-400"
              : "bg-transparent !text-blue-950"
          } transition-all ease-linear duration-300`}
          LName="Appointment"
          LIcon={<IoCalendar />}
          LFunc={handleLinkClick}
        />
      </div>

      {user && (
        <div>
          <MyLinks
            path="/diagnostic/packages"
            customClass={`flex items-center gap-3 w-full px-4 py-2 text-left text-lg  sm:text-3xl font-black hover:shadow-blue-950 hover:shadow-inner rounded-lg ${
              isScrolled
                ? "!bg-white text-teal-400 shadow-lg border border-teal-400 hover:!bg-blue-950 hover:!text-teal-400"
                : "bg-transparent !text-blue-950"
            } transition-all ease-linear duration-300`}
            LName="Test Packages"
            LIcon={<IoCalendar />}
            LFunc={handleLinkClick}
          />
        </div>
      )}
      <div>
        <MyLinks
          path="/diagnostic/blogs"
          customClass={`flex items-center gap-3 w-full px-4 py-2 text-left text-lg  sm:text-3xl font-black hover:shadow-blue-950 hover:shadow-inner rounded-lg ${
            isScrolled
              ? "!bg-white border border-teal-400 shadow-lg text-teal-400 hover:!bg-blue-950 hover:!text-teal-400"
              : "bg-transparent !text-blue-950"
          } transition-all ease-linear duration-300`}
          LName="Blogs"
          LIcon={<ImBlogger />}
          LFunc={handleLinkClick}
        />
      </div>
      <div>
        <MyLinks
          path="/diagnostic/offers"
          customClass={`flex items-center gap-3 w-full px-4 py-2 text-left text-lg  sm:text-3xl font-black hover:shadow-blue-950 hover:shadow-inner rounded-lg ${
            isScrolled
              ? "!bg-white text-teal-400 shadow-lg border border-teal-400 hover:!bg-blue-950 hover:!text-teal-400"
              : "bg-transparent !text-blue-950"
          } transition-all ease-linear duration-300`}
          LName="Offers"
          LIcon={<TbTagsFilled />}
          LFunc={handleLinkClick}
        />
      </div>
      <div>
        <MyLinks
          path="/diagnostic/Career"
          customClass={`flex items-center gap-3 w-full px-4 py-2 text-left text-lg  sm:text-3xl font-black hover:shadow-blue-950 hover:shadow-inner rounded-lg ${
            isScrolled
              ? "!bg-white text-teal-400 shadow-lg border border-teal-400 hover:!bg-blue-950 hover:!text-teal-400"
              : "bg-transparent !text-blue-950"
          } transition-all ease-linear duration-300`}
          LName="Career"
          LIcon={<FaUserTie />}
          LFunc={handleLinkClick}
        />
      </div>
      <div>
        <MyLinks
          path="/diagnostic/Contact"
          LName="Contact Us"
          LIcon={<MdPermContactCalendar />}
          customClass={`flex sm:hidden w-full px-4 py-2 items-center gap-3 text-lg rounded-lg ${
            isScrolled
              ? "!bg-white text-teal-400 shadow-lg border border-teal-400 hover:!bg-blue-950 hover:!text-teal-400 "
              : "!text-blue-950   hover:shadow-blue-950 hover:shadow-inner px-4 py-2 rounded-lg"
          }  `}
        />
      </div>
      <div>
        <MyLinks
          path="/diagnostic/About"
          LName="About Us"
          LIcon={<BsFillPatchExclamationFill size={16} />}
          customClass={`flex sm:hidden text-lg w-full px-4 py-2 items-center gap-3 ${
            isScrolled
              ? "rounded-lg !bg-white text-teal-400 shadow-lg border border-teal-400 hover:!bg-blue-950 hover:!text-teal-400"
              : "!text-blue-950  hover:shadow-blue-950 hover:shadow-inner px-4 py-2 rounded-lg"
          }  `}
        />
      </div>

      <div className="flex flex-col justify-between items-center fixed bottom-10 left-0 sm:w-80 w-60 gap-3 ">
        <h1
          className={`sm:text-3xl text-lg font-medium underline  ${
            isScrolled ? "text-teal-400" : ""
          }`}
        >
          Social Media
        </h1>

        <ul className=" flex justify-evenly w-full">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className={`text-blue-950  hover:text-teal-400 ${
                isScrolled ? "text-teal-400 hover:!text-blue-950" : ""
              } transition-all ease-linear duration-300`}
            >
              <span className="sr-only">Facebook</span>
              <RiFacebookBoxFill className="sm:w-8 sm:h-8 w-6 h-6" />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/fortius_diagnostics_nagpada?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              rel="noreferrer"
              target="_blank"
              className={`text-blue-950  hover:text-teal-400 ${
                isScrolled ? "text-teal-400 hover:!text-blue-950" : ""
              } transition-all ease-linear duration-300`}
            >
              <span className="sr-only">Instagram</span>
              <RiInstagramFill className="sm:w-8 sm:h-8 w-6 h-6" />
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className={`text-blue-950  hover:text-teal-400 ${
                isScrolled ? "text-teal-400 hover:!text-blue-950" : ""
              } transition-all ease-linear duration-300`}
            >
              <span className="sr-only">Twitter</span>
              <RiTwitterXFill className="sm:w-8 sm:h-8 w-6 h-6" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/company/fortius-diagnostic-centre"
              rel="noreferrer"
              target="_blank"
              className={`text-blue-950  hover:text-teal-400 ${
                isScrolled ? "text-teal-400 hover:!text-blue-950" : ""
              } transition-all ease-linear duration-300`}
            >
              <span className="sr-only">Linkedin</span>
              <RiLinkedinBoxFill className="sm:w-8 sm:h-8 w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
