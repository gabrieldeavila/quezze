import React from "react";
import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as Menu } from "../icons/menu.svg";
import { ReactComponent as Search } from "../icons/search.svg";

const NavBar = ({navClicked, setNavClicked}) => {
  const changeNavValue = () => {
    setNavClicked(!navClicked)
  }
  return (
      <nav className="l-nav">
        <div className="field-flex">
          <div className="field-flex">
            <div onClick={changeNavValue} className="menu">
              <Menu />
            </div>
            <div className="logo">
              <div className="svg">
                <Logo />
              </div>
              <p className="ml-1">Quezze</p>
            </div>
          </div>
          <form className="search">
            <label htmlFor="search-input" className="search-input">
              <input placeholder="Search quizz" id="search-input" type="text" />
              <button type="submit" className="icon">
                <i>
                  <Search />
                </i>
              </button>
            </label>
          </form>
        </div>
      </nav>
  );
};

export default NavBar;
