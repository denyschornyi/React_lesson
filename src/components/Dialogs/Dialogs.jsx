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

const MessageItem = (props) => {
    return <div className={classes.message}>{props.message}</div>
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
                <MessageItem message='Hi'/>
                <MessageItem message='How are you?'/>
                <MessageItem message='Are you already a PRO in React?'/>
            </div>
        </div>
    );
}

export default Dialogs