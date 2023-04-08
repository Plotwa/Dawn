import React from 'react';
import styles from './Post.module.css';
const Post = (props) => {
  return (<div className={styles.item}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIztQCxzhL9LkUWh2fskYIz9abGrTNzFhueQ&usqp=CAU' />
    <div>
      
    </div>
    {props.post}    <div>
      <span>like</span>
      {props.likecount}
    </div>
    <div>
      <span>dislike</span>
    </div>
  </div>
  )
}
export default Post;