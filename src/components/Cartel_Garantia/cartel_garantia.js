import React from 'react'
import './cartel_garantia.css'
import LogoGarantia from './../../imgs/LogoGarantia.svg'

function Cartel_garantia({res}) {
  return (
    <div className='cartel_garantia-size'>
        <section className='cg_left'>
            <img className='cg_img' src={LogoGarantia} alt="Imagen garantía exitosa"/>
        </section>
        <section className='cg_right'>
            <article className='cg_title'>
                <h1 className='cg_h1'>{res.title}</h1>
            </article>
            <article className='cg_description'>
                <p className='cg_p'>{res.content}</p>
            </article>
        </section>
    </div>
  )
}

export default Cartel_garantia