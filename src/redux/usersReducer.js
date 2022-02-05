export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET-USERS"

let initialState = {
    users: [
        {
            id: 1, photoUrl: "http://s1.iconbird.com/ico/0612/practika/w256h2561339698323user.png",
            followed: false, fullName: "Dmitry", status: "I am Boss",
            location: {city: "Minsk", country: "Belarus"}
        }
    ]
}

export const usersReducer = (state = initialState, action = allAction) => {

    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {
                ...state,
                users: state.map(m => m.id === action.userId ? {...m, followed: !action.followed} : m)
            }
            return stateCopy
        }

        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.map(m => m.id === action.userId ? {...m, followed: !action.followed} : m)
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

export const allAction = followAC | unFollowAC | setUsersAC

export const followAC = (userId, followed) => {
    return {
        type: FOLLOW,
        userId,
        followed
    }
}

export const unFollowAC = (userId, followed) => {
    return {
        type: UNFOLLOW,
        userId,
        followed
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}