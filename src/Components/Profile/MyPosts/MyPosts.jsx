import React from 'react';
import Post from './Post/Post';
import Avatarka from '../AvatarkaProfile/Avatarka';
import styles from './MyPosts.module.css';
const MyPosts =() =>{
  let postsData=[
    {post:'Hi, how are you?',id:1,likescount:12},
    {post:'Problem?',id:2,likescount:15}
  ]
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
      <Post post={postsData[0].post} id={postsData[0].id} likecount={postsData[0].likescount} />
      <Post post={postsData[1].post} id={postsData[1].id} likecount={postsData[1].likescount} />
      </div>
    </div>
}
export default MyPosts;