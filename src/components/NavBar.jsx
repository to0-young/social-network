import React from 'react';
import sos from'./NavBar.module.css';

const NavBar = () => {
    return (
            <nav className={sos.nav}>
          <div className={sos.item}>
            <a>Profile</a>
          </div>
          <div className={`${sos.item} ${sos.active}`}>
            <a>Messages</a>
          </div>
          <div className='item'>
            <a>News</a>
          </div>
          <div className={sos.music}>
            <a>Music</a>
          </div>
          <div className='item'>
            <a>Settings</a>
          </div>
        </nav>
    )
}

export default NavBar;
