import React from "react";
import { addPostActionCreator, UpdateNewPostActionCreator } from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
 let state=props.store.getState().profilePage

  let addPostText = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let onTextChange = (text) => {
    let action=(UpdateNewPostActionCreator(text))
    props.store.dispatch(action);
  };

  return (
  <MyPosts addPost={addPostText} updateNewTextPost={onTextChange} state={state}/>    
  )
}
export default MyPostsContainer;
