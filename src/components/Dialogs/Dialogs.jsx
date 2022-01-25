import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";


export const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageElements= props.state.messages.map (m => <Message message={m.message}/>)
    let newMessagesBody = props.state.newMessagesBody

    const onClickHandler=()=> {
        props.dispatch(sendMessageAC())
    }

    const onChangeHandler=(e)=>{
       let body = e.target.value
        props.dispatch(updateNewMessageBodyAC(body))
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