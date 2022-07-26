import React from 'react';
import  c from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={c.content}>
          <div>
        <img src='https://www.pics4learning.com/images/pics-banner1-1300.jpg'></img>
          </div>
          <div>
          ava + description
          </div>
        <MyPosts />
        </div>
    )
}

export default Profile; 