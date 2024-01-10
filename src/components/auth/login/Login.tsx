import Input from "../../Input";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import BurgerMenu from "../../burgerMenu/BurgerMenu";
import { auth } from "../../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login: React.FC = (): JSX.Element => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   function login(e: any) {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
         .then((user) => {
            console.log(user);
            setEmail("");
            setPassword("");
            setError("");
         })
         .catch((error) => {
            console.log(error);
            setError("Sorry, account is not founded");
         });
   }

   return (
      <form /*onSubmit={login}*/ id="login">
         <div className="login-container">
            <BurgerMenu />
            <h1 className="login-title">Sing In</h1>
            <div className="login-input-container">
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
               {error ? <p style={{ color: "red" }}>{error}</p> : ""}
            </div>
            <Link to="/main" className="login-link">
               Sing In
            </Link>
            <button onClick={login} className="login-link">
               Sing In (Firebase)
            </button>
         </div>
      </form>
   );
};

export default Login;
