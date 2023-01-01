import React from "react";
import "../scss/Poster.scss";
import Header from "../Components/Header";
import Myshop from "../Components/Myshop";
import Footer from "../Components/Footer";
import Dcards from "../Components/Dcards";
import ma from "../images/poster/m1.png";
import mb from "../images/poster/m2.png";
import mc from "../images/poster/m3.png";
import ba from "../images/poster/b1.png";
import bb from "../images/poster/b2.png";
import bc from "../images/poster/b3.png";
import oa from "../images/poster/o1.png";
import ob from "../images/poster/o2.png";
import oc from "../images/poster/o3.png";
import od from "../images/poster/o4.png";
import fma from "../images/poster/fm1.png";
import fmb from "../images/poster/fm2.png";
import fmc from "../images/poster/fm3.png";
import fmd from "../images/poster/fm4.png";
import ga from "../images/poster/g1.png";
import gb from "../images/poster/g2.png";
import gc from "../images/poster/g3.png";
import gd from "../images/poster/g4.png";
import sa from "../images/poster/s1.png";
import sb from "../images/poster/s2.png";
import ona from "../images/poster/on1.png";
import onb from "../images/poster/on2.png";
import la from "../images/poster/l1.png";
import lb from "../images/poster/l2.png";
import lc from "../images/poster/l3.png";
import e from "../images/poster/e.png";
import fr1 from "../images/poster/fr1.png";
import d1 from "../images/poster/d1.png";
import fo from "../images/poster/fo.png";
import fob from "../images/poster/fo2.png";

function Poster() {
  const images = [
    [
      { id: "1", img: ma ,hid:'',ihid:'',vhid:'none'},
      { id: "2", img: mb ,hid:'',ihid:'',vhid:'none'},
      { id: "3", img: mc ,hid:'',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img: ba , hid:'',ihid:'',vhid:'none'},
      { id: "2", img: bb , hid:'',ihid:'',vhid:'none'},
      { id: "3", img: bc , hid:'',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img: ob , hid:'',ihid:'',vhid:'none'},
      { id: "2", img: oa , hid:'',ihid:'',vhid:'none'},
      { id: "3", img: oc , hid:'',ihid:'',vhid:'none'},
      { id: "4", img: od , hid:'',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img: sa , hid:'',ihid:'',vhid:'none'},
      { id: "2", img: sb , hid:'',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img: ona , hid:'',ihid:'',vhid:'none'},
      { id: "2", img: onb , hid:'',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img: la , hid:'',ihid:'',vhid:'none'},
      { id: "2", img: lb , hid:'',ihid:'',vhid:'none'},
      { id: "3", img: lc , hid:'',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img: e , hid:'',ihid:'',vhid:'none'}
    ],
    [
      { id: "1", img: fma, hid:'',ihid:'',vhid:'none'},
      { id: "2", img: fmb, hid:'',ihid:'',vhid:'none'},
      { id: "3", img: fmc , hid:'',ihid:'',vhid:'none'},
      { id: "4", img: fmd , hid:'',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img: fr1 , hid:'',ihid:'',vhid:'none'}
    ],
    [
      { id: "1", img: d1 , hid:'',ihid:'',vhid:'none'}
    ],
    [
      { id: "1", img: fo , hid:'',ihid:'',vhid:'none'},
      { id: "1", img: fob , hid:'',ihid:'',vhid:'none'}
    ],
    [
      { id: "1", img: ga, hid:'',ihid:'',vhid:'none'},
      { id: "2", img: gb , hid:'',ihid:'',vhid:'none'},
      { id: "3", img: gc , hid:'',ihid:'',vhid:'none'},
      { id: "4", img: gd , hid:'',ihid:'',vhid:'none'},
    ],
  ];
  return (
    <div>
      <Header />
      <div className="poster-txt b75">
        POSTER <span className="pink">DESIGNS</span>
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

export default Poster;
