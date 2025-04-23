
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken")
  );
  const [error, setError] = useState(null); // New error state
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/users/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("accessToken", data.tokens.access);
        localStorage.setItem("refreshToken", data.tokens.refresh);
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        setAccessToken(data.tokens.access);
        setRefreshToken(data.tokens.refresh);
        setError(null); // Clear any existing error
        navigate("/UserDashboard"); // Redirect after login
      } else {
        // Instead of alert, set the error state so UI can display it
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("An error occurred during login");
    }
  };


// const register = async (username, password, firstName, lastName, email) => {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/users/register/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username,
//           password,
//           first_name: firstName,
//           last_name: lastName,
//           email,
//         }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setError(null);
//         navigate("/login"); // Redirect to login page on success
//       } else {
//         // If data is an object containing field errors, join them into a single string.
//         let errorMessage = "Registration failed";
//         if (typeof data === "object") {
//           errorMessage = Object.entries(data)
//             .map(([field, errors]) => `${field}: ${Array.isArray(errors) ? errors.join(", ") : errors}`)
//             .join(" | ");
//         }
//         setError(errorMessage);
//       }
//     } catch (err) {
//       setError("An error occurred during registration");
//     }
//   };
  
const register = async (username, password, firstName, lastName, email) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/users/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        first_name: firstName,
        last_name: lastName,
        email,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setError(null);
      navigate("/login"); // Redirect to login page on success
    } else {
      // Pick the first validation error from the response
      let errorMessage = "Registration failed";

      if (typeof data === "object" && Object.keys(data).length > 0) {
        const firstErrorField = Object.keys(data)[0]; // Get the first field with an error
        const firstErrorMessage = Array.isArray(data[firstErrorField])
          ? data[firstErrorField][0] // Get the first error message for that field
          : data[firstErrorField];

        errorMessage = `${firstErrorField}: ${firstErrorMessage}`;
      }

      setError(errorMessage);
    }
  } catch (err) {
    setError("An error occurred during registration");
  }
};


  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
    setError(null);
    navigate("/login"); // Redirect to login
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, error, setError , login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

