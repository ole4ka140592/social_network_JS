export const profileReducer = (state, action) => {

    switch (action.type) {
        case "ADD_POST": {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            }

            state.profilePage.posts.push(newPost)
            state.profilePage.newPostText = ''
            return state

        }
        case "UPDATE_POST": {
            state.profilePage.newPostText = action.newText
            return state
        }
        default:
            return state
    }
}