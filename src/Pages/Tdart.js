import React from "react";
import "../scss/Poster.scss";
import Header from "../Components/Header";
import Myshop from "../Components/Myshop";
import Footer from "../Components/Footer";
import Dcards from "../Components/Dcards";
import fma from "../images/Tdart/fm1.png";
import fmb from "../images/Tdart/fm2.png";
import fmc from "../images/Tdart/fm3.png";
import ga from "../images/Tdart/g1.png";
import gb from "../images/Tdart/g2.png";
import gc from "../images/Tdart/g3.mp4";
import gra from "../images/Tdart/gr1.png";
import grb from "../images/Tdart/gr2.png";
import grc from "../images/Tdart/gr3.png";
import gja from "../images/Tdart/gj1.png";
import gjb from "../images/Tdart/gj2.png";
import gjc from "../images/Tdart/gj3.png";
import ma from "../images/Tdart/m1.png";
import mb from "../images/Tdart/m2.png";
import mc from "../images/Tdart/m3.png";
import na from "../images/Tdart/n1.png";
import nb from "../images/Tdart/n2.png";
import nc from "../images/Tdart/n3.mp4";
import nd from "../images/Tdart/n4.mp4";
import ne from "../images/Tdart/n5.png";
import nf from "../images/Tdart/n6.png";
import sba from "../images/Tdart/sb1.png";
import sbb from "../images/Tdart/sb2.mp4";
import sbc from "../images/Tdart/sb3.mp4";
import sbd from "../images/Tdart/sb4.png";
import da from "../images/Tdart/d1.png";
import db from "../images/Tdart/d2.mp4";

function Tdart() {
  const images = [
    [
      { id: "1", img: ga, hid: "", ihid: "", vhid: "none" },
      { id: "2", img: gb, hid: "", ihid: "", vhid: "none" },
      { id: "3", img: gc, hid: "", ihid: "none", vhid: "" },
    ],
    [
      { id: "1", img: fma, hid: "", ihid: "", vhid: "none" },
      { id: "2", img: fmb, hid: "", ihid: "", vhid: "none" },
      { id: "3", img: fmc, hid: "", ihid: "", vhid: "none" },
    ],
    [
      { id: "1", img: gra, hid: "", ihid: "", vhid: "none" },
      { id: "2", img: grb, hid: "", ihid: "", vhid: "none" },
      { id: "3", img: grc, hid: "", ihid: "", vhid: "none" },
    ],
    [
      { id: "1", img: gja, hid: "", ihid: "", vhid: "none" },
      { id: "2", img: gjb, hid: "", ihid: "", vhid: "none" },
      { id: "3", img: gjc, hid: "", ihid: "", vhid: "none" },
    ],
    [
      { id: "1", img: ma, hid: "", ihid: "", vhid: "none" },
      { id: "2", img: mb, hid: "", ihid: "", vhid: "none" },
      { id: "3", img: mc, hid: "", ihid: "", vhid: "none" },
    ],
    [
      { id: "1", img: na, hid: "", ihid: "", vhid: "none" },
      { id: "2", img: nb, hid: "", ihid: "", vhid: "none" },
      { id: "3", img: nc, hid: "", ihid: "none", vhid: "" },
      { id: "4", img: nd, hid: "", ihid: "none", vhid: "" },
      { id: "5", img: ne, hid: "", ihid: "", vhid: "none" },
      { id: "6", img: nf, hid: "", ihid: "", vhid: "none" },
    ],
    [
      { id: "1", img: sba, hid: "", ihid: "", vhid: "none" },
      { id: "2", img: sbc, hid: "", ihid: "none", vhid: "" },
      { id: "3", img: sbb, hid: "", ihid: "none", vhid: "" },
      { id: "4", img: sbd, hid: "", ihid: "", vhid: "none" },
    ],
    [
      { id: "1", img: da, hid: "", ihid: "", vhid: "none" },
      { id: "2", img: db, hid: "", ihid: "none", vhid: "" },
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
        <span className="pink"> 3D</span> ART
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

export default Tdart;
