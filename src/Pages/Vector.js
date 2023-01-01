import React from "react";
import "../scss/Vector.scss";
import Header from "../Components/Header";
import Myshop from "../Components/Myshop";
import Footer from "../Components/Footer";
import Dcards from "../Components/Dcards";
import ca from "../images/vector/c1.png";
import cb from "../images/vector/c2.png";
import wa from "../images/vector/w1.png";
import wb from "../images/vector/w2.png";
import ws from "../images/vector/ws1.png";
import sna from "../images/vector/sn1.png";
import snb from "../images/vector/sn2.png";
import la from "../images/vector/l1.png";
import lb from "../images/vector/l2.png";
import lc from "../images/vector/l3.png";
import ld from "../images/vector/l4.png";
import sa from "../images/vector/s1.png";
import sb from "../images/vector/s2.png";
import sc from "../images/vector/s3.png";
import sd from "../images/vector/s4.png";
import na from "../images/vector/n1.png";
import nb from "../images/vector/n2.png";
import nc from "../images/vector/n3.png";
import rga from "../images/vector/rg1.png";
import rgb from "../images/vector/rg2.png";
import rgc from "../images/vector/rg3.png";
import ra from "../images/vector/r1.png";
import rb from "../images/vector/r2.png";
import rc from "../images/vector/r3.png";
import ba from "../images/vector/b1.png";
import da from "../images/vector/d1.png";
import rla from '../images/vector/rl1.png'
import rlb from '../images/vector/rl2.png'

function Vector() {
  const images = [
    [
      { id: "1", img: ca ,hid:'',ihid:'',vhid:'none'},
      { id: "2", img: cb ,hid:'',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img: la ,hid:'',ihid:'',vhid:'none'},
      { id: "2", img: lb ,hid:'',ihid:'',vhid:'none'},
      { id: "3", img: lc ,hid:'',ihid:'',vhid:'none'},
      { id: "4", img: ld ,hid:'',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img: na ,hid:'',ihid:'',vhid:'none'},
      { id: "2", img: nb ,hid:'',ihid:'',vhid:'none'},
      { id: "3", img: nc ,hid:'',ihid:'',vhid:'none'},
    
    ],
    [
      { id: "1", img: wa ,hid:'',ihid:'',vhid:'none'},
      { id: "2", img: wb ,hid:'',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img: rga ,hid:'',ihid:'',vhid:'none'},
      { id: "2", img: rgb ,hid:'',ihid:'',vhid:'none'},
      { id: "3", img: rgc ,hid:'',ihid:'',vhid:'none'},
    
    ],
    [
      { id: "1", img: ra ,hid:'',ihid:'',vhid:'none'},
      { id: "2", img: rb ,hid:'',ihid:'',vhid:'none'},
      { id: "3", img: rc ,hid:'',ihid:'',vhid:'none'},
    
    ],
    [
      { id: "1", img: sa ,hid:'', ihid:'',vhid:'none'},
      { id: "2", img: sb ,hid:'',ihid:'',vhid:'none'},
      { id: "3", img: sc ,hid:'',ihid:'',vhid:'none'},
      { id: "4", img: sd ,hid:'',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img: sna ,hid:'',ihid:'',vhid:'none'},
      { id: "2", img: snb ,hid:'',ihid:'',vhid:'none'},
    ],
    [
      { id: "1", img: ws ,hid:'',ihid:'',vhid:'none'},
      
    ],
    [
      { id: "1", img: da ,hid:'',ihid:'',vhid:'none'},
      
    ],
    [
      { id: "1", img: ba ,hid:'',ihid:'',vhid:'none'},
      
    ],
    [
      { id: "1", img: rla ,hid:'',ihid:'',vhid:'none'},
      { id: "2", img: rlb ,hid:'',ihid:'',vhid:'none'},
      
    ],
  ];
  return (
    <div>
      <Header />
      <div className="poster-txt b75">
        VECTOR <span className="pink"> ILLUSTRATIONS</span>
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

export default Vector;
