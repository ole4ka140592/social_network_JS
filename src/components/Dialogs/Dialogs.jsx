import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";


export const Dialogs = (props) => {

    let state = props.messagesPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements= state.messages.map (m => <Message message={m.message}/>)
    let newMessagesBody = state.newMessagesBody

    const onClickHandler=()=> {
        props.sendMessage()
    }

    const onChangeHandler=(e)=>{
       let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}

            </div>

            <div className={classes.messages}>
                <div>{messageElements}</div>
                <div><textarea placeholder="Enter your message"
                               value={newMessagesBody}
                               onChange={onChangeHandler}
                /></div>
                <div><button onClick={onClickHandler}>Send</button></div>

            </div>
        </div>
    )
}