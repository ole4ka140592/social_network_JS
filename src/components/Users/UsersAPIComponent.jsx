import React from "react";
import axios from "axios";
import Users from "./Users";
import preloader from "../../assets/images/preloader.gif"

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (
            <>
                {this.props.isFetching? <img src={preloader}/>: null}
                <Users
                    totalCount={this.props.totalCount}
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

export default UsersAPIComponent