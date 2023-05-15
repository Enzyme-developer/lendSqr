import { sidebarItemProps } from "../types";
import './styles/siderbarItem.scss'

const SideBarItem = ({ imgSrc, title, className }: sidebarItemProps) => {
  return (
    <span className={`sidebarItem ${className? 'active': ''}`}>
      <img className="sidebarItem__img" src={imgSrc} alt="icon" />
      <p className='sidebarItem__title'>{title}</p>
    </span>
  );
};

export default SideBarItem;
