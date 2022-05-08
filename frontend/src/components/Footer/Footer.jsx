import "./style.css";
import React from "react";
import Logo from "../../assets/logo.png";

export const Footer = () => {
  return <footer id={"footer"}>
    <div className={"footerWrapper"}>
      <div className={"footerCategories"}>
        <h3>Categories</h3>
        <a href="/catalog?roast=lightroast">Lightly roasted selection</a>
        <a href="/catalog?roast=mediumroast">Medium roasted selection</a>
        <a href="/catalog?roast=darkroast">Dark roasted selection</a>
        <a href="/">On sale</a>
      </div>
      <div className={"footerLinks"}>
        <h3>Quick links</h3>
        <a href="/">About Us</a>
        <a href="/">Contact Us</a>
        <a href="/">Privacy policy</a>
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
        <a className={"socialIcon"}><img src={Logo} alt={"facebook"} /></a>
        <a className={"socialIcon"}><img src={Logo} alt={"instagram"} /></a>
        <a className={"socialIcon"}><img src={Logo} alt={"linkedin"} /></a>
        <a className={"socialIcon"}><img src={Logo} alt={"twitter"} /></a>
      </div>
    </div>
  </footer>;
};
