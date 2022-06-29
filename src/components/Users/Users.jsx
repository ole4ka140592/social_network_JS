import React from "react";
import classes from "./Users.module.css";
import photoUsers from "./../../assets/images/photoUsers.png";


export const Users =(props)=> {



        let pagesCount = Math.ceil(props.totalCount/ props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                hhh
                <div>
                    {
                        pages.map(m =>
                            <span
                                className={props.currentPage === m ? classes.selectedPage : ""}
                                onClick={(e) => {
                                    props.onPageChanged(m)
                                }}
                                key={m.id}>{m}</span>)
                    }
                </div>
                {props.users.map(m => {
                    return (
                        <div key={m.id}>
                        <span>
                            <div>
                                <img className={classes.photo}
                                     src={m.photos.small !== null ? m.photos.small : photoUsers}/>
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
                        </span>
                        </div>
                    )
                })}
            </div>
        )

}

export default Users