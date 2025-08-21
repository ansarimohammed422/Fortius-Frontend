// import React from "react";
// import { MyLinks } from "../../Components/Button";

// const Hematology = () => {
//   return (
//     <div className="bg-white text-gray-800">
//       <section className="relative bg-[url('./assets/New_teal.jpg')] bg-cover bg-no-repeat bg-center  text-white h-screen flex justify-center items-center">
//         <div className="container mx-auto px-4 py-16 text-center bg-teal-400/30 filter backdrop-blur-lg rounded-xl border-2 border-blue-950 ">
//           <h1 className="text-9xl font-bold text-blue-950">
//             Hematology Services
//           </h1>
//           <p className="mt-4 text-2xl text-blue-950 mb-10">
//             Comprehensive blood analysis to diagnose and monitor health
//             conditions.
//           </p>
//           <MyLinks LName="Book Now" path="/Appointment" customClass="text-4xl bg-blue-950 border-2 shadow-none hover:shadow-xl border-blue-950 hover:border-none px-5 py-2 rounded-lg hover:bg-transparent" />
//         </div>
//       </section>

//       <section className="container mx-auto px-4 py-12 h-auto bg-white flex flex-col gap-8 text-blue-950">
//         <h1 className="text-6xl font-bold mb-4 ">
//           Hematology: The Science of Blood and Wellness
//         </h1>
//         <div className="p-10 bg-teal-50 rounded-xl border border-blue-950">
//           <h2 className="text-5xl font-bold text-blue-950 mb-3">
//             The Importance of Hematology
//           </h2>
//           <p className="text-xl text-blue-950/70">
//             Hematology is a vital branch of medical science that focuses on the
//             study of blood, its components, and the disorders that can affect
//             it. Blood is the life-sustaining fluid of the body, responsible for
//             transporting oxygen, nutrients, hormones, and immune cells while
//             simultaneously removing waste products. This intricate system
//             involves red blood cells, white blood cells, platelets, and plasma,
//             all of which work in harmony to maintain balance and health.
//             Hematology goes beyond simply understanding blood; it provides the
//             foundation for diagnosing and managing a wide spectrum of diseases.
//             From routine conditions such as anemia and iron deficiencies to
//             life-altering disorders like leukemia, lymphoma, and other
//             malignancies, hematology plays a critical role in modern healthcare.
//           </p>
//         </div>
//         <div className="p-10 bg-teal-50 rounded-xl border border-blue-950">
//           <h2 className="text-5xl font-bold text-blue-950 mb-3">
//             Our Commitment to Excellence
//           </h2>
//           <p className="text-xl text-blue-950/70">
//             Our laboratory is dedicated to advancing the field of hematology
//             with state-of-the-art diagnostic tools and cutting-edge
//             technologies. We specialize in testing for various blood disorders,
//             including clotting abnormalities, hereditary conditions, and blood
//             cancers. Each test is designed to provide comprehensive insights,
//             enabling healthcare providers to craft personalized treatment plans
//             tailored to individual needs. For instance, early detection of
//             conditions such as sickle cell anemia or hemophilia can drastically
//             improve a patient’s quality of life. Similarly, monitoring blood
//             parameters is crucial for patients undergoing treatments like
//             chemotherapy or those managing chronic diseases such as diabetes or
//             cardiovascular disorders.
//           </p>
//         </div>
//         <div className="p-10 bg-teal-50 rounded-xl border border-blue-950">
//           <h1 className="text-5xl font-bold text-blue-950 mb-3 ">
//             The Benefits of Regular Blood Testing
//           </h1>
//           <p className="text-xl text-blue-950/70">
//             Regular blood testing is not only essential for diagnosing diseases
//             but also for monitoring overall health and well-being. It offers a
//             window into the body’s internal state, allowing healthcare
//             professionals to detect subtle changes long before symptoms
//             manifest. This proactive approach ensures timely interventions and
//             prevents complications, promoting better health outcomes. Our team
//             of experienced professionals is committed to delivering accurate,
//             reliable, and timely results, making us a trusted partner in your
//             journey toward optimal health. Whether it’s a routine complete blood
//             count (CBC) or specialized testing for complex conditions, we ensure
//             every patient receives the highest standard of care and attention.
//           </p>
//         </div>
//         <div className="p-10 bg-teal-50 rounded-xl border border-blue-950">
//           <h1 className="text-5xl font-bold text-blue-950 mb-3">
//             Empowering You Through Hematology
//           </h1>
//           <p className="text-xl text-blue-950/70">
//             At its core, hematology underscores the importance of understanding
//             blood’s pivotal role in human health. By harnessing the power of
//             advanced diagnostic tools and scientific expertise, we aim to
//             empower individuals to take control of their health. Let us help you
//             uncover the story your blood tells, guiding you toward better
//             health, early detection, and effective treatment. Your well-being is
//             our priority, and through the lens of hematology, we bring you
//             closer to a healthier tomorrow.
//           </p>
//         </div>
//       </section>

//       {/* Tests Offered Section */}
//       <section className="bg-white py-12">
//   <div className="container mx-auto px-4">
//     <h2 className="text-3xl font-bold text-center mb-8">Tests Offered</h2>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {[
//         "Complete Blood Count (CBC)",
//         "Platelet Count",
//         "Hemoglobin Test",
//         "Coagulation Test (PT/INR)",
//         "Erythrocyte Sedimentation Rate (ESR)",
//         "Bone Marrow Analysis",
//       ].map((test, index) => (
//         <div
//           key={index}
//           className="bg-teal-50 rounded-lg shadow-md p-6 hover:bg-white border-2 border-teal-50 hover:border-2 hover:border-teal-400 text-blue-950 hover:text-teal-400 transform hover:scale-105  transition-all ease-linear duration-500"
//         >
//           <p className="text-xl font-semibold">{test}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* Why Choose Us Section */}

//       {/* Call to Action */}
//     </div>
//   );
// };

// export default Hematology;

import React from "react";
import { MyLinks } from "../../Components/Button";

const Hematology = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[url('./assets/New_teal.jpg')] bg-cover bg-no-repeat bg-center text-white h-screen flex justify-center items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 text-center bg-teal-400/30 filter backdrop-blur-lg rounded-xl border-2 border-blue-950">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-blue-950">
            Hematology Services
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-blue-950 mb-6 sm:mb-10">
            Comprehensive blood analysis to diagnose and monitor health
            conditions.
          </p>
          <MyLinks
            LName="Book Now"
            path="/Appointment"
            customClass="text-xl sm:text-2xl md:text-4xl bg-blue-950 border-2 shadow-none hover:shadow-xl border-blue-950 hover:border-none px-4 sm:px-5 py-2 rounded-lg hover:bg-transparent"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16 h-auto flex flex-col gap-8 text-blue-950">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hematology: The Science of Blood and Wellness
        </h1>

        {[
          {
            title: "The Importance of Hematology",
            content: `Hematology is a vital branch of medical science that focuses on the study of blood, its components, and the disorders that can affect it. Blood is the life-sustaining fluid of the body, responsible for transporting oxygen, nutrients, hormones, and immune cells while simultaneously removing waste products. This intricate system involves red blood cells, white blood cells, platelets, and plasma, all of which work in harmony to maintain balance and health. Hematology goes beyond simply understanding blood; it provides the foundation for diagnosing and managing a wide spectrum of diseases. From routine conditions such as anemia and iron deficiencies to life-altering disorders like leukemia, lymphoma, and other malignancies, hematology plays a critical role in modern healthcare.`,
          },
          {
            title: "Our Commitment to Excellence",
            content: `Our laboratory is dedicated to advancing the field of hematology with state-of-the-art diagnostic tools and cutting-edge technologies. We specialize in testing for various blood disorders, including clotting abnormalities, hereditary conditions, and blood cancers. Each test is designed to provide comprehensive insights, enabling healthcare providers to craft personalized treatment plans tailored to individual needs. For instance, early detection of conditions such as sickle cell anemia or hemophilia can drastically improve a patient’s quality of life. Similarly, monitoring blood parameters is crucial for patients undergoing treatments like chemotherapy or those managing chronic diseases such as diabetes or cardiovascular disorders.`,
          },
          {
            title: "The Benefits of Regular Blood Testing",
            content: `Regular blood testing is not only essential for diagnosing diseases but also for monitoring overall health and well-being. It offers a window into the body’s internal state, allowing healthcare professionals to detect subtle changes long before symptoms manifest. This proactive approach ensures timely interventions and prevents complications, promoting better health outcomes. Our team of experienced professionals is committed to delivering accurate, reliable, and timely results, making us a trusted partner in your journey toward optimal health. Whether it’s a routine complete blood count (CBC) or specialized testing for complex conditions, we ensure every patient receives the highest standard of care and attention.`,
          },
          {
            title: "Empowering You Through Hematology",
            content: `At its core, hematology underscores the importance of understanding blood’s pivotal role in human health. By harnessing the power of advanced diagnostic tools and scientific expertise, we aim to empower individuals to take control of their health. Let us help you uncover the story your blood tells, guiding you toward better health, early detection, and effective treatment. Your well-being is our priority, and through the lens of hematology, we bring you closer to a healthier tomorrow.`,
          },
        ].map((section, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 md:p-10 bg-teal-50 rounded-xl border border-blue-950"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              {section.title}
            </h2>
            <p className="text-lg sm:text-xl md:text-xl text-blue-950/70">
              {section.content}
            </p>
          </div>
        ))}
      </section>

      {/* Tests Offered */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
            Tests Offered
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6">
            {[
              "Complete Blood Count (CBC)",
              "Platelet Count",
              "Hemoglobin Test",
              "Coagulation Test (PT/INR)",
              "Erythrocyte Sedimentation Rate (ESR)",
              "Bone Marrow Analysis",
            ].map((test, index) => (
              <div
                key={index}
                className="bg-teal-50 rounded-lg shadow-md p-4 sm:p-6 md:p-6 hover:bg-white border-2 border-teal-50 hover:border-2 hover:border-teal-400 text-blue-950 hover:text-teal-400 transform hover:scale-105 transition-all ease-linear duration-500"
              >
                <p className="text-lg sm:text-xl font-semibold">{test}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hematology;
