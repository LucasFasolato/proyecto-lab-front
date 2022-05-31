import React from 'react'
import Comments from '../../Comments/comments'
import Box_queOfrecemos from '../../Box_queOfrecemos/box_queOfrecemos'
import Pagination_circle from '../../Pagination_circle/pagination_circle'
import './screen_1.css'
import Footer from '../../Footer/footer'
import Author_card from '../../Author_Card/author_card'
import Banner_data from '../../Banner_Data/banner_data'
import Circle from './../../Circle_decoration.svg'

function Screen1() {
  return (
    <div className='screen_1-background'>
      <section className='title-content'>
        <section className='title'>
          <h1 className='text-title-1'>Banco <span className='text-title-2'>Austral</span> </h1>
          <section className='subtitle'>
            <h2 className='text-subtitle'>Invertí en tu futuro</h2>
          </section>
        </section>
      </section>
    </div>
    
  )
}

export default Screen1