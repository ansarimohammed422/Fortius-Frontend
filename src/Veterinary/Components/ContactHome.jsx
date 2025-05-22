import React from "react";
import { MyLinks } from "./Button";

const ContactHome = () => {
  return (
    <>
      <section className="bg-white ">
        <div className="container px-6 py-12 mx-auto">
          <div className="text-center">
            <p className="font-bold text-5xl text-blue-950 mb-3">Contact Us</p>

            <p className="mt-3 text-olive-500 drop-shadow-md text-lg">
              We care for your pets. Reach out to our vet team today!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Email */}
            <div className="flex flex-col items-center justify-center text-center rounded-2xl py-6 px-5 hover:bg-olive-50 hover:transform hover:scale-105 border border-transparent hover:shadow-lg hover:border-olive-500 transition-all duration-300 ease-linear">
              <span className="p-3 text-olive-200 rounded-full bg-blue-950 border-2 border-olive-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-lg font-semibold text-olive-500">
                Email
              </h2>
              <p className="mt-2 text-blue-950">
                Our vet support team is here for you.
              </p>
              <p className="mt-2 text-blue-950/50">fortiusvetcare@gmail.com</p>
            </div>

            {/* Office */}
            <div className="flex flex-col items-center justify-center text-center rounded-2xl py-6 px-5 hover:bg-olive-50 hover:transform hover:scale-105 border border-transparent hover:shadow-lg hover:border-olive-500 transition-all duration-300 ease-linear">
              <span className="p-3 text-olive-200 rounded-full bg-blue-950 border-2 border-olive-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-lg font-semibold text-olive-500">
                Office
              </h2>
              <p className="mt-2 text-blue-950">
                Visit our vet clinic anytime.
              </p>
              <p className="mt-2 text-blue-950/50">
                223/234, Kedy Shopping Arcade, Shop no: G/1-30-31, Bellasis
                Road, Nagpada, Mumbai - 400008
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center justify-center text-center rounded-2xl py-6 px-5 hover:bg-olive-50 hover:transform hover:scale-105 border border-transparent hover:shadow-lg hover:border-olive-500 transition-all duration-300 ease-linear">
              <span className="p-3 text-olive-200 rounded-full bg-blue-950 border-2 border-olive-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-lg font-semibold text-olive-500">
                Phone
              </h2>
              <p className="mt-2 text-blue-950">
                Call us during working hours.
              </p>
              <p className="mt-2 text-blue-950/50">+91 9619523278</p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-8">
            <MyLinks
              path="Contact"
              LName="Get in Touch"
              customClass="bg-olive-500 px-5 py-3 rounded-xl !text-olive-200 hover:!bg-olive-200 hover:!text-olive-500"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHome;
