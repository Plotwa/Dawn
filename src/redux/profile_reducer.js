const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
let initialState = {
  posts: [
    { post: "Hi, how are you?", id: 1, likescount: 12 },
    { post: "Problem?", id: 2, likescount: 15 },
  ],
  newTextPost: "it-denchikPro.com",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      let newPost ={
        id: 3,
        post: state.newTextPost,
        likescount: 0,
      };
      let stateCopy={...state}
      stateCopy.posts=[...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newTextPost ='';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT:
      let stateCopy={...state};
      stateCopy.newTextPost = action.newText;
      return stateCopy;
    default:
      return state;
  }
};
export let addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export let UpdateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default profileReducer;
