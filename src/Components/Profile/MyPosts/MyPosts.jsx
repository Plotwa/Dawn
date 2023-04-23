import React from "react";
import Post from "./Post/Post";
import Avatarka from "../AvatarkaProfile/Avatarka";
import styles from "./MyPosts.module.css";
import { addPostActionCreator, addUpdateNewPostActionCreator } from "../../../redux/profile_reducer";



const MyPosts = (props) => {
  let newpostElement = React.createRef();

  let onAddPostClick = () => {
    props.dispatch(addPostActionCreator());
  };

  let postElements = props.profilePage.posts.map((posts) => (
    <Post post={posts.post} id={posts.id} likecount={posts.likescount} />
  ));

  let onTextChange = () => {
    let text = newpostElement.current.value;
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
            ref={newpostElement}
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
