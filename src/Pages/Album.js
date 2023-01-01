import React from "react";
import "../scss/Poster.scss";
import Header from "../Components/Header";
import Myshop from "../Components/Myshop";
import Footer from "../Components/Footer";
import Dcards from "../Components/Dcards";
import va from '../images/album/v1.png';
import vb from '../images/album/v2.png';
import vc from '../images/album/v3.png';
import wa from '../images/album/w1.png';
import wb from '../images/album/w2.png';
import wc from '../images/album/w3.png';
import da from '../images/album/d1.png';
import db from '../images/album/d2.png';
import dc from '../images/album/d3.png';
import dd from '../images/album/d4.png';
import fa from '../images/album/f1.png';

function Album() {
  const images = [
    [
        { id: "1", img: va, hid: "", ihid: "", vhid: "none" },
        { id: "2", img: vb, hid: "", ihid: "", vhid: "none" },
        { id: "3", img: vc, hid: "", ihid: "", vhid: "none" }
],
[
    { id: "1", img: wa, hid: "", ihid: "", vhid: "none" },
    { id: "2", img: wb, hid: "", ihid: "", vhid: "none" },
    { id: "3", img: wc, hid: "", ihid: "", vhid: "none" }
],
[
    { id: "1", img: da, hid: "", ihid: "", vhid: "none" },
    { id: "2", img: db, hid: "", ihid: "", vhid: "none" },
    { id: "3", img: dc, hid: "", ihid: "", vhid: "none" },
    { id: "4", img: dd, hid: "", ihid: "", vhid: "none" },
],
[
    { id: "1", img: fa, hid: "", ihid: "", vhid: "none" },
    
],
    [{ id: "1", img:'', hid: "hidden", ihid: "none", vhid: "" }],
    [
      { id: "1", img:'', hid: "hidden", ihid: "none", vhid: "" },
      
    ],
    [
        { id: "1", img:'', hid: "hidden", ihid: "none", vhid: "" },
        
      ],
      [
        { id: "1", img:'', hid: "hidden", ihid: "none", vhid: "" },
        
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
        <span className="pink"> ALBUM COVER</span> DESIGNS
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

export default Album;
