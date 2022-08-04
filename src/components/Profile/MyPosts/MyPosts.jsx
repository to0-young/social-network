import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'hi', Like: 15},
        {id: 2, message: 'Hi,friend how are you?', Like: 55},
    ]
    let postsElements =
        posts.map(p => <Post message={p.messages} like={p.Like}/>);

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
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;


