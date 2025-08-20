// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const PackagesPage = () => {
//   const [packages, setPackages] = useState([]);
//   const [userMembership, setUserMembership] = useState(null);
//   const [expandedId, setExpandedId] = useState(null);
//   const token = localStorage.getItem("accessToken");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch packages
//     axios
//       .get("http://127.0.0.1:8000/api/packages/", {
//         headers: token ? { Authorization: `Bearer ${token}` } : {},
//       })
//       .then((res) => setPackages(res.data))
//       .catch((err) => console.error("Error fetching packages:", err));

//     // Fetch membership status
//     if (token) {
//       axios
//         .get("http://127.0.0.1:8000/api/membership/status/", {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((res) => setUserMembership(res.data))
//         .catch(() => setUserMembership(null));
//     }
//   }, [token]);

//   const toggleExpand = (id) =>
//     setExpandedId(expandedId === id ? null : id);

//   const handleBook = (testIds) => {
//     navigate("/appointment", { state: { selectedTestIds: testIds } });
//   };

//   return (
//     <div className="min-h-screen bg-white text-blue-950 pt-24 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-4xl font-bold border-b-2 border-teal-400 pb-2 mb-8">
//         Our Test Packages
//       </h1>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {packages.map((pkg) => {
//           const isExpanded = expandedId === pkg.id;
//           const memberPrice = userMembership?.is_active
//             ? pkg.discounted_price.toFixed(2)
//             : null;

//           return (
//             <div
//               key={pkg.id}
//               className="border border-gray-200 rounded-lg shadow p-6 hover:shadow-md transition"
//             >
//               {/* Header */}
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-semibold">{pkg.name}</h2>
//                 <button
//                   onClick={() => toggleExpand(pkg.id)}
//                   className="text-teal-400 hover:text-teal-500"
//                 >
//                   {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
//                 </button>
//               </div>

//               {/* Price Summary */}
//               <p className="text-lg">
//                 Offer Price:{" "}
//                 <span className="font-medium text-blue-800">
//                   ₹{pkg.offer_price}
//                 </span>
//               </p>
//               {memberPrice && (
//                 <p className="text-md text-teal-600">
//                   Member Price: ₹{memberPrice}
//                 </p>
//               )}

//               {/* Expanded Details */}
//               {isExpanded && (
//                 <div className="mt-4 border-t border-gray-100 pt-4 text-sm space-y-3">
//                   <p>{pkg.description}</p>
//                   <div>
//                     <h3 className="font-medium mb-2">Included Tests:</h3>
//                     <ul className="list-disc list-inside space-y-1">
//                       {pkg.tests.map((t) => (
//                         <li key={t.id}>
//                           {t.name}{" "}
//                           <span className="text-gray-500">(
//                           {t.category?.name || "General"}, ₹{t.price})
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="mt-4 flex gap-2">
//                     <button
//                       onClick={() => handleBook(pkg.tests.map((t) => t.id))}
//                       className="flex-1 bg-blue-950 text-white py-2 rounded hover:bg-blue-900 transition"
//                     >
//                       Book Package
//                     </button>
//                     <button
//                       onClick={() => toggleExpand(pkg.id)}
//                       className="flex-1 border border-teal-400 text-teal-400 py-2 rounded hover:bg-teal-50 transition"
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PackagesPage;
import { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

const PackagesPage = () => {
  const [packages, setPackages] = useState([]);
  const [userMembership, setUserMembership] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/packages/`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      .then((res) => setPackages(res.data))
      .catch((err) => console.error("Error fetching packages:", err));

    if (token) {
      axios
        .get(`${API_URL}/api/membership/status/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUserMembership(res.data))
        .catch(() => setUserMembership(null));
    }
  }, [token]);

  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);
  console.log("Packages:- " + packages);

  const handleBook = (tests, pkg) => {
    navigate("/appointment", {
      state: { selectedTestIds: tests, offerPrice: pkg.offer_price },
    });
  };

  return (
    <div className="min-h-screen bg-teal-50 text-blue-950 pt-36 px-4  sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold border-b-2 border-teal-400 pb-2 mb-8">
        Our Test Packages
      </h1>

      <div className="space-y-6">
        {packages.map((pkg) => {
          console.log(pkg);

          const isExpanded = expandedId === pkg.id;
          const memberPrice = userMembership?.is_active
            ? pkg.discounted_price.toFixed(2)
            : null;

          return (
            <motion.div
              key={pkg.id}
              className={
                `w-full rounded-lg shadow p-6 border transition-colors duration-300 ` +
                (isExpanded
                  ? "bg-teal-100 border-teal-300"
                  : "bg-white border-gray-200") +
                " hover:shadow-lg hover:border-teal-400"
              }
              whileHover={{ scale: 1.02 }}
              onClick={() => toggleExpand(pkg.id)}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h2 className="text-2xl font-semibold mb-2 sm:mb-0">
                  {pkg.name}
                </h2>
                <button
                  onClick={() => toggleExpand(pkg.id)}
                  className="text-teal-400 hover:text-teal-500 focus:outline-none ml-auto"
                >
                  {isExpanded ? (
                    <FaChevronUp size={20} />
                  ) : (
                    <FaChevronDown size={20} />
                  )}
                </button>
              </div>

              {/* Price Summary */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-2">
                <p className="text-lg">
                  Offer Price:{" "}
                  <span className="font-medium text-blue-800">
                    ₹{pkg.offer_price}
                  </span>
                </p>
                {memberPrice && (
                  <p className="text-lg text-teal-600">
                    Member Price: ₹{memberPrice}
                  </p>
                )}
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-teal-50 p-4 rounded-lg overflow-hidden"
                  >
                    <p className="text-sm mb-3 text-gray-700">
                      {pkg.description}
                    </p>
                    <div className="mb-4">
                      <h3 className="font-medium mb-2 text-blue-800">
                        Included Tests:
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm">
                        {pkg.tests.map((t) => (
                          <li key={t.id}>
                            {t.name}{" "}
                            <span className="text-gray-500">(₹{t.price})</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleBook(pkg.tests, pkg)}
                        className="flex-1 bg-blue-950 text-white py-2 rounded hover:bg-blue-900 transition"
                      >
                        Book Package
                      </button>
                      <button
                        onClick={() => toggleExpand(pkg.id)}
                        className="flex-1 border border-teal-400 text-teal-400 py-2 rounded hover:bg-teal-100 transition"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PackagesPage;
