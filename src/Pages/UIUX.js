import React from "react";
import "../scss/Poster.scss";
import Header from "../Components/Header";
import Myshop from "../Components/Myshop";
import Footer from "../Components/Footer";
import Dcards from "../Components/Dcards";
import fa from '../images/uiux/f8.png';
import fb from '../images/uiux/f7.png';
import fc from '../images/uiux/f6.mp4';
import fd from '../images/uiux/f5.mp4';
import fe from '../images/uiux/f4.png';
import ff from '../images/uiux/f3.png';
import fg from '../images/uiux/f2.png';
import fh from '../images/uiux/f1.png';
import sba from '../images/uiux/sb1.png';
import sbb from '../images/uiux/sb2.png';
import sbc from '../images/uiux/sb3.mp4';
import sbd from '../images/uiux/sb4.mp4';
import sbe from '../images/uiux/sb5.mp4';
import ha from '../images/uiux/h1.png';
import hb from '../images/uiux/h2.png';
import hc from '../images/uiux/h3.mp4';
import hd from '../images/uiux/h4.png';

import vc from '../images/uiux/v1.png';
import vb from '../images/uiux/v2.mp4';
import va from '../images/uiux/v3.png';
import pa from '../images/uiux/p1.png';
import pb from '../images/uiux/p2.png';
import pc from '../images/uiux/p3.mp4';
import sa from '../images/uiux/s1.png';
import sb from '../images/uiux/s2.png';
import sc from '../images/uiux/s3.mp4';
import ta from '../images/uiux/t1.png';
import tb from '../images/uiux/t2.png';
import tc from '../images/uiux/t3.mp4';
import ga from '../images/uiux/g1.png';
import gb from '../images/uiux/g2.mp4';
import gc from '../images/uiux/g3.mp4';
import gd from '../images/uiux/g4.png';


function UIUX() {
  const images = [
    [
      { id: "1", img: fa ,hid:'',ihid:'',vhid:'none'},
      { id: "2", img: fb ,hid:'',ihid:'',vhid:'none'},
      { id: "3", img: fd ,hid:'',ihid:'none',vhid:''},
      { id: "4", img: fc ,hid:'',ihid:'none',vhid:''},
      { id: "5", img: fe ,hid:'',ihid:'',vhid:'none'},
      { id: "6", img: ff ,hid:'',ihid:'',vhid:'none'},
      { id: "7", img: fg ,hid:'',ihid:'',vhid:'none'},
      { id: "8", img: fh ,hid:'',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img:sba ,hid:'',ihid:'',vhid:'none'},
      { id: "2", img:sbb ,hid:'',ihid:'',vhid:'none'},
      { id: "3", img:sbc,hid:'',ihid:'none',vhid:''},
      { id: "4", img:sbd ,hid:'',ihid:'none',vhid:''},
      { id: "5", img:sbe ,hid:'',ihid:'none',vhid:''},
    ],
    [
      { id: "1", img:va,hid:'',ihid:'',vhid:'none'},
      { id: "2", img:vb ,hid:'',ihid:'none',vhid:''},
      { id: "3", img:vc ,hid:'',ihid:'',vhid:'none'},
    
    ],
    [
      { id: "1", img:ha ,hid:'',ihid:'',vhid:'none'},
      { id: "2", img:hb ,hid:'',ihid:'',vhid:'none'},
      { id: "3", img:hc,hid:'',ihid:'none',vhid:''},
      { id: "4", img:hd ,hid:'',ihid:'',vhid:'none'},
      
    ],
    [
      { id: "1", img:pa,hid:'',ihid:'',vhid:'none'},
      { id: "2", img:pb ,hid:'',ihid:'',vhid:'none'},
      { id: "3", img:pc ,hid:'',ihid:'none',vhid:''},
    
    ],
    [
      { id: "1", img:sa,hid:'',ihid:'',vhid:'none'},
      { id: "2", img:sb ,hid:'',ihid:'',vhid:'none'},
      { id: "3", img:sc ,hid:'',ihid:'none',vhid:''},
    
    ],
    [
      { id: "1", img:ta,hid:'',ihid:'',vhid:'none'},
      { id: "2", img:tb ,hid:'',ihid:'',vhid:'none'},
      { id: "3", img:tc ,hid:'',ihid:'none',vhid:''},
    
    ],
    [
      { id: "4", img:gd ,hid:'',ihid:'',vhid:'none'},
      { id: "1", img:ga,hid:'',ihid:'',vhid:'none'},
      { id: "2", img:gb ,hid:'',ihid:'none',vhid:''},
      { id: "3", img:gc ,hid:'',ihid:'none',vhid:''},
    
    ],
    [
      { id: "1", img: '' ,hid:'hidden',ihid:'',vhid:'none'},
      
    ],
    [
      { id: "1", img: '' ,hid:'hidden',ihid:'',vhid:'none'},
      
    ],
    [
      { id: "1", img: '' ,hid:'hidden',ihid:'',vhid:'none'},
      
    ],
    [
      { id: "1", img: '' ,hid:'hidden',ihid:'',vhid:'none'},
      
    ],
  ];
  return (
    <div>
      <Header />
      <div className="poster-txt b75">
        RESPONSIVE <span className="pink"> UI/UX DESIGNS</span>
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

export default UIUX;
