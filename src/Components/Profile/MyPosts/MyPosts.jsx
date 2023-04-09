import React from 'react';
import Post from './Post/Post';
import Avatarka from '../AvatarkaProfile/Avatarka';
import styles from './MyPosts.module.css';
const MyPosts =(props) =>{
 
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
      <Post post={props.postsData[0].post} id={props.postsData[0].id} likecount={props.postsData[0].likescount} />
      <Post post={props.postsData[1].post} id={props.postsData[1].id} likecount={props.postsData[1].likescount} />
      </div>
    </div>
}
export default MyPosts;