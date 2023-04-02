import React from 'react';
import Post from './Post/Post';
const MyPosts =() =>{
    return  <div >
    <div>
      <img src='https://cdn.ananasposter.ru/image/cache/catalog/poster/travel/87/7834-1000x830.jpg'/>
    </div>
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Напиши че нибудь</button>
      </div>
      <div>
        New post
      </div>
      <Post message='Hi how are you?' />
        <Post message='Ist my first props' />
      </div>
    </div>
}
export default MyPosts;