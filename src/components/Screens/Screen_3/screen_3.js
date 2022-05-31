import React from 'react'
import Box_queOfrecemos from '../../Box_queOfrecemos/box_queOfrecemos'
import Pagination_circle from '../../Pagination_circle/pagination_circle'
import './screen_3.css'
import Circle_decorationW from './../../Circle_decorationW.svg'
function Screen_3() {
  return (
    <div className='s3_size'>
        <section className='s3_titles'>
            <h2 className='s3_h2'>Nuestros servicios</h2>
            <h1 className='s3_h1'>¿QUÉ OFRECEMOS?</h1>
        </section>
        <section className='s3_boxcontent'>
            <article className='s3_box_sp'>
                <Box_queOfrecemos/>
            </article>
            <article className='s3_box_sp'>
                <Box_queOfrecemos/>
            </article>
            <article className='s3_box_sp'>
                <Box_queOfrecemos/>
            </article>
            <article className='s3_box_sp'>
                <Box_queOfrecemos/>
            </article>
        </section>
        <section className='s3_pagination'>
            <Pagination_circle/>
        </section>
        <div className='s3_circle'>
            <img className='s3_img' src={Circle_decorationW} alt="Decoration circle white"/>
        </div>
    </div>
  )
}

export default Screen_3