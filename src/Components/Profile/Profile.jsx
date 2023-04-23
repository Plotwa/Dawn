import React from "react";
import styles from "./Profile.module.css";
import Avatarka from "./AvatarkaProfile/Avatarka";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <Avatarka />
      <MyPostsContainer store={props.store}      
      />
    </div>
  );
};
export default Profile;
