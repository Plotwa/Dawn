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
    let dialogsData=[
        {id:1,name: 'Miha'},
        {id:2,name:'Serega+pepega'},
        {id:3,name: 'Vano'},
    ]
    let messagesData=[
        {id:1,message:'OUU MY'},
        {id:2,message:'Hello Niggga'},
        {id:3,message: 'Why are you gay?'},
    ]
    return (
        <div className={styles.dialogs}>

            <div className={styles.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />

            </div>
            <div className={styles.messages}>
            <Message message={messagesData[0].message} id={messagesData[0].id} />
            <Message message={messagesData[1].message} id={messagesData[1].id} />
            <Message message={messagesData[2].message} id={messagesData[2].id} />
            </div>
        </div>
    )
}
export default Dialogs;