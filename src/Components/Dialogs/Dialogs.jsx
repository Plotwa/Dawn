import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let onAddMessage =()=>{
       props.sendMessage()
    }
    let onUpdateMessage=(e)=>{
        let body=e.target.value;
          props.updateMessage(body)       
        }

    let dialogElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messageElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />)
    let newMessageText=props.state.newMessageText
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