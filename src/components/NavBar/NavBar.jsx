import React from 'react';
import sos from'./NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={sos.nav}>
          <div className={sos.item}>
              <NavLink to="/profile" className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>Profile</NavLink>
          </div>

          <div className={`${sos.item} ${sos.active}`}>
            <NavLink to="/dialogs" cclassName = { navData => navData.isActive ? sos.active : sos.item }>Messages</NavLink>
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

