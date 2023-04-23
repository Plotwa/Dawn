const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE";
const dialogReducer = (state, action) => {
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
