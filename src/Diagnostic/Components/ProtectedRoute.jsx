import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (!user && !storedUser) {
            navigate("/login"); // Redirect to login if user is not authenticated
        }
    }, [user, navigate]);

    return user || localStorage.getItem("user") ? children : null;
};

export default ProtectedRoute;
