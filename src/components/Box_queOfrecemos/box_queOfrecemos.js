import React from 'react'
import './box_queOfrecemos.css'
// sp es size and position (linea 8)
function Box_queOfrecemos({res}) {
  return (
    <div className='box_size'>
      <section className='head_box'>
        <section className='img_sp'>
            <img className='img_size' src="https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246_960_720.png" alt='LOGO BOX QUE OFRECEMOS'/>
        </section>
        <section className='title_sp'>
            <p>{res.title}</p>
        </section>
      </section>
        
        <section className='description_sp'>
            <p>{res.content}</p>
        </section>
    </div>
  )
}

export default Box_queOfrecemos