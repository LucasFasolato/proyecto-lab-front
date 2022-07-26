import React from 'react'
import Author_card from '../../Author_Card/author_card'
import Footer from '../../Footer/footer'
import './screen_7.css'
import { motion } from "framer-motion"

function Screen_7() {
    const variantTitle= {
        offscreen: {
            opacity:0
        },
        onscreen: {
            opacity:1 ,
            transition: {
            duration: 2,
            ease: "easeInOut"
            }
        }
    };
    const variantCard= {
        offscreen: {
            scale: 1,
            opacity:0
        },
        onscreen: {
            opacity: 1 ,
            scale: [1, 1.03, 1],
            transition: {
            duration: 1,
            delay: 0.3,
            ease: "easeInOut"
            }
        }
    };
  return (
    <div className='s7_size'>
        <section className='s7_content'>
            <motion.section className='s7_title'
                variants={variantTitle}
                initial="offscreen"
                animate="onscreen"
            >
                <h1 className='s7_h1'>Diseñada por</h1>
            </motion.section>
            <section className='s7_cardcontent'>
                <motion.article className='s7_card_sp'
                    variants={variantCard}
                    initial="offscreen"
                    animate="onscreen"
                >
                    <Author_card/>
                </motion.article>
                <motion.article className='s7_card_sp'
                    variants={variantCard}
                    initial="offscreen"
                    animate="onscreen"
                >
                    <Author_card/>
                </motion.article>
            </section>
        </section>
        <section className='s7_footer-content'>
        <Footer/>
        </section>
    </div>
  )
}

export default Screen_7