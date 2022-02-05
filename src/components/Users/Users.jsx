import React from "react";
import classes from "./Users.module.css";


export const Users = (props) => {

    if (props.users.length === 0) {

        props.setUsers([{
            id: 1,
            photoUrl: "http://s1.iconbird.com/ico/0612/practika/w256h2561339698323user.png",
            followed: false,
            fullName: "Dmitry",
            status: "I am Boss",
            location: {city: "Minsk", country: "Belarus"}
        },
            {
                id: 2,
                photoUrl: "http://s1.iconbird.com/ico/0612/practika/w256h2561339698323user.png",
                followed: false,
                fullName: "Dmitry",
                status: "I am Boss",
                location: {city: "Minsk", country: "Belarus"}
            }])
    }

    return (
        <div>
            {props.users.map(m => {
                return (
                    <div key={m.id}>
                        <span>
                            <div>
                                <img className={classes.photo} src={m.photoUrl}/>
                            </div>
                            <div>
                                {m.followed
                                    ? <button onClick={() => props.follow(m.id)}>unFollow</button>
                                    : <button onClick={() => props.follow(m.id)}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{m.fullName}</div>
                                <div>{m.status}</div>
                            </span>
                            <span>
                                <div>{m.location.country}</div>
                                <div>{m.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}