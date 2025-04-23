
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import MembershipPlans from "../Components/MembershipPlans";
import UserMembershipStatus from "../Components/UserMembershipStatus";
import { FaFileInvoice, FaRegCalendarCheck, FaTimes } from "react-icons/fa"; // Import icons from react-icons

const UserDashboard = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);
    const [totalTests, setTotalTests] = useState(0);
    const [alertMessage, setAlertMessage] = useState("");
    const [userMembership, setUserMembership] = useState(null);
    const [membership, setMembership] = useState(null);
    const [rescheduleData, setRescheduleData] = useState(null);


    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const token = localStorage.getItem("accessToken");
                const response = await axios.get("http://127.0.0.1:8000/api/users/userappointments/", {
                    headers: { Authorization: `Bearer ${token}` },
                });

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
            const response = await axios.get(`http://127.0.0.1:8000/api/billing/${appointmentId}/`);
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
            await axios.patch(`http://127.0.0.1:8000/api/appointments/${appointmentId}/cancel/`, {}, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setAlertMessage("Appointment cancelled successfully.");
            setAppointments(prev => prev.map(a =>
                a.id === appointmentId ? { ...a, status: "cancelled" } : a
            ));
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

            await axios.post(`http://127.0.0.1:8000/api/appointments/${id}/reschedule/`, {
                new_date: date,
                new_time: time,
            }, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setAlertMessage("Appointment rescheduled successfully.");
            setRescheduleData(null);

            const updated = await axios.get("http://127.0.0.1:8000/api/users/userappointments/", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setAppointments(updated.data);
        } catch (error) {
            console.error("Reschedule failed:", error.response?.data || error.message);
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

            {/* Dashboard Header */}
            <section className="flex justify-center items-center bg-[url('./assets/New_teal.jpg')] bg-no-repeat bg-cover py-16 pt-40 text-blue-950 h-screen">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center p-16 bg-teal-400/30 border-2 border-blue-950 backdrop-blur-lg rounded-lg shadow-xl">
                    <div className="md:col-span-2">
                        <h2 className="text-6xl font-extrabold drop-shadow-lg">Welcome, {user?.first_name}!</h2>
                        <p className="text-lg font-semibold mt-3">Username: <span className="font-normal">{user?.username}</span></p>
                        <p className="text-lg font-semibold">Email: <span className="font-normal">{user?.email}</span></p>
                    </div>

                    <a href="#appointment">
                        <div className="bg-blue-950 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <h3 className="text-4xl font-extrabold text-teal-400">Total Appointments</h3>
                            <p className="text-5xl font-bold text-teal-400 mt-3">{appointments.length}</p>
                        </div>
                    </a>
                    <a href="#appointment">
                        <div className="bg-blue-950 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <h3 className="text-4xl font-extrabold text-teal-400">Total Tests</h3>
                            <p className="text-5xl font-bold text-teal-400 mt-3">{totalTests}</p>
                        </div>
                    </a>
                </div>
            </section>
            {!userMembership ? <MembershipPlans UserMembership={userMembership} setUserMembership={setUserMembership} /> :
                <UserMembershipStatus UserMembership={userMembership} setUserMembership={setUserMembership} membership={membership} setMembership={setMembership} />
            }

            {/* Appointments Table */}
            <section className="bg-white py-12 px-8" id="appointment">
                <div className="max-w-5xl mx-auto border bg-teal-50 border-blue-950 rounded-lg shadow-xl p-6">
                    <h3 className="text-3xl font-bold text-center text-blue-950 mb-6">Your Appointments</h3>

                    {appointments.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full border border-blue-950 bg-white text-blue-950 text-left">
                                <thead>
                                    <tr className="bg-blue-950 text-white">
                                        <th className="px-4 py-2">Date</th>
                                        <th className="px-4 py-2">Time</th>
                                        <th className="px-4 py-2">Tests</th>
                                        <th className="px-4 py-2">Billing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.map((appointment) => (
                                        <tr key={appointment.id} className="border-b border-blue-950 hover:bg-teal-100 transition-all ease-linear duration-300">
                                            <td className="px-4 py-3">{appointment.date}</td>
                                            <td className="px-4 py-3">{appointment.time}</td>
                                            <td className="px-4 py-3">
                                                <ul className="list-disc ml-4">
                                                    {Array.isArray(appointment.tests) ? (
                                                        appointment.tests.map((test, index) => (
                                                            <li key={index}>{test.name} - ₹{test.price}</li>
                                                        ))
                                                    ) : (
                                                        <li>{appointment.tests}</li>
                                                    )}
                                                </ul>
                                            </td>

                                            {/* Billing Status Column */}
                                            {/* <td className="px-4 py-3">
                                                <button
                                                    onClick={() => handleBillingClick(appointment.id)}
                                                    className="bg-blue-950 text-teal-400 px-3 py-1 rounded-lg hover:bg-teal-400 hover:text-blue-950 transition-all duration-300"
                                                >
                                                    View Bill
                                                </button>
                                            </td> */}<td className="px-4 py-3 space-y-2">
                                                {/* View Bill Button with Icon */}
                                                <button
                                                    onClick={() => handleBillingClick(appointment.id)}
                                                    className="bg-blue-950 text-teal-400 hover:bg-teal-400 hover:text-blue-950 transition-all duration-300 px-4 py-2 rounded-lg w-full flex items-center justify-center font-semibold"
                                                >
                                                    <FaFileInvoice className="mr-2" /> {/* Add icon with margin */}
                                                    View Bill
                                                </button>

                                                {/* Cancel Button with Icon */}
                                                <button
                                                    onClick={() => handleCancel(appointment.id)}
                                                    className={`${appointment.is_cancelled ? "bg-gray-400 text-blue-950" : "bg-red-600 text-teal-400"
                                                        } px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 w-full flex items-center justify-center font-semibold`}
                                                    disabled={appointment.is_cancelled}
                                                >
                                                    <FaTimes className="mr-2" /> {/* Add icon with margin */}
                                                    {appointment.is_cancelled ? "Cancelled" : "Cancel"}
                                                </button>

                                                {/* Reschedule Button with Icon */}
                                                <button
                                                    onClick={() => openRescheduleModal(appointment)}
                                                    className="bg-yellow-500 text-blue-950 hover:bg-yellow-600 transition-all duration-300 px-4 py-2 rounded-lg w-full flex items-center justify-center font-semibold"
                                                >
                                                    <FaRegCalendarCheck className="mr-2" /> {/* Add icon with margin */}
                                                    Reschedule
                                                </button>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-center text-blue-950">No appointments found.</p>
                    )}
                </div>
            </section>{rescheduleData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-teal-400/30 transition-opacity duration-300">
                    {/* Popover panel */}
                    <div className="relative bg-white rounded-2xl p-6 shadow-2xl w-[90%] max-w-md transform transition-all scale-100 opacity-100">

                        {/* Header */}
                        <h3 className="text-2xl font-semibold text-blue-950 mb-4 border-b pb-2">
                            Reschedule Appointment
                        </h3>

                        {/* Date Picker */}
                        <div className="mb-4">
                            <label className="text-sm font-medium text-blue-950 mb-1 block">Date</label>
                            <input
                                type="date"
                                value={rescheduleData.date}
                                onChange={(e) => setRescheduleData({ ...rescheduleData, date: e.target.value })}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                            />
                        </div>

                        {/* Time Picker */}
                        <div className="mb-6">
                            <label className="text-sm font-medium text-blue-950 mb-1 block">Time</label>
                            <input
                                type="time"
                                value={rescheduleData.time}
                                onChange={(e) => setRescheduleData({ ...rescheduleData, time: e.target.value })}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                            />
                        </div>

                        {/* Buttons */}
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