import React from "react";
import { Link } from "react-router-dom";
import "../scss/Footer.scss";
import Social from "../Components/Social";

function Footer() {
  const ShopClickHandler = (e) => {
    e.preventDefault();
    document.querySelector(".myshop__container").scrollIntoView({
      behavior: "smooth",
    });
  };
  const WorkClickHandler = (e) => {
    e.preventDefault();
    document.querySelector("#myWork").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="footer__container ">
      <ul className="footer__links Header__nav-links">
        <li
          className="Header__nav-links__myShop pink"
          onClick={WorkClickHandler}
        > <Link to='/'>
          myWork
          </Link>
        </li>
        <li
          className="Header__nav-links__myShop pink"
          onClick={ShopClickHandler}
        >
          myShop
        </li>
        <li className="Header__nav-links__me">
          <Link to="/about">About me</Link>
        </li>
        <li className="Header__nav-links__me">
          <Link to="/contact">Contact me</Link>
        </li>
      </ul>
      <Social />
      <div className="footer__text ">
        <p>All Rights Reserved. © 2022 theUnprofessional.</p>
        <p>rajputanukar@gmail.com | +91 8287785501</p>
      </div>
    </div>
  );
}

export default Footer;
