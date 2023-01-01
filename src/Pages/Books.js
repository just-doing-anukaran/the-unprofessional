import React from "react";
import "../scss/Poster.scss";
import Header from "../Components/Header";
import Myshop from "../Components/Myshop";
import Footer from "../Components/Footer";
import Dcards from "../Components/Dcards";
import sa from '../images/book/s1.png';
import sb from '../images/book/s2.png';


function Book() {
  const images = [
    [
      { id: "1", img:sa, hid: "", ihid: "", vhid: "none" },
      { id: "2", img:sb, hid: "", ihid: "", vhid: "none" },
      
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
        
      ],
      [
        { id: "1", img:'', hid: "hidden", ihid: "", vhid: "none" },
        
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
        <span className="pink">BOOK/MAGAZINE  </span>DESIGNS
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

export default Book;
