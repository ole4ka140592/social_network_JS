import classes from "../components/Users/Users.module.css";
import React from "react";

export const Pagination = () => {

    let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++ ) {
        pages.push(i)
    }


    return (
        <div>
            {pages.map(m=>
                <span
                    className={this.props.currentPage === m ? classes.selectedPage : ""}
                    onClick={(e)=> {this.onPageChanged(m)}}
                >{m}</span>)}
        </div>
    )
}