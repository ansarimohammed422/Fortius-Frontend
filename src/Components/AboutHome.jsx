// import React from "react";
// import Cards from "./subComponent/Cards";
// import { ACards } from "./subComponent/Cards";
// import { MyLinks } from "./Button";

// const AboutHome = () => {
//   return (
//     <>
//       <section className=" py-12 scroll-mt-96 bg-white " id="About">
//         <div className="container mx-auto px-4 bg-white">
//           <div className="text-center">
//             <h2 className="text-4xl text-blue-950  font-extrabold mb-4">About Us</h2>
//             <p className="text-gray-800 font-semibold  text-lg mb-8">
//               At Fortius Diagnostics, we believe a clear diagnosis is the
//               cornerstone of effective healthcare. That's why we've built a
//               state-of-the-art facility equipped with the latest diagnostic
//               technologies and staffed by a team of highly trained,
//               patient-centric professionals. Our mission is to empower you with
//               a comprehensive and accurate understanding of your health
//               concerns, so you can make informed decisions alongside your
//               doctor.
//             </p>
//           </div>
//           <div className="flex flex-wrap justify-center">
//             <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
//               <ACards Name="Mohammed Chunawala" Desc="Founder of Fortius" />
//             </div>
//             <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
//               <ACards Name="Humaira Chunawala" Desc="Founder of Fortius" />
//             </div>
//             <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
//               <ACards Name="Mohammed Ansari" Desc="Website Designer and Develoer" />
//             </div>
//           </div>
//           <div className="flex flex-wrap justify-center">
//           <MyLinks path="/About" LName="Know More" customClass="bg-teal-400 px-5 py-3 rounded-lg !text-blue-950 hover:!bg-blue-950 hover:!text-teal-400"  />

//           </div>
//         </div>

//       </section>
//     </>
//   );
// };

// export default AboutHome;

import React from "react";
import { MyLinks } from "./Button";
import { FaMicroscope, FaHeartbeat, FaFlask, FaUserMd } from "react-icons/fa";

const AboutHome = () => {
  return (
    <section className="py-16 scroll-mt-96 bg-white" id="About">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-6xl text-blue-950 font-extrabold mb-4">
            Why Choose Fortius?
          </h2>
          <p className="text-gray-900 font-medium text-lg max-w-3xl mx-auto">
            Fortius Diagnostics is dedicated to{" "}
            <span className="font-bold text-teal-400">
              cutting-edge medical analysis
            </span>
            , ensuring accuracy, trust, and patient-first care. Our advanced
            facilities and expert team help deliver{" "}
            <span className="font-bold text-teal-400">reliable results</span>{" "}
            with precision.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-teal-50 shadow-lg p-6 border border-teal-400 rounded-xl hover:scale-105 transition-all ease-linear duration-300">
            <FaMicroscope className="text-blue-950 text-5xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">
              Advanced Equipment
            </h3>
          </div>
          <div className="bg-teal-50 shadow-lg p-6 border border-teal-400 rounded-xl hover:scale-105 transition-all ease-linear duration-300">
            <FaHeartbeat className="text-blue-950 text-5xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">
              Comprehensive Tests
            </h3>
          </div>
          <div className="bg-teal-50 shadow-lg p-6 rounded-xl border border-teal-400 hover:scale-105 transition-all ease-linear duration-300">
            <FaFlask className="text-blue-950 text-5xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">
              Precise Analysis
            </h3>
          </div>
          <div className="bg-teal-50 shadow-lg p-6 rounded-xl border border-teal-400 hover:scale-105 transition-all ease-linear duration-300">
            <FaUserMd className="text-blue-950 text-5xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Expert Team</h3>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-10">
          <MyLinks
            path="/About"
            LName="Learn More"
            customClass="bg-teal-400 px-6 py-3 rounded-xl !text-blue-950 font-black hover:bg-blue-950 hover:!text-teal-400 transition-all ease-linear duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
