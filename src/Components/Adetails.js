import React from "react";
import "../scss/Adetails.scss";

function Adetails() {
  return (
    <div className="Adetails__container">
      <div className="Adetails__container__box">
        <p className="Adetails--heading">ABOUT</p>
        <p className="Adetails--text">
          Hola! I am an earnest freelance graphic designer enthusiastic about
          visual graphics. The thirst for novelty drives me to create something
          new and exciting each day. So, If you are looking for vibrant, fast
          and professional designs, you have landed at the RIGHT PLACE!
        </p>
      </div>
      <div className="Adetails__container__box">
        <p className="skills--heading blue">SKILLS</p>
        <div className="skills">
          <p className="skills__txt">Adobe Photoshop</p>
          <p className="skills__txt">Adobe Illustrator</p>
          <p className="skills__txt">After effects</p>
          <p className="skills__txt">Adobe XD</p>
          <p className="skills__txt">Adobe InDesign</p>
          <p className="skills__txt">Premiere Pro</p>
          <p className="skills__txt">Adobe Dimension</p>
          <p className="skills__txt">Blender</p>
          <p className="skills__txt">Figma</p>
          <p className="skills__txt">React</p>
          <p className="skills__txt">HTML</p>
          <p className="skills__txt">CSS</p>
          <p className="skills__txt">JavaScript</p>
          
        </div>
      </div>
    </div>
  );
}

export default Adetails;
