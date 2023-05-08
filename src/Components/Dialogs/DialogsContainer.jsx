import React from 'react';
import {  addUpdateNewMessageActionCreator, sendMessageActionCreator } from '../../redux/dialog_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps=(state)=>{
    return{
        state:state.messagePage
    }
}
let mapDipatchToProps=(dispatch)=>{
    return{
        updateMessage:(body)=>{
            dispatch(addUpdateNewMessageActionCreator(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageActionCreator())
        }
    }
}
const DialogsContainer=connect(mapStateToProps,mapDipatchToProps)(Dialogs)
export default DialogsContainer;