import { useEffect, useState, useRef, useContext } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { OfferPriceContext } from "../Context/Context";
const BillingPage = () => {
  const { offerPrice } = useContext(OfferPriceContext);
  const { appointmentId } = useParams();
  const location = useLocation(); // Get navigation state
  const navigate = useNavigate();
  const [bill, setBill] = useState(null);
  const [loading, setLoading] = useState(true);
  const billRef = useRef(); // Reference to bill section
  let offer_price;

  useEffect(() => {
    console.log(offerPrice)
    if (!location.state || !location.state.validAccess) {
      navigate("/UserDashboard"); // Redirect unauthorized access to dashboard
      return;
    }
    axios
      .get(`http://127.0.0.1:8000/api/billing/${appointmentId}/`)
      .then((response) => {
        setBill(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bill:", error)
        setLoading(false);
      });
  }, [appointmentId, location.state, navigate]);

  // ✅ Function to print only the bill (excluding navbar/footer)
  const handlePrint = () => {
    const originalContents = document.body.innerHTML;
    const billContents = billRef.current.innerHTML;

    document.body.innerHTML = billContents; // Set body to only bill content
    window.print();
    document.body.innerHTML = originalContents; // Restore full page after printing
    // window.location.reload(); // Reload to restore event listeners
  };

  return (
    <div className="flex justify-center items-center pt-40 pb-10 min-h-screen bg--100">
      {loading ? (

        <p className="text-blue-950 text-xl">Loading bill details...</p>
      ) : (
        <div ref={billRef} className="max-w-2xl w-full bg-teal-50 p-8 rounded-lg shadow-lg border border-gray-300">
          {/* Bill Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-blue-950">Fortius Diagnostic Center</h1>
            <p className="text-gray-600">123, Health Street, Mumbai, India</p>
            <p className="text-gray-600">Phone: +91 9076115232</p>
            <hr className="my-4 border-gray-400" />
            <h2 className="text-xl font-bold text-gray-800">Invoice</h2>
            {offerPrice && <h1 className="text-xl font-bold text-gray-800">Packaged Tests</h1>}
          </div>

          {/* Patient Details */}
          <div className="mb-6">
            <p><strong>Patient Name:</strong> {bill.patient_name}</p>
            <p><strong>Email:</strong> {bill.user_email}</p>
            <p><strong>Phone:</strong> {bill.user_phone}</p>
            <p><strong>Appointment ID:</strong> {bill.appointment_id}</p>
            <p><strong>Generated At:</strong> {bill.generated_at}</p>
          </div>

          {/* Test Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-950 mb-2">Test Details</h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-950 text-white">
                  <th className="border border-teal-400 px-4 py-2 text-teal-400 text-left">Test Name</th>
                  <th className="border border-teal-400 px-4 py-2 text-teal-400 text-left">Price (₹)</th>
                </tr>
              </thead>
              <tbody>
                {bill.tests.map((test, index) => (
                  <tr key={index} className="text-gray-800 border-b border-teal-400">
                    <td className="px-4 py-2 border border-teal-400">{test.name}</td>
                    <td className="px-4 py-2 border border-teal-400">₹{test.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Payment Summary */}
          <div>
            <div className="flex justify-between items-center mt-4">
              <h3 className="text-lg font-semibold text-blue-950">Total Amount:</h3>
              <p className="text-xl font-bold text-gray-800">₹Rs {bill.total_price}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <h3 className="text-lg font-semibold text-blue-950">Offer Amount:</h3>
              <p className="text-xl font-bold text-gray-800">₹Rs.{offerPrice == null ? null : offerPrice}</p>
            </div>
          </div>

          {/* Payment Status */}
          <div className="mt-6">
            <p className="text-lg font-semibold">
              <strong>Payment Status:</strong>{" "}
              <span className={bill.is_paid ? "text-green-600" : "text-red-600"}>
                {bill.is_paid ? "Paid ✅" : "Unpaid ⏳"}
              </span>
            </p>
          </div>

          {/* Print PDF Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handlePrint}
              className="bg-blue-950 text-teal-400 px-4 py-2 rounded-lg font-semibold hover:bg-teal-400 hover:text-blue-950 transition-colors ease-linear duration-300"
            >
              Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingPage;

