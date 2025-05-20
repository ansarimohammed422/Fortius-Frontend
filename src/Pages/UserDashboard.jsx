import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import MembershipPlans from "../Components/MembershipPlans";
import UserMembershipStatus from "../Components/UserMembershipStatus";
import { FaFileInvoice, FaRegCalendarCheck, FaTimes } from "react-icons/fa"; // Import icons from react-icons
import { MyLinks } from "../Components/Button";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [totalTests, setTotalTests] = useState(0);
  const [alertMessage, setAlertMessage] = useState("");
  const [userMembership, setUserMembership] = useState(null);
  const [membership, setMembership] = useState(null);
  const [rescheduleData, setRescheduleData] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [showFilterDropdown, setShowFilterDropdown] = useState(false); // State for filter dropdown visibility
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'cancelled', 'not_cancelled'
  const [filterDate, setFilterDate] = useState('');
  const [filterTime, setFilterTime] = useState('');

  const filteredAppointments = appointments.filter(appointment => {
    const query = searchQuery.toLowerCase();
    const dateMatch = appointment.date.toLowerCase().includes(query);
    const timeMatch = appointment.time.toLowerCase().includes(query);
    const testsMatch = Array.isArray(appointment.tests)
      ? appointment.tests.some(test => test.name.toLowerCase().includes(query))
      : appointment.tests.toString().toLowerCase().includes(query);

    // New filter conditions
    const statusFilterPasses = filterStatus === 'all' ||
                               (filterStatus === 'cancelled' && appointment.is_cancelled) ||
                               (filterStatus === 'not_cancelled' && !appointment.is_cancelled);

    const dateFilterPasses = filterDate === '' || appointment.date === filterDate;

    const timeFilterPasses = filterTime === '' || (appointment.time && appointment.time.startsWith(filterTime)); // Use startsWith for partial time matching if needed, or strict equality

    return (dateMatch || timeMatch || testsMatch) && statusFilterPasses && dateFilterPasses && timeFilterPasses;
  });

  const appointmentListContent = filteredAppointments.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredAppointments.map((appointment) => (
        <div
          key={appointment.id}
          className="bg-white p-4 rounded-lg shadow border border-blue-950"
        >
          <div className="mb-3 pb-2 border-b border-gray-200">
            <p className="text-sm text-gray-600">
              Date:{" "}
              <span className="font-semibold text-blue-950">
                {appointment.date}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              Time:{" "}
              <span className="font-semibold text-blue-950">
                {appointment.time}
              </span>
            </p>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Tests:</p>
            <ul className="list-disc ml-4 text-blue-950">
              {Array.isArray(appointment.tests) ? (
                appointment.tests.map((test, index) => (
                  <li key={index} className="text-sm">
                    {test.name} - ₹{test.price}
                  </li>
                ))
              ) : (
                <li className="text-sm">{appointment.tests}</li>
              )}
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleBillingClick(appointment.id)}
              className="bg-blue-950 text-teal-400 hover:bg-teal-400 hover:text-blue-950 transition-all duration-300 px-4 py-2 rounded-lg w-full flex items-center justify-center font-semibold"
            >
              <FaFileInvoice className="mr-2" /> View Bill
            </button>

            <button
              onClick={() => handleCancel(appointment.id)}
              className={`${
                appointment.is_cancelled
                  ? "bg-gray-400 text-blue-950 cursor-not-allowed"
                  : "bg-red-600 text-teal-400 hover:bg-red-700"
              } px-4 py-2 rounded-lg transition-all duration-300 w-full flex items-center justify-center font-semibold`}
              disabled={appointment.is_cancelled}
            >
              <FaTimes className="mr-2" />{" "}
              {appointment.is_cancelled ? "Cancelled" : "Cancel"}
            </button>

            <button
              onClick={() => openRescheduleModal(appointment)}
              className="bg-yellow-500 text-blue-950 hover:bg-yellow-600 transition-all duration-300 px-4 py-2 rounded-lg w-full flex items-center justify-center font-semibold"
            >
              <FaRegCalendarCheck className="mr-2" /> Reschedule
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-blue-950">No appointments found.</p>
  );

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(
          "http://127.0.0.1:8000/api/users/userappointments/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setAppointments(response.data);

        let testsCount = 0;
        response.data.forEach((appointment) => {
          if (Array.isArray(appointment.tests)) {
            testsCount += appointment.tests.length;
          } else {
            testsCount += 1;
          }
        });
        setTotalTests(testsCount);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    if (user) {
      fetchAppointments();
    }
  }, [user]);

  /** Fetch billing data only when an appointment is clicked */
  const handleBillingClick = async (appointmentId) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/billing/${appointmentId}/`
      );
      if (response.status === 200) {
        navigate(`/billing/${appointmentId}`, { state: { validAccess: true } }); // Redirect to billing page
      }
    } catch (error) {
      console.error("Error fetching bill:", error);
      setAlertMessage("No bill found for this appointment.");
      setTimeout(() => setAlertMessage(""), 3000);
    }
  };
  const handleCancel = async (appointmentId) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.patch(
        `http://127.0.0.1:8000/api/appointments/${appointmentId}/cancel/`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setAlertMessage("Appointment cancelled successfully.");
      setAppointments((prev) =>
        prev.map((a) =>
          a.id === appointmentId ? { ...a, status: "cancelled" } : a
        )
      );
    } catch (error) {
      console.error("Cancel error:", error);
      setAlertMessage("Failed to cancel appointment.");
    }

    setTimeout(() => setAlertMessage(""), 5000);
  };
  const openRescheduleModal = (appointment) => {
    setRescheduleData({
      id: appointment.id,
      date: appointment.date,
      time: appointment.time,
    });
  };
  const handleReschedule = async ({ id, date, time }) => {
    try {
      const token = localStorage.getItem("accessToken");

      // Log to check if date and time are set properly
      console.log("Sending:", { new_date: date, new_time: time });

      await axios.post(
        `http://127.0.0.1:8000/api/appointments/${id}/reschedule/`,
        {
          new_date: date,
          new_time: time,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setAlertMessage("Appointment rescheduled successfully.");
      setRescheduleData(null);

      const updated = await axios.get(
        "http://127.0.0.1:8000/api/users/userappointments/",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setAppointments(updated.data);
    } catch (error) {
      console.error(
        "Reschedule failed:",
        error.response?.data || error.message
      );
      setAlertMessage("Failed to reschedule appointment.");
    }

    setTimeout(() => setAlertMessage(""), 5000);
  };

  return (
    <div>
      {alertMessage && (
        <div className="fixed bottom-10 left-1/2 text-2xl font-bold transform -translate-x-1/2 px-4 py-3 rounded-lg text-blue-950  text-center bg-teal-400/30 backdrop-blur-md transition-all duration-500 ease-linear">
          {alertMessage}
        </div>
      )}

      <section className="flex justify-center items-center bg-[url('./assets/New_teal.jpg')] bg-no-repeat bg-cover py-16 pt-40 text-blue-950 h-screen">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center p-16 bg-teal-400/30 border-2 border-blue-950 backdrop-blur-lg rounded-lg shadow-xl">
          <div className="md:col-span-2">
            <h2 className="text-6xl font-extrabold drop-shadow-lg">
              Welcome, {user?.first_name}!
            </h2>
            <p className="text-lg font-semibold mt-3">
              Username: <span className="font-normal">{user?.username}</span>
            </p>
            <p className="text-lg font-semibold">
              Email: <span className="font-normal">{user?.email}</span>
            </p>
          </div>

          <a href="#appointment">
            <div className="bg-blue-950 rounded-lg p-6 hover:bg-transparent text-teal-400 hover:text-blue-950 transition-all duration-300 hover:scale-105 hover:shadow-xl  ">
              <h3 className="text-4xl font-extrabold  ">Total Appointments</h3>
              <p className="text-5xl font-bold  mt-3">{appointments.length}</p>
            </div>
          </a>
          <a href="#appointment">
            <div className="bg-blue-950 text-teal-400 hover:text-blue-950 hover:bg-transparent rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <h3 className="text-4xl font-extrabold ">Total Tests</h3>
              <p className="text-5xl font-bold  mt-3">{totalTests}</p>
            </div>
          </a>
          <div className="flex justify-center items-center col-span-2">
            <MyLinks
              path="/Appointment"
              LName="Book Appointment"
              customClass="bg-blue-950  px-5 py-2 rounded-xl hover:bg-transparent hover:shadow-xl  "
            />
          </div>
        </div>
      </section>
      {!userMembership ? (
        <MembershipPlans
          UserMembership={userMembership}
          setUserMembership={setUserMembership}
        />
      ) : (
        <UserMembershipStatus
          UserMembership={userMembership}
          setUserMembership={setUserMembership}
          membership={membership}
          setMembership={setMembership}
        />
      )}

      <section className="bg-white py-12 px-8" id="appointment">
        <div className="max-w-7xl mx-auto border bg-teal-50 border-blue-950 rounded-lg shadow-xl p-6">
          {/* Search Bar and Filter Toggle */}
          <div className="flex flex-col md:flex-row gap-4 mb-4 items-center">
            <input
              type="text"
              placeholder="Search appointments (date, time, test names)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-blue-950"
            />
            <button
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="px-4 py-2 bg-blue-950 text-teal-400 rounded-lg hover:bg-teal-400 hover:text-blue-950 transition-colors duration-300 font-semibold"
            >
              Filter
            </button>
          </div>

          {/* Filter Dropdown Content */}
          {showFilterDropdown && (
            <div className="bg-teal-100 p-4 rounded-lg mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-blue-950 mb-1">Status:</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-blue-950"
                >
                  <option value="all">All Statuses</option>
                  <option value="not_cancelled">Upcoming</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              {/* Date Filter */}
              <div>
                 <label className="block text-sm font-medium text-blue-950 mb-1">Date:</label>
                <input
                  type="date"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-blue-950"
                />
              </div>

              {/* Time Filter */}
              <div>
                 <label className="block text-sm font-medium text-blue-950 mb-1">Time:</label>
                  <input
                    type="time"
                    value={filterTime}
                    onChange={(e) => setFilterTime(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-blue-950"
                  />
                </div>
              </div>
            )}

            <h3 className="text-3xl font-bold text-center text-blue-950 mb-6">
              Your Appointments
            </h3>

          {appointmentListContent}
        </div>
      </section>

      {rescheduleData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-teal-400/30 transition-opacity duration-300">
          {/* Popover panel */}
          {/* Popover panel */}
          <div className="relative bg-white rounded-2xl p-6 shadow-2xl w-[90%] max-w-md transform transition-all scale-100 opacity-100">
            {/* Header */}
            <h3 className="text-2xl font-semibold text-blue-950 mb-4 border-b pb-2">
              Reschedule Appointment
            </h3>

            {/* Date Picker */}
            <div className="mb-4">
              <label className="text-sm font-medium text-blue-950 mb-1 block">
                Date
              </label>
              <input
                type="date"
                value={rescheduleData.date}
                onChange={(e) =>
                  setRescheduleData({ ...rescheduleData, date: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium text-blue-950 mb-1 block">
                Time
              </label>
              <input
                type="time"
                value={rescheduleData.time}
                onChange={(e) =>
                  setRescheduleData({ ...rescheduleData, time: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setRescheduleData(null)}
                className="px-4 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => handleReschedule(rescheduleData)}
                className="px-4 py-2 rounded-lg bg-blue-950 text-teal-400 hover:bg-teal-400 hover:text-blue-950 transition font-semibold"
              >
                Confirm
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={() => setRescheduleData(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default UserDashboard;
