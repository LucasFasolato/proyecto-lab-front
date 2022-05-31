import React from 'react'
import './banner_data.css'

function Banner_data() {
  return (
      <div className='banner_content'>
        <div className='banner_size'>
            <section className='banner_box'>
                <article className='display_banner-content'>
                    <h1 className='banner_h1'>12k</h1>
                    <p className='banner_p'>Happy Customers</p>
                </article>
            </section>
            <section className='banner_box'>
                <article className='display_banner-content'>
                    <h1 className='banner_h1'>+99</h1>
                    <p className='banner_p'>Business Plan</p>
                </article>
            </section>
            <section className='banner_box'>
                <article className='display_banner-content'>
                    <h1 className='banner_h1'>210</h1>
                    <p className='banner_p'>Complete Proyects</p>      
                </article>
            </section>
            <section className='banner_box lastbanner_box'>
                <article className='display_banner-content'>
                    <h1 className='banner_h1'>+5</h1>
                    <p className='banner_p'>Years Experience</p>  
                </article>
            </section>
            <div className='banner_circle position_tl'/>
            <div className='banner_circle position_br'/> 
        </div>   
      </div>
    
  )
}

export default Banner_data