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
    newMessageText:''
  },
  profilePage: {
    posts: [
      { post: 'Hi, how are you?', id: 1, likescount: 12 },
      { post: 'Problem?', id: 2, likescount: 15 }
    ],
    newTextPost:'it-denchikPro.com',
  },
}
window.state=state;
export let addPost = () => {
  
  let newPost = {
    id: 3,
    post:state.profilePage.newTextPost,
    likescount: 0,
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newTextPost=""
  rerenderEntireTree(state);
}
export let updateNewText = (newUpdate) => {
  state.profilePage.newTextPost = newUpdate;
  rerenderEntireTree(state);
}
export let updateNewMessage = (newUpdate) => {
  state.messagePage.newMessageText = newUpdate;
  rerenderEntireTree(state);

}

export let addMessage = (newMessageText) => {
  
  let newMessage = {
    id: 3,
    message:newMessageText,   
  }
  state.messagePage.messages.push(newMessage ) 
  rerenderEntireTree(state);
}
export default state;
