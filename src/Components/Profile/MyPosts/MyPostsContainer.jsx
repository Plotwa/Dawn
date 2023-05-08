import React from "react";
import {
  addPostActionCreator,
  UpdateNewPostActionCreator,
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return{
    posts: state.profilePage.posts,
    newTextPost: state.profilePage.newTextPost
  }
}

let mapDipatchToProps = (dispatch) => {
  return{
    updateNewTextPost: (text) => {
      dispatch(UpdateNewPostActionCreator(text))
    },
    addPost:()=>{
      dispatch(addPostActionCreator())
  }
  }
}

let MyPostsContainer=connect(mapStateToProps,mapDipatchToProps)(MyPosts)

export default MyPostsContainer;
