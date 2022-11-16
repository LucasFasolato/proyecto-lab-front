import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer_size'>
        <section className='display_footer-content'>
            <article className='footer_first-box'>
                <h1 className='footer_title'>Austral |   Banco Austral</h1>
                <p className='footer_text'>Banco Austral surge como una propuesta innovadora para el manejo cuentas bancarias y portfolios de inversión. Teniendo al cliente como prioridad buscamos generar un servicio práctico, completo y funcional que le permita a los usuarios tomar decisiones, poder informarse y todo el tiempo tener control de su dinero. </p>
            </article>
            <article className='footer_second-box'>
                <ul>
                    <h2>LINKS ÚTILES</h2>
                    <li className='footer_li'>Home</li>
                    <li className='footer_li'>Portfolio</li>
                    <li className='footer_li'>Blog</li>
                    <li className='footer_li'>About</li>
                    <li className='footer_li'>Contact</li>
                </ul>
            </article>
            <article className='footer_third-box'>
                <ul>
                    <h2>PRODUCTOS</h2>
                    <li className='footer_li'>Billetera digital</li>
                    <li className='footer_li'>Portfolio de inversiones</li>
                    <li className='footer_li'>Asesoramiento en criptos</li>
                    <li className='footer_li'>Transferencias seguras</li>
                </ul>
            </article>
            <article className='footer_fourth-box'>
                <ul>
                    <h2>CONTACTANOS</h2>
                    <li className='footer_li'>Direccion: <p className='footer_contact-info'>Paraguay 1950, S200 Rosario, Santa Fe</p></li>
                    <li className='footer_li'>Teléfono: <p className='footer_contact-info'>+54 341 261 9090</p></li>
                    <li className='footer_li'>Email: <p className='footer_contact-info'>bancoaustral@gmail.com</p></li>
                </ul>
            </article>        
        </section>
        <section className='footer_terms-text'>
            <p className='footer_terms-left'>© 2022 LF DESIGN All rights reserved.</p>
            <p className='footer_terms-right'>Privacy Environmental Polic.</p>
        </section>
    </div>
  )
}

export default Footer