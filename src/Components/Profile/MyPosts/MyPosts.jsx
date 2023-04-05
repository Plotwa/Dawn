import React from 'react';
import Post from './Post/Post';
import Avatarka from '../AvatarkaProfile/Avatarka';
import styles from './MyPosts.module.css';
const MyPosts =() =>{
    return  <div >
         <Avatarka />
    <div className={styles.postBlock}>
     <h2> My Posts</h2>
      <div>
        <textarea></textarea>
        <button>Напиши че нибудь</button>
      </div>
      <div>
        New post
      </div>
      <Post  likecount='15' />
        <Post likecount='20' />
      </div>
    </div>
}
export default MyPosts;