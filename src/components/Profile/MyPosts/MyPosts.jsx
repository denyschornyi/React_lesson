import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts  = () => {

    let postData = [
        {id: 1, postMessage: 'How you doing?', like: 3},
        {id: 2, postMessage: 'I ll be a PRO in React', like: 900}
    ];

    let postElements = postData.map(post => <Post message={post.postMessage} like={post.like}/>)

    return (
        <div className={classes.myPostsBlock}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <h1>New posts</h1>
                    <div><textarea cols="30" rows="3"></textarea></div>
                    <div><button>Add post</button></div>
                </div>
            </div>

            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;