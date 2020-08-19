import React from 'react';
import {NavLink} from 'react-router-dom';
 
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

import classes from './Dialogs.module.css'

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
 
    let dialogElements = dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
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