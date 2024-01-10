import path from "path";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import "./HomePage.css";
import { Link } from "react-router-dom";

type ItemProps = {
   title: string;
   path: string;
};

const Item: React.FC<ItemProps> = ({ title, path }: ItemProps) => {
   return (
      <Link className="item" to={path}>
         {title}
      </Link>
   );
};

const HomePage: React.FC = (): JSX.Element => {
   return (
      <section id="homepage">
         <div className="homepage-container">
            <BurgerMenu />
            <div className="projects">
               <Item title={"Калькулятор"} path={"/main/calculator"} />
               <Item title={"Список пользователей"} path={"/main"} />
               <Item title={"Genshin Impact"} path={"/main/genshin"} />
            </div>
         </div>
      </section>
   );
};
export default HomePage;
