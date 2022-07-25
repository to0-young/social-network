import React from 'react';
import  c from'./Profile.module.css';

const Profile = () => {
    return (
        <div className={c.content}>
          <div>
        <img src='https://www.pics4learning.com/images/pics-banner1-1300.jpg'></img>
        </div>
        <div>
          ava + description
        </div>
            <div>
          My post 
            <div>
            New post 
          </div>
          <div className={c.posts}>
            <div className={c.item}>
              post 1
            </div>
            <div className={c.item}>
              post 2  
            </div>
          </div>
        </div>
        </div>
    )
}

export default Profile;