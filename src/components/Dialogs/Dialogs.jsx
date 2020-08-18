import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Dialogs.module.css'


const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Denys" id="1"/>
                <DialogItem name="Daria" id="2"/>
                <DialogItem name="Maria" id="3"/>
                <DialogItem name="Artemus" id="4"/>
                <DialogItem name="Vova" id="5"/>
                <DialogItem name="Alex" id="6"/>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Are you already a PRO in React?</div>
            </div>
        </div>
    );
}

export default Dialogs