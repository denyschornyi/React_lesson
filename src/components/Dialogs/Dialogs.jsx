import React from 'react';
 
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

import classes from './Dialogs.module.css'

const Dialogs = (props) => {
 console.log(props);
    let dialogElements = props.state.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messageData.map(message => <MessageItem message={message.message}/>)

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