import React from 'react';

import classes from  './Post.module.css';

const Post = (props) => (
    <div className={classes.item}>
        <img src="https://pbs.twimg.com/profile_images/1253447818938728449/0CTQOGpR_400x400.jpg" alt="Avatar"/>
        
        {props.message}
        <div>
            <span>Like {props.like}</span>
        </div>
    </div>
)

export default Post;