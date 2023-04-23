const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'
const ADD_POST='ADD-POST'
const profileReducer =(state,action)=>{
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 3,
                post:state.newTextPost,
                likescount: 0,
              }
              state.posts.push(newPost)
              state.newTextPost=""
              return state;
        case UPDATE_NEW_POST_TEXT:
            state.newTextPost=action.newText;  
        return state;
        default:
            return state
    }
}
export let addPostActionCreator = () => {
    return {
      type: ADD_POST,
    };
  };
  export let addUpdateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  });
export default profileReducer
