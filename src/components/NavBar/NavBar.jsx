import React from 'react';
import sos from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <nav className={sos.nav}>
            <div className={sos.item}>
                <NavLink to="/profile" className={(navData) => navData.isActive ? sos.activeLink : '' }>Profile</NavLink>
            </div>

            <div className={sos.item}>
                <NavLink to="/dialogs" className={(navData) => navData.isActive ? sos.activeLink : '' }>Messages</NavLink>
            </div>

            <div className={sos.item}>
                <NavLink to="/news" className={(navData) => navData.isActive ? sos.activeLink : '' }>News</NavLink>
            </div>

            <div className={sos.item}>
                <NavLink to="/music" className={(navData) => navData.isActive ? sos.activeLink : '' }>Music</NavLink>
            </div>

            <div className={sos.item}>
                <NavLink to="/settings" className={(navData) => navData.isActive ? sos.activeLink : '' }>Settings</NavLink>
            </div>
        </nav>
    )
}
export default NavBar;

