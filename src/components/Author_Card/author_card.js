import React from 'react'
import './author_card.css'
import imgLucas from './../../imgs/fotoLucas.jpeg'
import imgMariano from './../../imgs/fotoMariano.jpeg'

function Author_card({res}) {
  var src = (res.name == 'Lucas') ? imgLucas : imgMariano;
  var href = (res.name == 'Lucas') ? 'https://linktr.ee/lucasfasolato' : '';
  return (
    <div className='author_card-size'>
        <a href={href} target='_blank'>
        <section className='author_card-img'>
            <img className='author_img' src={src} alt="IMAGEN AUTOR"/>
        </section>
        </a>
        <article className='author_card-name'>
            <p className='author_name'>{res.name}, {res.lastname}</p>
        </article>
    </div>
  )
}

export default Author_card