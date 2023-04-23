const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE";
let initialState={
    
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
      
      
}
const dialogReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 3,
                message: state.newMessageText,
              };
              state.messages.push(newMessage);
              state.newMessageText = "";
              return state;
              case    UPDATE_NEW_MESSAGE:
                state.newMessageText = action.newMessage;
                return state;
                default:
                    return state 
    }
  
};
export let addUpdateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    newMessage: text,
  });
  export let addAddMessageActionCreator = () => ({
    type: ADD_MESSAGE,
  });
export default dialogReducer;
