import React, { useState } from "react";
import "./styles/navbar.scss";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/searchIcon.svg";
import bellIcon from "../assets/bellIcon.svg";
import avatar from "../assets/avatar.svg";
import caret from "../assets/caret.svg";

const Navbar = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar__search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for anything"
        />
        <button className="navbar__search-button">
          <img src={searchIcon} alt="search" />
        </button>
      </div>

      <div className="navbar__user">
        <a href="#" className="navbar__user__child">
          Docs
        </a>
        <img className="navbar__user__child" src={bellIcon} alt="bell icon" />
        <img className="navbar__user__child" src={avatar} alt="avatar" />
        <div className="navbar__user__username navbar__user__child">
          <p>Adedeji</p>
          <img src={caret} alt="caret" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
