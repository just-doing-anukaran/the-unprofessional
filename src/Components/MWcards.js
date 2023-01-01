import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/MWcards.scss';
import {useLayoutEffect} from 'react';

function MWcards(props) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <Link className='card__container' to={props.to} useLayoutEffect>
        <img src={props.img} alt={props.img} className='card__img' />
        <div className='card__text'>
            {props.text}
        </div>

    </Link>
  )
}

export default MWcards