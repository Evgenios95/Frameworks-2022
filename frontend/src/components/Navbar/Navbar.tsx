import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/coffeenator.svg";
import { AuthWrapper } from "../AuthWrapper";
import { UserWrapper } from "../UserWrapper";
import { AnimatePresence } from "framer-motion";
import {
  LoggedInUserProps,
  useBasket,
  useUser,
} from "../../utils/providers/UserProvider";

export const Navbar = () => {
  const basket: number[] = useBasket();
  const user: LoggedInUserProps | boolean = useUser();

  return (
    <div className="navbar-wrapper">
      <div className="logo-links-wrapper">
        <Link to="/">
          <div className={"navbar-logo"}>
            <img src={Logo} alt={"Logo"} />
          </div>
        </Link>

        <nav className={"navbar-menu-wrapper"}>
          <Link to="/" className={"navbar-link"}>
            Home
          </Link>

          <Link to="/catalog" className={"navbar-link"}>
            Products
          </Link>

          <Link to="/basket" className="navbar-link">
            Basket
            <div className="basket-count">{basket.length}</div>
          </Link>
        </nav>
      </div>

      <AnimatePresence>
        {user ? <UserWrapper key={"loginFormModal"} /> : <AuthWrapper />}
      </AnimatePresence>
    </div>
  );
};
