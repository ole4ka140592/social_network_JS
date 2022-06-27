import React from "react";
import classes from "./Users.module.css";
import axios from "axios";
import photoUsers from "./../../assets/images/photoUsers.png";


class Users extends React.Component {

    render() {

        let pagesCount = Math.ceil(this.props.totalCount/ this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {
                        pages.map(m =>
                            <span
                                className={this.props.currentPage === m ? classes.selectedPage : ""}
                                onClick={(e) => {
                                    this.props.onPageChanged(m)
                                }}
                                key={m.id}>{m}</span>)
                    }
                </div>
                {this.props.users.map(m => {
                    return (
                        <div key={m.id}>
                        <span>
                            <div>
                                <img className={classes.photo}
                                     src={m.photos.small !== null ? m.photos.small : photoUsers}/>
                            </div>
                            <div>
                                {m.followed
                                    ? <button onClick={() => this.props.follow(m.id)}>unFollow</button>
                                    : <button onClick={() => this.props.follow(m.id)}>Follow</button>}
                            </div>
                        </span>
                            <span>
                            <span>
                                <div>{m.name}</div>
                                <div>{m.status}</div>
                            </span>
                        </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Users