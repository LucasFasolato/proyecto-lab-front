import React from 'react'
import './screen_4.css'
import QuienesSomos from './../../../imgs/Quienes_somos.jpg'
import QuienesSomos1 from './../../../imgs/Quienes_somos1.svg'
import QuienesSomos2 from './../../../imgs/Quienes_somos2.svg'
import Circles from './../../../imgs/Circles.svg'
import Cartel_garantia from '../../Cartel_Garantia/cartel_garantia'
import topleft from './../../../imgs/lefttop.png'
import { motion } from "framer-motion"

function Screen_4() {
  let box1 = {
    title: "Seguimiento personalizado",
    content: "Cada uno de nuestros clientes cuentan con un comercial propio."
  }
  let box2 = {
    title: "Informes diarios",
    content: "Información local y global disponible en todo momento."
  }
  let box3 = {
    title: "Oportunidades de inversión",
    content: "Equipo de Research pendiente oportunidades de inversión."
  }
  let box4 = {
    title: "Seguridad y transparencia",
    content: "Control de todo lo que sucede en todo momento."
  }
  const variantImage1= {
    offscreen: {
        scale: 0,
        opacity: 0
    },
    onscreen: {
        opacity: 1,
        scale: [0.5, 1],
        transition: {
        duration: 0.7,
        delay: 0.3
        }
    }
};
const variantImage2= {
  offscreen: {
      scale: 0,
      opacity: 0
  },
  onscreen: {
      opacity: 1,
      scale: [0.5, 1],
      transition: {
      duration: 0.7,
      delay: 1
      }
  }
};
  return (
    <div className='s4_size' id='s4'>
        <section className='s4_c'>
          <section className='s4_titles'>
              <h2 className='s4_h2'>Sobre nosotros</h2>
              <h1 className='s4_h1'>¿QUIENES SOMOS?</h1>
          </section>
          <section className='s4_content'>
            <section className='s4_content-left'>
              <article className='s4_container-text'>
                <p className='s4_text'>
                  Banco Austral surge como una propuesta innovadora para el manejo cuentas bancarias y portfolios de inversión. Teniendo al cliente como prioridad buscamos generar un servicio práctico, completo y funcional que le permita a los usuarios tomar decisiones, poder informarse y todo el tiempo tener control de su dinero. 
                </p>
              </article>
              {/* <article className='s4_container-button'>
                <button className='s4_button'>
                  LEER MÁS
                </button>
              </article> */}
            </section>
            
            <section className='s4_container-garantia'>
              <article className='s4_garantia'>
                <Cartel_garantia res={box1}/>
              </article>
              <article className='s4_garantia'>
                <Cartel_garantia res={box2}/>
              </article>
              <article className='s4_garantia'>
                <Cartel_garantia res={box3}/>
              </article>
              <article className='s4_garantia'>
                <Cartel_garantia res={box4}/>
              </article>
            </section>
          </section>
        </section>
        <section className='s4_c2'>
            <div className='s4_img-container'>
               <motion.img className='s4_img1' src={QuienesSomos1} drag dragConstraints={{top: 0,left: 0,right: 0,bottom: 0,}} dragElastic={0.2} variants={variantImage1} initial="offscreen" animate="onscreen"/> 
               <motion.img className='s4_img2' src={QuienesSomos2} drag dragConstraints={{top: 0,left: 0,right: 0,bottom: 0,}} dragElastic={0.2} variants={variantImage2} initial="offscreen" animate="onscreen"/>
               <motion.img className='s4_img3' src={Circles} drag dragConstraints={{top: 0,left: 0,right: 0,bottom: 0,}} dragElastic={0.2} variants={variantImage1} initial="offscreen" animate="onscreen"/>  
            </div>
        </section>
        
        <img src={topleft} className='topleft'/>
    </div>
  )
}

export default Screen_4