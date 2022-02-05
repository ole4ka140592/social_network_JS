import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../redux/usersReducer";
import {Users} from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId, followed) => {
            dispatch(followAC(userId, followed))
        },
        unFollow: (userId, followed) => {
            dispatch(unFollowAC(userId, followed))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)