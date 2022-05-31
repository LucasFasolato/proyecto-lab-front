import React from 'react'
import './cartel_garantia.css'
import LogoGarantia from './../../components/LogoGarantia.svg'

function Cartel_garantia() {
  return (
    <div className='cartel_garantia-size'>
        <section className='cg_left'>
            <img className='cg_img' src={LogoGarantia} alt="Imagen garantía exitosa"/>
        </section>
        <section className='cg_right'>
            <article className='cg_title'>
                <h1 className='cg_h1'>Satisfaccion garantizada</h1>
            </article>
            <article className='cg_description'>
                <p className='cg_p'>Suffered alteration in which don't look believable.</p>
            </article>
        </section>
    </div>
  )
}

export default Cartel_garantia