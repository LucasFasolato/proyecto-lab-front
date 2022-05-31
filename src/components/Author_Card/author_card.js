import React from 'react'
import './author_card.css'

function Author_card() {
  return (
    <div className='author_card-size'>
        <section className='author_card-img'>
            <img className='author_img' src='https://www.molinarifoto.com.ar/wp-content/uploads/2019/09/Fotografia-para-Linkedin-hombre.jpg' alt="IMAGEN AUTOR"/>
        </section>
        <article className='author_card-name'>
            <p className='author_name'>Name, LastName</p>
        </article>
    </div>
  )
}

export default Author_card