import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialog_reducer";
import sidebarReducer from "./sidebar";

let reducers = combineReducers({
    profilePage:profileReducer,
    messagePage:dialogReducer,
  sidebarReducer,
});
let store = createStore(reducers);
export default store;
