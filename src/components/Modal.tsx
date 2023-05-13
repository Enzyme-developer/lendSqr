import React from "react";
import { Link } from "react-router-dom";
import view from "../assets/view.svg";
import blacklist from "../assets/blacklist.svg";
import active from "../assets/active.svg";
import { positionProp } from "../types";

const Modal = ({ position, id }: positionProp) => {
  console.log(position);
  return (
    <div
      style={{
        marginTop: position.top + "px",
        marginLeft: position.left + "px",
        position: "absolute",
      }}
    >
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
        <span>ACtivate User</span>
      </Link>
    </div>
  );
};

export default Modal;
