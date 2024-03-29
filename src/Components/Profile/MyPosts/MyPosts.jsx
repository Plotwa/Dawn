import React from "react";
import Post from "./Post/Post";
import Avatarka from "../AvatarkaProfile/Avatarka";
import styles from "./MyPosts.module.css";




const MyPosts = (props) => {
  let newMessageElement = React.createRef();

  let onAddPost = () => {
    props.addPost()
  };

  let postElements = props.posts.map((posts) => (
    <Post post={posts.post} id={posts.id} likecount={posts.likescount} />
  ));

  let onTextChange = (e) => {
    let text = e.target.value;
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
            value={props.newTextPost}
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
