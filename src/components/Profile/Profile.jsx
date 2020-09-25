import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts postData={props.state.postData} addPost={props.addPost} newPostText={props.state.newPostText} changeNewPostText={props.changeNewPostText}/>
    </div>
    );
}

export default Profile;