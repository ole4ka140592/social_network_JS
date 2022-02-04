import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";


export const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage

    const onClickSendMessageHandler=()=> {
        props.store.dispatch(sendMessageAC())
    }

    const onChangeHandler=(body)=>{
       props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return <Dialogs
        updateNewMessageBody={onChangeHandler}
        sendMessage={onClickSendMessageHandler}
        messagesPage={state}
    />
}