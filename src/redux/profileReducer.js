export const ADD_POST = "ADD-POST";
export const UPDATE_POST = "UPDATE-POST";


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 15},
        {id: 2, message: 'It is my first post', like: 20}
    ],
    newPostText: ""
}

export const profileReducer = (state= initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            }

            let copyState={...state}
            copyState.posts=[...state.posts]

            copyState.posts.push(newPost)
            copyState.newPostText = ''
            return copyState

        }
        case UPDATE_POST: {
            let copyState={...state}
            copyState.newPostText = action.newText
            return copyState
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