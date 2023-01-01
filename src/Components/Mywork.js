import React from "react";
import "../scss/Mywork.scss";
import MWcards from "./MWcards";
import poster from "../images/poster.png";
import vector from "../images/vector.png";
import logo from "../images/logo.png";
import uiux from "../images/uiux.png";
import threedart from "../images/threedart.png";
import interior from "../images/interior.png";
import apparel from "../images/apparel.png";
import album from "../images/album.png";
import animations from "../images/animations.png";
import video from "../images/video.png";
import wedding from "../images/wedding.png";
import book from "../images/book.png";
import product from "../images/product.png";

function Mywork() {
  const cardData = [
    {
      id: "1",
      img: poster,
      text: "POSTER DESIGNS",
      to: "/posterdesigns",
    },
    {
      id: "2",
      img: vector,
      text: "VECTOR ILLUSTRATIONS",
      to: "/vectorillustrations",
    },
    {
      id: "3",
      img: logo,
      text: "LOGO DESIGNS",
      to: "/logodesigns",
    },
    {
      id: "4",
      img: uiux,
      text: "RESPONSIVE UI/UX DESIGNS",
      to: "/responsiveuiuxdesigns",
    },
    {
      id: "5",
      img: threedart,
      text: "3D ART",
      to: "/3dart",
    },
    {
      id: "6",
      img: wedding,
      text: "WEDDING/INVITATION CARDS",
      to: "/invitationcards",
    },
    {
      id: "7",
      img: book,
      text: "BOOK/MAGAZINE DESIGNS",
      to: "/bookdesigns",
    },
    {
      id: "8",
      img: product,
      text: "PRODUCT DESIGNS",
      to: "/productdesigns",
    },
    {
      id: "9",
      img: apparel,
      text: "APPAREL DESIGNS",
      to: "/appareldesigns",
    },
    {
      id: "10",
      img: interior,
      text: "3D INTERIOR DESIGNS",
      to: "/interiordesigns",
    },
    {
      id: "11",
      img: video,
      text: "VIDEO EDITING",
      to: "/videoediting",
    },
    {
      id: "12",
      img: animations,
      text: "ANIMATIONS",
      to: "/animations",
    },
    {
      id: "13",
      img: album,
      text: "ALBUM COVER DESINGS",
      to: "/albumcoverdesigns",
    },
  ];
  return (
    <div className="myWork__container" id="myWork">
      <p className="myWork__heading b75">
        my<span className="pink">Work</span>
      </p>
      <div className="cards__container">
        <MWcards
          img={cardData[0].img}
          text={cardData[0].text}
          to={cardData[0].to}
        />
        <MWcards
          img={cardData[1].img}
          text={cardData[1].text}
          to={cardData[1].to}
        />
        <MWcards
          img={cardData[2].img}
          text={cardData[2].text}
          to={cardData[2].to}
        />
        <MWcards
          img={cardData[3].img}
          text={cardData[3].text}
          to={cardData[3].to}
        />
        <MWcards
          img={cardData[4].img}
          text={cardData[4].text}
          to={cardData[4].to}
        />
        <MWcards
          img={cardData[5].img}
          text={cardData[5].text}
          to={cardData[5].to}
        />
        <MWcards
          img={cardData[6].img}
          text={cardData[6].text}
          to={cardData[6].to}
        />
        <MWcards
          img={cardData[7].img}
          text={cardData[7].text}
          to={cardData[7].to}
        />
        <MWcards
          img={cardData[8].img}
          text={cardData[8].text}
          to={cardData[8].to}
        />
        <MWcards
          img={cardData[9].img}
          text={cardData[9].text}
          to={cardData[9].to}
        />
        <MWcards
          img={cardData[10].img}
          text={cardData[10].text}
          to={cardData[10].to}
        />
        <MWcards
          img={cardData[11].img}
          text={cardData[11].text}
          to={cardData[11].to}
        />
        <MWcards
          img={cardData[12].img}
          text={cardData[12].text}
          to={cardData[12].to}
        />
      </div>
    </div>
  );
}

export default Mywork;
