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

    let dialogData = [
        {id: 1, name: 'Denys'},
        {id: 2, name: 'Daria'},
        {id: 3, name: 'Maria'},
        {id: 4, name: 'Artemus'},
        {id: 5, name: 'Vova'},
        {id: 6, name: 'Alex'},
    ];

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Are you already a PRO in React?'}
    ];

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
            </div>
            <div className={classes.messages}>
                <MessageItem message={messageData[0].message}/>
                <MessageItem message={messageData[1].message}/>
                <MessageItem message={messageData[2].message}/>
            </div>
        </div>
    );
}

export default Dialogs