import React from 'react';
import  c from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        
        <div>
          My post 
        <div>
            <textarea>hello</textarea>
            <button>Add post</button>
        </div>
        
        <div className={c.posts}>
            <Post message='Hi,friend how are you?'/>
            <Post like='28'/>
        
        </div>
        </div>
    
    )
}

export default MyPosts;


