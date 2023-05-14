import { sidebarItemProps } from "../types";
import './styles/siderbarItem.scss'

const SideBarItem = ({ imgSrc, title, className }: sidebarItemProps) => {
  return (
    <span className={className? 'active-bar': ''}>
      <img src={imgSrc} alt="icon" />
      <p>{title}</p>
    </span>
  );
};

export default SideBarItem;
