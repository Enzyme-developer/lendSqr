import React from "react";
import Card from "./Card";
import cardUsers from "../assets/cardUsers.svg";
import cardActive from "../assets/cardActive.svg";
import cardLoans from "../assets/cardLoans.svg";
import cardSavings from "../assets/cardSavings.svg";

const Cards = () => {
  return (
    <div>
      <Card title="USERS" value="2,453" img={cardUsers} />
      <Card title="ACTIVE USERS" value="2453" img={cardActive} />
      <Card title="USERS WITH LOANS" value="12,453" img={cardLoans} />
      <Card title="USERS WITH SAVINGS" value="102,453" img={cardSavings} />
    </div>
  );
};

export default Cards;
