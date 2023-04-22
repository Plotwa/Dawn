const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'
const ADD_POST='ADD-POST'
let store = {
  _state:{
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
    newTextPost:'it-denchikPro.com', },
  },
  getState(){
    return  this._state;
  },
 _callSubscribe (){
  console.log('Hey HEy')
},
subscribe (observer){
  this._callSubscribe=observer;
},
updateNewMessage (newUpdate)  {
  this._state.messagePage.newMessageText = newUpdate;
  this._callSubscribe(this._state);
},
addMessage (newMessageText)  {
  
  let newMessage = {
    id: 3,
    message:newMessageText,   
  }
  this._state.messagePage.messages.push(newMessage ) 
  this._callSubscribe(this._state);
},

 dispatch(action){
  if (action.type==='ADD-POST'){
    debugger;
    let newPost = {
      id: 3,
      post:this._state.profilePage.newTextPost,
      likescount: 0,
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newTextPost=""
    this._callSubscribe(this._state);
  }
   else if(action.type==='UPDATE-NEW-POST-TEXT'){
    this._state.profilePage.newTextPost=action.newText;
    this._callSubscribe(this._state);
  }
 }
}
export let addPostActionCreator =()=>{
  
  return { 
    type:ADD_POST
  }
}
 export let addUpdateNewPostActionCreator=(text)=>{
  return { 
    type:UPDATE_NEW_POST_TEXT,newText:text
  }
}
export default store;


