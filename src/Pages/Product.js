import React from "react";
import "../scss/Poster.scss";
import Header from "../Components/Header";
import Myshop from "../Components/Myshop";
import Footer from "../Components/Footer";
import Dcards from "../Components/Dcards";
import da from '../images/product/d1.png';
import db from '../images/product/d2.png';
import dc from '../images/product/d3.png';
import dd from '../images/product/d4.png';
import de from '../images/product/d5.png';
import dia from '../images/product/di1.png';
import dib from '../images/product/di2.png';
import dic from '../images/product/di3.png';
import pa from '../images/product/p1.png';
import pb from '../images/product/p2.png';
import pc from '../images/product/p3.png';
import pd from '../images/product/p4.png';
import pe from '../images/product/p5.png';
import pf from '../images/product/p6.png';
import oa from '../images/product/o1.png'


function Product() {
  const images = [
    [
      { id: "1", img:da, hid: "", ihid: "", vhid: "none" },
      { id: "2", img:db, hid: "", ihid: "", vhid: "none" },
      { id: "3", img:dc, hid: "", ihid: "", vhid: "none" },
      { id: "4", img:dd, hid: "", ihid: "", vhid: "none" },
      { id: "5", img:de, hid: "", ihid: "", vhid: "none" },
      
    ],
    [
        { id: "1", img:dia, hid: "", ihid: "", vhid: "none" },
        { id: "2", img:dib, hid: "", ihid: "", vhid: "none" },
        { id: "3", img:dic, hid: "", ihid: "", vhid: "none" },
        
        
      ],
      [
        { id: "1", img:pa, hid: "", ihid: "", vhid: "none" },
        { id: "2", img:pb, hid: "", ihid: "", vhid: "none" },
        { id: "3", img:pc, hid: "", ihid: "", vhid: "none" },
        { id: "4", img:pd, hid: "", ihid: "", vhid: "none" },
        { id: "5", img:pe, hid: "", ihid: "", vhid: "none" },
        { id: "6", img:pf, hid: "", ihid: "", vhid: "none" },
        
      ],
      [
        { id: "1", img:oa, hid: "", ihid: "", vhid: "none" },
        
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
        PRODUCT<span className="pink"> DESIGNS</span>
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

export default Product;
