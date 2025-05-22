import React from "react";
import myImage from "../../assets/AboutImage.jpg"; // Make sure this image is animal/pet-focused

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex items-center pt-40 pb-32 w-full h-screen bg-[url('./assets/VetHero.jpg')] bg-no-repeat bg-cover justify-center">
        <div className="my-40 bg-[url('./assets/VetHero.jpg')] bg-cover bg-no-repeat bg-center w-full h-screen flex flex-col gap-20 justify-center items-center">
          <div className="relative h-auto rounded-3xl w-[1000px] bg-olive-500/30 backdrop-blur-lg shadow-2xl p-20 flex flex-col justify-center items-center">
            <h1 className="text-9xl font-black text-blue-950">About Us</h1>
            <p className="text-xl mt-4 text-blue-950 text-center">
              Fortius Veterinary Diagnostics is dedicated to providing accurate
              and compassionate diagnostic services for pets and animals.
              Combining modern veterinary technology with expert care, we help
              veterinarians and pet parents ensure the best health outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="text-gray-700 bg-white p-10">
        <div className="flex justify-center mt-10 text-6xl text-blue-950 font-bold">
          Why Choose Us?
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            {[
              {
                label: "Advanced Equipment",
                image:
                  "https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp",
              },
              {
                label: "Affordable Diagnostics",
                image:
                  "https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp",
              },
              {
                label: "Quick Turnaround",
                image:
                  "https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp",
              },
              {
                label: "Expert Veterinary Team",
                image:
                  "https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <div className="relative flex justify-center items-center h-auto bg-white">
                      <img
                        src={item.image}
                        className="w-32 mb-3 filter brightness-75"
                        alt={item.label}
                      />
                      <div className="absolute inset-0 bg-olive-500 mix-blend-screen"></div>
                    </div>
                  </div>
                  <h2 className="title-font text-2xl text-blue-950">
                    {item.label}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story / Mission / Approach */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1500px] px-5 py-12 md:px-10 md:py-16 lg:py-20">
          <div className="flex flex-col gap-14 lg:gap-20">
            <img
              src={myImage}
              alt="Veterinary Lab"
              className="w-full h-auto rounded-2xl shadow-xl border-4 border-olive-500"
            />

            <div className="flex flex-col gap-10 lg:gap-20 text-blue-950">
              {/* Story */}
              <div className="flex flex-col md:flex-row justify-between border border-blue-950 bg-olive-50 p-10 rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl duration-200">
                <h2 className="text-3xl md:text-7xl font-bold flex-1">Story</h2>
                <p className="text-blue-950/70 w-[900px]">
                  Fortius Veterinary Diagnostics began with a vision to support
                  animal healthcare with the highest standards. From humble
                  beginnings, we have grown into a trusted partner for
                  veterinarians and pet owners, offering accurate diagnostics,
                  compassionate service, and a deep understanding of animal
                  wellness.
                </p>
              </div>

              {/* Mission */}
              <div className="flex flex-col md:flex-row justify-between border border-blue-950 bg-olive-50 p-10 rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl duration-200">
                <h2 className="text-3xl md:text-7xl font-bold">Mission</h2>
                <p className="text-blue-950/70 w-[900px]">
                  To deliver reliable and accessible veterinary diagnostic
                  services that help improve the lives of pets and animals. We
                  strive to combine scientific accuracy with heartfelt care,
                  ensuring that every diagnosis supports timely and effective
                  treatment.
                </p>
              </div>

              {/* Approach */}
              <div className="flex flex-col md:flex-row justify-between border border-blue-950 bg-olive-50 p-10 rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl duration-200">
                <h2 className="text-3xl md:text-7xl font-bold">Approach</h2>
                <p className="text-blue-950/70 w-[900px]">
                  We integrate the latest veterinary diagnostic tools with a
                  client-friendly process to make testing fast, easy, and
                  accurate. Our team of veterinary professionals is committed to
                  transparent communication and empathetic service, ensuring
                  every patient — big or small — gets the care they deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
