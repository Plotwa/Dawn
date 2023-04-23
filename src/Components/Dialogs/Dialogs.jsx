import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addAddMessageActionCreator, addUpdateNewMessageActionCreator } from '../../redux/dialog_reducer';

const Dialogs = (props) => {
    
    let onAddMessage =()=>{
       
        props.dispatch(addAddMessageActionCreator())
    }
    let onUpdateMessage=(e)=>{
         let text =e.target.value;
          props.dispatch(addUpdateNewMessageActionCreator(text))        
        }

    let dialogElements = props.messagePage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messageElements = props.messagePage.messages.map(m => <Message message={m.message} id={m.id} />)
    let newMessageText=props.messagePage.newMessageText
    return (
        <div>
            <div className={styles.dialogs}>

                <div className={styles.dialogItems}>

                    {dialogElements}
                </div>
                <div className={styles.messages}>
                    {messageElements}
                </div>
            </div>
           
            <textarea  onChange={onUpdateMessage} placeholder='Введите новое сообщение'   value={newMessageText} ></textarea>
            <button onClick={onAddMessage} >Добавьте новое сообщение</button>
            
        </div>
    )
}
export default Dialogs;