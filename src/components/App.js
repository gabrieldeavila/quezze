import React, { useEffect, useState } from "react";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Games from "./Games";

const App = () => {
  const [navClicked, setNavClicked] = useState(false);
  useEffect(() => {}, [navClicked]);
  const mainClass = navClicked ? "isMain--left" : "isMain--normal";
  return (
    <div>
      <NavBar navClicked={navClicked} setNavClicked={setNavClicked} />
      <SideBar navClicked={navClicked} />
      <main className={`${mainClass} l-main`}>
        <Games />
      </main>
    </div>
  );
};

export default App;
