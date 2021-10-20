import React from "react";
import classes from './../Dialogs.module.css'

export const Message = (props) => {

    //
    // let newMessageElement = React.createRef()
    //
    // let addMessage = () => {
    //     let message = newMessageElement.current.value;
    //     alert(message)
    // }


    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

