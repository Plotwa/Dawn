import React from 'react';
import Post from './Post/Post';
import Avatarka from '../AvatarkaProfile/Avatarka';
import styles from './MyPosts.module.css';
const MyPosts =(props) =>{
  let newpostElement=React.createRef();
  let addPost=()=>{
    debugger;
    let text=newpostElement.current.value
      props.addPost(text)
  }
 
    return  <div >

    <div className={styles.postBlock}>
     <h2> My Posts</h2>
      <div>
        <textarea ref={newpostElement}></textarea>
        <button onClick={addPost}>Напиши че нибудь</button>
      </div>
      <div>
        New post
      </div>
      <Post post={props.posts[0].post} id={props.posts[0].id} likecount={props.posts[0].likescount} />
      <Post post={props.posts[1].post} id={props.posts[1].id} likecount={props.posts[1].likescount} />
      </div>
    </div>
}
export default MyPosts;