import React from "react";
import larrow from "../images/larrow.svg";
import rarrow from "../images/rarrow.svg";
import { useState } from "react";
import "../scss/Dcard.scss";

function Dcard({ props }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === props.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const source = {
    background: `url(${props[currentIndex].img}) center/contain no-repeat`,
    width: "32rem",
    height: "32rem",
    margin: "2.8rem",
    backgroundSize: "contain",
    display: `${props[currentIndex].ihid}`,
  };
  const vid = {
    width: "32rem",
    height: "32rem",
    margin: "2.8rem",
    display: `${props[currentIndex].vhid}`,
  };
  const stopMovie = (e) => {
    e.target.pause();
    // console.log('off');
  };

  const playMovie = (e) => {
    e.target.play();
    // console.log('on');
  };
  return (
    <div className={`Dcard__container ${props[currentIndex].hid}`}>
      <div style={source}></div>
      <video
        style={vid}
        
        loop
        src={props[currentIndex].img}
        onMouseOver={playMovie}
        onMouseOut={stopMovie}
      />
      <div className="Dcard__container__arrows">
        <img src={larrow} alt={larrow} onClick={goToPrevious} />
        <img src={rarrow} alt={rarrow} onClick={goToNext} />
      </div>
    </div>
  );
}

export default Dcard;
