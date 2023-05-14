import React from "react";
import { Link } from "react-router-dom";
import view from "../assets/view.svg";
import blacklist from "../assets/blacklist.svg";
import active from "../assets/active.svg";
import './styles/modal.scss'

const Modal = ({ id }: any) => {
  return (
    <div className='modal'>
      <Link className='link' to={`/user/${id}`}>
        <img src={view} alt="view" />
        <p>View</p>
      </Link>

      <div className='link'>
        <img src={blacklist} alt="blacklist" />
        <p>Blacklist User</p>
      </div>

      <div className='link'>
        <img src={active} alt="active" />
        <p>Activate User</p>
      </div>
    </div>
  );
};

export default Modal;
