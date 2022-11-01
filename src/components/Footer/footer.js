import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer_size'>
        <section className='display_footer-content'>
            <article className='footer_first-box'>
                <h1 className='footer_title'>Austral |   Banco Austral</h1>
                <p className='footer_text'>While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of 
                the impenetrable foliage of my trees.While the lovely valley teems with vapour around me.</p>
            </article>
            <article className='footer_second-box'>
                <ul>
                    <h2>QUICK LINKS</h2>
                    <li className='footer_li'>Home</li>
                    <li className='footer_li'>Portfolio</li>
                    <li className='footer_li'>Blog</li>
                    <li className='footer_li'>About</li>
                    <li className='footer_li'>Contact</li>
                </ul>
            </article>
            <article className='footer_third-box'>
                <ul>
                    <h2>PRODUCTS</h2>
                    <li className='footer_li'>Expert interview</li>
                    <li className='footer_li'>Remodeling</li>
                    <li className='footer_li'>Aero Space</li>
                    <li className='footer_li'>Roofing</li>
                </ul>
            </article>
            <article className='footer_fourth-box'>
                <ul>
                    <h2>CONTACT US</h2>
                    <li className='footer_li'>Address: <p className='footer_contact-info'>Patricia Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051</p></li>
                    <li className='footer_li'>Phone: <p className='footer_contact-info'>+99 (0) 101 0000 888</p></li>
                    <li className='footer_li'>Email: <p className='footer_contact-info'>Info@yourdomain.com</p></li>
                </ul>
            </article>        
        </section>
        <section className='footer_terms-text'>
            <p className='footer_terms-left'>© 2022 Digital Agency Dark - Phlox Elementor WordPress Theme. All rights reserved.</p>
            <p className='footer_terms-right'>Privacy Environmental Polic.</p>
        </section>
    </div>
  )
}

export default Footer