import React, {useEffect, useState} from "react";

import NavBar from "./NavBar";
import SideBar from "./SideBar";

const App = () => {
  const [navClicked, setNavClicked] = useState(false)
  useEffect(()=>{
    
  }, [navClicked])
  return (
    <div>
      <NavBar navClicked={navClicked} setNavClicked={setNavClicked} />
      <SideBar navClicked={navClicked}/>
      
    </div>
  );
};

export default App;
