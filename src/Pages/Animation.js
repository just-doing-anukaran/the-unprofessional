import React from "react";
import "../scss/Poster.scss";
import Header from "../Components/Header";
import Myshop from "../Components/Myshop";
import Footer from "../Components/Footer";
import Dcards from "../Components/Dcards";
import aa from '../images/animations/a1.mp4';
import ra from '../images/animations/r1.mp4';
import ga from '../images/animations/g1.mp4';
import na from '../images/animations/n1.mp4';
import nb from '../images/animations/n2.mp4';
import ma from '../images/animations/m1.mp4';
import va from '../images/animations/v1.mp4';
import ca from '../images/animations/c1.mp4';
import sa from '../images/animations/s1.mp4';

function Animation() {
  const images = [
    [{ id: "1", img: aa, hid: "", ihid: "none", vhid: "" }],
    [{ id: "1", img: ra, hid: "", ihid: "none", vhid: "" }],
    [{ id: "1", img: ga, hid: "", ihid: "none", vhid: "" }],
    [
        { id: "1", img: na, hid: "", ihid: "none", vhid: "" },
        { id: "2", img: nb, hid: "", ihid: "none", vhid: "" },
],
    [{ id: "1", img: sa, hid: "", ihid: "none", vhid: "" }],
    [
      { id: "1", img: va, hid: "", ihid: "none", vhid: "" },
      
    ],
    [
        { id: "1", img: ca, hid: "", ihid: "none", vhid: "" },
        
      ],
      [
        { id: "1", img: ma, hid: "", ihid: "none", vhid: "" },
        
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
        <span className="pink"> ANIMATIONS</span>
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

export default Animation;
