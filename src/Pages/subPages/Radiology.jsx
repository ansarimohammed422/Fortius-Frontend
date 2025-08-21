// import React, { useState } from "react";
// import { MyLinks } from "../../Components/Button";

// const Radiology = () => {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <div className="bg-white text-gray-800">
//       {/* Hero Section */}
//       <section className="relative bg-[url('./assets/New_teal.jpg')] bg-cover bg-center text-white h-screen flex items-center justify-center">
//         <div className="text-center bg-teal-400/30 backdrop-blur-lg rounded-xl p-20 border-2 border-blue-950 shadow-lg">
//           <h1 className="text-9xl font-extrabold text-blue-950">
//             Radiology Services
//           </h1>
//           <p className="mt-4 text-2xl mb-10 text-blue-950">
//             Advanced imaging solutions for accurate diagnosis and treatment.
//           </p>
//           <div className="mt-6">
//             <MyLinks
//               LName="Book Now"
//               path="/Appointment"
//               customClass="text-2xl bg-blue-950 border-2 shadow-none hover:shadow-xl hover:border-none hover:!text-blue-950 border-teal-400 px-6 py-3 rounded-lg hover:bg-transparent hover:text-teal-400"
//             />
//           </div>
//         </div>
//       </section>

//       {/* About Radiology */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="bg-[url('./assets/Radiology.jpg')] bg-cover bg-center h-96 w-auto rounded-lg shadow-lg"></div>
//             <div>
//               <h2 className="text-5xl font-bold text-blue-950 mb-4">
//                 What is Radiology?
//               </h2>
//               <p className="text-lg text-blue-950/70 mb-6">
//                 Radiology uses medical imaging to diagnose and treat diseases within the body. It employs techniques like X-rays, MRI, and CT scans to visualize internal structures.
//               </p>
//               <button
//                 onClick={() => setShowMore(!showMore)}
//                 className={`font-bold px-5 py-2 rounded-lg border-2 text-xl ${
//                   showMore
//                     ? "bg-blue-950 text-teal-400 hover:bg-teal-400 hover:text-blue-950 hover:border-teal-400"
//                     : "bg-teal-400 text-blue-950 border-blue-950 hover:bg-blue-950 hover:text-teal-400"
//                 } transition-all ease-linear duration-500`}
//               >
//                 {showMore ? "Show Less" : "Learn More"}
//               </button>
//             </div>
//           </div>
//           {/* Hidden Content Section */}
//           <div className="mt-12">
//             <div
//               className={`mt-6 overflow-hidden transition-all duration-500 ${
//                 showMore ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//               }`}
//             >
//               <div className="p-6 bg-teal-50 rounded-lg shadow-md border border-blue-950">
//                 <h3 className="text-3xl font-bold text-blue-950 mb-4">
//                   The Role of Radiology in Medicine
//                 </h3>
//                 <p className="text-lg text-blue-950/70 mb-4">
//                   Radiology provides critical insights into internal health. From detecting fractures to identifying tumors, imaging plays an indispensable role in modern healthcare.
//                 </p>
//                 <p className="text-lg text-blue-950/70 mb-4">
//                   With advancements like AI-assisted imaging and 3D reconstruction, radiology continues to push the boundaries of medical diagnostics.
//                 </p>
//                 <p className="text-lg text-blue-950/70">
//                   Trust our radiology expertise for timely and accurate diagnostic solutions.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Expertise Section */}
//       <section className="bg-teal-50 py-16">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-5xl font-bold text-blue-950 mb-10">Our Expertise</h2>
//           <div className="space-y-8">
//             {[
//               {
//                 title: "X-ray Imaging",
//                 description: "Quick and reliable imaging for bone fractures and chest conditions.",
//               },
//               {
//                 title: "MRI Scans",
//                 description: "Detailed imaging of soft tissues, organs, and the nervous system.",
//               },
//               {
//                 title: "CT Scans",
//                 description: "High-resolution imaging for accurate and early disease detection.",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-md border border-teal-300 hover:shadow-lg transition-all"
//               >
//                 <div className="h-20 w-20 bg-blue-950 text-teal-400 rounded-full flex items-center justify-center font-bold text-xl">
//                   {item.title.split(" ")[0]}
//                 </div>
//                 <div className="text-left">
//                   <h3 className="text-2xl font-semibold text-blue-950 mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-lg text-blue-950/70">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Tests Offered */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-bold text-blue-950 text-center mb-10">
//             Tests We Offer
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               "Chest X-ray",
//               "Brain MRI",
//               "Abdominal CT Scan",
//               "Mammography",
//               "Bone Density Scan",
//               "Ultrasound Imaging",
//             ].map((test, index) => (
//               <div
//                 key={index}
//                 className="bg-teal-50 p-6 rounded-xl shadow-md border border-teal-300 hover:bg-teal-100 hover:scale-105 transform transition duration-300"
//               >
//                 <p className="text-xl font-medium text-blue-950">{test}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Radiology;

import React, { useState } from "react";
import { MyLinks } from "../../Components/Button";

const Radiology = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[url('./assets/New_teal.jpg')] bg-cover bg-center text-white h-screen flex items-center justify-center">
        <div className="text-center bg-teal-400/30 backdrop-blur-lg rounded-xl p-8 sm:p-12 md:p-16 lg:p-20 border-2 border-blue-950 shadow-lg">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold text-blue-950">
            Radiology Services
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 text-blue-950">
            Advanced imaging solutions for accurate diagnosis and treatment.
          </p>
          <div className="mt-4 sm:mt-6">
            <MyLinks
              LName="Book Now"
              path="/Appointment"
              customClass="text-lg sm:text-xl md:text-2xl bg-blue-950 border-2 shadow-none hover:shadow-xl hover:border-none border-teal-400 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-transparent hover:text-teal-400 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* About Radiology */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="bg-[url('./assets/Radiology.jpg')] bg-cover bg-center h-64 sm:h-80 md:h-96 lg:h-96 w-full rounded-lg shadow-lg"></div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-blue-950 mb-4">
                What is Radiology?
              </h2>
              <p className="text-lg sm:text-xl md:text-lg text-blue-950/70 mb-4">
                Radiology uses medical imaging to diagnose and treat diseases
                within the body. It employs techniques like X-rays, MRI, and CT
                scans to visualize internal structures.
              </p>
              <button
                onClick={() => setShowMore(!showMore)}
                className={`font-bold px-4 sm:px-5 py-2 sm:py-3 rounded-lg border-2 text-lg sm:text-xl md:text-xl ${
                  showMore
                    ? "bg-blue-950 text-teal-400 hover:bg-teal-400 hover:text-blue-950 hover:border-teal-400"
                    : "bg-teal-400 text-blue-950 border-blue-950 hover:bg-blue-950 hover:text-teal-400"
                } transition-all ease-linear duration-500`}
              >
                {showMore ? "Show Less" : "Learn More"}
              </button>
            </div>
          </div>

          {/* Hidden Content Section */}
          <div className="mt-8 sm:mt-10">
            <div
              className={`overflow-hidden transition-all duration-500 ${
                showMore ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 sm:p-6 md:p-6 bg-teal-50 rounded-lg shadow-md border border-blue-950">
                <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-blue-950 mb-4">
                  The Role of Radiology in Medicine
                </h3>
                <p className="text-lg sm:text-xl text-blue-950/70 mb-4">
                  Radiology provides critical insights into internal health.
                  From detecting fractures to identifying tumors, imaging plays
                  an indispensable role in modern healthcare.
                </p>
                <p className="text-lg sm:text-xl text-blue-950/70 mb-4">
                  With advancements like AI-assisted imaging and 3D
                  reconstruction, radiology continues to push the boundaries of
                  medical diagnostics.
                </p>
                <p className="text-lg sm:text-xl text-blue-950/70">
                  Trust our radiology expertise for timely and accurate
                  diagnostic solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-teal-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 mb-8 sm:mb-10">
            Our Expertise
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                title: "X-ray Imaging",
                description:
                  "Quick and reliable imaging for bone fractures and chest conditions.",
              },
              {
                title: "MRI Scans",
                description:
                  "Detailed imaging of soft tissues, organs, and the nervous system.",
              },
              {
                title: "CT Scans",
                description:
                  "High-resolution imaging for accurate and early disease detection.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-lg shadow-md border border-teal-300 hover:shadow-lg transition-all"
              >
                <div className="h-16 w-16 sm:h-20 sm:w-20 bg-blue-950 text-teal-400 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl">
                  {item.title.split(" ")[0]}
                </div>
                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-blue-950 mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-lg text-blue-950/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tests Offered */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 text-center mb-8 sm:mb-10">
            Tests We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              "Chest X-ray",
              "Brain MRI",
              "Abdominal CT Scan",
              "Mammography",
              "Bone Density Scan",
              "Ultrasound Imaging",
            ].map((test, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-teal-50 rounded-xl shadow-md border border-teal-300 hover:bg-teal-100 hover:scale-105 transform transition duration-300"
              >
                <p className="text-lg sm:text-xl font-medium text-blue-950">
                  {test}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Radiology;
