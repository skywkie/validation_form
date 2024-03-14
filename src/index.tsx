import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./components/auth/login/Login";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import Calclulator from "./components/homePage/calculator/Calclulator";
import Genshin from "./components/homePage/genshin/Genshin";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
   // <Роутинг/>
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<App />} />
         <Route path="/login" element={<Login />} />
         <Route path="/main" element={<HomePage />} />
         <Route path="/main/calculator" element={<Calclulator />} />
         <Route path="/main/genshin" element={<Genshin />} />
      </Routes>
   </BrowserRouter>
);

reportWebVitals();
