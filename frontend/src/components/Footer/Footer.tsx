import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer id={"footer"}>
      <div className={"footer-wrapper"}>
        <div className={"footer-categories"}>
          <h3>Roasts</h3>
          <Link to="/products?roast=light">Light</Link>
          <Link to="/products?roast=medium">Medium</Link>
          <Link to="/products?roast=dark">Dark</Link>
        </div>

        <div className={"footer-categories"}>
          <h3>Brands</h3>
          <Link to="/products?brand=starbucks">Starbucks</Link>
          <Link to="/products?brand=lavazza">Lavazza</Link>
          <Link to="/products?brand=depresso">Depresso</Link>
        </div>

        <div className={"footer-links"}>
          <h3>Extras</h3>
          <Link to="/">About Us</Link>
          <Link to="/">Contact Us</Link>
          <Link to="/">Privacy policy</Link>
        </div>

        <div className={"footer-description"}>
          <h3>About us</h3>
          <p>
            Coffeenator was created to give you a one-stop to buy quality coffee
            beans from around the world, and deliver to your door step.
            Coffenator is located in Copenhagen, Denmark.
          </p>
        </div>
      </div>

      <div className={"footer-mostbot-wrapper"}>
        <p>Copyright 2022 Coffeenator</p>

        <p>CVR: 99 99 99 99</p>

        <div className={"socials social-icons"}>
          <Link to={"/"} className={"facebook"}>
            <FontAwesomeIcon icon={faFacebook} />
          </Link>

          <Link to={"/"} className={"instagram"}>
            <FontAwesomeIcon icon={faInstagram} />
          </Link>

          <Link to={"/"} className={"linkedin"}>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>

          <Link to={"/"} className={"twitter"}>
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>
      </div>
    </footer>
  );
};
