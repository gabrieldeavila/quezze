import React from "react";
import {ReactComponent as Home} from "../icons/home.svg";
import {ReactComponent as Growth} from "../icons/growth.svg";


const SideBar = () =>{
  
  return(
    <div className="sidebar">
      <div className="icon-field">
        <i><Home/></i>
        <p>Home</p>
      </div>
      <div className="icon-field">
        <i><Growth/></i>
        <p>Home</p>
      </div>
      <div className="icon-field">
        <i><Home/></i>
        <p>Home</p>
      </div>
      
    </div>
  );
}

export default SideBar;