import React from 'react';
import sos from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <nav className={sos.nav}>
            <div className={sos.item}>
                <NavLink to="/profile" className={(navData) => navData.isActive ? sos.activeLink : sos.link }>Profile</NavLink>
            </div>

            <div className={sos.item}>
                <NavLink to="/dialogs" className={(navData) => navData.isActive ? sos.activeLink : sos.link }>Messages</NavLink>
            </div>

            <div className={sos.item}>
                <NavLink to="/news" className={(navData) => navData.isActive ? sos.activeLink : sos.link }>News</NavLink>
            </div>

            <div className={sos.item}>
                <NavLink to="/music" className={(navData) => navData.isActive ? sos.activeLink : sos.link }>Music</NavLink>
            </div>

            <div className={sos.item}>
                <NavLink to="/settings" className={(navData) => navData.isActive ? sos.activeLink : sos.link }>Settings</NavLink>
            </div>

          <div className={sos.item}>
                <NavLink to="/friends" className={(navData) => navData.isActive ? sos.activeLink : sos.link }>Friends</NavLink>
            </div>
        </nav>
    )
}
export default NavBar;

