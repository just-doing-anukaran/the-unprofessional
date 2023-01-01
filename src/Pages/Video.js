import React from "react";
import "../scss/Poster.scss";
import Header from "../Components/Header";
import Myshop from "../Components/Myshop";
import Footer from "../Components/Footer";
import Dcards from "../Components/Dcards";
import ta from "../images/video/t1.mp4";
import tra from "../images/video/tr1.mp4";
import ba from "../images/video/b1.mp4";
import ua from "../images/video/u1.mp4";
import pa from "../images/video/p1.mp4";

function Video() {
  const images = [
    [{ id: "1", img: ba, hid: "", ihid: "none", vhid: "" }],
    [{ id: "1", img: tra, hid: "", ihid: "none", vhid: "" }],
    [{ id: "1", img: ta, hid: "", ihid: "none", vhid: "" }],
    [{ id: "1", img: ua, hid: "", ihid: "none", vhid: "" }],
    [{ id: "1", img: pa, hid: "", ihid: "none", vhid: "" }],
    [
      { id: "1", img: "", hid: "hidden", ihid: "", vhid: "none" },
      { id: "2", img: "", hid: "hidden", ihid: "", vhid: "none" },
      { id: "3", img: "", hid: "hidden", ihid: "none", vhid: "" },
      { id: "4", img: "", hid: "hidden", ihid: "none", vhid: "" },
      { id: "5", img: "", hid: "hidden", ihid: "", vhid: "none" },
      { id: "6", img: "", hid: "hidden", ihid: "", vhid: "none" },
    ],
    [
      { id: "1", img: "", hid: "hidden", ihid: "", vhid: "none" },
      { id: "2", img: "", hid: "hidden", ihid: "none", vhid: "" },
      { id: "3", img: "", hid: "hidden", ihid: "none", vhid: "" },
      { id: "4", img: "", hid: "hidden", ihid: "", vhid: "none" },
    ],
    [
      { id: "1", img: "", hid: "hidden", ihid: "", vhid: "none" },
      { id: "2", img: "", hid: "hidden", ihid: "none", vhid: "" },
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
        VIDEO<span className="pink"> EDITING</span>
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

export default Video;
