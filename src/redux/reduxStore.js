import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

let rootReducer = combineReducers({
    profilePage : profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer
})

export let store = createStore(rootReducer);
