import React from "react";
import classes from "./Users.module.css";
import axios from "axios";
import photoUsers from "./../../assets/images/photoUsers.png"

export const Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                debugger
                props.setUsers(response.data.items)
            })
    }

    return (
        <div>
            {props.users.map(m => {
                return (
                    <div key={m.id}>
                        <span>
                            <div>
                                <img className={classes.photo} src={m.photos.small !== null ? m.photos.small: photoUsers}/>
                            </div>
                            <div>
                                {m.followed
                                    ? <button onClick={() => props.follow(m.id)}>unFollow</button>
                                    : <button onClick={() => props.follow(m.id)}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{m.name}</div>
                                <div>{m.status}</div>
                            </span>
                            {/*<span>*/}
                            {/*    <div>{m.location.country}</div>*/}
                            {/*    <div>{m.location.city}</div>*/}
                            {/*</span>*/}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}