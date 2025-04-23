import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import ScrollToTop from "../Components/ScrollToTop";
import SearchBar from "../Components/subComponent/searchBar";
import { TestSelection } from "../Context/Context";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const Appointment = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTest, setSelectedTest] = useState([]);
  const [inputtags, setInputTags] = useState({Name: `${user.first_name} ${user.last_name}` , Email:user.email ,  Phone: "", Address: "" });
  const [tests, setTests] = useState([]);
  const [homeSample, setHomeSample] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [PhoneError, setPhoneError] = useState(false)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const testsResponse = await axios.get("http://127.0.0.1:8000/api/tests/",{
          headers: { Authorization: `Bearer ${token}` },
      });
        setTests(testsResponse.data);
        console.log(tests)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchTests();
    const fetchcategories = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const categoryresponse = await axios.get("http://127.0.0.1:8000/api/category/",{
          headers: { Authorization: `Bearer ${token}` },
      });
        setCategories(categoryresponse.data);
        console.log(categories)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchcategories()
  }, []);

  const handleSubmit = async () => {
    if (inputtags.Phone.length < 10) {
      setPhoneError(true);
      return;
    }

    // Prepare appointment data
    const appointmentData = {
      date: selectedDate,
      time: selectedTime,
      user_name: inputtags.Name,
      user_email: inputtags.Email,
      user_phone: inputtags.Phone,
      tests: selectedTest,
      home_sample: homeSample,  // New field
      address: homeSample ? inputtags.Address : "", // Only send address if checked
    };

    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.post("http://127.0.0.1:8000/api/appointments/", appointmentData,
        {
          headers: { Authorization: `Bearer ${token}` },
      }
      );

      if (response.data.id) {
        const appointmentId = response.data.id;
        console.log("Appointment created successfully. Redirecting to billing:", appointmentId);

        setAlertMessage("Appointment booked successfully!");
        setAlertType("success");

        setTimeout(() => {
          setAlertMessage("");
          setAlertType("");
          navigate(`/billing/${appointmentId}`, { state: { validAccess: true } });
        }, 2000);

      } else {
        console.error("Error: Appointment ID not received.");
        setAlertMessage("Error: Appointment ID not found.");
        setAlertType("error");

        setTimeout(() => {
          setAlertMessage("");
          setAlertType("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error saving appointment:", error.response?.data || error.message);

      setAlertMessage("Failed to book appointment. Please try again.");
      setAlertType("error");

      setTimeout(() => {
        setAlertMessage("");
        setAlertType("");
      }, 3000);
    }
  };

  return (
    <div className="w-screen p-20 ">
      <TestSelection.Provider value={{ selectedTest, setSelectedTest }}>
        <div className="relative mx-auto mt-20 mb-20 max-w-screen-lg overflow-hidden rounded-xl bg-[url('./assets/New_teal.jpg')] bg-cover bg-no-repeat text-blue-950 text-center shadow-xl shadow-gray-300">
          {alertMessage && (
            <div
              className={`fixed top-5 z-10 mt-40 left-1/2 transform -translate-x-1/2 w-3/4 max-w-lg px-4 py-3 rounded-lg text-white text-center ${alertType === "success" ? "bg-green-500" : "bg-red-500"
                }`}
            >
              {alertMessage}
            </div>
          )}
          <div className="relative bg-teal-400/30 filter backdrop-blur-lg py-20 w-full h-full">
            <h1 className="mt-2 px-8 text-3xl font-bold md:text-7xl text-blue-950">Book an Appointment</h1>
            <p className="mt-6 text-lg text-blue-950">
              Get an appointment at{" "}
              <span className="ml-1 font-extrabold inline text-blue-950">Fortius</span>
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-screen-lg px-6 pb-20">
          <div className="my-10 flex flex-col gap-6">
            <p className="text-2xl font-extrabold text-blue-950">Search for a Tests:</p>
            <SearchBar alltests={tests} allCategories={categories} />
          </div>

          <div className="mb-10">
            <p className="text-2xl my-5 font-extrabold text-blue-950">Fill in Details</p>
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-2">
              <div className="relative flex flex-col gap-4 text-xl text-blue-950">
                <label>Select a date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="block w-full rounded-lg px-4 py-3 text-xl border border-teal-400 bg-white text-blue-950 focus:ring focus:shadow-teal-400 focus:shadow-md focus:ring-teal-400 focus:outline-none transition-all ease-linear duration-300"
                  required
                />
              </div>
              <div className="relative flex flex-col gap-4 text-xl text-blue-950">
                <label>Name</label>
                <input
                  type="text"
                  value={inputtags.Name}
                  onChange={(e) => setInputTags({ ...inputtags, Name: e.target.value })}

                  className="px-4 py-2 w-full bg-white rounded-lg border border-teal-400 focus:ring focus:shadow-teal-400 focus:shadow-md focus:ring-teal-400 focus:outline-none transition-all ease-linear duration-300"
                  
                />
              </div>
              <div className="relative flex flex-col gap-4 text-xl text-blue-950">
                <label>Email</label>
                <input
                  type="email"
                  value={inputtags.Email}
                  className="px-4 py-2 w-full bg-white rounded-lg border border-teal-400 focus:ring focus:shadow-teal-400 focus:shadow-md focus:ring-teal-400 focus:outline-none transition-all ease-linear duration-300"
                  onChange={(e) => setInputTags({ ...inputtags, Email: e.target.value })}

                />
              </div>
              <div className="relative flex flex-col gap-4 text-xl text-blue-950">
                <label>Phone</label>
                <input
                  type="tel"
                  name="Phone"
                  value={inputtags.Phone}
                  onChange={(e) => setInputTags({ ...inputtags, Phone: e.target.value })}
                  className="px-4 py-2 w-full bg-white rounded-lg border border-teal-400 focus:ring focus:shadow-teal-400 focus:shadow-md focus:ring-teal-400 focus:outline-none transition-all ease-linear duration-300"
                  placeholder="Enter Your Number"
                  required
                />
                {PhoneError && <div className="text-sm m-0 text-red-500">* number less than 10 digits</div>}
              </div>
              <div className="relative flex flex-col gap-4 text-xl text-blue-950">
                <label>Select Time</label>
                <input
                  type="time"
                  min="09:00"
                  max="21:00"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="px-4 py-2 w-full bg-white rounded-lg border border-teal-400 focus:ring focus:shadow-teal-400 focus:shadow-md focus:ring-teal-400 focus:outline-none transition-all ease-linear duration-300"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-6 text-xl">
            <label className="text-xl font-bold text-blue-950 flex items-center gap-4 cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={homeSample}
                  onChange={() => setHomeSample(!homeSample)}
                  className="sr-only peer"
                />
                <div className="w-12 h-6 bg-blue-950 rounded-full peer-checked:bg-teal-500 transition-all ease-linear duration-150"></div>
                <div className="absolute top-1 left-1 w-4 h-4 bg-teal-400 rounded-full shadow-md peer-checked:translate-x-6 peer-checked:bg-blue-950 transition-all ease-linear duration-150"></div>
              </div>
              <h1 className="text-2xl my-5 font-extrabold text-blue-950">
              Request Home Sample Collection
              </h1>
            </label>
            {homeSample && (
              <input
                type="text"
                placeholder="Enter your address"
                value={inputtags.Address}
                onChange={(e) => setInputTags({ ...inputtags, Address: e.target.value })}
                className="mt-3 px-4 py-2 w-full bg-white rounded-lg border border-teal-400 focus:ring focus:shadow-teal-400 focus:shadow-md focus:ring-teal-400 focus:outline-none transition-all ease-linear duration-300"
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
