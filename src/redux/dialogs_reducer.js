const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE";
let initialState = {
  dialogs: [
    { id: 1, name: "Miha" },
    { id: 2, name: "Serega+pepega" },
    { id: 3, name: "Vano" },
  ],
  messages: [
    { id: 1, message: "OUU MY" },
    { id: 2, message: "Hello Niggga" },
    { id: 3, message: "Why are you gay?" },
  ],
  newMessageText: "",
};
const dialogReducer = (state = initialState, action) => {
  
  //stateCopy.messages=[...state.messages]
  switch (action.type) {
    case ADD_MESSAGE:{
      let newMessage = {
        id: 3,
        message:state.newMessageText,
      }
      let stateCopy={...state,newMessageText:'',messages:[...state.messages,newMessage]}
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE:{
      let stateCopy={...state}
      stateCopy.newMessageText = action.newMessage;
      return stateCopy;
    }
    default:
      return state;
  }
};
export let addUpdateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE,
  newMessage: text,
});
export let sendMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});
export default dialogReducer;
