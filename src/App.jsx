import { useState } from "react";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import ComboCard from "./Components/Combo/ComboCard";
import KillConfirms from "./Components/KillConfirms/KillConfirms";


function App() {
  const [mainContent, setMainContent] = useState(<ComboCard/>)
  const [selectedNavEl, setSelectedNavEl] = useState()


  let testActive = selectedNavEl

  const changeNavEL = (navEl) =>{
    setMainContent(navEl)
    setSelectedNavEl(navEl)
    testActive = navEl
    
  }


  return (
    <>
      <Header />

      <div className="container">
        

        {mainContent}

        

        <Nav isSelected={testActive} navItemSelected={changeNavEL} />
      </div>
    </>
  );
}

export default App;
