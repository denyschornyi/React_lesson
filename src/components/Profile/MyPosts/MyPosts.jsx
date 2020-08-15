import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts  = () => {
    return (
        <React.Fragment>
            <div>
                My posts
                <div>
                    <h1>New posts</h1>
                    <textarea cols="30" rows="10"></textarea>
                    <button>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
                <Post message="Hi, how are you ?" like='3'/>
                <Post message="I'm be a PRO in React, I find a job in September" like='900'/>
            </div>
        </React.Fragment>
    );
}

export default MyPosts;