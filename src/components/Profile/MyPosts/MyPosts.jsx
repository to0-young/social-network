import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'hi', Like: 15},
        {id: 2, message: 'Hi,friend how are you?', Like: 55},
    ]

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea>hello</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                <Post message={postsData[0].messages} like={postsData[0].Like}/>
                <Post message={postsData[1].messages} like={postsData[1].Like}/>
            </div>
        </div>

    )
}

export default MyPosts;


