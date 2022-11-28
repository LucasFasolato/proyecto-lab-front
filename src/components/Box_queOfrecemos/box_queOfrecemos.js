import React from 'react'
import './box_queOfrecemos.css'
// sp es size and position (linea 8)
function Box_queOfrecemos({res}) {
  console.log(res)
  return (
    <div className='box_size'>
      <section className='head_box'>
        <section className='img_sp'>
            <img className='img_size' src={res.img} alt='LOGO BOX QUE OFRECEMOS'/>
        </section>
        <section className='title_sp'>
            <p>{res.title}</p>
        </section>
      </section>
      <section className='description_sp'>
          <p>{res.content}</p>
      </section>
      <section className='button_sp'>
        <button>
          OBTENER MÁS INFORMACIÓN
        </button>
      </section>
    </div>
  )
}

export default Box_queOfrecemos