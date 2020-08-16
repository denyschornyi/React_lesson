import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/dialogs/1'>Denys</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Daria</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Yulia</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Maria</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5'>Artemus</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/6'>Vova</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/7'>Alex</NavLink>
                </div>
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