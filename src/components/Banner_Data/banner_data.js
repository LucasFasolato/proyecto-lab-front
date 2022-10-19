import React, {useEffect, useState} from 'react'
import './banner_data.css'
import { motion } from "framer-motion"
import {httpGet} from "../../utils/httpFunctions";
import {BeatLoader} from "react-spinners";

function Banner_data() {
    
    let [color, setColor] = useState("#3b6ce1");
    const [cantidadUsers, setCantidadUsers] = useState({});
    const [cantidadTransf, setCantidadTransf] = useState({});
    const [cargandoUsers, setCargandoUsers] = useState(true);
    const [cargandoTransfs, setCargandoTransfs] = useState(true);

    useEffect(() => {
        setCargandoUsers(true)
        httpGet("auth/users").then(res => {
            setCargandoUsers(false);
            setCantidadUsers(res.length)
        })
    }, [])

    useEffect(() => {
        setCargandoTransfs(true)
        httpGet("auth/transfer").then(res => {
            setCargandoTransfs(false)
            setCantidadTransf(res.length)
        })
    }, [])


    const variantBanner= {
        offscreen: {
            opacity:0
        },
        onscreen: {
            opacity:1 ,
            transition: {
            duration: 1,
            ease: "easeInOut"
            }
        }
    };
    const variantData= {
        offscreen: {
            opacity:0
        },
        onscreen: {
            opacity:1,   
            transition: {
            duration: 0.2,
            delay: 1,
            ease: "easeInOut"
            }
        }
    };
    const variantCircle1= {
        offscreen: {
            x: "-100vw"
        },
        onscreen: {
            x: 0,
            transition: {
            duration: 1,
            delay: 1
            }
        }
    };
    const variantCircle2= {
        offscreen: {
            x: "100vw"
        },
        onscreen: {
            x: 0,
            transition: {
            duration: 1,
            delay: 1
            }
        }
    };
  return (
    <motion.div className='banner_content'
        variants={variantBanner}
        initial="offscreen"
        animate="onscreen"
    >
        <div className='banner_size'>
            <section className='banner_box'>
                <motion.article className='display_banner-content' 
                variants={variantData}
                initial="offscreen"
                animate="onscreen">
                    <h1 className='banner_h1'>{cargandoUsers ? <><BeatLoader color={color} loading={cargandoUsers} size={10}/></> : <>{String(cantidadUsers)}</>}</h1>
                    <p className='banner_p'>Happy Clients</p>
                </motion.article>
            </section>
            <section className='banner_box'>
                <motion.article className='display_banner-content'
                variants={variantData}
                initial="offscreen"
                animate="onscreen">
                    <h1 className='banner_h1'>+99</h1>
                    <p className='banner_p'>Business Plan</p>
                </motion.article>
            </section>
            <section className='banner_box'>
                <motion.article className='display_banner-content'
                variants={variantData}
                initial="offscreen"
                animate="onscreen">
                    <h1 className='banner_h1'>{cargandoTransfs ? <><BeatLoader color={color} loading={cargandoTransfs} size={10}/></> : <>{String(cantidadTransf)}</>}</h1>
                    <p className='banner_p'>Complete Transfers</p>      
                </motion.article>
            </section>
            <section className='banner_box lastbanner_box'>
                <motion.article className='display_banner-content'
                variants={variantData}
                initial="offscreen"
                animate="onscreen">
                    <h1 className='banner_h1'>+5</h1>
                    <p className='banner_p'>Years Experience</p>  
                </motion.article>
            </section>
            <motion.div className='banner_circle position_tl' variants={variantCircle1}
            initial="offscreen"
            animate="onscreen"/>
            <motion.div className='banner_circle position_br' variants={variantCircle2}
            initial="offscreen"
            animate="onscreen"/> 
        </div>   
      </motion.div>
    
  )
}

export default Banner_data