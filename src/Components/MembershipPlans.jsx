import { useEffect, useState } from "react";
import axios from "axios";

const MembershipPlans = (props) => {
  const [plans, setPlans] = useState([]);
//   const [userMembership, setUserMembership] = useState(null);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/membership/plans/")
      .then((response) => {
        setPlans(response.data);
        console.log("Plans API Response:", response.data); // Debugging
      })
      .catch((error) => console.error("Error fetching plans:", error));
    if (token) {
      axios
        .get("http://127.0.0.1:8000/api/membership/status/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => props.setUserMembership(response.data))
        .catch((error) => console.error("Error fetching user membership:", error));
    }
  }, [token]);

  const handleSubscribe = (planId) => {
    axios
      .post(
        "http://127.0.0.1:8000/api/membership/subscribe/",
        { plan_id: planId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        alert("Subscription Successful!");
        props.setUserMembership({ plan: response.data.plan, end_date: response.data.end_date });
      })
      .catch((error) => console.error("Error subscribing:", error));
  };

  const handleUnsubscribe = () => {
    axios
      .delete("http://127.0.0.1:8000/api/membership/unsubscribe/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        alert("Unsubscribed Successfully!");
        props.setUserMembership(null);
      })
      .catch((error) => console.error("Error unsubscribing:", error));
  };

  return (
    <div className="p-8 bg-white h-fit flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-950 mb-6">Choose Your Membership Plan</h2>
      
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full max-w-5xl">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className="bg-teal-50 shadow-lg rounded-lg p-6 border border-teal-400 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
            <p className="text-gray-600 text-lg mb-1">Price: <span className="font-bold text-teal-600">₹{plan.price}</span></p>
            <p className="text-gray-600 text-lg">Discount: <span className="font-bold text-green-600">{plan.discount_percentage}%</span></p>

            <div className="mt-4">
              {props.userMembership && props.userMembership.plan === plan.name ? (
                <button 
                  className="w-full bg-red-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-red-600 transition-all duration-300" 
                  onClick={handleUnsubscribe}
                >
                  Unsubscribe
                </button>
              ) : (
                <button 
                  className="w-full bg-blue-950 text-teal-400 font-medium px-6 py-2 rounded-lg hover:bg-teal-400 hover:text-blue-950 transition-all duration-300" 
                  onClick={() => handleSubscribe(plan.id)}
                >
                  Subscribe
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;
