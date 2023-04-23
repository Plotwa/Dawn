import dialogReducer from "./dialog_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar";


let store = {
  _state: {
    messagePage: {
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
    },
    profilePage: {
      posts: [
        { post: "Hi, how are you?", id: 1, likescount: 12 },
        { post: "Problem?", id: 2, likescount: 15 },
      ],
      newTextPost: "it-denchikPro.com",
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscribe() {
    console.log("Hey HEy");
  },
  subscribe(observer) {
    this._callSubscribe = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = dialogReducer(this._state.messagePage, action);
    this._state.sidebar=sidebarReducer(this._state.sidebar);
    this._callSubscribe(this._state);
  },
};


export default store;
