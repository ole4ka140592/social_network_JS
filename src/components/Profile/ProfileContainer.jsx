import React from "react";
import {ReactComponent} from "*.svg";
import {Profile} from "./Profile";
import axios from "axios";

class ProfileContainer extends ReactComponent {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)

    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }

}

export default ProfileContainer;
