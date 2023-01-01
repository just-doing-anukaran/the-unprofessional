import React from "react";
import '../scss/Header.scss';
import { Link } from "react-router-dom";

import logo from "../images/Logo.svg";

function Header() {
  const Clickhandler = (e)=>{
    e.preventDefault();
    document.querySelector(".myshop__container").scrollIntoView({
      behavior: "smooth"
    });
  }
  return (
    <div className="Header__container">
      <div className="Header__logo-container">
        <Link to="/"><img src={logo} alt="logo" className="Header__logo-container__logo" /></Link>
      </div>

      <ul className="Header__nav-links">
        <li className="Header__nav-links__myShop pink" onClick={Clickhandler}>myShop</li>
        <li className="Header__nav-links__me"><Link to="/about">About me</Link></li>
        <li className="Header__nav-links__me"><Link to="/contact">Contact me</Link></li>
      </ul>
      <div className='Header__contact pink'>
            rajputanukar@gmail.com<br/>
            +91 8287785501
        </div>
    </div>
  );
}

export default Header;
