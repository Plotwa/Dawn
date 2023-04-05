import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
const DialogItem = (props) => {
    return (
    <div className={styles.dialog}>
        <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
    </div>
    )
}
const Message =(props)=>{
    return (
        <div className={styles.message}>{props.message}</div>
    )
}
const Dialogs = () => {
    return (
        <div className={styles.dialogs}>

            <div className={styles.dialogItems}>
                <DialogItem name='Miha' id='1' />
                <DialogItem name='Serega_pepega' id='2' />
                <DialogItem name='Vano' id='3' />
            </div>
            <div className={styles.messages}>
            <Message message='Ouuu my' />
            <Message message='Hello Nigga' />
            <Message message='Why are you  gay?' />
            </div>
        </div>
    )
}
export default Dialogs;