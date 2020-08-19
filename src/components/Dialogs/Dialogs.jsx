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
    let dialogElements = dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Are you already a PRO in React?'}
    ];

    let messagesElements = messageData.map(message => <MessageItem message={message.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs