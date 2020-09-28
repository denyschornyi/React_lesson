import React from 'react';
 
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

import classes from './Dialogs.module.css'
import {sendMessageActionCreator, updatedMessageActionCreator} from '../../redux/state'

const Dialogs = (props) => {

    let dialogElements = props.state.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>);
    let messagesElements = props.state.messageData.map(message => <MessageItem message={message.message}/>)


    const messageRef = React.createRef();

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    const updatedMessage = () => {
        const text = messageRef.current.value;
        props.dispatch(updatedMessageActionCreator(text));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}

                <div><textarea ref={messageRef} onChange={updatedMessage} value={props.state.newMessage}></textarea></div>
                <div><button onClick={sendMessage}>Send message</button></div>
            </div>
        </div>
    );
}

export default Dialogs