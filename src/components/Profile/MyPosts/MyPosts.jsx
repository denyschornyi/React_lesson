import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts  = () => {
    return (
        <div className={classes.myPostsBlock}>
            <div>
                <h3></h3>
                <div>
                    <h1>New posts</h1>
                    <div><textarea cols="30" rows="3"></textarea></div>
                    <div><button>Add post</button></div>
                </div>
            </div>

            <div className={classes.posts}>
                <Post message="Hi, how are you ?" like='3'/>
                <Post message="I'm be a PRO in React, I find a job in September" like='900'/>
            </div>
        </div>
    );
}

export default MyPosts;