import React from 'react';
import '../scss/Dcards.scss';
import Dcard from './Dcard';



function Dcards(images) {
   
  return (
    <div className='Dcards__container'>
        <Dcard props={images.img}/>
        <Dcard props={images.lmg}/>
        <Dcard props={images.a}/>
        <Dcard props={images.b}/>
        <Dcard props={images.c}/>
        <Dcard props={images.d}/>
        <Dcard props={images.e}/>
        <Dcard props={images.f}/>
        <Dcard props={images.g}/>
        <Dcard props={images.h}/>
        <Dcard props={images.i}  />
        <Dcard props={images.j}  />
        
        
        
    </div>
  )
}

export default Dcards