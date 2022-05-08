import "./style.css";
import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return <footer id={"footer"}>
    <div className={"footerWrapper"}>
      <div className={"footerCategories"}>
        <h3>Roasts</h3>
        <Link to="catalog?roast=lightroast">Lightly roasted selection</Link>
        <Link to="catalog?roast=mediumroast">Medium roasted selection</Link>
        <Link to="catalog?roast=darkroast">Dark roasted selection</Link>
        <Link to="">On sale</Link>
      </div>
      <div className={"footerCategories"}>
        <h3>Brands</h3>
        <Link to="catalog?brand=starbucks">Starbucks</Link>
        <Link to="catalog?brand=lavazza">Lavazza</Link>
        <Link to="catalog?brand=depresso">Depresso</Link>
        <Link to="">On sale</Link>
      </div>
      <div className={"footerLinks"}>
        <h3>Quick links</h3>
        <Link to="asd">About Us</Link>
        <Link to="asdd">Contact Us</Link>
        <Link to="asddd">Privacy policy</Link>
      </div>
      <div className={"footerDescription"}>
        <h3>About us</h3>
        <p>Coffeenator was created to give you a one-stop to buy quality coffee beans from around the world, and
          deliver to your door step. Coffenator is located in Copenhagen, Denmark.</p>
      </div>
    </div>
    <div className={"copyrightAndSomeWrapper"}>
      <p>Copyright 2022 Coffeenator</p>
      <p>CVR: 99 99 99 99</p>
      <div className={"socials"}>
        <Link to={"/"} className={"socialIcon"}><img src={Logo} alt={"facebook"} /></Link>
        <Link to={"/"} className={"socialIcon"}><img src={Logo} alt={"instagram"} /></Link>
        <Link to={"/"} className={"socialIcon"}><img src={Logo} alt={"linkedin"} /></Link>
        <Link to={"/"} className={"socialIcon"}><img src={Logo} alt={"twitter"} /></Link>
      </div>
    </div>
  </footer>;
};
