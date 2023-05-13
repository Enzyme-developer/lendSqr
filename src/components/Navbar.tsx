import React, { useState } from "react";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/searchIcon.svg";
import bellIcon from "../assets/bellIcon.svg";
import avatar from "../assets/avatar.svg";
import caret from "../assets/caret.svg";

const Navbar = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <img src={searchIcon} alt="search" />
        </button>
      </div>

      <div className="user">
        <a href="#">Docs</a>
        <img src={bellIcon} alt="bell icon" />
        <img src={avatar} alt="avatar" />
        <p>Adedeji</p>
        <img src={caret} alt="caret" />
      </div>
    </header>
  );
};

export default Navbar;
