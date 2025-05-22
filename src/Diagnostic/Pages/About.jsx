import React from "react";
import myImage from "../../assets/AboutImage.jpg"; // Adjust path as needed

const About = () => {
  return (
    <>
      <section className="flex items-center pt-40 pb-32 w-full h-screen bg-[url('./assets/New_teal.jpg')] bg-no-repeat bg-cover justify-center">
        <div className="my-40 bg-[url('./assets/New_teal.jpg')] bg-cover bg-no-repeat bg-center w-full h-screen flex flex-col gap-20 justify-center items-center">
          <div className="relative h-auto rounded-3xl w-[1000px]  bg-teal-400/30 backdrop-blur-lg shadow-2xl p-20 flex flex-col justify-center items-center">
            <h1 className="text-9xl font-black text-blue-950">About Us</h1>
            <p className="text-xl mt-4 text-blue-950 text-center">
              Fortius Diagnostic Center is committed to delivering accurate and
              reliable diagnostic services. With advanced technology and a
              patient-first approach, we ensure precision and care in every
              test, supporting your health journey.
            </p>
          </div>
        </div>
        <div></div>
      </section>

      <section className="text-gray-700 bg-white p-10">
        <div className="flex justify-center mt-10 text-6xl">Why Us?</div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <div className="relative flex justify-center items-center h-auto bg-white">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                      className="w-32 mb-3 filter brightness-75"
                    ></img>
                    <div className="absolute inset-0 bg-teal-400  mix-blend-screen"></div>
                  </div>
                </div>
                <h2 className="title-font font-regular text-2xl text-blue-950">
                  Latest Machinery
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <div className="relative flex justify-center items-center h-auto bg-white">
                    <img
                      src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                      className="w-32 mb-3 filter brightness-75"
                    ></img>
                    <div className="absolute inset-0 bg-teal-400  mix-blend-screen"></div>
                  </div>
                </div>
                <h2 className="title-font font-regular text-2xl text-blue-950">
                  Reasonable Rates
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <div className="relative flex justify-center items-center h-auto bg-white">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                      className="w-32 mb-3 filter brightness-75"
                    ></img>
                    <div className="absolute inset-0 bg-teal-400  mix-blend-screen"></div>
                  </div>
                </div>
                <h2 className="title-font font-regular text-2xl text-blue-950">
                  Time Efficiency
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <div className="relative flex justify-center items-center h-auto bg-white">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                      className="w-32 mb-3 filter brightness-75"
                    ></img>
                    <div className="absolute inset-0 bg-teal-400  mix-blend-screen"></div>
                  </div>
                </div>
                <h2 className="title-font font-regular text-2xl text-blue-950">
                  Expertise in Industry
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        {/* Container */}
        <div className="mx-auto w-full max-w-[1500px] px-5 py-12 md:px-10 md:py-16 lg:py-20 bg-white">
          {/* Component */}
          <div className="flex flex-col gap-14 lg:gap-20">
            {/* Image */}
            {/* <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2Fbg-about.png?alt=media&token=0d5ea1c5-61cf-4b0d-beab-bd023e3d9ee8"
              alt=""
              className="w-full"
            /> */}
            {/* <img src="../assets/AboutImage.jpg" alt="about image" /> */}
            <img
              src={myImage}
              alt="About Image"
              className="w-full h-auto rounded-2xl shadow-xl"
            />

            {/* Content */}
            <div className="flex flex-col gap-10 lg:gap-20 text-blue-950">
              <div className="flex flex-col md:flex-row justify-between border border-blue-950 bg-teal-50 p-10 rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl duration-200 ease-linear">
                <h2 className="text-3xl md:text-7xl font-bold flex-1">Story</h2>
                <p className="text-blue-950/70 w-[900px]">
                  "Our Stories" at Fortius encapsulates our journey of
                  dedication and innovation in delivering reliable diagnostic
                  solutions. Founded with a vision to empower healthcare through
                  precision and trust, we have grown into a platform that
                  combines cutting-edge technology with compassionate service.
                  Each milestone reflects our commitment to providing accurate
                  diagnostics, fostering healthier communities, and building
                  lasting relationships with those we serve. At Fortius, every
                  story is a testament to the lives we touch and the trust we
                  earn.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between border border-blue-950 bg-teal-50 p-10 rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl duration-200 ease-linear">
                <h2 className="text-3xl md:text-7xl font-bold">Mission</h2>
                <p className="text-blue-950/70 w-[900px]">
                  "Our Mission" at Fortius is to revolutionize healthcare
                  diagnostics by providing accurate, accessible, and timely
                  solutions that empower individuals to take charge of their
                  health. We are committed to leveraging advanced technology and
                  expert care to ensure precision, reliability, and
                  affordability in every service we offer. Guided by our
                  dedication to excellence, we aim to foster healthier
                  communities and set new standards in diagnostic care.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between border border-blue-950 bg-teal-50 p-10 rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl duration-200 ease-linear">
                <h2 className="text-3xl md:text-7xl font-bold ">Approach</h2>
                <p className="text-blue-950/70 w-[900px]">
                  "Our Approach" at Fortius is rooted in innovation, precision,
                  and patient-centric care. We blend state-of-the-art diagnostic
                  technology with a seamless user experience to deliver reliable
                  results efficiently. Our team emphasizes transparency and
                  attention to detail, ensuring every process is handled with
                  the utmost professionalism. By fostering a culture of
                  continuous improvement and collaboration, we aim to make
                  healthcare diagnostics more accessible, convenient, and
                  trustworthy for everyone.
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
