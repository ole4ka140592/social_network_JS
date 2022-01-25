export const UPDATE_NEW_MESSAGES_BODY = "UPDATE-NEW-MESSAGES-BODY";
export const SEND_MESSAGE = "SEND-MESSAGE"


export const dialogsReducer = (state, action) => {

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