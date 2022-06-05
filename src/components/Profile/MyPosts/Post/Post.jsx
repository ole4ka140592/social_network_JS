import React from "react";
import classes from "./Post.module.css";


export const Post = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src='https://lifehacker.ru/special/fujifilm/dist/static/img/5.2410a2d.jpg'/>
                {props.message}
                <div>
                    <span>{props.like}</span>
                </div>
            </div>
        </div>
    )
}