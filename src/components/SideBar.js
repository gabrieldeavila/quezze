import React from "react";

import {FaHome} from "react-icons/fa";
import {HiTrendingUp } from "react-icons/hi";
import { HiOutlineSparkles } from "react-icons/hi";

import { listIcons } from "../functions";
const icons = [
  { component: <FaHome />, name: "Home", label: "/" },
  { component: <HiTrendingUp />, name: "Trending", label: "/growth" },
  { component: <HiOutlineSparkles />, name: "Top 5", label : "/top5" },
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
