import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar";
import usersReducer from "./users_reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    messagePage:dialogReducer,
    usersPage: usersReducer,
  sidebarReducer,
});
let store = createStore(reducers);
window.store=store;
export default store;
