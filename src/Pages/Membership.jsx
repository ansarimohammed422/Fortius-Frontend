// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaCheckCircle, FaTimesCircle, FaCrown } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const MembershipPage = () => {
//   const [plans, setPlans] = useState([]);
//   const [userMembership, setUserMembership] = useState(null);
//   const token = localStorage.getItem("accessToken");

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/membership/plans/")
//       .then((response) => {
//         setPlans(response.data);
//       })
//       .catch((error) => console.error("Error fetching plans:", error));

//     if (token) {
//       axios
//         .get("http://127.0.0.1:8000/api/membership/status/", {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((response) => setUserMembership(response.data))
//         .catch((error) => console.error("Error fetching user membership:", error));
//     }
//   }, [token]);

//   const handleSubscribe = (planId) => {
//     axios
//       .post(
//         "http://127.0.0.1:8000/api/membership/subscribe/",
//         { plan_id: planId },
//         { headers: { Authorization: `Bearer ${token}` } }
//       )
//       .then((response) => {
//         alert("Subscription Successful!");
//         setUserMembership({ plan: response.data.plan, end_date: response.data.end_date });
//       })
//       .catch((error) => console.error("Error subscribing:", error));
//   };

//   const handleUnsubscribe = () => {
//     axios
//       .delete("http://127.0.0.1:8000/api/membership/unsubscribe/", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then(() => {
//         alert("Unsubscribed Successfully!");
//         setUserMembership(null);
//       })
//       .catch((error) => console.error("Error unsubscribing:", error));
//   };

//   return (
//     <div className="p-8 bg-gradient-to-r from-teal-500 to-blue-500 min-h-screen">
//       <div className="max-w-7xl mx-auto space-y-12">
//         {/* Membership Status Section */}
//         {userMembership ? (
//           <section className="glassmorphic-card p-8 bg-white bg-opacity-30 rounded-xl shadow-2xl">
//             <h2 className="text-4xl font-bold text-teal-400 mb-6 flex items-center">
//               <FaCrown className="text-white mr-3" /> Your Active Membership
//             </h2>
//             <div className="space-y-4">
//               <p className="text-xl text-white">
//                 <span className="font-semibold">Plan:</span> {userMembership.plan}
//               </p>
//               <p className="text-lg text-white">
//                 <span className="font-semibold">Expires on:</span> {userMembership.end_date}
//               </p>
//               <p className="text-lg text-white">
//                 <span className="font-semibold">Discount:</span> {userMembership.discount_percentage}%
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
//               <ul className="list-none space-y-2 text-white">
//                 <li className="flex items-center">
//                   <FaCheckCircle className="text-teal-400 mr-2" /> Exclusive Discounts
//                 </li>
//                 <li className="flex items-center">
//                   <FaCheckCircle className="text-teal-400 mr-2" /> Priority Booking
//                 </li>
//                 <li className="flex items-center">
//                   <FaCheckCircle className="text-teal-400 mr-2" /> Free Consultation Calls
//                 </li>
//               </ul>
//             </div>
//           </section>
//         ) : (
//           // Membership Plans Section for Non-Subscribers
//           <section className="text-center space-y-8">
//             <h2 className="text-3xl font-bold text-white">Choose Your Membership Plan</h2>

//             <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
//               {plans.map((plan) => (
//                 <div
//                   key={plan.id}
//                   className="glassmorphic-card bg-white bg-opacity-30 rounded-xl shadow-xl p-6 transform transition-all hover:scale-105"
//                 >
//                   <h3 className="text-2xl text-teal-400 font-semibold">{plan.name}</h3>
//                   <p className="text-lg text-white mt-2">₹{plan.price}</p>
//                   <p className="text-lg text-white mt-2">
//                     Discount: <span className="text-teal-400">{plan.discount_percentage}%</span>
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
import { FaCheckCircle, FaTimesCircle, FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";

const MembershipPage = () => {
  const [plans, setPlans] = useState([]);
  const [userMembership, setUserMembership] = useState(null);
  const [testPackages, setTestPackages] = useState([]);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    // Fetch Membership Plans
    axios
      .get("http://127.0.0.1:8000/api/membership/plans/")
      .then((response) => {
        setPlans(response.data);
      })
      .catch((error) => console.error("Error fetching plans:", error));

    // Fetch User Membership Status
    if (token) {
      axios
        .get("http://127.0.0.1:8000/api/membership/status/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setUserMembership(response.data))
        .catch((error) => console.error("Error fetching user membership:", error));
    }

    // Fetch Test Packages
    if (token) {
      axios
        .get("http://127.0.0.1:8000/api/packages/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setTestPackages(response.data))
        .catch((error) => console.error("Error fetching test packages:", error));
    }
  }, [token]);

  const handleSubscribe = (planId) => {
    axios
      .post(
        "http://127.0.0.1:8000/api/membership/subscribe/",
        { plan_id: planId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        alert("Subscription Successful!");
        setUserMembership({ plan: response.data.plan, end_date: response.data.end_date });
      })
      .catch((error) => console.error("Error subscribing:", error));
  };

  const handleUnsubscribe = () => {
    axios
      .delete("http://127.0.0.1:8000/api/membership/unsubscribe/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        alert("Unsubscribed Successfully!");
        setUserMembership(null);
      })
      .catch((error) => console.error("Error unsubscribing:", error));
  };

  return (
    <div className="p-8 pt-32 bg-[url('./assets/New_teal.jpg')] bg-no-repeat bg-cover">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Membership Status Section */}
        {userMembership ? (
          <section className=" p-8 bg-teal-50 rounded-xl shadow-2xl text-blue-950">
            <h2 className="text-4xl font-bold text-teal-400 mb-6 flex items-center">
              <FaCrown className=" mr-3" /> Your Active Membership
            </h2>
            <div className="space-y-4">
              <p className="text-xl ">
                <span className="font-semibold">Plan:</span> {userMembership.plan}
              </p>
              <p className="text-lg ">
                <span className="font-semibold">Expires on:</span> {userMembership.end_date}
              </p>
              <p className="text-lg ">
                <span className="font-semibold">Discount:</span> {userMembership.discount_percentage}%
              </p>
            </div>

            <div className="mt-6">
              <button
                className="w-full bg-red-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
                onClick={handleUnsubscribe}
              >
                Unsubscribe
              </button>
            </div>

            {/* Membership Benefits */}
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl text-teal-400">Membership Benefits</h3>
              <ul className="list-none space-y-2 ">
                <li className="flex items-center">
                  <FaCheckCircle className="text-teal-400 mr-2" /> Exclusive Discounts
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-teal-400 mr-2" /> Priority Booking
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-teal-400 mr-2" /> Free Consultation Calls
                </li>
              </ul>
            </div>

            {/* Display Test Packages with Discounts */}
            <div className="mt-8">
              <h3 className="text-2xl text-teal-400 mb-6">Exclusive Test Packages</h3>
              <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {testPackages.map((packages) => (
                  <div
                    key={packages.id}
                    className=" bg-teal-100 border border-teal-400 rounded-xl shadow-xl p-6 transform transition-all hover:scale-105 duration-300 ease-linear"
                  >
                    <h3 className="text-2xl text-teal-400 font-semibold">{packages.name}</h3>
                    <p className="text-lg  mt-2">₹{packages.original_price}</p>
                    <p className="text-lg  mt-2">
                      Discounted Price:{" "}
                      <span className="text-teal-400">
                        ₹{packages.discounted_price.toFixed(2)}
                      </span>
                    </p>
                    <p className="text-sm  mt-2">{packages.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          // Membership Plans Section for Non-Subscribers
          <section className="text-center space-y-8 py-20">
            <h2 className="text-3xl font-bold text-blue-950">Choose Your Membership Plan</h2>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className=" bg-teal-400/30 backdrop-blur-lg rounded-xl shadow-xl p-6 transform transition-all hover:scale-105 duration-300 ease-linear"
                >
                  <h3 className="text-2xl text-blue-950 font-semibold ">{plan.name}</h3>
                  <p className="text-lg text-teal-50 mt-2">₹{plan.price}</p>
                  <p className="text-lg text-blue-950 mt-2">
                    Discount: <span className="text-teal-50">{plan.discount_percentage}%</span>
                  </p>

                  <button
                    onClick={() => handleSubscribe(plan.id)}
                    className="mt-4 w-full bg-teal-400 text-white py-2 rounded-lg hover:bg-teal-500 transition duration-300"
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

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaCheckCircle, FaTimesCircle, FaCrown } from "react-icons/fa";

// const MembershipPage = () => {
//   const [plans, setPlans] = useState([]);
//   const [userMembership, setUserMembership] = useState(null);
//   const [testPackages, setTestPackages] = useState([]);
//   const token = localStorage.getItem("accessToken");

//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/api/membership/plans/")
//       .then((res) => setPlans(res.data))
//       .catch((err) => console.error("Error fetching plans:", err));

//     if (token) {
//       axios.get("http://127.0.0.1:8000/api/membership/status/", {
//         headers: { Authorization: `Bearer ${token}` },
//       }).then((res) => setUserMembership(res.data))
//         .catch((err) => console.error("Error fetching status:", err));

//       axios.get("http://127.0.0.1:8000/api/packages/", {
//         headers: { Authorization: `Bearer ${token}` },
//       }).then((res) => setTestPackages(res.data))
//         .catch((err) => console.error("Error fetching packages:", err));
//     }
//   }, [token]);

//   const handleSubscribe = (planId) => {
//     axios.post("http://127.0.0.1:8000/api/membership/subscribe/", { plan_id: planId }, {
//       headers: { Authorization: `Bearer ${token}` },
//     }).then((res) => {
//       alert("Subscribed Successfully!");
//       setUserMembership(res.data);
//     }).catch((err) => console.error("Error subscribing:", err));
//   };

//   const handleUnsubscribe = () => {
//     axios.delete("http://127.0.0.1:8000/api/membership/unsubscribe/", {
//       headers: { Authorization: `Bearer ${token}` },
//     }).then(() => {
//       alert("Unsubscribed Successfully!");
//       setUserMembership(null);
//     }).catch((err) => console.error("Error unsubscribing:", err));
//   };

//   return (
//     <div className="pt-28 px-4 sm:px-6 lg:px-8 bg-[url('./assets/New_teal.jpg')] bg-no-repeat bg-cover min-h-screen">
//       <div className="max-w-7xl mx-auto space-y-12">
//         {userMembership ? (
//           <section className="bg-white/90 rounded-2xl shadow-2xl p-8 text-blue-950 backdrop-blur-md">
//             <div className="flex items-center gap-4 mb-6">
//               <FaCrown className="text-4xl text-teal-400" />
//               <h2 className="text-4xl font-bold text-teal-600">Your Membership</h2>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-4 text-lg font-medium">
//               <p><span className="text-blue-800">Plan:</span> {userMembership.plan}</p>
//               <p><span className="text-blue-800">Expires:</span> {userMembership.end_date}</p>
//               <p><span className="text-blue-800">Discount:</span> {userMembership.discount_percentage}%</p>
//             </div>

//             <button
//               onClick={handleUnsubscribe}
//               className="mt-6 w-full sm:w-auto bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition"
//             >
//               Unsubscribe
//             </button>

//             <div className="mt-10">
//               <h3 className="text-2xl text-teal-600 mb-4">Membership Benefits</h3>
//               <ul className="space-y-3">
//                 {["Exclusive Discounts", "Priority Booking", "Free Consultation Calls"].map((benefit, index) => (
//                   <li key={index} className="flex items-center text-blue-950">
//                     <FaCheckCircle className="text-teal-400 mr-3" />
//                     {benefit}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="mt-10">
//               <h3 className="text-2xl text-teal-600 mb-6">Your Exclusive Packages</h3>
//               <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
//                 {testPackages.map(pkg => (
//                   <div key={pkg.id} className="rounded-xl p-6 bg-white border border-teal-300 shadow-md hover:shadow-lg transition">
//                     <h4 className="text-xl font-semibold text-teal-500">{pkg.name}</h4>
//                     <p className="mt-2 text-gray-700"><span className="font-bold">Original Price: </span>₹{pkg.original_price}</p>
//                     <p className="text-teal-600 font-bold">
//                     <span className="font-bold">Discounted Price: </span>
//                       ₹{pkg.discounted_price.toFixed(2)}
//                     </p>
//                     <p className="mt-1 text-sm text-gray-600">{pkg.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         ) : (
//           <section className="text-center py-16">
//             <h2 className="text-3xl font-bold text-teal-500 mb-10">Choose Your Membership Plan</h2>
//             <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
//               {plans.map(plan => (
//                 <div key={plan.id} className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-teal-200 shadow-xl hover:scale-105 transition duration-300">
//                   <h3 className="text-2xl font-bold text-blue-950">{plan.name}</h3>
//                   <p className="mt-2 text-lg text-teal-50">₹{plan.price}</p>
//                   <p className="text-blue-950 mt-1">Discount: <span className="text-teal-300">{plan.discount_percentage}%</span></p>
//                   <button
//                     onClick={() => handleSubscribe(plan.id)}
//                     className="mt-4 w-full bg-teal-400 hover:bg-teal-500 text-white py-2 rounded-lg transition"
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
