import React from "react";
import "../scss/Poster.scss";
import Header from "../Components/Header";
import Myshop from "../Components/Myshop";
import Footer from "../Components/Footer";
import Dcards from "../Components/Dcards";
import wa from '../images/invitation/w1.png';
import wb from '../images/invitation/w2.png';
import wc from '../images/invitation/w3.png';
import wd from '../images/invitation/w4.png';
import wea from '../images/invitation/we1.png';
import ia from '../images/invitation/i1.png';
import ina from '../images/invitation/in1.png';
import ca from '../images/invitation/c1.png';
import web from '../images/invitation/we2.png';


function Invitation() {
  const images = [
    [
      { id: "1", img:wa, hid: "", ihid: "", vhid: "none" },
      { id: "2", img:wb, hid: "", ihid: "", vhid: "none" },
      { id: "3", img:wc, hid: "", ihid: "", vhid: "none" },
      { id: "4", img:wd, hid: "", ihid: "", vhid: "none" },
    ],
    [
        { id: "1", img:wea, hid: "", ihid: "", vhid: "none" },
        { id: "2", img:web, hid: "", ihid: "", vhid: "none" },
        
        
      ],
      [
        { id: "1", img:ia, hid: "", ihid: "", vhid: "none" },
        
      ],
      [
        { id: "1", img:ina, hid: "", ihid: "", vhid: "none" },
        
      ],
      [
        { id: "1", img:ca, hid: "", ihid: "", vhid: "none" },
        
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
        <span className="pink"> WEDDING/INVITATOIN</span> DESIGNS
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

export default Invitation;
