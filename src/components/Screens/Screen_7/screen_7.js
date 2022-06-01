import React from 'react'
import Author_card from '../../Author_Card/author_card'
import Footer from '../../Footer/footer'
import './screen_7.css'

function Screen_7() {
  return (
    <div className='s7_size'>
        <section className='s7_content'>
            <section className='s7_title'>
                <h1 className='s7_h1'>Diseñada por</h1>
            </section>
            <section className='s7_cardcontent'>
                <article className='s7_card_sp'>
                    <Author_card/>
                </article>
                <article className='s7_card_sp'>
                    <Author_card/>
                </article>
            </section>
        </section>
        <Footer/>
    </div>
  )
}

export default Screen_7