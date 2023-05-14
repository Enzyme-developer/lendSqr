import React, { useState } from "react";
import './styles/navbar.scss'
import logo from "../assets/logo.svg";
import searchIcon from "../assets/searchIcon.svg";
import bellIcon from "../assets/bellIcon.svg";
import avatar from "../assets/avatar.svg";
import caret from "../assets/caret.svg";

const Navbar = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='search for anything'
        />
        <button>
          <img src={searchIcon} alt="search" />
        </button>
      </div>

      <div className="user">
        <a href="#"className='user__child' >Docs</a>
        <img className='user__child' src={bellIcon} alt="bell icon" />
        <img className='user__child' src={avatar} alt="avatar" />
        <div className="username user__child">
        <p>Adedeji</p>
        <img src={caret} alt="caret" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
