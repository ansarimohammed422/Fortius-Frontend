import React from "react";
import { useState } from "react";
import { MyLinks } from "../../Components/Button";

const Serology = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[url('./assets/New_teal.jpg')] bg-cover bg-center text-white h-screen flex items-center justify-center">
        <div className="text-center bg-teal-400/30 backdrop-blur-lg rounded-xl p-20 border-2 border-blue-950 shadow-lg">
          <h1 className="text-9xl font-extrabold text-blue-950">
            Serology Services
          </h1>
          <p className="mt-4 mb-10 text-2xl text-blue-950">
            Unlocking the secrets of your immunity with cutting-edge serological testing.
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

      {/* About Serology */}
      <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className=" bg-[url('./assets/serology.jpg')] bg-cover bg-center h-96 w-auto rounded-lg shadow-lg"></div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold text-blue-950 mb-4">
              What is Serology?
            </h2>
            <p className="text-lg text-blue-950/70 mb-6">
              Serology is the branch of science that examines serum and other
              bodily fluids. By identifying antibodies and immune responses,
              serology is crucial for diagnosing infections and assessing
              immunity.
            </p>
            <button
            onClick={() => setShowMore(!showMore)}
            className={`font-bold  px-5 py-2 rounded-lg border-2 text-xl ${
              showMore
                ? "bg-blue-950 text-teal-400  hover:bg-teal-400 hover:text-blue-950 hover:border-teal-400"
                : "bg-teal-400 text-blue-950  border-blue-950 hover:bg-blue-950 hover:text-teal-400"
            } transition-all ease-linear  duration-500`}
          >
            {showMore ? "Show Less" : "Learn More"}
          </button>
          </div>
        </div>
        {/* Hidden Content Section */}
        <div className="mt-12">
          
          <div
            className={`mt-6 overflow-hidden transition-all duration-500 ${
              showMore ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-6 bg-teal-50 rounded-lg shadow-md border border-blue-950">
              <h3 className="text-3xl font-bold text-blue-950 mb-4">
                Deeper Insights into Serology
              </h3>
              <p className="text-lg text-blue-950/70 mb-4">
                Serology plays a key role in understanding and combating
                diseases. By analyzing blood serum, we can detect antibodies
                that indicate exposure to pathogens such as bacteria and
                viruses. This helps healthcare professionals diagnose conditions
                such as hepatitis, HIV, and COVID-19.
              </p>
              <p className="text-lg text-blue-950/70 mb-4">
                Beyond infectious diseases, serology is used in vaccine
                development and immunology research. It also aids in
                understanding autoimmune disorders, where the immune system
                mistakenly targets healthy tissues.
              </p>
              <p className="text-lg text-blue-950/70 mb-4">
                Serological testing is a cornerstone of preventive healthcare,
                enabling early detection and timely intervention. Through
                advancements in this field, we can better predict, prevent, and
                manage diseases at a global scale.
              </p>
              <p className="text-lg text-blue-950/70">
                Join us on a journey to uncover the secrets of serology and its
                profound impact on health and medicine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Expertise Section */}
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-blue-950 mb-10">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Immune Profiling",
                description:
                  "Assess antibody levels and vaccine responses with accuracy.",
              },
              {
                title: "Infectious Disease Testing",
                description:
                  "Diagnose diseases like HIV, Hepatitis, and COVID-19 with precision.",
              },
              {
                title: "Autoimmune Screening",
                description:
                  "Detect markers for autoimmune disorders and manage your health effectively.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-teal-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-semibold text-blue-950 mb-3">
                  {item.title}
                </h3>
                <p className="text-lg text-blue-950/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tests Offered */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-blue-950 text-center mb-10">
            Tests We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "HIV Antibody Testing",
              "Hepatitis Serology Tests",
              "COVID-19 Antibody Tests",
              "Allergy Testing",
              "Rheumatoid Factor Testing",
              "Autoimmune Disorder Screening",
            ].map((test, index) => (
              <div
                key={index}
                className="bg-teal-50 p-6 rounded-xl shadow-md border border-teal-300 hover:bg-teal-100 hover:scale-105 transform transition duration-300"
              >
                <p className="text-xl font-medium text-blue-950">{test}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      
    </div>
  );
};

export default Serology;
