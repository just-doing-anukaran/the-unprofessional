import React from "react";
import "../scss/Myshop.scss";
import Sanimation from "../Components/Sanimation";
import etsy from "../images/etsy.svg";
import pinterest from "../images/pinterest.svg";
import {Link} from 'react-router-dom';

function Myshop() {
  return (
    <div className="myshop__container">
      <p className="myshop__heading b75">
        my<span className="blue">Shop</span>
      </p>
      <div className="Sanimation__container">
        <Link to={'/Underconst'}><Sanimation img={etsy} text="Etsy" color="pink" href="i" /></Link>
        <Link to={'/Underconst'}><Sanimation img={pinterest} text="Pinterest" color="blue" href="i" /></Link>
      </div>
    </div>
  );
}

export default Myshop;
