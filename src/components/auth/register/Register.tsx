import { Link } from "react-router-dom";
import "./Register.css";
import React, { useState } from "react";
import Input from "../../Input";
import BurgerMenu from "../../burgerMenu/BurgerMenu";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase";

const Register: React.FC = (): JSX.Element => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [copyPassword, setCopyPassword] = useState("");
   const [error, setError] = useState("");

   function register(e: any) {
      e.preventDefault();
      if (password !== copyPassword) {
         setError("Passwords didn't match");
         return;
      }
      createUserWithEmailAndPassword(auth, email, password)
         .then((user) => {
            console.log(user);
            setEmail("");
            setPassword("");
            setCopyPassword("");
            setError("");
         })
         .catch((error) => console.log(error));
   }

   return (
      <form onSubmit={register} id="register">
         <div className="register-container">
            <BurgerMenu />
            <h1 className="register-title">Sing Up</h1>
            <div className="register-input-container">
               <Input
                  placeholder="Enter email"
                  value={email}
                  onChange={setEmail}
                  type={"email"}
               />
               <Input
                  placeholder="Enter password"
                  value={password}
                  onChange={setPassword}
                  type={"password"}
               />
               <Input
                  placeholder="Enter copy password"
                  value={copyPassword}
                  onChange={setCopyPassword}
                  type={"password"}
               />
               {error ? <p style={{ color: "red" }}>{error}</p> : ""}
            </div>
            <Link className="register-link" to="/main">
               Sing Up
            </Link>
            <button className="register-link">Sing Up (Firebase)</button>
         </div>
      </form>
   );
};

export default Register;
