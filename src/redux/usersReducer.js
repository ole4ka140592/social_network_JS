export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET-USERS"

let initialState = {
    users: [

    ]
}

export const usersReducer = (state = initialState, action ) => {

    switch (action.type) {
        case FOLLOW: {
            debugger
            let stateCopy = {
                ...state,
                users: state.users.map(m => m.id === action.userId ? {...m, followed: true} : m)
            }
            return stateCopy
        }

        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(m => m.id === action.id ? {...m, followed: false} : m)
            }
            return stateCopy
        }

        case SET_USERS: {
            let stateCopy = {
                ...state,
                users: [...state.users, ...action.users]
            }
            return stateCopy
        }

        default:
            return state
    }
}

// export const allAction = followAC | unFollowAC | setUsersAC

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unFollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}