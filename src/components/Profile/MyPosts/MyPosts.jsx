import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts  = () => {
    return (
        <React.Fragment>
            <div>
                My posts
                <div>
                    New posts
                    <textarea cols="30" rows="10"></textarea>
                    <button>Add post</button>
                </div>
            </div>

            <div>
                <Post/>
            </div>
        </React.Fragment>
    );
}

export default MyPosts;