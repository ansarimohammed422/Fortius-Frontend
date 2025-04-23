import "@fontsource/nunito";
import "@fontsource/nunito/200.css";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import "@fontsource/nunito/900.css";


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext.jsx";
createRoot(document.getElementById("root")).render(


  <StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* ✅ Wrap the entire app inside AuthProvider */}

        <App />
      </AuthProvider>

    </BrowserRouter>
  </StrictMode>
);
