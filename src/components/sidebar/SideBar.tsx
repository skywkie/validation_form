import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = ({ status }: any) => {
   return (
      <section id={status ? "sidebar-open" : "sidebar"}>
         <h1>Меню</h1>
         <div className="list">
            <Link className="list-element" to={"/login"}>
               Вход
            </Link>
            <Link className="list-element" to={"/"}>
               Регистрация
            </Link>
            <Link className="list-element" to={"/main"}>
               Главное меню
            </Link>
         </div>
      </section>
   );
};

export default SideBar;
