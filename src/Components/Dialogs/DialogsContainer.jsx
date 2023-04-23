import React from 'react';
import {  addUpdateNewMessageActionCreator, sendMessageActionCreator } from '../../redux/dialog_reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state=props.store.getState().messagePage
    let sendMessage =()=>{ 
        props.store.dispatch(sendMessageActionCreator())
    }
    let onUpdateMessage=(body)=>{
         
          props.store.dispatch(addUpdateNewMessageActionCreator(body))        
        }
        return(<Dialogs sendMessage={sendMessage} updateMessage={onUpdateMessage} state={state} />
        )
}
export default DialogsContainer;