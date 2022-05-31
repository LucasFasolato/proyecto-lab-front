import React from 'react'
import Footer from '../../components/Footer/footer'
import Navbarr from '../../components/Navbar/navbar'
import Screen1 from '../../components/Screens/Screen_1/screen_1'
import Screen_3 from '../../components/Screens/Screen_3/screen_3'
import Screen_4 from '../../components/Screens/Screen_4/screen_4'
function Menu() {
  return (
    <div className='display-content-menu'>
        <Navbarr/>
        <Screen1/>
        <Screen_3/>
        <Screen_4/>
        <Footer/>
    </div>
  )
}

export default Menu