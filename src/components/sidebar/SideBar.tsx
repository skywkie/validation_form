import { Link } from "react-router-dom";
import "./SideBar.css";

type SideBarProps = {
   status: boolean;
   setStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar: React.FC<SideBarProps> = ({
   status,
   setStatus,
}: SideBarProps): JSX.Element => {
   return (
      <section id={status ? "sidebar-open" : "sidebar"}>
         <h1 className="sidebar-title">Menu</h1>
         <div className="list">
            <Link
               onClick={(status) => setStatus(!status)}
               className="list-element"
               to={"/login"}
            >
               Sing In
            </Link>
            <Link
               onClick={(status) => setStatus(!status)}
               className="list-element"
               to={"/"}
            >
               Sing Up
            </Link>
            <Link
               onClick={(status) => setStatus(!status)}
               className="list-element"
               to={"/main"}
            >
               Home page
            </Link>
         </div>
      </section>
   );
};

export default SideBar;
