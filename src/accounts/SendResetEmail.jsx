// // import { useState } from "react";
// // import axios from "axios";

// // export default function SendResetEmail() {
// //   const [email, setEmail] = useState("");
// //   const [msg, setMsg] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.post("http://localhost:8000/api/send-reset-email/", { email });
// //       setMsg(res.data.message);
// //     } catch (err) {
// //       setMsg("Error sending email.");
// //     }
// //   };

// //   return (
// //     <div className="m-20 p-4 max-w-md mx-auto">
// //       <h2>Forgot Password?</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full mb-2" />
// //         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Reset Link</button>
// //       </form>
// //       {msg && <p>{msg}</p>}
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import axios from "axios";

// export default function SendResetEmail() {
//   const [email, setEmail] = useState("");
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMsg("");
//     try {
//       const res = await axios.post("http://localhost:8000/api/send-reset-email/", { email });
//       setMsg(res.data.message || "Reset link sent to your email.");
//     } catch (err) {
//       setMsg("❌ Error sending email.");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[url('./assets/New_teal.jpg')] bg-center bg-cover p-4">
//       <div className="bg-teal-400/50 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-lg border border-blue-950">
//         <h2 className="text-4xl font-semibold text-blue-950 text-center mb-6">Forgot Password?</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             value={email}
//             placeholder="Enter your email"
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-3 rounded-lg border border-blue-950 focus:shadow-inner focus:shadow-blue-950 bg-transparent text-blue-950 placeholder-blue-950/70 text-xl placeholder:text-xl focus:outline-none transition-all duration-300 ease-linear"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-teal-400/30 backdrop-blur-md text-xl  border border-blue-950  hover:bg-blue-950 text-blue-950 hover:text-teal-400 font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 ease-linear"
//           >
//             {loading ? "Sending..." : "Send Reset Link"}
//           </button>
//         </form>
//         {msg && (
//           <p className="text-center mt-4 text-white/90">{msg}</p>
//         )}
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SendResetEmail() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await axios.post("http://localhost:8000/api/send-reset-email/", { email });
      setMsg(res.data.message || "✅ Reset link sent to your email.");
      
      // ✅ Redirect to login page after 3 seconds
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      setMsg("❌ Error sending email.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('./assets/New_teal.jpg')] bg-center bg-cover p-4">
      <div className="bg-teal-400/50 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-lg border border-blue-950">
        <h2 className="text-4xl font-semibold text-blue-950 text-center mb-6">Forgot Password?</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg border border-blue-950 focus:shadow-inner focus:shadow-blue-950 bg-transparent text-blue-950 placeholder-blue-950/70 text-xl placeholder:text-xl focus:outline-none transition-all duration-300 ease-linear"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-400/30 backdrop-blur-md text-xl border border-blue-950 hover:bg-blue-950 text-blue-950 hover:text-teal-400 font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 ease-linear"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {msg && (
          <p className="text-center mt-4 text-white/90">
            {msg} <br /> <span className="text-sm text-blue-200">(Redirecting to login...)</span>
          </p>
        )}
      </div>
    </div>
  );
}
