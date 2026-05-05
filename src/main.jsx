import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Error from "./components/Error/Error.jsx"

createRoot(document.getElementById("root")).render(
<StrictMode>
  <BrowserRouter>
  <Routes>
   <Route path="*" element={<Error/>} />
   <Route path="/" element={<App/>} />

  </Routes>
  </BrowserRouter>
  </StrictMode>,
);
