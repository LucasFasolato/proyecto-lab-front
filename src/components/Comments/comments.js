import React from 'react'
import StarComment from '../StarComment/starComment'
import './comments.css'

function Comments({res}) {
    console.log(res.resena)
  return (
    <div className='comment_box-size'>
        <article className='comment_sp'>
            <p>{res.resena}</p>
        </article>
        <div className='display_content'> 
            <div className='display_user-info'>
            <section className='user_img-sp'>
                <img className='user_img-size' src="https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246_960_720.png" alt='FOTO PERFIL USUARIO'/>
            </section>
            <div className='display_user-name'>
                <article className='name_sp'>
                    <h1>{res.usuario.username}</h1>
                </article>  
                <article className='user_sp'>
                    <h2>{res.usuario.mail}</h2>
                </article> 
            </div>
            
        </div>
        <div className='display_star-info'>
            <StarComment res={res.puntuacion}/>
        </div>
        </div>
        
         
    </div>
  )
}

export default Comments