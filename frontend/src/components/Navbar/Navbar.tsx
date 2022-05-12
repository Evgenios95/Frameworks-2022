import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { AuthWrapper } from "../AuthWrapper";
import { UserWrapper } from "../UserWrapper";
import { AnimatePresence } from "framer-motion";
import { useBasket, useUser } from "../../UserProvider";

export const Navbar = () => {
  const basket: any = useBasket();
  // @ts-ignore
  const user: any = useUser();
  return (
    <div className={"navbarWrapper"}>
      <Link to="/">
        <div className={"navbarLogo"}>
          <img src={Logo} alt={"Logo"} />
        </div>
      </Link>

      <nav className={"navbarMenuWrapper"}>
        <Link to="/" className={"navbarLink"}>
          <h4>Home</h4>
        </Link>

        <Link to="/catalog" className={"navbarLink"}>
          <h4>Products</h4>
        </Link>

        <Link to="/basket" className={"navbarLink"}>
          <h4>Basket</h4>
          <div className={"basketCount"}>{basket.length}</div>
        </Link>
      </nav>
      <AnimatePresence>
        {user ? <UserWrapper key={"loginFormModal"} /> : <AuthWrapper />}
      </AnimatePresence>
    </div>
  );
};
