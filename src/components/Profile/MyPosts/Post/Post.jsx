import React from 'react';
import  c from'./Post.module.css';

const Post = (props) => {

    return (
        <div className={c.item}>
            <img src='https://live.staticflickr.com/827/41909804402_148d98b7ac.jpg'></img>
              {props.message}
            <div>
                <span>Like</span>
                {props.like} 
            </div>
                                    
        </div>
    )
}

export default Post; 