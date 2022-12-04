import React from 'react'
import './screen_5.css'
import Inversion from './../../../imgs/imgInversion.jpg'

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
                        Actualmente las inversiones en criptomonedas son una inversión extraordinaria. Con conocimiento y experiencia en el tema y en 
                        el mercado, se pueden sacar grandes beneficios de ls volatilidad diaria que presentan los precios de las criptomonedas a día de hoy. En un 
                        mercado de constante baja (últimos 12 meses), puede ser muy rentable invertir. Si hay una correcta detección de los picos, los
                        cuales presentan gran diferencia diaria, se pueden ganar grandes cantidades de dinero. Por esa razón contamos con un equipo de 
                        expertos en inversiones y criptomonedas para ofrecerle un servicio con rendimiento diario asegurado.
                    </p>
                </article>
            </section> 
        </section>
       
    </div>
  )
}

export default Screen_5