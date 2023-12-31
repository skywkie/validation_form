import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./components/login/Login";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
root.render(
   // <App/>
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<App />} />
         <Route path="/login" element={<Login />} />
         <Route path="/main" element={<HomePage />} />
      </Routes>
   </BrowserRouter>
);

reportWebVitals();
