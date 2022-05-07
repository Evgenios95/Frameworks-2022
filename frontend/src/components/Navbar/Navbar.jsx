import "./style.css";
import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo.png";
import {AuthWrapper} from "../AuthWrapper";
import {UserWrapper} from "../UserWrapper";

export const Navbar = (props) => {

    return <div className={"navbarWrapper"}>
        <Link to="/">
            <div className={"navbarLogo"}>
                <img src={Logo} alt={"Logo"}/>
            </div>
        </Link>
        <nav className={"navbarMenuWrapper"}>
            <Link to="/" className={"navbarLink"}>Home</Link>
            <Link to="/catalog" className={"navbarLink"}>Products</Link>
            <Link to="/basket" className={"navbarLink"}>Basket
                <div className={"basketCount"}>{props.basket.length}</div>
            </Link>

        </nav>
        {props.user ? (<UserWrapper user={props.user} setUser={props.setUser}/>) :
            <AuthWrapper setUser={props.setUser}/>}

    </div>
        ;
}
