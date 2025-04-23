// import React, { useState } from "react";
// import { MyLinks } from "../Components/Button";

// const Services = () => {
//   const [showMore, setShowMore] = useState(false);

//   const services = [
//     {
//       name: "Hematology",
//       image: "./assets/Hematology.jpg",
//       description: "Hematology is the branch of medicine that studies blood, blood-forming tissues, and blood disorders. Tests in hematology involve blood cell counts, coagulation profiles, and the detection of blood diseases like anemia, leukemia, and clotting disorders. Hematology helps in diagnosing a variety of conditions, from simple blood disorders to more complex diseases like lymphoma and leukemia. Advanced techniques such as flow cytometry and bone marrow biopsy are also integral parts of hematological testing.",
//       tests: [
//         "Complete Blood Count (CBC)",
//         "Coagulation Profile",
//         "Bone Marrow Biopsy"
//       ],
//     },
//     {
//       name: "Microbiology",
//       image: "./assets/MicroBiology.jpg",
//       description: "Microbiology focuses on the study of microorganisms, including bacteria, viruses, fungi, and parasites. It is crucial for diagnosing infectious diseases, identifying pathogens, and determining the most effective treatment. Microbiological tests include culture tests, PCR, and antimicrobial susceptibility testing. Accurate microbial identification helps prevent the spread of infections and ensures targeted, effective treatment, reducing the risk of antibiotic resistance.",
//       tests: [
//         "Blood Culture",
//         "Antimicrobial Susceptibility Test",
//         "PCR Test"
//       ],
//     },
//     {
//       name: "Serology",
//       image: "./assets/serology.jpg",
//       description: "Serology examines the blood serum to detect antibodies and antigens, providing insight into infections, autoimmune diseases, and allergies. It plays a significant role in diagnosing diseases such as HIV, hepatitis, and malaria. Serology tests are used to assess immune responses and are also essential in blood transfusion and organ transplantation for compatibility testing. By detecting antibodies, it helps identify past and present infections.",
//       tests: [
//         "HIV Antibody Test",
//         "Hepatitis B Surface Antigen",
//         "Malaria Parasite Antigen Test"
//       ],
//     },
//     {
//       name: "Biochemistry",
//       image: "./assets/biochemistry.jpg",
//       description: "Biochemistry involves the study of the chemical processes that occur within living organisms. It provides essential insights into the molecular mechanisms of life, aiding in the understanding of metabolism, enzymology, and disease mechanisms. Tests in biochemistry often include liver function tests (LFT), kidney function tests (KFT), and lipid profiles. These tests help in diagnosing diseases such as diabetes, heart disease, and liver conditions, and in monitoring treatment efficacy.",
//       tests: [
//         "Liver Function Test (LFT)",
//         "Kidney Function Test (KFT)",
//         "Lipid Profile"
//       ],
//     },
//     {
//       name: "Radiology",
//       image: "./assets/Radiology.jpg",
//       description: "Radiology uses imaging techniques like X-rays, CT scans, MRI, and ultrasound to diagnose diseases. It helps visualize internal structures of the body to detect abnormalities such as fractures, tumors, and infections. Radiology plays a crucial role in identifying conditions like cancers, cardiovascular diseases, and bone disorders. In addition to diagnostic imaging, interventional radiology offers minimally invasive procedures for biopsies, catheter placements, and treatments like stent placements.",
//       tests: [
//         "X-ray Imaging",
//         "CT Scan",
//         "MRI Scan"
//       ],
//     },
//   ];

//   return (
//     <div className="bg-white text-gray-800">
//       {/* Hero Section */}
//       <section className="relative bg-[url('./assets/New_teal.jpg')] bg-cover bg-center text-white h-screen flex items-center justify-center">
//         <div className="text-center bg-teal-400/30 backdrop-blur-lg rounded-xl p-20 border-2 border-blue-950 shadow-lg">
//           <h1 className="text-9xl font-extrabold text-blue-950">
//             Fortius Services
//           </h1>
//           <p className="mt-4 mb-10  text-2xl text-blue-950">
//             Explore our comprehensive range of diagnostic services to guide you toward better health.
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

//       {/* Service List */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-bold text-blue-950 text-center mb-10">
//             Our Specialized Services
//           </h2>
//           <div className="space-y-16">
//             {services.map((service, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-teal-300 hover:shadow-lg transition-all">
//                 <div className="flex items-center space-x-8">
//                   {/* Image */}
//                   <div
//                     className={`w-1/3 h-64 bg-cover bg-center bg-[url('${service.image}')] rounded-lg`}
//                     // style={{ backgroundImage: `url(${service.image})` }}
//                   ></div>

//                   {/* Service Info */}
//                   <div className="w-2/3">
//                     <h3 className="text-3xl font-semibold text-blue-950 mb-4">
//                       {service.name}
//                     </h3>
//                     <p className="text-lg text-blue-950/70 mb-6">
//                       {service.description}
//                     </p>

//                     {/* Show More */}
//                     <button
//                       onClick={() => setShowMore(!showMore)}
//                       className={`font-bold px-5 py-2 rounded-lg border-2 text-xl ${
//                         showMore
//                           ? "bg-blue-950 text-teal-400 hover:bg-teal-400 hover:text-blue-950 hover:border-teal-400"
//                           : "bg-teal-400 text-blue-950 border-blue-950 hover:bg-blue-950 hover:text-teal-400"
//                       } transition-all ease-linear duration-500`}
//                     >
//                       {showMore ? "Show Less" : "Learn More"}
//                     </button>
//                     <div
//                       className={`mt-6 overflow-hidden transition-all duration-500 ${
//                         showMore ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//                       }`}
//                     >
//                       <div className="p-6 bg-teal-50 rounded-lg shadow-md border border-blue-950">
//                         <p className="text-lg text-blue-950/70">
//                           Here you can add further details about the service, diagnostic procedures, patient outcomes, and advanced technologies used in the service. This section will be revealed when the user clicks 'Learn More'.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Tests Offered Section */}
//                 <div className="mt-10">
//                   <h4 className="text-3xl font-bold text-blue-950 mb-6">
//                     Tests We Offer
//                   </h4>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {service.tests.map((test, idx) => (
//                       <div
//                         key={idx}
//                         className="bg-teal-50 p-6 rounded-xl shadow-md border border-teal-300 hover:bg-teal-100 hover:scale-105 transform transition-all ease-linear duration-500"
//                       >
//                         <p className="text-xl font-medium text-blue-950">{test}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;


import React, { useState } from "react";
import { MyLinks } from "../Components/Button";

const Services = () => {
  const services = [
    {
      name: "Hematology",
      image: "./assets/Hematology.jpg",
      description:
        "Hematology is the branch of medicine that studies blood, blood-forming tissues, and blood disorders...",
      tests: ["Complete Blood Count (CBC)", "Coagulation Profile", "Bone Marrow Biopsy"],
    },
    {
      name: "Microbiology",
      image: "./assets/MicroBiology.jpg",
      description:
        "Microbiology focuses on the study of microorganisms, including bacteria, viruses, fungi, and parasites...",
      tests: ["Blood Culture", "Antimicrobial Susceptibility Test", "PCR Test"],
    },
    {
      name: "Serology",
      image: "./assets/serology.jpg",
      description:
        "Serology examines the blood serum to detect antibodies and antigens, providing insight into infections...",
      tests: ["HIV Antibody Test", "Hepatitis B Surface Antigen", "Malaria Parasite Antigen Test"],
    },
    {
      name: "Biochemistry",
      image: "./assets/biochemistry.jpg",
      description:
        "Biochemistry involves the study of the chemical processes that occur within living organisms...",
      tests: ["Liver Function Test (LFT)", "Kidney Function Test (KFT)", "Lipid Profile"],
    },
    {
      name: "Radiology",
      image: "./assets/Radiology.jpg",
      description:
        "Radiology uses imaging techniques like X-rays, CT scans, MRI, and ultrasound to diagnose diseases...",
      tests: ["X-ray Imaging", "CT Scan", "MRI Scan"],
    },
  ];

  const [showMoreStates, setShowMoreStates] = useState(
    Array(services.length).fill(false)
  );

  const toggleShowMore = (index) => {
    const updatedStates = [...showMoreStates];
    updatedStates[index] = !updatedStates[index];
    setShowMoreStates(updatedStates);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[url('./assets/New_teal.jpg')] bg-cover bg-center text-white h-screen flex items-center justify-center">
        <div className="text-center bg-teal-400/30 backdrop-blur-lg rounded-xl p-20 border-2 border-blue-950 shadow-lg">
          <h1 className="text-9xl font-extrabold text-blue-950">Fortius Services</h1>
          <p className="mt-4 mb-10 text-2xl text-blue-950">
            Explore our comprehensive range of diagnostic services to guide you toward better health.
          </p>
          <div className="mt-6">
            <MyLinks
              LName="Book Now"
              path="/Appointment"
              customClass="text-2xl bg-blue-950 border-2 shadow-none hover:shadow-xl hover:border-none hover:!text-blue-950 border-teal-400 px-6 py-3 rounded-lg hover:bg-transparent hover:text-teal-400"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-blue-950 text-center mb-10">
            Our Specialized Services
          </h2>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-teal-300 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  {/* Image */}
                  <div
                    className={`w-1/3 h-64 bg-cover bg-center bg-[url('${service.image}')] rounded-lg`}
                    //style={{ backgroundImage: `url(${service.image})` }}
                  ></div>

                  {/* Service Info */}
                  <div className="w-full md:w-2/3">
                    <h3 className="text-3xl font-semibold text-blue-950 mb-4">
                      {service.name}
                    </h3>
                    <p className="text-lg text-blue-950/70 mb-6">
                      {service.description}
                    </p>

                    {/* Show More */}
                    <button
                      onClick={() => toggleShowMore(index)}
                      className={`font-bold px-5 py-2 rounded-lg border-2 text-xl ${
                        showMoreStates[index]
                          ? "bg-blue-950 text-teal-400 hover:bg-teal-400 hover:text-blue-950 hover:border-teal-400"
                          : "bg-teal-400 text-blue-950 border-blue-950 hover:bg-blue-950 hover:text-teal-400"
                      } transition-all ease-linear duration-500`}
                    >
                      {showMoreStates[index] ? "Show Less" : "Learn More"}
                    </button>

                    {/* Expanded Content */}
                    <div
                      className={`mt-6 overflow-hidden transition-all duration-500 ${
                        showMoreStates[index]
                          ? "max-h-screen opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-6 bg-teal-50 rounded-lg shadow-md border border-blue-950">
                        <p className="text-lg text-blue-950/70">
                          Here you can add further details about the service, diagnostic procedures,
                          patient outcomes, and advanced technologies used in the service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tests Offered */}
                <div className="mt-10">
                  <h4 className="text-3xl font-bold text-blue-950 mb-6">
                    Tests We Offer
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.tests.map((test, idx) => (
                      <div
                        key={idx}
                        className="bg-teal-50 p-6 rounded-xl shadow-md border border-teal-300 hover:bg-teal-100 hover:scale-105 transform transition-all ease-linear duration-500"
                      >
                        <p className="text-xl font-medium text-blue-950">{test}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

