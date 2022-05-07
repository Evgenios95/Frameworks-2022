import "./style.css";
import React, {useState} from "react";
import Logo from "../../assets/logo.png";

export const Product = (props) => {
    return <div className={'productWrapper'}>
        <img src={Logo} alt={'coffee'}/>
        <h2>Coffee title</h2>
        <p> 420g </p>
        <h3>45 DKK</h3>
        <button>Details</button>
    </div>
};
