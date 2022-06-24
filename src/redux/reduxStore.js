import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";


let rootReducer = combineReducers({
    profilePage : profileReducer,
    usersPage: usersReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
})

export const store = createStore(rootReducer);
window.store=store