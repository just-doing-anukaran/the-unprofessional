import React from "react";
import "../scss/Poster.scss";
import Header from "../Components/Header";
import Myshop from "../Components/Myshop";
import Footer from "../Components/Footer";
import Dcards from "../Components/Dcards";
import sa from '../images/apparel/s1.png';
import gra from '../images/apparel/gr1.png';
import grb from '../images/apparel/gr2.png';
import gja from '../images/apparel/gj1.png';
import gjb from '../images/apparel/gj2.png';
import pa from '../images/apparel/p1.png';
import sb from '../images/apparel/s2.png';
import la from '../images/apparel/l1.png';
import lb from '../images/apparel/l2.png';
import sc from '../images/apparel/s3.png';



function Apparel() {
  const images = [
    [
      { id: "1", img:sa, hid: "", ihid: "", vhid: "none" },
      { id: "2", img:sb, hid: "", ihid: "", vhid: "none" },
      { id: "3", img:sc, hid: "", ihid: "", vhid: "none" },
      
      
    ],
    [
        { id: "1", img:la, hid: "", ihid: "", vhid: "none" },
        { id: "2", img:lb, hid: "", ihid: "", vhid: "none" },
        
        
        
      ],
      [
        { id: "1", img:pa, hid: "", ihid: "", vhid: "none" },
        
        
      ],
      [
          { id: "1", img:grb, hid: "", ihid: "", vhid: "none" },
        { id: "2", img:gra, hid: "", ihid: "", vhid: "none" },
        
      ],
      [
          { id: "1", img:gjb, hid: "", ihid: "", vhid: "none" },
        { id: "2", img:gja, hid: "", ihid: "", vhid: "none" },
        
      ],
    [
      { id: "1", img:'', hid: "hidden", ihid: "", vhid: "none" },
      { id: "2", img:'', hid: "hidden", ihid: "", vhid: "none" },
      { id: "3", img:'', hid: "hidden", ihid: "none", vhid: "" },
      { id: "4", img:'', hid: "hidden", ihid: "none", vhid: "" },
      { id: "5", img:'', hid: "hidden", ihid: "", vhid: "none" },
      { id: "6", img:'', hid: "hidden", ihid: "", vhid: "none" },
    ],
    [
      { id: "1", img: '', hid: "hidden", ihid: "", vhid: "none" },
      { id: "2", img: '', hid: "hidden", ihid: "none", vhid: "" },
      { id: "3", img: '', hid: "hidden", ihid: "none", vhid: "" },
      { id: "4", img: '', hid: "hidden", ihid: "", vhid: "none" },
    ],
    [
      { id: "1", img:'', hid: "hidden", ihid: "", vhid: "none" },
      { id: "2", img:'', hid: "hidden", ihid: "none", vhid: "" },
    ],

    [{ id: "1", img: "", hid: "hidden", ihid: "", vhid: "none" }],
    [{ id: "1", img: "", hid: "hidden", ihid: "", vhid: "none" }],
    [{ id: "1", img: "", hid: "hidden", ihid: "", vhid: "none" }],
    [{ id: "1", img: "", hid: "hidden", ihid: "", vhid: "none" }],
  ];
  return (
    <div>
      <Header />
      <div className="poster-txt b75">
        APPAREL<span className="pink"> DESIGNS</span>
      </div>
      <Dcards
        img={images[0]}
        lmg={images[1]}
        a={images[2]}
        b={images[3]}
        c={images[4]}
        d={images[5]}
        e={images[6]}
        f={images[7]}
        g={images[8]}
        h={images[9]}
        i={images[10]}
        j={images[11]}
      />

      <Myshop />
      <Footer />
    </div>
  );
}

export default Apparel;
