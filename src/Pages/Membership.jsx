// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaCheckCircle, FaTimesCircle, FaCrown } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const API_URL = import.meta.env.VITE_API_URL;

// const MembershipPage = () => {
//   const [plans, setPlans] = useState([]);
//   const [userMembership, setUserMembership] = useState(null);
//   const [testPackages, setTestPackages] = useState([]);
//   const token = localStorage.getItem("accessToken");

//   useEffect(() => {
//     // Fetch Membership Plans
//     axios
//       .get(`${API_URL}/api/membership/plans/`)
//       .then((response) => {
//         setPlans(response.data);
//       })
//       .catch((error) => console.error("Error fetching plans:", error));

//     // Fetch User Membership Status
//     if (token) {
//       axios
//         .get(`${API_URL}/api/membership/status/`, {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((response) => setUserMembership(response.data))
//         .catch((error) =>
//           console.error("Error fetching user membership:", error),
//         );
//     }

//     // Fetch Test Packages
//     if (token) {
//       axios
//         .get(`${API_URL}/api/packages/`, {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((response) => setTestPackages(response.data))
//         .catch((error) =>
//           console.error("Error fetching test packages:", error),
//         );
//     }
//   }, [token]);

//   const handleSubscribe = (planId) => {
//     axios
//       .post(
//         `${API_URL}/api/membership/subscribe/`,
//         { plan_id: planId },
//         { headers: { Authorization: `Bearer ${token}` } },
//       )
//       .then((response) => {
//         alert("Subscription Successful!");
//         setUserMembership({
//           plan: response.data.plan,
//           end_date: response.data.end_date,
//         });
//       })
//       .catch((error) => console.error("Error subscribing:", error));
//   };

//   const handleUnsubscribe = () => {
//     axios
//       .delete(`${API_URL}/api/membership/unsubscribe/`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then(() => {
//         alert("Unsubscribed Successfully!");
//         setUserMembership(null);
//       })
//       .catch((error) => console.error("Error unsubscribing:", error));
//   };

//   return (
//     <div className="p-8 pt-32 bg-[url('./assets/New_teal.jpg')] bg-no-repeat bg-cover">
//       <div className="max-w-7xl mx-auto space-y-12">
//         {/* Membership Status Section */}
//         {userMembership ? (
//           <section className=" p-8 bg-teal-50 rounded-xl shadow-2xl text-blue-950">
//             <h2 className="text-4xl font-bold text-teal-400 mb-6 flex items-center">
//               <FaCrown className=" mr-3" /> Your Active Membership
//             </h2>
//             <div className="space-y-4">
//               <p className="text-xl ">
//                 <span className="font-semibold">Plan:</span>{" "}
//                 {userMembership.plan}
//               </p>
//               <p className="text-lg ">
//                 <span className="font-semibold">Expires on:</span>{" "}
//                 {userMembership.end_date}
//               </p>
//               <p className="text-lg ">
//                 <span className="font-semibold">Discount:</span>{" "}
//                 {userMembership.discount_percentage}%
//               </p>
//             </div>

//             <div className="mt-6">
//               <button
//                 className="w-full bg-red-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
//                 onClick={handleUnsubscribe}
//               >
//                 Unsubscribe
//               </button>
//             </div>

//             {/* Membership Benefits */}
//             <div className="mt-8 space-y-4">
//               <h3 className="text-2xl text-teal-400">Membership Benefits</h3>
//               <ul className="list-none space-y-2 ">
//                 <li className="flex items-center">
//                   <FaCheckCircle className="text-teal-400 mr-2" /> Exclusive
//                   Discounts
//                 </li>
//                 <li className="flex items-center">
//                   <FaCheckCircle className="text-teal-400 mr-2" /> Priority
//                   Booking
//                 </li>
//                 <li className="flex items-center">
//                   <FaCheckCircle className="text-teal-400 mr-2" /> Free
//                   Consultation Calls
//                 </li>
//               </ul>
//             </div>

//             {/* Display Test Packages with Discounts */}
//             <div className="mt-8">
//               <h3 className="text-2xl text-teal-400 mb-6">
//                 Exclusive Test Packages
//               </h3>
//               <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
//                 {testPackages.map((packages) => (
//                   <div
//                     key={packages.id}
//                     className=" bg-teal-100 border border-teal-400 rounded-xl shadow-xl p-6 transform transition-all hover:scale-105 duration-300 ease-linear"
//                   >
//                     <h3 className="text-2xl text-teal-400 font-semibold">
//                       {packages.name}
//                     </h3>
//                     <p className="text-lg  mt-2">₹{packages.original_price}</p>
//                     <p className="text-lg  mt-2">
//                       Discounted Price:{" "}
//                       <span className="text-teal-400">
//                         ₹{packages.discounted_price.toFixed(2)}
//                       </span>
//                     </p>
//                     <p className="text-sm  mt-2">{packages.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         ) : (
//           // Membership Plans Section for Non-Subscribers
//           <section className="text-center space-y-8 py-20">
//             <h2 className="text-3xl font-bold text-blue-950">
//               Choose Your Membership Plan
//             </h2>

//             <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
//               {plans.map((plan) => (
//                 <div
//                   key={plan.id}
//                   className=" bg-teal-400/30 backdrop-blur-lg rounded-xl shadow-xl p-6 transform transition-all hover:scale-105 duration-300 ease-linear"
//                 >
//                   <h3 className="text-2xl text-blue-950 font-semibold ">
//                     {plan.name}
//                   </h3>
//                   <p className="text-lg text-teal-50 mt-2">₹{plan.price}</p>
//                   <p className="text-lg text-blue-950 mt-2">
//                     Discount:{" "}
//                     <span className="text-teal-50">
//                       {plan.discount_percentage}%
//                     </span>
//                   </p>

//                   <button
//                     onClick={() => handleSubscribe(plan.id)}
//                     className="mt-4 w-full bg-teal-400 text-white py-2 rounded-lg hover:bg-teal-500 transition duration-300"
//                   >
//                     Subscribe
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MembershipPage;

import { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaCrown } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

const MembershipPage = () => {
  const [plans, setPlans] = useState([]);
  const [userMembership, setUserMembership] = useState(null);
  const [testPackages, setTestPackages] = useState([]);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    // Fetch Membership Plans
    axios
      .get(`${API_URL}/api/membership/plans/`)
      .then((res) => setPlans(res.data))
      .catch((err) => console.error(err));

    if (token) {
      // Fetch User Membership
      axios
        .get(`${API_URL}/api/membership/status/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUserMembership(res.data))
        .catch((err) => console.error(err));

      // Fetch Test Packages
      axios
        .get(`${API_URL}/api/packages/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setTestPackages(res.data))
        .catch((err) => console.error(err));
    }
  }, [token]);

  const handleSubscribe = (planId) => {
    axios
      .post(
        `${API_URL}/api/membership/subscribe/`,
        { plan_id: planId },
        { headers: { Authorization: `Bearer ${token}` } },
      )
      .then((res) => setUserMembership(res.data))
      .catch((err) => console.error(err));
  };

  const handleUnsubscribe = () => {
    axios
      .delete(`${API_URL}/api/membership/unsubscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setUserMembership(null))
      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-[url('./assets/New_teal.jpg')] bg-cover bg-no-repeat pt-32 pb-16 px-4 sm:px-6 lg:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        {userMembership ? (
          // Active Membership Section
          <section className="bg-teal-50/90 rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 text-blue-950 space-y-6">
            <h2 className="flex items-center text-3xl sm:text-4xl md:text-5xl font-bold text-teal-400">
              <FaCrown className="mr-3" /> Your Active Membership
            </h2>

            <div className="space-y-2 text-lg sm:text-xl">
              <p>
                <span className="font-semibold">Plan:</span>{" "}
                {userMembership.plan}
              </p>
              <p>
                <span className="font-semibold">Expires on:</span>{" "}
                {userMembership.end_date}
              </p>
              <p>
                <span className="font-semibold">Discount:</span>{" "}
                {userMembership.discount_percentage}%
              </p>
            </div>

            <button
              onClick={handleUnsubscribe}
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Unsubscribe
            </button>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl sm:text-3xl text-teal-400 font-semibold mb-4">
                Membership Benefits
              </h3>
              <ul className="space-y-2">
                {[
                  "Exclusive Discounts",
                  "Priority Booking",
                  "Free Consultation Calls",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <FaCheckCircle className="text-teal-400 mr-2" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Test Packages */}
            {testPackages.length > 0 && (
              <div>
                <h3 className="text-2xl sm:text-3xl text-teal-400 font-semibold mb-6">
                  Exclusive Test Packages
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {testPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="bg-teal-100/90 border border-teal-400 rounded-xl shadow-xl p-4 sm:p-6 transition-transform transform hover:scale-105 duration-300"
                    >
                      <h4 className="text-xl sm:text-2xl font-semibold text-teal-400">
                        {pkg.name}
                      </h4>
                      <p className="mt-2">₹{pkg.original_price}</p>
                      <p className="mt-1 text-teal-400 font-semibold">
                        Discounted: ₹{pkg.discounted_price.toFixed(2)}
                      </p>
                      <p className="mt-2 text-sm">{pkg.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ) : (
          // Membership Plans for Non-Subscribers
          <section className="text-center space-y-8 py-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950">
              Choose Your Membership Plan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-teal-400/30 backdrop-blur-lg rounded-xl shadow-xl p-6 transition-transform transform hover:scale-105 duration-300"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-blue-950">
                    {plan.name}
                  </h3>
                  <p className="text-lg text-teal-50 mt-2">₹{plan.price}</p>
                  <p className="text-lg text-blue-950 mt-2">
                    Discount:{" "}
                    <span className="text-teal-50">
                      {plan.discount_percentage}%
                    </span>
                  </p>
                  <button
                    onClick={() => handleSubscribe(plan.id)}
                    className="mt-4 w-full bg-teal-400 hover:bg-teal-500 text-white py-2 rounded-lg transition duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MembershipPage;
