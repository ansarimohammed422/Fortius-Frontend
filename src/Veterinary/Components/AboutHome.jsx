import React from "react";
import { MyLinks } from "./Button";
import { FaMicroscope, FaPaw, FaFlask, FaUserMd } from "react-icons/fa";

const AboutHome = () => {
  return (
    <section className="py-16 scroll-mt-96 bg-white" id="About">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-6xl text-olive-500 font-extrabold mb-4">
            Why Choose Fortius Vet Lab?
          </h2>
          <p className="text-blue-950 font-medium text-lg max-w-3xl mx-auto">
            At Fortius Veterinary Diagnostics, we combine{" "}
            <span className="font-bold text-olive-500">
              state-of-the-art lab technology
            </span>{" "}
            with compassionate care for your animals. From pets to livestock,
            our trusted lab professionals provide{" "}
            <span className="font-bold text-olive-500">
              accurate & timely results
            </span>{" "}
            to support better treatment outcomes.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-olive-50 shadow-lg p-6 border border-olive-500 rounded-xl hover:scale-105 transition-all ease-linear duration-300">
            <FaMicroscope className="text-olive-500 text-5xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-blue-950">
              Veterinary Lab Tech
            </h3>
          </div>
          <div className="bg-olive-50 shadow-lg p-6 border border-olive-500 rounded-xl hover:scale-105 transition-all ease-linear duration-300">
            <FaPaw className="text-olive-500 text-5xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-blue-950">
              Animal-Friendly Testing
            </h3>
          </div>
          <div className="bg-olive-50 shadow-lg p-6 rounded-xl border border-olive-500 hover:scale-105 transition-all ease-linear duration-300">
            <FaFlask className="text-olive-500 text-5xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-blue-950">
              Accurate Diagnostics
            </h3>
          </div>
          <div className="bg-olive-50 shadow-lg p-6 rounded-xl border border-olive-500 hover:scale-105 transition-all ease-linear duration-300">
            <FaUserMd className="text-olive-500 text-5xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-blue-950">
              Specialized Vet Experts
            </h3>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-10">
          <MyLinks
            path="/vet/About"
            LName="Learn More"
            customClass="bg-olive-500 px-6 py-3 rounded-xl !text-olive-200 font-black hover:bg-olive-200 hover:!text-olive-500 transition-all ease-linear duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
