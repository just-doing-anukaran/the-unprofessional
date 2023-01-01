import React from "react";
import "../scss/Vector.scss";
import Header from "../Components/Header";
import Myshop from "../Components/Myshop";
import Footer from "../Components/Footer";
import Dcards from "../Components/Dcards";
import aa from '../images/logo/a1.png';
import ab from '../images/logo/a2.svg';
import ia from '../images/logo/i1.png';

import ic from '../images/logo/i3.png';
import id from '../images/logo/i4.png';
import ie from '../images/logo/i5.png';
import iff from '../images/logo/i6.png';
import ig from '../images/logo/i7.png';


function Logo() {
  const images = [
    [
      { id: "1", img: ia ,hid:'',ihid:'',vhid:'none'},
      
      { id: "3", img: ic ,hid:'',ihid:'',vhid:'none'},
      { id: "4", img: id ,hid:'',ihid:'',vhid:'none'},
      { id: "5", img: ie ,hid:'',ihid:'',vhid:'none'},
      { id: "6", img: iff ,hid:'',ihid:'',vhid:'none'},
      { id: "7", img: ig,hid:'',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img: aa ,hid:'',ihid:'',vhid:'none'},
      { id: "2", img: ab ,hid:'',ihid:'',vhid:'none'},
      
    ],
    [
      { id: "1", img:'' ,hid:'hidden',ihid:'',vhid:'none'},
      { id: "2", img:'' ,hid:'hidden',ihid:'',vhid:'none'},
      { id: "3", img:'' ,hid:'hidden',ihid:'',vhid:'none'},
    
    ],
    [
      { id: "1", img:'' ,hid:'hidden',ihid:'',vhid:'none'},
      { id: "2", img:'' ,hid:'hidden',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img: '' ,hid:'hidden',ihid:'',vhid:'none'},
      { id: "2", img: '' ,hid:'hidden',ihid:'',vhid:'none'},
      { id: "3", img: '' ,hid:'hidden',ihid:'',vhid:'none'},
    
    ],
    [
      { id: "1", img:'' ,hid:'hidden',ihid:'',vhid:'none'},
      { id: "2", img:'' ,hid:'hidden',ihid:'',vhid:'none'},
      { id: "3", img:'' ,hid:'hidden',ihid:'',vhid:'none'},
    
    ],
    [
      { id: "1", img:'' ,hid:'hidden',ihid:'',vhid:'none'},
      { id: "2", img:'' ,hid:'hidden',ihid:'',vhid:'none'},
      { id: "3", img:'' ,hid:'hidden',ihid:'',vhid:'none'},
      { id: "4", img:'' ,hid:'hidden',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img: '' ,hid:'hidden',ihid:'',vhid:'none'},
      { id: "2", img: '' ,hid:'hidden',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img:'' ,hid:'hidden',ihid:'',vhid:'none'},
      
    ],
    [
      { id: "1", img:'' ,hid:'hidden',ihid:'',vhid:'none'},
      
    ],
    [
      { id: "1", img:'' ,hid:'hidden',ihid:'',vhid:'none'},
      
    ],
    [
      { id: "1", img:'' ,hid:'hidden',ihid:'',vhid:'none'},
      
    ],
  ];
  return (
    <div>
      <Header />
      <div className="poster-txt b75">
      <span className="pink">LOGO</span>  DESIGNS
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

export default Logo;
