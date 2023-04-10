import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import Avatarka from './AvatarkaProfile/Avatarka';
const Profile =(props) =>{
    return  <div className={styles.content}>
      <Avatarka />
    <MyPosts posts={props.posts} /> 
  </div>
}
export default Profile;