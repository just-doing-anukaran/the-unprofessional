import React from 'react';
import down from '../images/down.svg';
import hero from '../images/Hero-img.png';
import '../scss/Hero.scss';

function Hero() {
    const Clickhandler = (e)=>{
        e.preventDefault();
        document.querySelector("#myWork").scrollIntoView({
          behavior: "smooth"
        });}
  return (
    <div className='Hero__container'>
        <div className='Hero__txt'>
            <div className='Hero__txt-l1' >
                Hi, I am <span className='blue'>Anukar Rajput.</span>
            </div>
            <div className='Hero__txt-l2'>
                Freelance <span className='pink'>Graphic <br/>Designer</span> and <span className='blue'>Web <br/>Developer.</span>
            </div>
            <a href='#myWork' className='Hero__txt-btn b100' onClick={Clickhandler}>
                See my work 
                <img src={down} alt='down'></img>
            </a>
        </div>
        <img src={hero} alt='Hero-img' className='Hero__img'></img>
        
    </div>
  )
}

export default Hero