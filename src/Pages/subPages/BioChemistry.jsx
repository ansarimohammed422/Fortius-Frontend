import React, { useState } from "react";
import { MyLinks } from "../../Components/Button";

const Biochemistry = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[url('./assets/New_teal.jpg')] bg-cover bg-center text-white h-screen flex items-center justify-center">
        <div className="text-center bg-teal-400/30 backdrop-blur-lg rounded-xl p-20 border-2 border-blue-950 shadow-lg">
          <h1 className="text-9xl font-extrabold text-blue-950">
            Biochemistry Services
          </h1>
          <p className="mt-4 mb-10 text-2xl text-blue-950">
            Dive into the molecular world of life with advanced biochemistry testing.
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

      {/* About Biochemistry */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div >
              <h2 className="text-5xl font-bold text-blue-950 mb-4">
                What is Biochemistry?
              </h2>
              <p className="text-lg text-blue-950/70 mb-6">
                Biochemistry is the study of the chemical processes within living organisms. It combines biology and chemistry to explore the molecular mechanisms of life.
              </p>
              <button
                onClick={() => setShowMore(!showMore)}
                className={`font-bold px-5 py-2 rounded-lg border-2 text-xl ${
                  showMore
                    ? "bg-blue-950 text-teal-400  hover:bg-teal-400 hover:text-blue-950 hover:border-teal-400"
                    : "bg-teal-400 text-blue-950  border-blue-950 hover:bg-blue-950 hover:text-teal-400"
                } transition-all ease-linear  duration-500`}
              >
                {showMore ? "Show Less" : "Learn More"}
              </button>
            </div>
            <div className="bg-[url('./assets/biochemistry.jpg')] bg-cover bg-center h-96 w-auto rounded-lg shadow-lg"></div>
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
                  The Role of Biochemistry in Medicine
                </h3>
                <p className="text-lg text-blue-950/70 mb-4">
                  Biochemistry is essential in understanding diseases at the molecular level. By analyzing enzymes, proteins, and DNA, biochemists can identify abnormalities that cause illnesses.
                </p>
                <p className="text-lg text-blue-950/70 mb-4">
                  It also plays a vital role in drug development, metabolic studies, and clinical diagnostics, paving the way for innovative treatments.
                </p>
                <p className="text-lg text-blue-950/70">
                  Embrace the power of biochemistry to decode the complexities of life and advance healthcare solutions.
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
                title: "Enzyme Analysis",
                description: "Detect enzyme activity and related disorders with precision.",
              },
              {
                title: "Metabolic Profiling",
                description: "Comprehensive analysis of metabolic pathways and processes.",
              },
              {
                title: "Protein Characterization",
                description: "Study protein structures and functions for advanced diagnostics.",
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
              "Liver Function Tests (LFT)",
              "Kidney Function Tests (KFT)",
              "Lipid Profile",
              "Glucose Tolerance Test",
              "Hormonal Assays",
              "Vitamin and Mineral Analysis",
            ].map((test, index) => (
              <div
                key={index}
                className="bg-teal-50 p-6 rounded-xl shadow-md border border-teal-300 hover:bg-teal-100 hover:scale-105 transform transition-all ease-linear duration-500"
              >
                <p className="text-xl font-medium text-blue-950">{test}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biochemistry;
