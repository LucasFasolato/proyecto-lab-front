import React from 'react'
import Comments from '../../Comments/comments'
import './screen_6.css'

function Screen_6() {
  return (
    <div className='s6_size'>
        <section className='s6_c'>
        <section className='s6_titles'>
            <h1 className='s6_h1'>Users loves Banco Austral</h1>
            <h2 className='s6_h2'>See what users around the world are saying about us</h2>
        </section>
        <section className='s6_content'>
            <article className='s6_comment_1'>
                <Comments/>
            </article>
            <article className='s6_comment_2'>
                <Comments/>
            </article>
            <article className='s6_comment_3'>
                <Comments/>
            </article>
            <article className='s6_comment_4'>
                <Comments/>
            </article>
        </section>
            
        </section>

    </div>
  )
}

export default Screen_6