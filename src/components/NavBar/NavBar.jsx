import React from 'react';
import sos from'./NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={sos.nav}>
          <div className={sos.item}>
            <NavLink to="/profile" cclassName = { navData => navData.isActive ? sos.activeLink : sos.item }>Profile</NavLink>
          </div>

          <div className={`${sos.item} ${sos.activeLink}`}>
            <NavLink to="/dialogs" cclassName = { navData => navData.isActive ? sos.activeLink : sos.item}>Messages</NavLink>
          </div>

          <div className={sos.item}>
            <NavLink to="/News">News</NavLink>
          </div>

          <div className={sos.item}>
            <NavLink to="/dens">Music</NavLink>
          </div>

          <div className={sos.item}>
            <NavLink to="/settings">Settings</NavLink>
          </div>
        </nav>
    )
}
export default NavBar;

