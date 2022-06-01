import React from 'react'
import './screen_5.css'
import Inversion from './../../Inversion_photo.svg'

function Screen_5() {
  return (
    <div className='s5_size'>
        <section className='s5_titles'>
            <h2 className='s5_h2'>Que la plata trabaje por vos</h2>
            <h1 className='s5_h1'>Invertí tus ahorros</h1>
        </section>
        <section className='s5_content'>
            <section className='s5_c1'>
                <div className='s5_img-container'>
                <img className='s5_img' src={Inversion}/> 
                </div>
            </section>
            <section className='s5_c2'>
                <article className='s5_container-text'>
                    <p className='s5_text'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in which don't look slightly believable.AThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in which don't look slightly believable, but the majority have suffered alteration in which don't look slightly believable.
                    </p>
                </article>
                <article className='s5_container-text'>
                    <p className='s5_text'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in which don't look slightly believable.AThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in which don't look slightly believable, but the majority have suffered alteration in which don't look slightly believable.
                    </p>
                </article>
            </section> 
        </section>
       
    </div>
  )
}

export default Screen_5