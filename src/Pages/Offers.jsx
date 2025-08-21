// // src/components/OffersList.jsx
// import React, { useEffect, useState } from "react";

// const API_URL = import.meta.env.VITE_API_URL;

// const OffersList = () => {
//   const [offers, setOffers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchOffers = async () => {
//       try {
//         // Replace this with your Django API URL for GeneralOffer
//         const response = await fetch(`${API_URL}/api/offers/`);

//         if (!response.ok) {
//           throw new Error("Failed to fetch offers");
//         }

//         const data = await response.json();
//         setOffers(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOffers();
//   }, []); // Empty array means this effect will run once when the component mounts

//   if (loading) {
//     return (
//       <div className="container mx-auto p-4 text-center">
//         <h1 className="text-2xl font-semibold text-blue-950">
//           Loading Offers...
//         </h1>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container mx-auto p-4 text-center text-red-500">
//         <h1 className="text-2xl font-semibold">Error: {error}</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white text-gray-800">
//       {/* Hero Section */}
//       <section className="relative bg-[url('./assets/New_teal.jpg')] bg-cover bg-center h-screen text-white p-40 flex items-center justify-center">
//         <div className="text-center bg-teal-400/30 backdrop-blur-lg rounded-xl p-28 border-2 border-blue-950 shadow-lg">
//           <h1 className="text-9xl font-extrabold text-blue-950">
//             Active Offers
//           </h1>
//           <p className="mt-4  text-2xl text-blue-950">
//             Limited Time Offers! Unwrap Incredible Savings Today!{" "}
//           </p>
//         </div>
//       </section>

//       {/* Offers List Section */}
//       <section className="bg-white py-20">
//         <div className="container mx-auto px-6">
//           <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-12">
//             Unlock Exclusive Offers & Discounts Just for You!
//           </h1>
//           <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//             {offers.map((offer) => (
//               <div
//                 key={offer.id}
//                 className="bg-teal-50 border border-blue-950 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform hover:-translate-y-2"
//               >
//                 <h2 className="text-2xl font-bold text-blue-950 mb-4 tracking-wide">
//                   {offer.description}
//                 </h2>
//                 <p className="text-lg text-gray-600 mb-4">
//                   <strong className="text-teal-400">Discount:</strong>{" "}
//                   {offer.discount_percentage}% off
//                 </p>
//                 <p className="text-lg text-gray-600 mb-4">
//                   <strong className="text-teal-400">Valid from:</strong>{" "}
//                   {new Date(offer.start_date).toLocaleDateString()}{" "}
//                   <strong className="test-teal-400">Till </strong>
//                   {new Date(offer.end_date).toLocaleDateString()}
//                 </p>
//                 <p
//                   className={`text-lg font-semibold ${offer.active ? "text-teal-400" : "text-red-500"}`}
//                 >
//                   {offer.active ? "Active" : "Expired"}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OffersList;

import React, { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const OffersList = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch(`${API_URL}/api/offers/`);
        if (!response.ok) throw new Error("Failed to fetch offers");
        const data = await response.json();
        setOffers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-950">
          Loading Offers...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-bold text-red-500">
          Error: {error}
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[url('./assets/New_teal.jpg')] bg-cover bg-center h-[80vh] flex items-center justify-center">
        <div className="text-center bg-teal-400/30 backdrop-blur-lg rounded-2xl p-12 sm:p-20 md:p-28 border-2 border-blue-950 shadow-xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-blue-950">
            Active Offers
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-blue-950">
            Limited Time Offers! Unwrap Incredible Savings Today!
          </p>
        </div>
      </section>

      {/* Offers List Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-950 text-center mb-12">
            Unlock Exclusive Offers & Discounts Just for You!
          </h1>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-teal-50/90 border border-blue-950 rounded-2xl shadow-lg p-6 sm:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-3">
                  {offer.description}
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 mb-2">
                  <span className="font-semibold text-teal-400">Discount:</span>{" "}
                  {offer.discount_percentage}% off
                </p>
                <p className="text-md sm:text-lg text-gray-700 mb-4">
                  <span className="font-semibold text-teal-400">
                    Valid from:
                  </span>{" "}
                  {new Date(offer.start_date).toLocaleDateString()}{" "}
                  <span className="font-semibold text-teal-400">Till</span>{" "}
                  {new Date(offer.end_date).toLocaleDateString()}
                </p>
                <p
                  className={`text-lg font-semibold ${
                    offer.active ? "text-teal-400" : "text-red-500"
                  }`}
                >
                  {offer.active ? "Active" : "Expired"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OffersList;
