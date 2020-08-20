import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {


  let postData = [
    {id: 1, postMessage: 'How you doing?', like: 3},
    {id: 2, postMessage: 'I ll be a PRO in React', like: 900}
];

    return (
      <div>
        <ProfileInfo />
        <MyPosts postData={postData}/>
    </div>
    );
}

export default Profile;