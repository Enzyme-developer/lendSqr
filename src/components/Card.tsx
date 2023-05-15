import React from "react";
import { cardProps } from "../types";
import './styles/card.scss';

const Card = ({ img, title, value }: cardProps) => {
  return (
    <div className="card">
      <img className="card__img" src={img} alt="icon" />
      <p className="card__title">{title}</p>
      <h2 className="card__value">{value}</h2>
    </div>
  );
};

export default Card;
