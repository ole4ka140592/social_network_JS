import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const UPDATE_NEW_MESSAGES_BODY = "UPDATE-NEW-MESSAGES-BODY";
const SEND_MESSAGE = "SEND-MESSAGE"

export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', like: 15},
                {id: 2, message: 'It is my first post', like: 20}
            ],
            newPostText: ""
        },

        messagesPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo!'}, {id: 4, message: 'Yo!'},
                {id: 5, message: 'Yo!'}
            ],
            newMessagesBody: ""
        },
        sidebar: {}
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log("State changed")
    },

    rerenderEntireTree() {
        console.log('State changed')
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    },

    subscriber(observer) {
        this._callSubscriber = observer
    }
}


export const addPostAC = () => {
    return {
        type: ADD_POST
    }
}

export const onPostChangeAC = (text) => {
    return {
        type: UPDATE_POST,
        newText: text
    }
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyAC = (body) => {
    return {
        type: UPDATE_NEW_MESSAGES_BODY,
        body: body
    }
}


export default store
window.store = store