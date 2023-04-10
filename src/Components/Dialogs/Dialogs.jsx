import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let newmessageElement=React.createRef();


    let dialogElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messageElements = props.messages.map(m => <Message message={m.message} id={m.id} />)
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
           
            <textarea ref={newmessageElement} ></textarea>
            <button>Добавьте новое сообщение</button>
            
        </div>
    )
}
export default Dialogs;