import "./BurgerMenu.css";
import { useState } from "react";
import SideBar from "../sidebar/SideBar";

const BurgerMenu = () => {
   const [show, setShow] = useState(false);
   console.log(show);
   return (
      <>
         <svg
            id="hamburger"
            className="svg"
            viewBox="0 0 60 40"
            onClick={() => setShow(!show)}
         >
            <g
               stroke="white"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <path id="top-line" d="M10,10 L50,10 Z"></path>
               <path id="middle-line" d="M10,20 L50,20 Z"></path>
               <path id="bottom-line" d="M10,30 L50,30 Z"></path>
            </g>
         </svg>
         <SideBar status={show} />
      </>
   );
};
export default BurgerMenu;
