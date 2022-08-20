import React, {useEffect, useState} from 'react';
import Comments from '../../Comments/comments'
import './screen_6.css'
import {httpGet} from "../../../utils/httpFunctions";
import { motion } from "framer-motion"

function Screen_6() {
    let alea = []
    let aleatorio
    const [cargandoResena, setCargandoResena] = useState(true);
    const [alea0, setAlea0] = useState ()
    const [alea1, setAlea1] = useState ()
    const [alea2, setAlea2] = useState ()
    const [alea3, setAlea3] = useState ()

    useEffect(() => {
        setCargandoResena(true)
        httpGet("resena").then(res => {
            for(let i=0; i<4; i++) {
                aleatorio = res[Math.floor(Math.random() * res.length)];
                alea.push(aleatorio)
            }
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            console.log(alea);
            
            console.log(alea[0]);
            setAlea0(alea[0])
            setAlea1(alea[1])
            setAlea2(alea[2])
            setAlea3(alea[3])
            setCargandoResena(false);
        })
    }, [])


    const variantBg= {
        offscreen: {
            scale: 1
        },
        onscreen: {
            scale: [1, 1.02, 1],
            transition: {
            duration: 0.5,
            delay: 0.5,
            ease: "linear"
            }
        }
    };
    const variantTitle= {
        offscreen: {
            scale: 1
        },
        onscreen: {
            scale: [1, 1.05, 1],
            transition: {
            duration: 0.4,
            delay: 0,
            ease: "easeInOut"
            }
        }
    };
    const variantComent1= {
        offscreen: {
            y: "-100vh"
        },
        onscreen: {
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5
            }
        }
    };
    const variantComent2= {
        offscreen: {
            y: "-100vh"
        },
        onscreen: {
            y: 0,
            transition: {
                duration: 1,
                delay: 0.8
            }
        }
    };
    const variantComent3= {
        offscreen: {
            y: "100vh"
        },
        onscreen: {
            y: 60,
            transition: {
                duration: 1,
                delay: 1.1
            }
        }
    };
    const variantComent4= {
        offscreen: {
            y: "100vh"
        },
        onscreen: {
            y: 0,
            transition: {
                duration: 1,
                delay: 1.4
            }
        }
    };
  return (
    <div className='s6_size'>
        <section className='s6_c'>
        <motion.section className='s6_titles'
            variants={variantTitle}
            initial="offscreen"
            animate="onscreen"
        >
            <h1 className='s6_h1'>Users love Banco Austral</h1>
            <h2 className='s6_h2'>See what users around the world are saying about us</h2>
        </motion.section>
        <motion.section className='s6_content'
            variants={variantBg}
            initial="offscreen"
            animate="onscreen"
        >
            {cargandoResena ? 
                <div/> :
                <>
                <motion.article className='s6_comment_1'
                    variants={variantComent1}
                    initial="offscreen"
                    animate="onscreen"    
                >
                    <Comments res={alea0}/>
                </motion.article>
                <motion.article className='s6_comment_2'
                    variants={variantComent2}
                    initial="offscreen"
                    animate="onscreen"    
                >
                    <Comments res={alea1} />
                </motion.article>
                <motion.article className='s6_comment_3'
                    variants={variantComent3}
                    initial="offscreen"
                    animate="onscreen"    
                >
                    <Comments res={alea2} />
                </motion.article>
                <motion.article className='s6_comment_4'
                    variants={variantComent4}
                    initial="offscreen"
                    animate="onscreen"    
                >
                    <Comments res={alea3} />
                </motion.article>
            </>
        }
        </motion.section>
            
        </section>

    </div>
  )
}

export default Screen_6