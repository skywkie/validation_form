import Input from "../Input";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login: React.FC = () => {
   const [login, setLogin] = useState("");
   const [password, setPassword] = useState("");
   return (
      <form id="login">
         <div className="login-container">
            <h1>Вход</h1>
            <div className="login-input-container">
               <Input
                  placeholder="Введите логин"
                  value={login}
                  onChange={setLogin}
               />
               <Input
                  placeholder="Введите пароль"
                  value={password}
                  onChange={setPassword}
               />
            </div>
            <Link className="login-link" to="/main">
               Войти
            </Link>
         </div>
      </form>
   );
};

export default Login;
