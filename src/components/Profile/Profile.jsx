import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let posts = [
        {id: 1, message: 'hi', Like: 15},
        {id: 2, message: 'Hi,friend how are you?', Like: 55},
        {id: 2, message: 'Hi,friend how are you?', Like: 555},
    ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}
export default Profile;