import "./style.css";
import React, {useState} from "react";
import Logo from "../../assets/logo.png";
import {RegisterForm} from "../RegisterForm";
import {LoginForm} from "../LoginForm";

export const AuthWrapper = (props) => {
    const [modalStatus, setModal] = useState(null);

    return <div className={"navbarUserWrapper"}>
        <button onClick={() => setModal("login")}>
            Log in
        </button>
        <button onClick={() => setModal("register")}>
            Register
        </button>
        {modalStatus && (<div className={"modalWrapper"}>
            <div className={"modal"}>
                <button className={"closeModal"} onClick={() => setModal(null)}>
                    <img src={Logo} alt={"Logo"}/>
                </button>
                {modalStatus === "login" && (<LoginForm closeModalFunction={setModal} setUser={props.setUser}/>)}
                {modalStatus === "register" && (<RegisterForm setUser={props.setUser}/>)}
            </div>
        </div>)}</div>;
};
