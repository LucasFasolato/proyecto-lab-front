import React from 'react'
import './pagination_circle.css'
import { motion } from "framer-motion"
function Pagination_circle() {
  const variantPagination1= {
    offscreen: {
        x: "-100vw"
    },
    onscreen: {
        x: 0,
        transition: {
        duration: 2,
        delay: 1.2
        }
    }
    };
    const variantPagination2= {
      offscreen: {
          x: "-100vw"
      },
      onscreen: {
          x: 0,
          transition: {
          duration: 2,
          delay: 0.9
          }
      }
      };
      const variantPagination3= {
        offscreen: {
            x: "-100vw"
        },
        onscreen: {
            x: 0,
            transition: {
            duration: 2,
            delay: 0.6
            }
        }
        };
        const variantPagination4= {
          offscreen: {
              x: "-100vw"
          },
          onscreen: {
              x: 0,
              transition: {
              duration: 2,
              delay: 0.3
              }
          }
          };
  return (
    <div className='pagination_content'>
        <motion.div className='circle_box' 
          variants={variantPagination1}
          initial="offscreen"
          animate="onscreen"/>
        <motion.div className='circle_box' 
          variants={variantPagination2}
          initial="offscreen"
          animate="onscreen"/>
        <motion.div className='circle_box' 
          variants={variantPagination3}
          initial="offscreen"
          animate="onscreen"/>
        <motion.div className='selected_box' 
          variants={variantPagination4}
          initial="offscreen"
          animate="onscreen"/>
    </div>
  )
}

export default Pagination_circle