
import { useState } from "react";
import ComboCard from "../Combo/ComboCard";
import KillConfirms from "../KillConfirms/KillConfirms";
import "./Nav.css"






const Nav = (props) => {
  const [hlActive, setHlActive] = useState("combo")

  function handleSelect(selectedButton) {
    setHlActive(selectedButton)
  }






  return (
    <>
      <div className="nav glass">
        <ul className="menu ">
          <li onClick={()=>{props.navItemSelected(<ComboCard/>); handleSelect("combo") } } className={hlActive === "combo" && "isActive" }>Combos</li>
          <li onClick={()=>{props.navItemSelected(<KillConfirms />);handleSelect("kill") } } className={hlActive === "kill" && "isActive" }>Kill Conformes</li>
          <li onClick={()=>{props.navItemSelected();handleSelect("hit") } } className={hlActive === "hit" && "isActive" }>Hit Confirms</li>

          <li onClick={()=>{props.navItemSelected();handleSelect("frame")}} className={hlActive === "frame" && "isActive" }>Frame Data</li>


          <li onClick={()=>{handleSelect("test");console.log("testdummy")}} className={hlActive == "test" && "isActive"}>Test Dummy</li>





          
        </ul>
      </div>
    </>
  );
};
export default Nav;
