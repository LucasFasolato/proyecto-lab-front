import React from 'react'
import { motion } from "framer-motion"
import './screen_1.css'

function Screen1() {
  const variantTitle = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.3, delay: 0.2 }
    }
  }
  return (
    <div className='screen_1-background'>
      <section className='title-content'>
        <motion.div 
          variants={variantTitle}
          initial="hidden"
          animate="visible"
        >
          <section className='title'>
              <h1 className='text-title-1'>Banco <span className='text-title-2'>Austral</span> </h1>
              <section className='subtitle'>
                <h2 className='text-subtitle'>Invertí en tu futuro</h2>
              </section>
            </section> 
        </motion.div>
      </section>
    </div>
    
  )
}

export default Screen1