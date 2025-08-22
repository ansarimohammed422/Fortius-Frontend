// import { useState, useEffect, useContext } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Button from "../Components/Button";
// import SearchBar from "../Components/subComponent/searchBar";
// import { TestSelection } from "../Context/Context";
// import axios from "axios";
// import { AuthContext } from "../Context/AuthContext";
// import { OfferPriceContext } from "../Context/Context";
// import { useAppointment } from "../Context/AppointmentContext";

// const API_URL = import.meta.env.VITE_API_URL;

// const Appointment = () => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { offerPrice, setOfferPrice } = useContext(OfferPriceContext);
//   const { appointmentData } = useAppointment();

//   const [pkgprice, setpkgprice] = useState(location.state?.offerPrice || null);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");
//   const [selectedTest, setSelectedTest] = useState(
//     location.state?.selectedTestIds || [],
//   );
//   const [inputtags, setInputTags] = useState({
//     Name:
//       user?.first_name && user?.last_name
//         ? `${user.first_name} ${user.last_name}`
//         : appointmentData?.name || "",
//     Email: user?.email || appointmentData?.email || "",
//     Phone: appointmentData?.number || "",
//     Address: "",
//   });
//   const [tests, setTests] = useState([]);
//   const [homeSample, setHomeSample] = useState(false);
//   const [alertMessage, setAlertMessage] = useState("");
//   const [alertType, setAlertType] = useState("");
//   const [PhoneError, setPhoneError] = useState(false);

//   useEffect(() => {
//     const newOffer = location.state?.offerPrice || null;
//     setOfferPrice(newOffer);

//     if (location.state?.selectedTestIds || location.state?.offerPrice) {
//       navigate(location.pathname, { replace: true, state: {} });
//     }

//     // ⏱ Load cached tests first (fast UI)
//     const cachedTests = localStorage.getItem("cachedTests");
//     if (cachedTests) {
//       setTests(JSON.parse(cachedTests));
//     } else {
//       const fetchTests = async () => {
//         try {
//           const token = localStorage.getItem("accessToken");
//           const headers = token ? { Authorization: `Bearer ${token}` } : {};

//           const { data } = await axios.get(`${API_URL}/api/tests/`, {
//             headers,
//           });
//           setTests(data);
//           localStorage.setItem("cachedTests", JSON.stringify(data));
//         } catch (error) {
//           console.error("Error fetching tests:", error);
//         }
//       };

//       fetchTests();
//     }

//     // 🧹 Cleanup function → clear cache on unmount
//     return () => {
//       localStorage.removeItem("cachedTests");
//       console.log("Cache cleared on unmount ✅");
//     };
//   }, [location, navigate]);

//   const handleSubmit = async () => {
//     if (inputtags.Phone.length < 10) {
//       setPhoneError(true);
//       return;
//     }

//     const appointmentData = {
//       date: selectedDate,
//       time: selectedTime,
//       user_name: inputtags.Name,
//       user_email: inputtags.Email,
//       user_phone: inputtags.Phone,
//       tests: selectedTest,
//       home_sample: homeSample,
//       address: homeSample ? inputtags.Address : "",
//     };

//     try {
//       const token = localStorage.getItem("accessToken");
//       const headers = {};
//       if (token) {
//         headers["Authorization"] = `Bearer ${token}`;
//       }

//       const response = await axios.post(
//         `${API_URL}/api/appointments/`,
//         appointmentData,
//         { headers },
//       );

//       if (response.data.id) {
//         const appointmentId = response.data.id;
//         setAlertMessage("Appointment booked successfully!");
//         setAlertType("success");
//         setSelectedTest([]);

//         setTimeout(() => {
//           setAlertMessage("");
//           setAlertType("");
//           navigate(`/billing/${appointmentId}`, {
//             state: { validAccess: true },
//           });
//         }, 2000);
//       } else {
//         throw new Error("No appointment ID in response");
//       }
//     } catch (error) {
//       console.error("Error booking appointment:", error);
//       setAlertMessage("Failed to book appointment. Please try again.");
//       setAlertType("error");
//       setTimeout(() => {
//         setAlertMessage("");
//         setAlertType("");
//       }, 3000);
//     }
//   };

//   return (
//     <div className="w-screen p-40 ">
//       <TestSelection.Provider value={{ selectedTest, setSelectedTest }}>
//         <div className="max-w-7xl flex justify-center items-center mx-auto">
//           <div className="w-full [background:linear-gradient(45deg,#F0FDFA,theme(colors.teal.50)_50%,#F0FDFA)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.teal.400)_80%,_theme(colors.teal.500)_86%,_theme(colors.teal.600)_90%,_theme(colors.teal.700)_94%,_theme(colors.blue.950))_border-box] border-4 border-transparent animate-border rounded-full  overflow-hidden">
//             <div className=" overflow-hidden rounded-full bg-[url('./assets/New_teal.jpg')] bg-cover bg-no-repeat text-blue-950 text-center shadow-xl shadow-gray-300">
//               {alertMessage && (
//                 <div
//                   className={`fixed top-5 z-10 mt-40 left-1/2 transform -translate-x-1/2 w-3/4 max-w-lg px-4 py-3 rounded-lg text-white text-center ${
//                     alertType === "success" ? "bg-green-500" : "bg-red-500"
//                   }`}
//                 >
//                   {alertMessage}
//                 </div>
//               )}
//               <div className="p-10 bg-teal-400/30 filter backdrop-blur-lg py-20 w-full h-full">
//                 <h1 className="mt-2 px-8 text-3xl font-bold md:text-8xl text-blue-950">
//                   Book an Appointment
//                 </h1>
//                 <p className="mt-6 text-lg text-blue-950">
//                   Get an appointment at{" "}
//                   <span className="ml-1 font-extrabold inline text-blue-950">
//                     Fortius
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mx-auto grid max-w-screen-lg px-6 pb-20">
//           <div className="my-10 flex flex-col gap-6">
//             <p className="text-2xl font-extrabold text-blue-950">
//               Search for a Tests:
//             </p>
//             <SearchBar alltests={tests} offerPrice={pkgprice} />
//           </div>

//           <div className="mb-10">
//             <p className="text-2xl my-5 font-extrabold text-blue-950">
//               Fill in Details
//             </p>
//             <div className="grid grid-cols-3 gap-6 sm:grid-cols-2">
//               <div className="relative flex flex-col gap-4 text-xl text-blue-950">
//                 <label>Select a date</label>
//                 <input
//                   type="date"
//                   value={selectedDate}
//                   onChange={(e) => setSelectedDate(e.target.value)}
//                   className="block w-full rounded-full px-4 py-3 text-xl border border-teal-400 bg-white text-blue-950 focus:ring focus:shadow-teal-400 focus:shadow-md focus:ring-teal-400 focus:outline-none transition-all ease-linear duration-300"
//                   required
//                 />
//               </div>
//               <div className="relative flex flex-col gap-4 text-xl text-blue-950">
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   value={inputtags.Name}
//                   onChange={(e) =>
//                     setInputTags({ ...inputtags, Name: e.target.value })
//                   }
//                   className="px-4 py-2 w-full bg-white rounded-full border border-teal-400 focus:ring focus:shadow-teal-400 focus:shadow-md focus:ring-teal-400 focus:outline-none transition-all ease-linear duration-300"
//                   placeholder="Enter Name"
//                 />
//               </div>
//               <div className="relative flex flex-col gap-4 text-xl text-blue-950">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   value={inputtags.Email}
//                   className="px-4 py-2 w-full bg-white rounded-full border border-teal-400 focus:ring focus:shadow-teal-400 focus:shadow-md focus:ring-teal-400 focus:outline-none transition-all ease-linear duration-300"
//                   placeholder="Enter Email"
//                   onChange={(e) =>
//                     setInputTags({ ...inputtags, Email: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="relative flex flex-col gap-4 text-xl text-blue-950">
//                 <label>Phone</label>
//                 <input
//                   type="tel"
//                   name="Phone"
//                   value={inputtags.Phone}
//                   onChange={(e) =>
//                     setInputTags({ ...inputtags, Phone: e.target.value })
//                   }
//                   className="px-4 py-2 w-full bg-white rounded-full border border-teal-400 focus:ring focus:shadow-teal-400 focus:shadow-md focus:ring-teal-400 focus:outline-none transition-all ease-linear duration-300"
//                   placeholder="Enter Your Number"
//                   required
//                 />
//                 {PhoneError && (
//                   <div className="text-sm m-0 text-red-500">
//                     * number less than 10 digits
//                   </div>
//                 )}
//               </div>
//               <div className="relative flex flex-col gap-4 text-xl text-blue-950">
//                 <label>Select Time</label>
//                 <input
//                   type="time"
//                   min="09:00"
//                   max="21:00"
//                   value={selectedTime}
//                   onChange={(e) => setSelectedTime(e.target.value)}
//                   className="px-4 py-2 w-full bg-white rounded-full border border-teal-400 focus:ring focus:shadow-teal-400 focus:shadow-md focus:ring-teal-400 focus:outline-none transition-all ease-linear duration-300"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mb-6 text-xl">
//             <label className="text-xl font-bold text-blue-950 flex items-center gap-4 cursor-pointer">
//               <div className="relative">
//                 <input
//                   type="checkbox"
//                   checked={homeSample}
//                   onChange={() => setHomeSample(!homeSample)}
//                   className="sr-only peer"
//                 />
//                 <div className="w-12 h-6 bg-blue-950 rounded-full peer-checked:bg-teal-500 transition-all ease-linear duration-150"></div>
//                 <div className="absolute top-1 left-1 w-4 h-4 bg-teal-400 rounded-full shadow-md peer-checked:translate-x-6 peer-checked:bg-blue-950 transition-all ease-linear duration-150"></div>
//               </div>
//               <h1 className="text-2xl my-5 font-extrabold text-blue-950">
//                 Request Home Sample Collection
//               </h1>
//             </label>
//             {homeSample && (
//               <input
//                 type="text"
//                 placeholder="Enter your address"
//                 value={inputtags.Address}
//                 onChange={(e) =>
//                   setInputTags({ ...inputtags, Address: e.target.value })
//                 }
//                 className="mt-3 px-4 py-2 w-full bg-white rounded-lg border border-teal-400 focus:ring focus:shadow-teal-400 focus:shadow-md focus:ring-teal-400 focus:outline-none transition-all ease-linear duration-300"
//               />
//             )}
//           </div>

//           <Button bname="Book Now" customClass="my-10" bifunc={handleSubmit} />
//         </div>
//       </TestSelection.Provider>
//     </div>
//   );
// };

// export default Appointment;

import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../Components/Button";
import SearchBar from "../Components/subComponent/searchBar";
import { TestSelection } from "../Context/Context";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { OfferPriceContext } from "../Context/Context";
import { useAppointment } from "../Context/AppointmentContext";

const API_URL = import.meta.env.VITE_API_URL;

const Appointment = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { offerPrice, setOfferPrice } = useContext(OfferPriceContext);
  const { appointmentData } = useAppointment();

  const [pkgprice, setpkgprice] = useState(location.state?.offerPrice || null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTest, setSelectedTest] = useState(
    location.state?.selectedTestIds || [],
  );
  const [inputtags, setInputTags] = useState({
    Name:
      user?.first_name && user?.last_name
        ? `${user.first_name} ${user.last_name}`
        : appointmentData?.name || "",
    Email: user?.email || appointmentData?.email || "",
    Phone: appointmentData?.number || "",
    Address: "",
  });
  const [tests, setTests] = useState([]);
  const [homeSample, setHomeSample] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [PhoneError, setPhoneError] = useState(false);

  useEffect(() => {
    const newOffer = location.state?.offerPrice || null;
    setOfferPrice(newOffer);

    if (location.state?.selectedTestIds || location.state?.offerPrice) {
      navigate(location.pathname, { replace: true, state: {} });
    }

    const cachedTests = localStorage.getItem("cachedTests");
    if (cachedTests) {
      setTests(JSON.parse(cachedTests));
    } else {
      const fetchTests = async () => {
        try {
          const token = localStorage.getItem("accessToken");
          const headers = token ? { Authorization: `Bearer ${token}` } : {};

          const { data } = await axios.get(`${API_URL}/api/tests/`, {
            headers,
          });
          setTests(data);
          localStorage.setItem("cachedTests", JSON.stringify(data));
        } catch (error) {
          console.error("Error fetching tests:", error);
        }
      };

      fetchTests();
    }

    return () => {
      localStorage.removeItem("cachedTests");
      console.log("Cache cleared on unmount ✅");
    };
  }, [location, navigate]);

  const handleSubmit = async () => {
    if (inputtags.Phone.length < 10) {
      setPhoneError(true);
      return;
    }

    const appointmentData = {
      date: selectedDate,
      time: selectedTime,
      user_name: inputtags.Name,
      user_email: inputtags.Email,
      user_phone: inputtags.Phone,
      tests: selectedTest,
      home_sample: homeSample,
      address: homeSample ? inputtags.Address : "",
    };

    try {
      const token = localStorage.getItem("accessToken");
      const headers = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await axios.post(
        `${API_URL}/api/appointments/`,
        appointmentData,
        { headers },
      );

      if (response.data.id) {
        const appointmentId = response.data.id;
        setAlertMessage("Appointment booked successfully!");
        setAlertType("success");
        setSelectedTest([]);

        setTimeout(() => {
          setAlertMessage("");
          setAlertType("");
          navigate(`/billing/${appointmentId}`, {
            state: { validAccess: true, PKGprice: pkgprice },
          });
        }, 2000);
      } else {
        throw new Error("No appointment ID in response");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      setAlertMessage("Failed to book appointment. Please try again.");
      setAlertType("error");
      setTimeout(() => {
        setAlertMessage("");
        setAlertType("");
      }, 3000);
    }
  };

  return (
    <div className="w-full px-4 sm:px-10 md:px-20 lg:px-40 py-20">
      <TestSelection.Provider value={{ selectedTest, setSelectedTest }}>
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="w-full [background:linear-gradient(45deg,#F0FDFA,theme(colors.teal.50)_50%,#F0FDFA)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.teal.400)_80%,_theme(colors.teal.500)_86%,_theme(colors.teal.600)_90%,_theme(colors.teal.700)_94%,_theme(colors.blue.950))_border-box] border-4 border-transparent animate-border rounded-full overflow-hidden">
            <div className="overflow-hidden rounded-full bg-[url('./assets/New_teal.jpg')] bg-cover bg-no-repeat text-blue-950 text-center shadow-xl shadow-gray-300">
              {alertMessage && (
                <div
                  className={`fixed top-5 z-10 mt-40 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-3/4 max-w-lg px-4 py-3 rounded-lg text-white text-center ${
                    alertType === "success" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {alertMessage}
                </div>
              )}
              <div className="p-10 sm:p-20 bg-teal-400/30 filter backdrop-blur-lg w-full">
                <h1 className="mt-2 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-blue-950">
                  Book an Appointment
                </h1>
                <p className="mt-6 text-base sm:text-lg md:text-xl text-blue-950">
                  Get an appointment at{" "}
                  <span className="ml-1 font-extrabold inline text-blue-950">
                    Fortius
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-screen-lg px-2 sm:px-6 lg:px-12 pb-20 gap-10">
          <div className="flex flex-col gap-6">
            <p className="text-xl sm:text-2xl font-extrabold text-blue-950">
              Search for Tests:
            </p>
            <SearchBar alltests={tests} offerPrice={pkgprice} />
          </div>

          <div>
            <p className="text-xl sm:text-2xl my-5 font-extrabold text-blue-950">
              Fill in Details
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative flex flex-col gap-4 text-blue-950">
                <label>Select a date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="block w-full rounded-full px-4 py-3 text-base sm:text-lg border border-teal-400 bg-white text-blue-950 focus:ring focus:shadow-teal-400 focus:shadow-md focus:outline-none transition-all duration-300"
                  required
                />
              </div>
              <div className="relative flex flex-col gap-4 text-blue-950">
                <label>Name</label>
                <input
                  type="text"
                  value={inputtags.Name}
                  onChange={(e) =>
                    setInputTags({ ...inputtags, Name: e.target.value })
                  }
                  className="px-4 py-2 w-full bg-white rounded-full border border-teal-400 focus:ring focus:shadow-teal-400 focus:shadow-md focus:outline-none transition-all duration-300"
                  placeholder="Enter Name"
                />
              </div>
              <div className="relative flex flex-col gap-4 text-blue-950">
                <label>Email</label>
                <input
                  type="email"
                  value={inputtags.Email}
                  className="px-4 py-2 w-full bg-white rounded-full border border-teal-400 focus:ring focus:shadow-teal-400 focus:shadow-md focus:outline-none transition-all duration-300"
                  placeholder="Enter Email"
                  onChange={(e) =>
                    setInputTags({ ...inputtags, Email: e.target.value })
                  }
                />
              </div>
              <div className="relative flex flex-col gap-4 text-blue-950">
                <label>Phone</label>
                <input
                  type="tel"
                  name="Phone"
                  value={inputtags.Phone}
                  onChange={(e) =>
                    setInputTags({ ...inputtags, Phone: e.target.value })
                  }
                  className="px-4 py-2 w-full bg-white rounded-full border border-teal-400 focus:ring focus:shadow-teal-400 focus:shadow-md focus:outline-none transition-all duration-300"
                  placeholder="Enter Your Number"
                  required
                />
                {PhoneError && (
                  <div className="text-sm text-red-500 mt-1">
                    * number less than 10 digits
                  </div>
                )}
              </div>
              <div className="relative flex flex-col gap-4 text-blue-950">
                <label>Select Time</label>
                <input
                  type="time"
                  min="09:00"
                  max="21:00"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="px-4 py-2 w-full bg-white rounded-full border border-teal-400 focus:ring focus:shadow-teal-400 focus:shadow-md focus:outline-none transition-all duration-300"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-6 text-xl">
            <label className="text-xl sm:text-2xl font-bold text-blue-950 flex items-center gap-4 cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={homeSample}
                  onChange={() => setHomeSample(!homeSample)}
                  className="sr-only peer"
                />
                <div className="w-12 h-6 bg-blue-950 rounded-full peer-checked:bg-teal-500 transition-all duration-150"></div>
                <div className="absolute top-1 left-1 w-4 h-4 bg-teal-400 rounded-full shadow-md peer-checked:translate-x-6 peer-checked:bg-blue-950 transition-all duration-150"></div>
              </div>
              Request Home Sample Collection
            </label>
            {homeSample && (
              <input
                type="text"
                placeholder="Enter your address"
                value={inputtags.Address}
                onChange={(e) =>
                  setInputTags({ ...inputtags, Address: e.target.value })
                }
                className="mt-3 px-4 py-2 w-full bg-white rounded-lg border border-teal-400 focus:ring focus:shadow-teal-400 focus:shadow-md focus:outline-none transition-all duration-300"
              />
            )}
          </div>

          <Button bname="Book Now" customClass="my-10" bifunc={handleSubmit} />
        </div>
      </TestSelection.Provider>
    </div>
  );
};

export default Appointment;
