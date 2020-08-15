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
                <Post/>
            </div>
        </React.Fragment>
    );
}

export default MyPosts;