import React from "react";


export const Users = (props) => {
    return (
        <div>
            {props.users.map(m => {
                return (
                    <div key={m.id}>
                        <span>
                            <div>
                                <img/>
                            </div>
                            <div>
                                <button>Follow</button>
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