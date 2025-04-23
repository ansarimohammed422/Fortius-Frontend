import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
    const { register, error , setError} = useContext(AuthContext);
    const [formData, setFormData] = useState({ username: "", password: "", firstName: "", lastName: "", email: "" });
    const [responseMessage, setResponseMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponseMessage(""); // Reset message before new request
        await register(formData.username, formData.password, formData.firstName, formData.lastName, formData.email);
    };

    const handleClick = ()=>{
        setError(null)
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[url('./assets/New_teal.jpg')] bg-no-repeat bg-cover">
            <div className="bg-teal-400/30 border-2 border-blue-950 backdrop-blur-lg p-20 rounded-lg shadow-xl 1/3">
                <h2 className="text-6xl font-black text-blue-950 text-center mb-6 drop-shadow-lg">
                    Register
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            onClick={handleClick}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="w-full rounded-lg p-3 text-md font-semibold bg-transparent text-blue-950 placeholder-blue-950 outline-none border border-blue-950 focus:shadow-blue-950 focus:shadow-inner transition-all ease-linear duration-300"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            onClick={handleClick}

                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="w-full rounded-lg p-3 text-md font-semibold bg-transparent text-blue-950 placeholder-blue-950 outline-none border border-blue-950 focus:shadow-blue-950 focus:shadow-inner transition-all ease-linear duration-300"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Username"
                        onClick={handleClick}

                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        className="w-full rounded-lg p-3 text-md font-semibold bg-transparent text-blue-950 placeholder-blue-950 outline-none border border-blue-950 focus:shadow-blue-950 focus:shadow-inner transition-all ease-linear duration-300"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        onClick={handleClick}

                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg p-3 text-md font-semibold bg-transparent text-blue-950 placeholder-blue-950 outline-none border border-blue-950 focus:shadow-blue-950 focus:shadow-inner transition-all ease-linear duration-300"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onClick={handleClick}

                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full rounded-lg p-3 text-md font-semibold bg-transparent text-blue-950 placeholder-blue-950 outline-none border border-blue-950 focus:shadow-blue-950 focus:shadow-inner transition-all ease-linear duration-300"
                    />

                    <div className="mt-4">
                        <button
                            type="submit"
                            className="w-fit text-xl font-bold bg-transparent hover:bg-blue-950 border border-blue-950 text-blue-950 hover:text-teal-400 py-2 px-5 rounded-lg transition-all ease-linear duration-300"
                        >
                            Register
                        </button>
                    </div>
                    <div className="flex justify-center">

                    {error && (<div className="mt-4 p-3 w-[700px] rounded-lg bg-red-100 text-red-600 text-center">
                        {error}
                    </div>)}
                    </div>
                </form>
                <div className="p-3 text-center" >Already a user : <Link to="/login" className="hover:text-blue-900 hover:underline font-black" >Login</Link> </div>
            </div>
            
        </div>
    );
};

export default Register;

