import React from 'react';
import {NavLink} from 'react-router-dom';
 
import classes from './../Dialogs.module.css'


const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to={'/dialogs/' + props.id}> 
                        <img src={props.img} alt="avatar"/>
                        {props.name}
                    </NavLink>
        </div>
    );
}

export default DialogItem;