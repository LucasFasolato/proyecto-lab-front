import React from 'react'
import './comments.css'

function Comments() {
  return (
    <div className='comment_box-size'>
        <article className='comment_sp'>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
        </article>
        <div className='display_user-info'>
            <section className='user_img-sp'>
                <img className='user_img-size' src="https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246_960_720.png" alt='FOTO PERFIL USUARIO'/>
            </section>
            <div className='display_user-name'>
                <article className='name_sp'>
                    <h1>John Wall</h1>
                </article>  
                <article className='user_sp'>
                    <h2>@john_wall</h2>
                </article> 
            </div>
            
        </div>
         
    </div>
  )
}

export default Comments