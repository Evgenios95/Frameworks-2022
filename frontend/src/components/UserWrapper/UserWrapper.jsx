import "./style.css";
import React from "react";

export const UserWrapper = (props) => {
        return <div className={"userInfo"}>
            <div className={"usernameDisplay"}>
                <p>Currently logged in as</p>
                <h1>{props.user.username}</h1>
            </div>
            <button className={"logoutButton"} onClick={() => {
                localStorage.removeItem("user")
                props.setUser(false)
            }}>Log out
            </button>
        </div>;
    }
;
