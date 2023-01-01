import React from 'react'
import '../scss/Sanimation.scss'

function Sanimation(props) {
  return (
    <div className='S-anim__container'>
        <a href={props.href} target="blank"><img src={props.img} alt={props.img} className='S-anim__img'/></a>
        <p className={`S-anim__txt ${props.color}`}>{props.text}</p>
    </div>
  )
}

export default Sanimation