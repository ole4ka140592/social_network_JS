import React from "react";
import axios from "axios";
import {follow,
    setCurrentPage,
    setIsFetching,
    setTotalUserCount,
    setUsers,
    unFollow} from "../../redux/usersReducer";
import {connect} from "react-redux";
import preloader from "../../assets/images/preloader.gif"
import Users from "./Users";


export class UsersC extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
                this.props.setIsFetching(false)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        console.log(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (
            <>
                {this.props.isFetching? <img src={preloader}/>: null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export const UsersContainer= connect(mapStateToProps,
    {follow, unFollow, setUsers, setCurrentPage, setTotalUserCount, setIsFetching})(UsersC)
