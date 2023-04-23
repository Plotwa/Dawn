import React from "react";
import Post from "./Post/Post";
import Avatarka from "../AvatarkaProfile/Avatarka";
import styles from "./MyPosts.module.css";
import { addPostActionCreator, addUpdateNewPostActionCreator } from "../../../redux/profile_reducer";



const MyPosts = (props) => {
 

  let onAddPostClick = () => {
    props.dispatch(addPostActionCreator());
  };

  let postElements = props.profilePage.posts.map((posts) => (
    <Post post={posts.post} id={posts.id} likecount={posts.likescount} />
  ));

  let onTextChange = (e) => {
    let text =e.target.value;
    let action=(addUpdateNewPostActionCreator(text))
    props.dispatch(action);
  };

  return (
    <div>
      <div className={styles.postBlock}>
        <h2> My Posts</h2>
        <div>
          <textarea
            onChange={onTextChange}
            
            value={props.profilePage.newTextPost}
          />
          <button onClick={onAddPostClick}>Напиши че нибудь</button>
        </div>
        <div>New post</div>
        {postElements}
      </div>
    </div>
  );
};
export default MyPosts;
