import React from "react";
import "../scss/Social.scss";
import Sanimation from "./Sanimation";
import freelancer from "../images/Freelancer.svg";
import instagram from "../images/Instagram.svg";
import linkedin from "../images/Linkedin.svg";
import upwork from "../images/Upwork.svg";
import github from "../images/Github.svg";
import fiverr from "../images/Fiverr.svg";
import behance from "../images/Behance.svg";

function Social() {
  const imgList = [
    {
      id: "1",
      img: freelancer,
      txt: "Freelancer",
      color: "blue",
      href: "https://www.freelancer.in/u/anukarrajput"
    },
    {
      id: "2",
      img: instagram,
      txt: "Instagram",
      color: "pink",
      href: "https://www.instagram.com/anukarrajput/"
    },
    {
      id: "3",
      img: linkedin,
      txt: "Linkedin",
      color: "blue",
      href: "https://www.linkedin.com/in/anukar-rajput/"
    },
    {
      id: "4",
      img: upwork,
      txt: "Upwork",
      color: "pink",
      href: "https://www.upwork.com/freelancers/~01b59ca64a91d4dd2f"
    },
    {
      id: "5",
      img: github,
      txt: "Github",
      color: "blue",
      href: "https://github.com/just-doing-anukaran"
    },
    {
      id: "6",
      img: fiverr,
      txt: "Fiverr",
      color: "pink",
      href: "https://www.fiverr.com/anukar__rajput"
    },
    {
      id: "7",
      img: behance,
      txt: "Behance",
      color: "blue",
      href: "https://www.behance.net/anukarrajput"
    },
  ];

  return (
    <div className="Social__container">
      <div className="Social__heading">
        <span className="pink">Connect</span> to{" "}
        <span className="blue">myProfiles</span>
      </div>
      <div className="Sanimation__container">
        <Sanimation
          img={imgList[0].img}
          text={imgList[0].txt}
          color={imgList[0].color}
          href={imgList[0].href}
        />
        <Sanimation
          img={imgList[1].img}
          text={imgList[1].txt}
          color={imgList[1].color}
          href={imgList[1].href}
        />
        <Sanimation
          img={imgList[2].img}
          text={imgList[2].txt}
          color={imgList[2].color}
          href={imgList[2].href}
        />
        <Sanimation
          img={imgList[3].img}
          text={imgList[3].txt}
          color={imgList[3].color}
          href={imgList[3].href}
        />
        <Sanimation
          img={imgList[4].img}
          text={imgList[4].txt}
          color={imgList[4].color}
          href={imgList[4].href}
        />
        <Sanimation
          img={imgList[5].img}
          text={imgList[5].txt}
          color={imgList[5].color}
          href={imgList[5].href}
        />
        <Sanimation
          img={imgList[6].img}
          text={imgList[6].txt}
          color={imgList[6].color}
          href={imgList[6].href}
        />
      </div>
    </div>
  );
}

export default Social;
