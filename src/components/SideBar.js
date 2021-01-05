import React from "react";

import { ReactComponent as Home } from "../icons/home.svg";
import { ReactComponent as Growth } from "../icons/growth.svg";
import { ReactComponent as Top5 } from "../icons/top5.svg";

import { listIcons } from "../functions";
const icons = [
  { component: <Home />, name: "Home", label: "/" },
  { component: <Growth />, name: "Trending", label: "/growth" },
  { component: <Top5 />, name: "Top 5", label : "/top5" },
];

const currentIcon = window.location.pathname;

const SideBar = ({ navClicked }) => {
  const className = navClicked ? "opened" : "closed";
  return (
    <div className={`sidebar ${className}`}>
      <div>{listIcons(icons, currentIcon)} </div>
    </div>
  );
};

export default SideBar;
