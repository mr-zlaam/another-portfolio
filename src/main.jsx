import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.css";
import RadialGradient from "./Components/Background Animated/bgAnimated";
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RadialGradient>
        <App />
      </RadialGradient>
    </BrowserRouter>
  </React.StrictMode>
);
