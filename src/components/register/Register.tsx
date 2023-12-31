import { Link } from "react-router-dom";
import "./Register.css";
import React, { useState } from "react";
import Input from "../Input";
import BurgerMenu from "../burgerMenu/BurgerMenu";

const Register: React.FC = () => {
   const [login, setLogin] = useState("");
   const [password, setPassword] = useState("");
   const [repeatPassword, setRepeatPassword] = useState("");

   return (
      <form id="register">
         <div className="register-container">
            <BurgerMenu />
            <h1>Регистрация</h1>
            <div className="register-input-container">
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
               <Input
                  placeholder="Повторите пароль"
                  value={repeatPassword}
                  onChange={setRepeatPassword}
               />
            </div>
            <Link className="register-link" to="/login">
               Зарегистрироваться
            </Link>
         </div>
      </form>
   );
};

export default Register;
