import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import uc from '../images/uc.svg';
import '../scss/Underconst.scss';

function Underconst() {
  return (
    <div>
        <Header/>
        <div className='UC__container'>
            <img src={uc} alt={uc} className="UC__container__img"/>
            <p>SHOP IS <span className='blue'>UNDER CONSTRUCTION</span></p>
        </div>
        <Footer/>
    </div>
  )
}

export default Underconst