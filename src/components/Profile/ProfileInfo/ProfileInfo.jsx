import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return(
        <React.Fragment>
            <div className={classes.imgWallpaper}>
                <img src="https://dbijapkm3o6fj.cloudfront.net/resources/20611,1004,1,6,4,0,960,330/-3842-/20161013141806/image-gallery.jpeg" alt=""/>  
            </div>

            <div className={classes.descriptionBlock}>
                 ava + description
            </div>
        </React.Fragment>
    );
}
export default ProfileInfo;