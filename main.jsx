import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./src/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <BrowserRouter>
      {" "}
      {/* Wrap your app with BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
