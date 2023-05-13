import React from "react";
import { sidebarItemProps } from "../types";

const SideBarItem = ({ imgSrc, title }: sidebarItemProps) => {
  return (
    <li>
      <img src={imgSrc} alt="icon" />
      <p>{title}</p>
    </li>
  );
};

export default SideBarItem;
