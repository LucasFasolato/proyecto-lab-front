import React from 'react'
import './screen_2.css'
import Phone from './../../Phone_photo.svg'
import CredictCard from './../../CredictCard_photo.svg'
import Circle_decorationL from './../../Circle_decoration.svg'
import LogoEthereum from './../../LogoEthereum.svg'
import LogoCohete from './../../LogoCohete.svg'
import LogoInfo from './../../LogoInfo.svg'

function Screen_2() {
  return (
    <div className='s2_size'>
        <div className='s2_background-circle'/>
            <section className='s2_content'>
                <section className='s2_title'>
                    <h1 className='s2_h1'>Genera nuevos ingresos a través de las criptomonedas</h1>
                </section>
                <section className='s2_c'>
                    <section className='s2_columns'>
                        <div className='s2_firstcolum'>
                        <div className='s2_img-container'>
                            <img className='s2_credict-img' src={CredictCard}/>
                            </div>
                            <article className='s2_text-container1'>
                                <h2 className='s2_h2'>Desbloqueá tu economía y despreocupate de la inflación</h2>
                            </article>
                            <article className='s2_text-container2'>
                                <h2 className='s2_h2'>Asesoramiento sin cargo <br/> para usuarios del Banco Austral</h2>
                            </article>  
                        </div>
                    </section>
                    <section className='s2_columns'>
                        <div className='s2_img-container'>
                            <img className='s2_phone-img' src={Phone}/> 
                        </div>
                    </section>
                    <section className='s2_columns'>
                        <div className='s2_eth-size'>
                            <section className='s2_eth-left'>
                                <article className='s2_eth-title'>
                                    <h1 className='s2_eth-h1'>OFERTA DEL DÍA</h1>
                                </article>
                                <section className='s2_eth-content'>
                                    <article className='s2_eth-description'>
                                        <h2 className='s2_eth-h2'>Ethereum</h2>
                                    </article>
                                    <article className='s2_eth-description'>
                                        <p className='s2_eth-p'>+4,67</p>
                                    </article>  
                                </section>
                                
                            </section>
                            <section className='s2_eth-right'>
                                <img className='s2_eth-img' src={LogoEthereum} alt="Imagen logo ethereum"/>
                            </section>
                        </div>
                        
                        <div className='s2_inv-size'>
                            <section className='s2_inv-left'>
                                <article className='s2_inv-title'>
                                    <h1 className='s2_inv-h1'>INVERTI AHORA</h1>
                                </article>
                                <article className='s2_inv-description'>
                                    <h2 className='s2_inv-h2'>Que el dinero trabaje por vos <br/> <br/>Consulta los rendimientos de la última semana</h2>
                                </article>
                            </section>
                            <section className='s2_inv-right'>
                                <img className='s2_inv-img' src={LogoCohete} alt="Imagen logo cohete"/>
                            </section>
                        </div>

                        <div className='s2_info-size'>
                            <section className='s2_info-left'>
                                <article className='s2_info-title'>
                                    <h1 className='s2_info-h1'>+ INFO</h1>
                                </article>
                                <article className='s2_info-description'>
                                    <h2 className='s2_info-h2'>Podes obtener más informacion haciendo <br/><br/> CLICK AQUÍ </h2>
                                </article>
                            </section>
                            <section className='s2_info-right'>
                                <img className='s2_info-img' src={LogoInfo} alt="Imagen logo info"/>
                            </section>
                        </div>
                        
                    </section>  
                </section>
            </section>
        <div className='s2_circle'>
            <img className='s2_img' src={Circle_decorationL} alt="Decoration circle white"/>
        </div>
    </div>
  )
}

export default Screen_2