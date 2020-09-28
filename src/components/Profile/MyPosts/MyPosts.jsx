import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, onChangeHandlerActionCreator} from '../../../redux/state'


const MyPosts  = (props) => {
    
    let postElements = props.postData.postData.map(post => <Post message={post.postMessage} like={post.like}/>)

    const newPost = React.createRef();

    const addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action)
    }

    const onChangeHandler = () => {
        const text = newPost.current.value;
        let action = onChangeHandlerActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={classes.myPostsBlock}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <h1>New posts</h1>
                    <div><textarea ref={newPost} onChange={onChangeHandler} value={props.postData.newPostText}/></div>
                    <div><button onClick={addPost}>Add post</button></div>
                </div>
            </div>

            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;