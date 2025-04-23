import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {
  const { uidb64, token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // useNavigate hook from react-router-dom v6

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("accessToken"); // Assuming the token is stored in localStorage
    if (token) {
      navigate("/UserDashboard"); // Redirect to dashboard or home page if logged in
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setError("");

    if (password !== confirmPassword) {
      setError("❌ Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`http://localhost:8000/api/reset-password/${uidb64}/${token}/`, {
        password,
      });

      if (res.status === 200) {
        setMsg(res.data.message || "✅ Password reset successful.");
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("❌ The password reset link has expired or is invalid.");
      } else {
        setError("❌ Failed to reset password. Please try again.");
      }
    }
    setLoading(false);
  };

  const showMismatchError = confirmPassword && password !== confirmPassword;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('./assets/New_teal.jpg')] bg-center bg-cover p-4">
      <div className="bg-teal-400/30 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-md border border-blue-950">
        <h2 className="text-2xl font-semibold text-blue-950 text-center mb-6">🔒 Reset Your Password</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full p-3 rounded-lg border backdrop-blur-md border-blue-950 bg-transparent text-blue-950 placeholder-blue-950/70 focus:outline-none focus:shadow-inner focus:shadow-blue-950 transition-all duration-300 ease-linear"
          />
          <div className="relative">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className={`w-full p-3 rounded-lg border backdrop-blur-md ${
                showMismatchError ? "border-red-500" : "border-blue-950"
              } bg-transparent text-blue-950 placeholder-blue-950/70 focus:outline-none focus:shadow-inner focus:shadow-blue-950 transition-all duration-300 ease-linear`}
            />
            {showMismatchError && (
              <p className="text-sm text-red-500 mt-1">⚠️ Passwords do not match</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || showMismatchError || !password}
            className="w-full bg-transparent border border-blue-950 backdrop-blur-md hover:bg-blue-950 text-blue-950 hover:text-teal-400 font-semibold py-3 rounded-lg transition-all duration-300 ease-linear disabled:opacity-50"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        {error && <p className="text-center mt-4 text-red-500 font-medium">{error}</p>}
        {msg && <p className="text-center mt-4 text-green-300 font-medium">{msg}</p>}
      </div>
    </div>
  );
}
