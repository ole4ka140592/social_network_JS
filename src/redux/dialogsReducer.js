export const UPDATE_NEW_MESSAGES_BODY = "UPDATE-NEW-MESSAGES-BODY";
export const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
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
}

export const dialogsReducer = (state=initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGES_BODY: {
            state.newMessagesBody = action.body
            return state
        }

        case SEND_MESSAGE: {
            let body = state.newMessagesBody
            state.newMessagesBody = ""
            state.messages.push({id: 1, message: body})
            return state
        }
        default:
            return state
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