import React from "react";
import { cardProps } from "../types";
import './styles/card.scss'

const Card = ({ img, title, value }: cardProps) => {
  return (
    <div className="card">
      <img src={img} alt="icon" />
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
};

export default Card;
