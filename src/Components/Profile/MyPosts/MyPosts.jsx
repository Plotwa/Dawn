import React from "react";
import Post from "./Post/Post";
import Avatarka from "../AvatarkaProfile/Avatarka";
import styles from "./MyPosts.module.css";




const MyPosts = (props) => {
  let newMessageElement = React.createRef();

  let onAddPost = () => {
    props.addPost()
  };

  let postElements = props.state.posts.map((posts) => (
    <Post post={posts.post} id={posts.id} likecount={posts.likescount} />
  ));

  let onTextChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewTextPost(text);
  };

  return (
    <div>
      <div className={styles.postBlock}>
        <h2> My Posts</h2>
        <div>
          <textarea
            onChange={onTextChange}
            ref={newMessageElement}
            value={props.state.newTextPost}
          />
          <button onClick={onAddPost}>Напиши че нибудь</button>
        </div>
        <div>New post</div>
        {postElements}
      </div>
    </div>
  );
};
export default MyPosts;
