import "./style.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/coffeenator.svg";
import { AuthWrapper } from "../AuthWrapper";
import { UserWrapper } from "../UserWrapper";
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";
import {
  LoggedInUserProps,
  useBasket,
  useUser,
} from "../../utils/providers/UserProvider";

export const Navbar = () => {
  // Custom hook using React Context to provide basket state
  const basket: number[] = useBasket();
  // Custom hook using React Context to provide user state
  const user: LoggedInUserProps | boolean = useUser();

  const currentPage = useLocation();

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
            {currentPage.pathname === "/" && (
              <div className={"home-navbar-highlight"} />
            )}
          </Link>

          <Link to="/products" className={"navbar-link"}>
            Products
            {currentPage.pathname === "/products" && (
              <div className={"home-navbar-highlight"} />
            )}
          </Link>

          <Link to="/basket" className="navbar-link">
            Basket
            <div className="basket-count">{basket.length}</div>
            {currentPage.pathname === "/basket" && (
              <div className={"home-navbar-highlight"} />
            )}
          </Link>
        </nav>
      </div>

      <AnimatePresence>
        {user ? <UserWrapper key={"loginFormModal"} /> : <AuthWrapper />}
      </AnimatePresence>
    </div>
  );
};
