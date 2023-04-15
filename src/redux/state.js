import { rerenderEntireTree } from "../render";


let state = {
  messagePage: {
    dialogs: [
      { id: 1, name: 'Miha' },
      { id: 2, name: 'Serega+pepega' },
      { id: 3, name: 'Vano' },
    ],
    messages: [
      { id: 1, message: 'OUU MY' },
      { id: 2, message: 'Hello Niggga' },
      { id: 3, message: 'Why are you gay?' },
    ],
  },
  profilePage: {
    posts: [
      { post: 'Hi, how are you?', id: 1, likescount: 12 },
      { post: 'Problem?', id: 2, likescount: 15 }
    ],
  },
}

export let addPost = (postMessage) => {
  
  let newPost = {
    id: 3,
    post: postMessage,
    likescount: 0,
  }
  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state);
}

export default state;
