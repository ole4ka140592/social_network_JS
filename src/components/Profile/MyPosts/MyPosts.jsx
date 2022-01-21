import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} like={p.like}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch({type: "ADD-POST"})
    }

    let onPostChange=()=> {
        let text = newPostElement.current.value
        // props.updateNewPostText(text)
        props.dispatch({type: "UPDATE-POST", newText: text})
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts K</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}