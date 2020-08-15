import React from 'react';
import classes from './MyPosts.module.css';

const MyPosts  = () => {
    return (
        <React.Fragment>
            <div>
                My posts
                <div>New posts</div>
            </div>

            <div>
                <div className={classes.item}>Post 1</div>
                <div className={classes.item}>Post 2</div>
            </div>
        </React.Fragment>
    );
}

export default MyPosts;