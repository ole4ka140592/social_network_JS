export const ADD_POST = "ADD-POST";
export const UPDATE_POST = "UPDATE-POST";

export const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            }

            state.posts.push(newPost)
            state.newPostText = ''
            return state

        }
        case UPDATE_POST: {
            state.newPostText = action.newText
            return state
        }
        default:
            return state
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