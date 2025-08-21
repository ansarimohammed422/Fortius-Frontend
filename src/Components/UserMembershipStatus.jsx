// import { useEffect, useState } from "react";
// import axios from "axios";

// const UserMembershipStatus = (props) => {
// //   const [membership, setMembership] = useState(null);
//   const token = localStorage.getItem("accessToken");

//   useEffect(() => {
//     if (token) {
//       axios
//         .get("http://127.0.0.1:8000/api/membership/status/", {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((response) => props.setMembership(response.data))
//         .catch((error) => console.error("Error fetching membership:", error));
//         console.log("Membership: ",props.membership)
//     }
//     console.log("Membership: ",props.membership)

//   }, []);

//   const handleUnsubscribe = () => {
//     axios
//       .delete("http://127.0.0.1:8000/api/membership/unsubscribe/", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then(() => {
//         alert("Unsubscribed Successfully!");
//         props.setMembership(null);
//         props.setUserMembership(null)
//       })
//       .catch((error) => console.error("Error unsubscribing:", error));
//   };

//   if (!props.UserMembership) return null; // Don't show component if no membership

//   return (
//     <div className="p-8 bg-white h-fit flex flex-col items-center">
//       <h2 className="text-3xl font-bold text-blue-950 mb-6">Your Membership Status</h2>

//       <div className="w-full max-w-md bg-teal-50 shadow-lg rounded-lg p-6 border border-teal-400">
//         {props.membership ? (

//           <div>
//             <p className="text-xl font-semibold text-gray-800 mb-2">
//               Plan: <span className="text-teal-400">{props.membership.plan}</span>
//             </p>

//             <p className="text-lg text-gray-600">
//               Discount: <span className="font-medium">{props.membership.discount}%</span>
//             </p>
//             <p className="text-lg text-gray-600">
//               Start Date: <span className="font-medium">{props.membership.start_date}</span>
//             </p>
//             <p className="text-lg text-gray-600">
//               Expires on: <span className="font-medium">{props.membership.end_date}</span>
//             </p>
//             <div className="mt-4 flex justify-between items-center">
//               <span
//                 className={`px-3 py-1 text-sm font-semibold text-white rounded-full ${
//                   props.membership.status === "Approved" ? "bg-green-500" : "bg-red-500"
//                 }`}
//               >
//                 {props.membership.status}
//               </span>
//               <button
//                 className="bg-red-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
//                 onClick={handleUnsubscribe}
//               >
//                 Unsubscribe
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="text-center">
//             <p className="text-lg text-gray-700 font-medium">No active membership</p>
//             <span className="mt-2 px-3 py-1 text-sm font-semibold text-white bg-gray-500 rounded-full">
//               Inactive
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserMembershipStatus;

// import { useEffect } from "react";
// import axios from "axios";
// import { FaCheckCircle, FaTimesCircle, FaCrown } from "react-icons/fa";
// import { Link } from "react-router-dom";
// const API_URL = import.meta.env.VITE_API_URL;

// const UserMembershipStatus = (props) => {
//   const token = localStorage.getItem("accessToken");

//   useEffect(() => {
//     if (token) {
//       axios
//         .get(`${API_URL}/api/membership/status/`, {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((response) => props.setMembership(response.data))
//         .catch((error) => console.error("Error fetching membership:", error));
//     }
//   }, []);

//   const handleUnsubscribe = () => {
//     axios
//       .delete(`${API_URL}/api/membership/unsubscribe/`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then(() => {
//         alert("Unsubscribed Successfully!");
//         props.setMembership(null);
//         props.setUserMembership(null);
//       })
//       .catch((error) => console.error("Error unsubscribing:", error));
//   };

//   if (!props.UserMembership) return null;

//   return (
//     <section className="p-12 bg-white">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Left Side - Membership Details */}
//         <div className="p-8 bg-teal-50 shadow-md rounded-xl border border-teal-400">
//           <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center">
//             <FaCrown className="text-teal-400 mr-3" /> Your Membership
//           </h2>

//           {props.membership ? (
//             <div>
//               <p className="text-xl font-semibold text-gray-800">
//                 Plan:{" "}
//                 <span className="text-teal-400">{props.membership.plan}</span>
//               </p>
//               <p className="text-lg text-gray-600">
//                 Discount:{" "}
//                 <span className="font-medium">
//                   {props.membership.discount}%
//                 </span>
//               </p>
//               <p className="text-lg text-gray-600">
//                 Start Date:{" "}
//                 <span className="font-medium">
//                   {props.membership.start_date}
//                 </span>
//               </p>
//               <p className="text-lg text-gray-600">
//                 Expires on:{" "}
//                 <span className="font-medium">{props.membership.end_date}</span>
//               </p>

//               {/* Progress Bar */}
//               <div className="mt-4">
//                 <p className="text-sm text-gray-700">Membership Progress</p>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div
//                     className="bg-teal-400 h-2.5 rounded-full"
//                     style={{ width: "75%" }}
//                   ></div>
//                 </div>
//               </div>

//               {/* Membership Benefits */}
//               <div className="mt-6 space-y-2">
//                 <p className="text-lg font-semibold text-gray-800">
//                   Membership Benefits:
//                 </p>
//                 <ul className="list-none space-y-2">
//                   <li className="flex items-center text-gray-700">
//                     <FaCheckCircle className="text-teal-400 mr-2" /> Exclusive
//                     Discounts
//                   </li>
//                   <li className="flex items-center text-gray-700">
//                     <FaCheckCircle className="text-teal-400 mr-2" /> Priority
//                     Booking
//                   </li>
//                   <li className="flex items-center text-gray-700">
//                     <FaCheckCircle className="text-teal-400 mr-2" /> Free
//                     Consultation Calls
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           ) : (
//             <div className="text-center">
//               <p className="text-lg text-gray-700 font-medium">
//                 No active membership
//               </p>
//               <span className="mt-2 px-3 py-1 text-sm font-semibold text-white bg-gray-500 rounded-full">
//                 Inactive
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Right Side - Actions */}
//         <div className="flex flex-col items-center justify-center space-y-6">
//           {props.membership ? (
//             <>
//               <span
//                 className={`px-6 py-2 text-lg font-semibold text-white rounded-full ${
//                   props.membership.status === "Approved"
//                     ? "bg-green-500"
//                     : "bg-red-500"
//                 }`}
//               >
//                 {props.membership.status}
//               </span>

//               <button
//                 className="bg-red-500 text-white font-medium px-8 py-3 rounded-lg hover:bg-red-600 transition-all duration-300"
//                 onClick={handleUnsubscribe}
//               >
//                 Unsubscribe
//               </button>

//               <Link
//                 to="/membership"
//                 className="bg-teal-500 text-white font-medium px-8 py-3 rounded-lg hover:bg-teal-600 transition-all duration-300"
//               >
//                 Know More
//               </Link>
//             </>
//           ) : (
//             <div className="text-center">
//               <p className="text-lg font-medium text-gray-700">
//                 Want to unlock benefits?
//               </p>
//               <button className="bg-teal-500 text-white font-medium px-8 py-3 rounded-lg hover:bg-teal-600 transition-all duration-300">
//                 Get Membership
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UserMembershipStatus;

import { useEffect } from "react";
import axios from "axios";
import { FaCheckCircle, FaTimesCircle, FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const UserMembershipStatus = (props) => {
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      axios
        .get(`${API_URL}/api/membership/status/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => props.setMembership(response.data))
        .catch((error) => console.error("Error fetching membership:", error));
    }
  }, []);

  const handleUnsubscribe = () => {
    axios
      .delete(`${API_URL}/api/membership/unsubscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        alert("Unsubscribed Successfully!");
        props.setMembership(null);
        props.setUserMembership(null);
      })
      .catch((error) => console.error("Error unsubscribing:", error));
  };

  if (!props.UserMembership) return null;

  return (
    <section className="p-6 sm:p-8 md:p-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Side - Membership Details */}
        <div className="p-6 sm:p-8 md:p-8 bg-teal-50 shadow-md rounded-xl border border-teal-400">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-blue-950 mb-6 flex items-center">
            <FaCrown className="text-teal-400 mr-2 sm:mr-3" /> Your Membership
          </h2>

          {props.membership ? (
            <div className="space-y-3 sm:space-y-4">
              <p className="text-lg sm:text-xl font-semibold text-gray-800">
                Plan:{" "}
                <span className="text-teal-400">{props.membership.plan}</span>
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Discount:{" "}
                <span className="font-medium">
                  {props.membership.discount}%
                </span>
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Start Date:{" "}
                <span className="font-medium">
                  {props.membership.start_date}
                </span>
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Expires on:{" "}
                <span className="font-medium">{props.membership.end_date}</span>
              </p>

              {/* Progress Bar */}
              <div className="mt-3 sm:mt-4">
                <p className="text-sm sm:text-base text-gray-700">
                  Membership Progress
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-teal-400 h-2.5 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              {/* Membership Benefits */}
              <div className="mt-4 sm:mt-6 space-y-2">
                <p className="text-lg sm:text-xl font-semibold text-gray-800">
                  Membership Benefits:
                </p>
                <ul className="list-none space-y-2">
                  <li className="flex items-center text-gray-700 text-sm sm:text-base">
                    <FaCheckCircle className="text-teal-400 mr-2" /> Exclusive
                    Discounts
                  </li>
                  <li className="flex items-center text-gray-700 text-sm sm:text-base">
                    <FaCheckCircle className="text-teal-400 mr-2" /> Priority
                    Booking
                  </li>
                  <li className="flex items-center text-gray-700 text-sm sm:text-base">
                    <FaCheckCircle className="text-teal-400 mr-2" /> Free
                    Consultation Calls
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-2">
              <p className="text-base sm:text-lg text-gray-700 font-medium">
                No active membership
              </p>
              <span className="mt-1 px-3 py-1 text-xs sm:text-sm font-semibold text-white bg-gray-500 rounded-full">
                Inactive
              </span>
            </div>
          )}
        </div>

        {/* Right Side - Actions */}
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
          {props.membership ? (
            <>
              <span
                className={`px-5 sm:px-6 py-2 text-base sm:text-lg font-semibold text-white rounded-full ${
                  props.membership.status === "Approved"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {props.membership.status}
              </span>

              <button
                className="bg-red-500 text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-red-600 transition-all duration-300 text-sm sm:text-base"
                onClick={handleUnsubscribe}
              >
                Unsubscribe
              </button>

              <Link
                to="/membership"
                className="bg-teal-500 text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-teal-600 transition-all duration-300 text-sm sm:text-base"
              >
                Know More
              </Link>
            </>
          ) : (
            <div className="text-center space-y-2 sm:space-y-4">
              <p className="text-base sm:text-lg font-medium text-gray-700">
                Want to unlock benefits?
              </p>
              <button className="bg-teal-500 text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-teal-600 transition-all duration-300 text-sm sm:text-base">
                Get Membership
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserMembershipStatus;
