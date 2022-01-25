export const dialogsReducer = (state, action) => {

    switch (action.type) {
        case "UPDATE_NEW_MESSAGES_BODY": {
            state.messagesPage.newMessagesBody = action.body
            return state
        }

        case "SEND_MESSAGE": {
            let body = this._state.messagesPage.newMessagesBody
            state.messagesPage.newMessagesBody = ""
            state.messagesPage.messages.push({id: 1, message: body})
            return state
        }
        default:
            return state
    }
}