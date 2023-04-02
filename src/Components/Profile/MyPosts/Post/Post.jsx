import React from 'react';
import styles from './Post.module.css';
const Post = (props) => {
   return (<div className={styles.item}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIztQCxzhL9LkUWh2fskYIz9abGrTNzFhueQ&usqp=CAU' />
    <div>
    {props.message}
    </div>
    post 1
    <div>
      <span>like</span>
    </div>
    <div><span>dislike</span>
    </div>
  </div>
  )
}
export default Post;