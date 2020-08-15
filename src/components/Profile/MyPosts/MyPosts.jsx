import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts  = () => {
    return (
        <React.Fragment>
            <div>
                My posts
                <div>New posts</div>
            </div>

            <div>
                <Post/>
            </div>
        </React.Fragment>
    );
}

export default MyPosts;