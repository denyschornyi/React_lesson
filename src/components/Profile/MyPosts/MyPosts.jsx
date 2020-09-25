import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts  = (props) => {


    let postElements = props.postData.map(post => <Post message={post.postMessage} like={post.like}/>)

    const newPost = React.createRef();

    const addPostData = () => {
        const text = newPost.current.value;
        props.addPost(text);
        newPost.current.value = '';
    }

    return (
        <div className={classes.myPostsBlock}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <h1>New posts</h1>
                    <div><textarea ref={newPost}></textarea></div>
                    <div><button onClick={addPostData}>Add post</button></div>
                </div>
            </div>

            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;