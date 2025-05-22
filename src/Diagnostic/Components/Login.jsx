import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Login = () => {
  const { user, login, error } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [showPassword, setShowPassword] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/diagnostic/UserDashboard");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage(""); // Reset any previous messages
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('./assets/New_teal.jpg')] bg-no-repeat bg-cover">
      <div className="bg-teal-400/30 border-2 border-blue-950 backdrop-blur-lg p-10 rounded-lg shadow-xl w-1/4">
        <h2 className="text-5xl font-black text-blue-950 text-center mb-6 drop-shadow-lg">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg p-3 text-md font-semibold bg-transparent text-blue-950 placeholder-blue-950 outline-none border border-blue-950 focus:shadow-blue-950 focus:shadow-inner transition-all ease-linear duration-300"
            />
          </div>
          <div className="relative">
            {" "}
            {/* Add relative positioning for icon */}
            <input
              type={showPassword ? "text" : "password"} // Toggle input type
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg p-3 text-md font-semibold bg-transparent text-blue-950 placeholder-blue-950 outline-none border border-blue-950 focus:shadow-blue-950 focus:shadow-inner transition-all ease-linear duration-300 pr-10" // Add padding for icon
            />
            {/* Eye icon button to toggle password visibility */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-blue-950 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
              {/* Show appropriate icon */}
            </button>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-fit font-bold bg-transparent hover:bg-blue-950 border border-blue-950 text-blue-950 hover:text-teal-400 py-2 px-5 rounded-lg transition-all ease-linear duration-300"
            >
              Login
            </button>
          </div>

          {error && (
            <div className="mt-4 p-3 rounded-lg bg-red-100 text-red-600 text-center">
              {error}
            </div>
          )}
        </form>
        <div className="pt-3 text-center">
          New user ?{" "}
          <Link
            to="/register"
            className="hover:text-blue-900 hover:underline font-black"
          >
            register
          </Link>{" "}
        </div>
        <hr className="w-1/2 mx-auto" />
        <div className="pb-3 text-center">
          Forget Password ?{" "}
          <Link
            to="/forgot-password"
            className="hover:text-blue-900 hover:underline font-black"
          >
            reset
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
