import "./style.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/coffeenator.svg";
import { AuthWrapper } from "../AuthWrapper";
import { UserWrapper } from "../UserWrapper";

interface NavbarProps {
  user: string | boolean;
  setUser: (user: string | boolean) => void;
  basket: [];
}

export const Navbar = ({ user, setUser, basket }: NavbarProps) => {
  return (
    <div className={"navbar-wrapper"}>
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

          <Link to="/basket" className={"navbar-link"}>
            Basket
            <div className={"basket-count"}>{basket.length}</div>
          </Link>
        </nav>
      </div>

      {user ? (
        <UserWrapper user={user} setUser={setUser} />
      ) : (
        <AuthWrapper setUser={setUser} />
      )}
    </div>
  );
};
