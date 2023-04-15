import React from 'react';
import Post from './Post/Post';
import Avatarka from '../AvatarkaProfile/Avatarka';
import styles from './MyPosts.module.css';
const MyPosts =(props) =>{
  let newpostElement=React.createRef();
  let addPost=()=>{
   
    let text=newpostElement.current.value
      props.addPost(text)
      newpostElement.current.value = ''
  }
  let postElements =props.posts.map(posts=><Post post={posts.post} id={posts.id} likecount={posts.likescount} />)
 debugger;
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
      {postElements}
      </div>
    </div>
}
export default MyPosts;