import React from 'react'
import './screen_4.css'
import QuienesSomos from './../../Quienes_somos.jpg'
import Cartel_garantia from '../../Cartel_Garantia/cartel_garantia'

function Screen_4() {
  return (
    <div className='s4_size'>
        <section className='s4_c'>
          <section className='s4_titles'>
              <h2 className='s4_h2'>Sobre nosotros</h2>
              <h1 className='s4_h1'>¿QUIENES SOMOS?</h1>
          </section>
          <section className='s4_content'>
            <article className='s4_container-text'>
              <p className='s4_text'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in which don't look slightly believable.AThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in which don't look slightly believable, but the majority have suffered alteration in which don't look slightly believable.
              </p>
            </article>
            <article className='s4_container-button'>
              <button className='s4_button'>
                LEER MÁS
              </button>
            </article>
            <section className='s4_container-garantia'>
              <article className='s4_garantia'>
                <Cartel_garantia/>
              </article>
              <article className='s4_garantia'>
                <Cartel_garantia/>
              </article>
              <article className='s4_garantia'>
                <Cartel_garantia/>
              </article>
              <article className='s4_garantia'>
                <Cartel_garantia/>
              </article>
            </section>
          </section>
        </section>
        <section className='s4_c'>
            <div className='s4_img-container'>
               <img className='s4_img' src={QuienesSomos}/> 
            </div>
        </section>
    </div>
  )
}

export default Screen_4