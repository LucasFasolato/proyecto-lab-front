import React from 'react'
import Box_queOfrecemos from '../../Box_queOfrecemos/box_queOfrecemos'
import Pagination_circle from '../../Pagination_circle/pagination_circle'
import './screen_3.css'
import Circle_decorationW from './../../../imgs/Circle_decorationW.svg'
import { motion } from "framer-motion"
import topleft from './../../../imgs/lefttopw.png'
import rightbottom from './../../../imgs/rightbottomw.png'

function Screen_3() {
const variantTitle= {
    offscreen: {
        y: "-200px",
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 0
        }
    }
  };
  const variantBox1= {
    offscreen: {
        x: "-100vw",
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        // rotate: [0, 330, 360, 380, 350, 365, 357, 362, 359, 360],
        transition: {
        duration: 2,
        delay: 0.3,
        // type: "spring"
        }
    }
  };
  const variantBox2= {
    offscreen: {
        x: "-100vw",
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
        duration: 2,
        delay: 0.6
        }
    }
  };
  const variantBox3= {
    offscreen: {
        x: "-100vw",
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
        duration: 2,
        delay: 0.9
        }
    }
  };
  const variantBox4= {
    offscreen: {
        x: "-100vw",
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
        duration: 2,
        delay: 1.2
        }
    }
  };
  const variantPath = {
    hidden: { 
        pathLength: 0
    },
    visible: { 
        pathLength: 1,
        transition: { duration: 2, delay: 0, ease:"easeInOut" }
    }
    };
    const variantSvg = {
        hidden: { 
            rotate: -90,
            x: -400,
        },
        visible: { 
            rotate: 0,
            x: 0,
            transition: { duration: 1.5, delay: 0, ease:"easeInOut" }
        }
    }
  return (
    <div className='s3_size'>
        <section className='s3_titles'>
            <motion.h2 className='s3_h2'
                variants={variantTitle}
                initial="offscreen"
                animate="onscreen"
            >Nuestros servicios</motion.h2>
            <motion.h1 className='s3_h1'
                variants={variantTitle}
                initial="offscreen"
                animate="onscreen"
            >¿QUÉ OFRECEMOS?</motion.h1>
        </section>
        <section className='s3_boxcontent'>
            <motion.article className='s3_box_sp'
                variants={variantBox4}
                initial="offscreen"
                animate="onscreen"
            >
                <Box_queOfrecemos/>
            </motion.article>
            <motion.article className='s3_box_sp'
                variants={variantBox3}
                initial="offscreen"
                animate="onscreen"
            >
                <Box_queOfrecemos/>
            </motion.article>
            <motion.article className='s3_box_sp'
                variants={variantBox2}
                initial="offscreen"
                animate="onscreen"
            >
                <Box_queOfrecemos/>
            </motion.article>
            <motion.article className='s3_box_sp'
                variants={variantBox1}
                initial="offscreen"
                animate="onscreen"
            >
                <Box_queOfrecemos/>
            </motion.article>
        </section>
        <section className='s3_pagination'>
            <Pagination_circle/>
        </section>
        <div className='s3_circle'>
        <motion.svg width="330" height="323" viewBox="0 0 330 323" fill="none" xmlns="http://www.w3.org/2000/svg" 
            variants={variantSvg}
            initial="hidden"
            animate="visible">
            <motion.path fill-rule="evenodd" clip-rule="evenodd" d="M329.966 323C329.966 322.85 329.966 322.699 329.966 322.549C329.966 143.383 180.953 0.477489 0 0.240723V48.2408C155.767 48.4769 281.966 171.199 281.966 322.549C281.966 322.699 281.966 322.85 281.966 323H329.966ZM251.327 323C251.334 322.25 251.337 321.499 251.337 320.747C251.337 184.85 139.139 74.4641 0 72.5876V115.833C115.256 117.712 208.096 209.542 208.096 322.549C208.096 322.699 208.096 322.85 208.096 323H251.327ZM181.07 323C180.82 226.738 100.213 148.533 0 146.475V323H181.07Z" fill="white"
                variants={variantPath}
                initial="hidden"
                animate="visible"/>
        </motion.svg>
        </div>
        <img src={topleft} className='topleft'/>
        <img src={rightbottom} className='rightbottom'/>
    </div>
  )
}

export default Screen_3