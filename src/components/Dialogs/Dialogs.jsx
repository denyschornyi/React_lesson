import React from 'react';

import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>Denys</div>
                <div className={classes.dialog}>Daria</div>
                <div className={classes.dialog}>Yulia</div>
                <div className={classes.dialog}>Maria</div>
                <div className={classes.dialog}>Artemius</div>
                <div className={classes.dialog}>Vova</div>
                <div className={classes.dialog}>Alex</div>
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