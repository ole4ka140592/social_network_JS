import React from "react";
import {addPostAC, onPostChangeAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";


export const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC())
    }

    let onPostChange = (text) => {
        let action = onPostChangeAC(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts

            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}