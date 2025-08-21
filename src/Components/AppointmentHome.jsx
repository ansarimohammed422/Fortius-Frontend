// import React from 'react'
// import { MyLinks } from './Button';
// import { Link } from 'react-router-dom';
// const AppointmentSection = () => {
//     return (
//         <Link to="/Appointment" className='w-full h-auto bg-white'>
//             <section className="[background:linear-gradient(45deg,#F0FDFA,theme(colors.teal.50)_50%,#F0FDFA)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.teal.400)_80%,_theme(colors.teal.500)_86%,_theme(colors.teal.600)_90%,_theme(colors.teal.700)_94%,_theme(colors.blue.950))_border-box] border-4 border-transparent animate-border py-16 px-8  text-center w-full transform transition-transform duration-300 hover:scale-105 ease-linear">
//                 {/* Section Heading */}
//                 <h2 className="text-5xl font-bold text-blue-950 ">
//                     Book Your Appointment
//                 </h2>
//                 <h3 className='text-4xl font-bold text-blue-950 mb-4'>Now</h3>

//                 {/* Description */}
//                 <p className="text-lg text-blue-950 mb-8 leading-relaxed max-w-xl mx-auto">
//                     Our experienced professionals are ready to assist you with the best care and testing. Schedule your appointment today to stay ahead of your health. We prioritize accuracy and care.
//                 </p>

//                 {/* Call to Action */}
//                 <div className="flex justify-center ">
//                     <MyLinks
//                         path="/Appointment"
//                         LName="Book Now"
//                         customClass="bg-teal-400 !text-blue-950 text-xl font-extrabold hover:shadow-lg hover:shadow-teal-400 py-3 px-5 rounded-full border border-blue-950 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-950 hover:to-teal-400 hover:!text-teal-400 hover:border-none focus:outline-none"
//                     />
//                 </div>

//                 {/* Footer/Disclaimer */}
//                 <div className="mt-8 text-sm text-blue-950 opacity-70">
//                     <p>All appointments are subject to availability. For any urgent concerns, please contact us directly.</p>
//                 </div>
//             </section>
//         </Link>
//     );
// };

// export default AppointmentSection;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAppointment } from '../Context/AppointmentContext';

// const AppointmentSection = () => {
//     const { appointmentData, setAppointmentData } = useAppointment();
//     const navigate = useNavigate();
//     // const [formData, setFormData] = useState({
//     //     name: '',
//     //     email: '',
//     //     phone: ''
//     // });

//     const handleChange = (e) => {
//         setAppointmentData({
//             ...appointmentData,
//             [e.target.name]: e.target.value
//           });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Option: Navigate with form data to /Appointment page
//         navigate('/Appointment');
//         console.log("Appointment Data:", appointmentData);

//         // OR: You could send this data to a backend API here
//         // axios.post('/api/leads/', formData).then(() => alert('Submitted'));
//     };

//     return (
//         <div className='w-full p-10 bg-white'>
//         <section className="[background:linear-gradient(45deg,#F0FDFA,theme(colors.teal.50)_50%,#F0FDFA)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.teal.400)_80%,_theme(colors.teal.500)_86%,_theme(colors.teal.600)_90%,_theme(colors.teal.700)_94%,_theme(colors.blue.950))_border-box]
//             border-4 border-transparent animate-border text-center w-3/4 mx-auto overflow-hidden transform transition-transform duration-300 hover:scale-105 ease-linear rounded-4xl hover:shadow-2xl shadow-teal-400"
//         >
//             <div className='bg-[url("./assets/New_teal.jpg")] bg-cover bg-no-repeat  '>
//             <div className='bg-teal-400/30 py-12 px-6 sm:px-10 backdrop-blur-lg'>
//             <h2 className="text-4xl font-bold text-blue-950 mb-2">Book Your Appointment</h2>
//             <p className="text-blue-950 mb-6 text-lg">Fill in yout details and book appointment Now</p>

//             <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     value={appointmentData.name}
//                     onChange={handleChange}
//                     className="px-4 py-2 text-lg w-full placeholder:text-teal-400/70 bg-white rounded-full border border-teal-400 focus:ring-2  focus:shadow-md focus:ring-blue-950 focus:outline-none transition-all ease-linear duration-300"
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email Address"
//                     value={appointmentData.email}
//                     onChange={handleChange}
//                     className="px-4 py-2 text-lg w-full placeholder:text-teal-400/70 bg-white rounded-full border border-teal-400 focus:ring-2  focus:shadow-md focus:ring-blue-950 focus:outline-none transition-all ease-linear duration-300"
//                     required
//                 />
//                 <input
//                     type="tel"
//                     name="number"
//                     placeholder="Phone Number"
//                     value={appointmentData.number}
//                     onChange={handleChange}
//                     className="px-4 py-2 w-full text-lg placeholder:text-teal-400/70 bg-white rounded-full border border-teal-400 focus:ring-2  focus:shadow-md focus:ring-blue-950 focus:outline-none transition-all ease-linear duration-300"
//                     required
//                 />

//                 <div className="sm:col-span-3 flex justify-center mt-4">
//                     <button
//                         type="submit"
//                         className="bg-blue-950 text-teal-400 text-lg font-black py-3 px-6 rounded-xl  hover:bg-transparent hover:text-blue-950  hover:shadow-xl  transition-all duration-300"
//                     >
//                         Book Now
//                     </button>
//                 </div>
//             </form>

//             <p className="mt-6 text-sm text-blue-950 opacity-70">
//                 Your details will be kept private and used only for booking purposes.
//             </p>
//             </div>
//             </div>
//         </section>
//         </div>
//     );
// };

// export default AppointmentSection;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppointment } from "../Context/AppointmentContext";

const AppointmentSection = () => {
  const { appointmentData, setAppointmentData } = useAppointment();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Appointment");
    console.log("Appointment Data:", appointmentData);
  };

  return (
    <div className="w-full p-6 sm:p-10 bg-white">
      <section
        className="[background:linear-gradient(45deg,#F0FDFA,theme(colors.teal.50)_50%,#F0FDFA)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.teal.400)_80%,_theme(colors.teal.500)_86%,_theme(colors.teal.600)_90%,_theme(colors.teal.700)_94%,_theme(colors.blue.950))_border-box]
                border-4 border-transparent animate-border text-center w-full sm:w-3/4 mx-auto overflow-hidden transform transition-transform duration-300 hover:scale-105 ease-linear rounded-4xl hover:shadow-2xl shadow-teal-400"
      >
        <div className='bg-[url("./assets/New_teal.jpg")] bg-cover bg-no-repeat'>
          <div className="bg-teal-400/30 py-10 sm:py-12 px-4 sm:px-10 backdrop-blur-lg">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-2">
              Book Your Appointment
            </h2>
            <p className="text-blue-950 mb-6 text-base sm:text-lg">
              Fill in your details and book appointment now
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-full sm:max-w-4xl mx-auto"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={appointmentData.name}
                onChange={handleChange}
                className="px-4 py-2 text-base sm:text-lg w-full placeholder:text-teal-400/70 bg-white rounded-full border border-teal-400 focus:ring-2 focus:shadow-md focus:ring-blue-950 focus:outline-none transition-all ease-linear duration-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={appointmentData.email}
                onChange={handleChange}
                className="px-4 py-2 text-base sm:text-lg w-full placeholder:text-teal-400/70 bg-white rounded-full border border-teal-400 focus:ring-2 focus:shadow-md focus:ring-blue-950 focus:outline-none transition-all ease-linear duration-300"
                required
              />
              <input
                type="tel"
                name="number"
                placeholder="Phone Number"
                value={appointmentData.number}
                onChange={handleChange}
                className="px-4 py-2 text-base sm:text-lg w-full placeholder:text-teal-400/70 bg-white rounded-full border border-teal-400 focus:ring-2 focus:shadow-md focus:ring-blue-950 focus:outline-none transition-all ease-linear duration-300"
                required
              />

              <div className="sm:col-span-3 flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-950 text-teal-400 text-base sm:text-lg font-black py-3 px-6 rounded-xl hover:bg-transparent hover:text-blue-950 hover:shadow-xl transition-all duration-300"
                >
                  Book Now
                </button>
              </div>
            </form>

            <p className="mt-6 text-sm sm:text-base text-blue-950 opacity-70">
              Your details will be kept private and used only for booking
              purposes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentSection;
