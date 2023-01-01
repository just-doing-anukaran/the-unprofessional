import React from "react";
import "../scss/Poster.scss";
import Header from "../Components/Header";
import Myshop from "../Components/Myshop";
import Footer from "../Components/Footer";
import Dcards from "../Components/Dcards";
import ia from '../images/interior/i1.png';
import ib from '../images/interior/i2.png';
import ic from '../images/interior/i3.png';



function Interior() {
  const images = [
    [
      { id: "1", img:ia, hid: "", ihid: "", vhid: "none" },
      { id: "2", img:ib, hid: "", ihid: "", vhid: "none" },
      { id: "3", img:ic, hid: "", ihid: "", vhid: "none" },
      
      
    ],
    [
        { id: "1", img:'', hid: "hidden", ihid: "", vhid: "none" },
        { id: "2", img:'', hid: "hidden", ihid: "", vhid: "none" },
        
        
        
      ],
      [
        { id: "1", img:'', hid: "hidden", ihid: "", vhid: "none" },
        
        
      ],
      [
          { id: "1", img:'', hid: "hidden", ihid: "", vhid: "none" },
        { id: "2", img:'', hid: "hidden", ihid: "", vhid: "none" },
        
      ],
      [
          { id: "1", img:'', hid: "hidden", ihid: "", vhid: "none" },
        { id: "2", img:'', hid: "hidden", ihid: "", vhid: "none" },
        
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
        <span className="pink">3D INTERIOR  </span>DESIGNS
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

export default Interior;
