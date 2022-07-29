import React from 'react';
import sos from'./NavBar.module.css';

const NavBar = () => {
    return (
            <nav className={sos.nav}>
          <div className={sos.item}>
            <a href="/profile">Profile</a>
          </div>
          <div className={`${sos.item} ${sos.active}`}>
            <a href="/dialogs">Messages</a>
          </div>
          <div className='item'>
            <a href="#">News</a>
          </div>
          <div className={sos.music}>
            <a href="#">Music</a>
          </div>
          <div className='item'>
            <a href="#">Settings</a>
          </div>
        </nav>
    )
}
export default NavBar;

