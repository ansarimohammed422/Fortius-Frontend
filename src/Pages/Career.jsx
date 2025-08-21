// import React, { useState, useEffect } from "react";

// const API_URL = import.meta.env.VITE_API_URL;

// const Career = () => {
//   const [careers, setCareers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCareers = async () => {
//       try {
//         const response = await fetch(`${API_URL}/api/careers/`); // Your Django API URL
//         if (!response.ok) {
//           throw new Error("Failed to fetch career data");
//         }
//         const data = await response.json();
//         setCareers(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCareers();
//   }, []);

//   if (loading) {
//     return (
//       <div className="container mx-auto p-4 text-center">
//         <h1 className="text-2xl font-semibold text-blue-950">
//           Loading Careers...
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
//             Join Our Team
//           </h1>
//           <p className="mt-4 text-2xl text-blue-950">
//             Explore Exciting Career Opportunities and Become Part of Our
//             Journey!
//           </p>
//         </div>
//       </section>

//       {/* Careers List Section */}
//       <section className="bg-teal-50 py-20">
//         <div className="container mx-auto px-6">
//           <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-12">
//             Open Career Opportunities
//           </h1>
//           <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//             {careers.map((career) => (
//               <div
//                 key={career.id}
//                 className="bg-white border border-blue-950 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform hover:-translate-y-2"
//               >
//                 <h2 className="text-2xl font-bold text-blue-950 mb-4 tracking-wide">
//                   {career.job_title}
//                 </h2>
//                 <p className="text-lg text-gray-600 mb-4">
//                   <strong className="text-teal-400">Description:</strong>{" "}
//                   {career.description}
//                 </p>
//                 <p className="text-lg text-gray-600 mb-4">
//                   <strong className="text-teal-400">Posted on:</strong>{" "}
//                   {new Date(career.posted_on).toLocaleDateString()}
//                 </p>
//                 <p
//                   className={`text-lg font-semibold ${career.is_open ? "text-teal-400" : "text-red-500"}`}
//                 >
//                   {career.is_open ? "Open" : "Closed"}
//                 </p>
//                 <a
//                   href={career.application_link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block mt-4 bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors"
//                 >
//                   Apply Now
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Career;

import React, { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const Career = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await fetch(`${API_URL}/api/careers/`);
        if (!response.ok) throw new Error("Failed to fetch career data");
        const data = await response.json();
        setCareers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCareers();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-blue-950">
          Loading Careers...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center text-red-500">
        <h1 className="text-2xl sm:text-3xl font-semibold">Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[url('./assets/New_teal.jpg')] bg-cover bg-center h-[80vh] sm:h-[90vh] md:h-screen text-white px-4 sm:px-10 md:px-20 flex items-center justify-center">
        <div className="text-center bg-teal-400/30 backdrop-blur-lg rounded-xl p-12 sm:p-20 md:p-28 border-2 border-blue-950 shadow-lg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-950">
            Join Our Team
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-2xl text-blue-950">
            Explore Exciting Career Opportunities and Become Part of Our
            Journey!
          </p>
        </div>
      </section>

      {/* Careers List Section */}
      <section className="bg-teal-50 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-950 text-center mb-10 sm:mb-12">
            Open Career Opportunities
          </h1>
          <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {careers.map((career) => (
              <div
                key={career.id}
                className="bg-white border border-blue-950 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out hover:-translate-y-2 flex flex-col justify-between"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-950 mb-3 sm:mb-4 tracking-wide">
                  {career.job_title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4">
                  <strong className="text-teal-400">Description:</strong>{" "}
                  {career.description}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2 sm:mb-3">
                  <strong className="text-teal-400">Posted on:</strong>{" "}
                  {new Date(career.posted_on).toLocaleDateString()}
                </p>
                <p
                  className={`text-sm sm:text-base md:text-lg font-semibold mb-2 ${
                    career.is_open ? "text-teal-400" : "text-red-500"
                  }`}
                >
                  {career.is_open ? "Open" : "Closed"}
                </p>
                <a
                  href={career.application_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors text-sm sm:text-base md:text-lg text-center"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
