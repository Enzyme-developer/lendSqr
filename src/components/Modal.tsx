import React from "react";
import { Link } from "react-router-dom";
import view from "../assets/view.svg";
import blacklist from "../assets/blacklist.svg";
import active from "../assets/active.svg";

const Modal = ({ id }: any) => {
  return (
    <div>
      <Link to={`/user/${id}`}>
        <img src={view} alt="view" />
        <span>View</span>
      </Link>

      <Link to="">
        <img src={blacklist} alt="blacklist" />
        <span>Blacklist User</span>
      </Link>

      <Link to="">
        <img src={active} alt="active" />
        <span>Activate User</span>
      </Link>
    </div>
  );
};

export default Modal;
