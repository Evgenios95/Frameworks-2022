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
    <div className={"navbarWrapper"}>
      <div className="logo-links-wrapper">
        <Link to="/">
          <div className={"navbarLogo"}>
            <img src={Logo} alt={"Logo"} />
          </div>
        </Link>

        <nav className={"navbarMenuWrapper"}>
          <Link to="/" className={"navbarLink"}>
            Home
          </Link>

          <Link to="/catalog" className={"navbarLink"}>
            Products
          </Link>

          <Link to="/basket" className={"navbarLink"}>
            Basket
            <div className={"basketCount"}>{basket.length}</div>
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
