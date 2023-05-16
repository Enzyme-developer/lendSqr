import React from "react";
import { Link } from "react-router-dom";
import view from "../assets/view.svg";
import blacklist from "../assets/blacklist.svg";
import active from "../assets/active.svg";
import "../styles/modal.scss";

const Modal = ({ id }: any) => {
  return (
    <div className="modal">
      <Link className="modal__link" to={`/user/${id}`}>
        <img className="modal__link__icon" src={view} alt="view" />
        <p className="modal__link__text">View</p>
      </Link>

      <div className="modal__link">
        <img className="modal__link__icon" src={blacklist} alt="blacklist" />
        <p className="modal__link__text">Blacklist User</p>
      </div>

      <div className="modal__link">
        <img className="modal__link__icon" src={active} alt="active" />
        <p className="modal__link__text">Activate User</p>
      </div>
    </div>
  );
};

export default Modal;
