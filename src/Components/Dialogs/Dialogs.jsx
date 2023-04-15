import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let newmessageElement=React.createRef();
    let onAddMessage =()=>{
        let text =newmessageElement.current.value;
        props.addMessage(text)
    }
    let onUpdateMessage=()=>{
         let text =newmessageElement.current.value;
          props.updateNewMessage(text)        
        }

    let dialogElements = props.messagePage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messageElements = props.messagePage.messages.map(m => <Message message={m.message} id={m.id} />)
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
           
            <textarea  onChange={onUpdateMessage}  ref={newmessageElement} value={props.messagePage.newMessageText} ></textarea>
            <button onClick={onAddMessage} >Добавьте новое сообщение</button>
            
        </div>
    )
}
export default Dialogs;