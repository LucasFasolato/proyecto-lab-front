import React, {useEffect, useState} from 'react'
import './screen_2.css'
import Phone from './../../../imgs/Phone_photo.svg'
import CredictCard from './../../../imgs/CredictCard_photo.svg'
import LogoEthereum from './../../../imgs/LogoEthereum.svg'
import LogoCohete from './../../../imgs/LogoCohete.svg'
import LogoInfo from './../../../imgs/LogoInfo.svg'
import rightbottom from './../../../imgs/rightbottom.png'
import { motion } from "framer-motion"
import { useAuth0, User } from "@auth0/auth0-react";
import {httpGet} from "../../../utils/httpFunctions";

function Screen_2s() {
    const { logout, loginWithRedirect, isAuthenticated } = useAuth0();
    const [cargandoCotizaciones, setCargandoCotizaciones] = useState(false)
    const [cotizaciones, setCotizaciones] = useState([])

    useEffect(() => {
        setCargandoCotizaciones(true)
        httpGet("auth/instrumentos/lastprice?symbol=TSLA").then(res => {
            setCargandoCotizaciones(false)
            setCotizaciones(res)
            console.log(cotizaciones)
        })
    }, [])


    const variantTitle= {
        offscreen: {
          y: "-200px"
        },
        onscreen: {
          y: "0px",
          transition: {
            type: "spring",
            duration: 2
          }
        }
    };
    const variantRightColum1= {
    offscreen: {
        x: "100vw"
    },
    onscreen: {
        x: 0,
        transition: {
        type: "spring",
        stiffnes: 100, 
        duration: 1.7
        }
    }
    };
    const variantRightColum2= {
    offscreen: {
        x: "100vw"
    },
    onscreen: {
        x: 0,
        transition: {
        type: "spring",
        stiffnes: 100, 
        duration: 2
        }
    }
    };
    const variantRightColum3= {
    offscreen: {
        x: "100vw"
    },
    onscreen: {
        x: 0,
        transition: {
        type: "spring",
        stiffnes: 100, 
        duration: 2.3
        }
    }
    };
    const variantTarget= {
    offscreen: {
        x: "-100vw"
    },
    onscreen: {
        x: 0,
        transition: {
        type: "spring",
        duration: 2
        }
    }
    };
    const variantLeftText= {
        offscreen: {
            x: "-100vw"
        },
        onscreen: {
            x: 0,
            transition: {
            type: "spring",
            duration: 2
            }
        }
        };
    const variantPhone= {
        offscreen: {
          y: "100vh"
        },
        onscreen: {
          y: 0,
          transition: {
            type: "spring",
            duration: 2
          }
        }
      };
    const variantPath = {
    hidden: { 
        opacity: 0,
        pathLength: 0
    },
    visible: { 
        opacity: 1,
        pathLength: 1,
        transition: { duration: 2, delay: 0, ease:"easeInOut" }
    }
    };
    const variantSvg = {
        hidden: { 
            rotate: 90,
            x: 400,
        },
        visible: { 
            rotate: 0,
            x: 0,
            transition: { duration: 1.5, delay: 0.5, ease:"easeInOut" }
        }
    }

    console.log(cotizaciones)
  return (
    <div className='s2_size'>
        <div className='s2_background-circle'/>
            <section className='s2_content'>
                <motion.section className='s2_title'
                    variants={variantTitle}
                    initial="offscreen"
                    animate="onscreen"
                >
                    <h1 className='s2_h1'>Genera nuevos ingresos a través de las criptomonedas</h1>
                </motion.section>
                <section className='s2_c'>
                    <section className='s2_columns'>
                        <div className='s2_firstcolum'>
                            <motion.div className='s2_img-container'
                                variants={variantTarget}
                                initial="offscreen"
                                animate="onscreen"
                            >
                                <img className='s2_credict-img' src={CredictCard}/>
                            </motion.div>
                            <motion.article className='s2_text-container1'
                                variants={variantLeftText}
                                initial="offscreen"
                                animate="onscreen"
                            >
                                <h2 className='s2_h2'>Desbloqueá tu economía y despreocupate de la inflación</h2>
                            </motion.article>
                            <motion.article className='s2_text-container2'
                                variants={variantLeftText}
                                initial="offscreen"
                                animate="onscreen"
                            >
                                <h2 className='s2_h2'>Asesoramiento sin cargo <br/> para usuarios del Banco Austral</h2>
                            </motion.article>  
                        </div>
                    </section>
                    <section className='s2_columns'>
                        <motion.div className='s2_phone-container'
                            variants={variantPhone}
                            initial="offscreen"
                            animate="onscreen"
                        >
                            <motion.img className='s2_phone-img' src={Phone} drag dragConstraints={{
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            }} dragElastic={0.25}/>
                        </motion.div>
                    </section>
                    <motion.section className='s2_columns'>
                        <motion.div className='s2_cards-size eth'
                            variants={variantRightColum1}
                            initial="offscreen"
                            animate="onscreen"
                        >
                            <section className='s2_cards-left'>
                                <article className='s2_cards-title'>
                                    <h1 className='s2_cards-h1'>OFERTA DEL DÍA</h1>
                                </article>
                                <section className='s2_eth-content'>
                                    <article className='s2_eth-description'>
                                        <h2 className='s2_cards-h2'>TESLA</h2>
                                    </article>
                                    <article className='s2_eth-description-p'>
                                        <p className='s2_eth-p'>$ {cotizaciones}</p>
                                    </article>  
                                </section>
                                
                            </section>
                            <section className='s2_cards-right'>
                                <img className='s2_eth-img' src={LogoEthereum} alt="Imagen logo ethereum"/>
                            </section>
                        </motion.div>
                        {isAuthenticated &&
                            <a href="/perfil/invertirdinero">
                                    <motion.div className='s2_cards-size '
                                    variants={variantRightColum2}
                                    initial="offscreen"
                                    animate="onscreen"
                                >
                                    <section className='s2_cards-left'>
                                        <article className='s2_cards-title'>
                                            <h1 className='s2_cards-h1'>INVERTI AHORA</h1>
                                        </article>
                                        <article className='s2_cards-description'>
                                            <h2 className='s2_cards-h2'>Que el dinero trabaje por vos <br/> <br/>Rendimientos de la última semana</h2>
                                        </article>
                                    </section>
                                    <section className='s2_cards-right'>
                                        <img className='s2_inv-img' src={LogoCohete} alt="Imagen logo cohete"/>
                                    </section>
                                </motion.div>
                            </a>
                        }

                        {!isAuthenticated &&
                            <div onClick={() => {loginWithRedirect()}}>
                                    <motion.div className='s2_cards-size '
                                    variants={variantRightColum2}
                                    initial="offscreen"
                                    animate="onscreen"
                                >
                                    <section className='s2_cards-left'>
                                        <article className='s2_cards-title'>
                                            <h1 className='s2_cards-h1'>INVERTI AHORA</h1>
                                        </article>
                                        <article className='s2_cards-description'>
                                            <h2 className='s2_cards-h2'>Que el dinero trabaje por vos <br/> <br/>Rendimientos de la última semana</h2>
                                        </article>
                                    </section>
                                    <section className='s2_cards-right'>
                                        <img className='s2_inv-img' src={LogoCohete} alt="Imagen logo cohete"/>
                                    </section>
                                </motion.div>
                            </div>
                        }
                        

                        <motion.div className='s2_cards-size '
                            variants={variantRightColum3}
                            initial="offscreen"
                            animate="onscreen"
                        >
                            <section className='s2_cards-left'>
                                <article className='s2_cards-title'>
                                    <h1 className='s2_cards-h1'>+ INFO</h1>
                                </article>
                                <article className='s2_cards-description'>
                                    <h2 className='s2_cards-h2'>Más informacion<br/> CLICK AQUÍ </h2>
                                </article>
                            </section>
                            <section className='s2_cards-right'>
                                <img className='s2_info-img' src={LogoInfo} alt="Imagen logo info"/>
                            </section>
                        </motion.div>
                        
                    </motion.section>  
                </section>
            </section>
            <div className='s2_circle'>
                <motion.svg width="362" height="353" viewBox="0 0 362 353" fill="none" xmlns="http://www.w3.org/2000/svg"
                    variants={variantSvg}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.path fill-rule="evenodd" clip-rule="evenodd" d="M362 0.000331631C361.833 0.000110567 361.667 0 361.5 0C163.177 0 0 156.511 0 352.5C0 352.667 0.000118043 352.833 0.000354052 353H48.0004C48.0001 352.833 48 352.667 48 352.5C48 184.329 188.359 48 361.5 48C361.667 48 361.833 48.0001 362 48.0004V0.000331631ZM362 75.027C360.669 75.009 359.336 75 358 75C201.703 75 75 198.346 75 350.5C75 351.334 75.0038 352.168 75.0114 353H123.001C123 352.833 123 352.667 123 352.5C123 225.751 228.213 123 358 123C359.336 123 360.669 123.011 362 123.033V75.027ZM362 157.046C360.504 157.015 359.004 157 357.5 157C244.18 157 152.283 244.706 152.001 353H362V157.046Z" fill="#3B6CE1"
                        variants={variantPath}
                        initial="hidden"
                        animate="visible"
                    >
                    </motion.path>
                </motion.svg>
            </div>
            <img src={rightbottom} className='rightbottom'/>
    </div>
    )
}

export default Screen_2s