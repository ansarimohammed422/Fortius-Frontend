// import React from "react";
// import SCards from "./subComponent/Cards";
// import { Link } from 'react-router-dom'
// import { MdBloodtype } from "react-icons/md";
// import { FaTint } from "react-icons/fa";
// import { FaMicroscope } from "react-icons/fa";
// import { FaVial } from "react-icons/fa";
// import { FaFlask } from "react-icons/fa";
// import { FaXRay } from "react-icons/fa";

// const ServicesHome = () => {
//   const servicesVar = {
//     Hematology: {
//       HLogo: (
//         <FaTint size={24} className="text-blue-950" />
//       ),
//       HPara:
//         "At Fortius Diagnostic Center, we offer expert hematology testing to diagnose and monitor blood-related health conditions.",
//     },
//     MicroBiology: {
//       MLogo: (
//       <FaMicroscope size={24} className="text-blue-950" />
//       ),
//       MPara:
//         "At Fortius Diagnostic Center, our microbiology testing helps identify infections and analyze microbial activity for accurate diagnosis and treatment.",
//     },
//     Serology: {
//       SLogo: (
//         <FaVial size={24} className="text-blue-950" />
//       ),
//       SPara:
//         "At Fortius Diagnostic Center, serology tests detect antibodies to diagnose infections and immune responses accurately.",
//     },
//     BioChemistry: {
//       BLogo: (
//         <FaFlask size={24} className="text-blue-950" />
//       ),
//       BPara:
//         "At Fortius Diagnostic Center, biochemistry tests analyze body fluids to assess organ function and overall health.",
//     },
//     Radiology: {
//       RLogo: (

//         <FaXRay size={24} className="text-blue-950" />
//       ),
//       RPara:
//         "At Fortius Diagnostic Center, radiology services provide advanced imaging for accurate diagnosis and treatment planning.",
//     },
//   };

//   const handleMore = () => {};

//   return (
//     <>
//       <section id="Services" className="text-gray-600 body-font bg-white">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
//             <h1 className=" text-5xl  font-bold title-font mb-2 text-blue-950">
//               Services
//             </h1>
//             <p className="lg:w-1/2 w-full leading-relaxed text-blue-950/70">
//               All the services that we Provide
//             </p>
//           </div>
//           <div className="flex flex-wrap -m-4">
//             <Link className="xl:w-1/3 md:w-1/2 p-4" to="/Hematology">
//               <SCards
//                 Svgs={servicesVar.Hematology.HLogo}
//                 Title="Hematology"
//                 Para={servicesVar.Hematology.HPara}
//                 linkPath="/Hematology"
//                 linkName="Hematology"
//               />
//             </Link>
//             <Link className="xl:w-1/3 md:w-1/2 p-4" to="/Microbiology">
//               <SCards
//                 Svgs={servicesVar.MicroBiology.MLogo}
//                 Title="MicroBiology"
//                 Para={servicesVar.MicroBiology.MPara}
//                 linkPath="/Microbiology"
//                 linkName="Microbiology"
//               />
//             </Link>
//             <Link className="xl:w-1/3 md:w-1/2 p-4" to="/Serology">
//               <SCards
//                 Svgs={servicesVar.Serology.SLogo}
//                 Title="Serology"
//                 Para={servicesVar.Serology.SPara}
//                 linkPath="/Serology"
//                 linkName="Serology"
//               />
//             </Link>
//             <Link className="xl:w-1/3 md:w-1/2 p-4" to="/Biochemistry">
//               <SCards
//                 Svgs={servicesVar.BioChemistry.BLogo}
//                 Title="Biochemistry"
//                 Para={servicesVar.BioChemistry.BPara}
//                 linkPath="/Biochemistry"
//                 linkName="Biochemistry"
//               />
//             </Link>
//             <Link className="xl:w-1/3 md:w-1/2 p-4" to="/Radiology">
//               <SCards
//                 Svgs={servicesVar.Radiology.RLogo}
//                 Title="Radiology"
//                 Para={servicesVar.Radiology.RPara}
//                 linkPath="/Radiology"
//                 linkName="Radiology"
//               />
//             </Link>
//             <Link className="xl:w-1/3 md:w-1/2 p-4" to="Services">

//                 <div
//                   className="flex justify-center items-center border-2 overflow-hidden border-blue-950  p-6 bg-teal-400 text-blue-950 hover:bg-blue-950 hover:border-teal-400 hover:text-teal-400  rounded-xl w-[475px] h-[225px] shadow-xl text-6xl font-extrabold hover:scale-105 transform  transition-all ease-linear duration-300"
//                 >
//                   <h1>All Services</h1>
//                 </div>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServicesHome;

import React from "react";
import SCards from "./subComponent/Cards";
import { Link } from "react-router-dom";
import { FaTint, FaMicroscope, FaVial, FaFlask, FaXRay } from "react-icons/fa";

const ServicesHome = () => {
  const servicesVar = {
    Hematology: {
      HLogo: <FaTint size={24} className="text-blue-950" />,
      HPara:
        "At Fortius Diagnostic Center, we offer expert hematology testing to diagnose and monitor blood-related health conditions.",
    },
    MicroBiology: {
      MLogo: <FaMicroscope size={24} className="text-blue-950" />,
      MPara:
        "At Fortius Diagnostic Center, our microbiology testing helps identify infections and analyze microbial activity for accurate diagnosis and treatment.",
    },
    Serology: {
      SLogo: <FaVial size={24} className="text-blue-950" />,
      SPara:
        "At Fortius Diagnostic Center, serology tests detect antibodies to diagnose infections and immune responses accurately.",
    },
    BioChemistry: {
      BLogo: <FaFlask size={24} className="text-blue-950" />,
      BPara:
        "At Fortius Diagnostic Center, biochemistry tests analyze body fluids to assess organ function and overall health.",
    },
    Radiology: {
      RLogo: <FaXRay size={24} className="text-blue-950" />,
      RPara:
        "At Fortius Diagnostic Center, radiology services provide advanced imaging for accurate diagnosis and treatment planning.",
    },
  };

  return (
    <section id="Services" className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col items-center text-center w-full mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold title-font mb-2 text-blue-950">
            Services
          </h1>
          <p className="text-sm sm:text-base lg:w-1/2 w-full leading-relaxed text-blue-950/70">
            All the services that we Provide
          </p>
        </div>

        <div className="flex flex-wrap -m-4 justify-center">
          <Link className="xl:w-1/3 md:w-1/2 w-full p-4" to="/Hematology">
            <SCards
              Svgs={servicesVar.Hematology.HLogo}
              Title="Hematology"
              Para={servicesVar.Hematology.HPara}
              linkPath="/Hematology"
              linkName="Hematology"
            />
          </Link>
          <Link className="xl:w-1/3 md:w-1/2 w-full p-4" to="/Microbiology">
            <SCards
              Svgs={servicesVar.MicroBiology.MLogo}
              Title="MicroBiology"
              Para={servicesVar.MicroBiology.MPara}
              linkPath="/Microbiology"
              linkName="Microbiology"
            />
          </Link>
          <Link className="xl:w-1/3 md:w-1/2 w-full p-4" to="/Serology">
            <SCards
              Svgs={servicesVar.Serology.SLogo}
              Title="Serology"
              Para={servicesVar.Serology.SPara}
              linkPath="/Serology"
              linkName="Serology"
            />
          </Link>
          <Link className="xl:w-1/3 md:w-1/2 w-full p-4" to="/Biochemistry">
            <SCards
              Svgs={servicesVar.BioChemistry.BLogo}
              Title="Biochemistry"
              Para={servicesVar.BioChemistry.BPara}
              linkPath="/Biochemistry"
              linkName="Biochemistry"
            />
          </Link>
          <Link className="xl:w-1/3 md:w-1/2 w-full p-4" to="/Radiology">
            <SCards
              Svgs={servicesVar.Radiology.RLogo}
              Title="Radiology"
              Para={servicesVar.Radiology.RPara}
              linkPath="/Radiology"
              linkName="Radiology"
            />
          </Link>
          <Link className="xl:w-1/3 md:w-1/2 w-full p-4" to="Services">
            <div className="flex justify-center items-center border-2 overflow-hidden border-blue-950 p-6 bg-teal-400 text-blue-950 hover:bg-blue-950 hover:border-teal-400 hover:text-teal-400 rounded-xl w-full sm:w-[400px] md:w-[475px] h-[200px] sm:h-[225px] shadow-xl text-4xl sm:text-5xl md:text-6xl font-extrabold hover:scale-105 transform transition-all ease-linear duration-300">
              <h1>All Services</h1>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
