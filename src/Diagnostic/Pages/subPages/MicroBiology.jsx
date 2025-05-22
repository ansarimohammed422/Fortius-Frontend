import React from "react";
import { MyLinks } from "../../Components/Button";

const Microbiology = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="relative bg-[url('./assets/New_teal.jpg')] bg-cover bg-no-repeat bg-center text-white h-screen flex items-center">
        <div className="container mx-auto px-6 py-12 text-center">
          <div className="bg-teal-400/30 filter backdrop-blur-lg rounded-xl py-20 border-2 border-blue-950 shadow-lg">
            <h1 className="text-9xl font-bold text-blue-950">
              Microbiology Services
            </h1>
            <p className="mt-4 text-2xl mb-10 text-blue-950">
              Exploring the microscopic world to ensure your health and safety.
            </p>
            <div className="mt-6">
            <MyLinks
              LName="Book Now"
              path="/Appointment"
              customClass="text-2xl bg-blue-950 border-2 shadow-none hover:shadow-xl border-blue-950 hover:border-none px-5 py-2 rounded-lg hover:bg-transparent"
            />
            </div>
          </div>
        </div>
      </section>

      {/* About Microbiology Section */}
      <section className="bg-teal-50 py-12">
        <div className="container mx-auto px-6 text-blue-950">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 p-6">
              <h2 className="text-5xl font-bold mb-4">
                The World of Microbiology
              </h2>
              <p className="text-xl text-blue-950/70">
                Microbiology delves into the study of microorganisms—tiny forms
                of life that play enormous roles in health, disease, and the
                environment. From bacteria and viruses to fungi and parasites,
                understanding these organisms helps in diagnosing infections,
                controlling outbreaks, and creating effective treatments.
              </p>
            </div>
            <div className="lg:w-1/2 bg-[url('./assets/MicroBiology.jpg')] bg-cover bg-center h-96 rounded-lg shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-8">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-teal-50 rounded-lg shadow-lg border border-blue-950">
              <h3 className="text-4xl font-bold mb-3 text-blue-950">
                Diagnostic Microbiology
              </h3>
              <p className="text-lg text-blue-950/70">
                Specialized tests to identify infections caused by bacteria,
                viruses, fungi, and parasites. Our lab employs the latest
                techniques to ensure accuracy and speed in diagnoses.
              </p>
            </div>
            <div className="p-6 bg-teal-50 rounded-lg shadow-lg border border-blue-950">
              <h3 className="text-4xl font-bold mb-3 text-blue-950">
                Infection Control
              </h3>
              <p className="text-lg text-blue-950/70">
                Comprehensive support to prevent and manage infectious diseases
                in healthcare and community settings. From routine screening to
                outbreak management, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tests Offered */}
      <section className="bg-teal-50 py-12">
        <div className="container mx-auto px-6 text-blue-950">
          <h2 className="text-4xl font-bold text-center mb-6">
            Tests Offered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Culture and Sensitivity Testing",
              "PCR Tests",
              "Antibiotic Susceptibility Testing",
              "Pathogen Identification",
              "Urine and Blood Cultures",
              "Mycology Tests",
            ].map((test, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:bg-teal-100 hover:scale-105 transform transition duration-300 ease-in-out border-2 border-teal-50 hover:border-teal-400"
              >
                <p className="text-lg font-semibold">{test}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      
    </div>
  );
};

export default Microbiology;
