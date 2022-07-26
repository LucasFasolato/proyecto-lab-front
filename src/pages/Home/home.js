import React from 'react'
import Banner_data from '../../components/Banner_Data/banner_data'
import Screen1 from '../../components/Screens/Screen_1/screen_1'
import Screen_2 from '../../components/Screens/Screen_2/screen_2'
import Screen_3 from '../../components/Screens/Screen_3/screen_3'
import Screen_4 from '../../components/Screens/Screen_4/screen_4'
import Screen_5 from '../../components/Screens/Screen_5/screen_5'
import Screen_6 from '../../components/Screens/Screen_6/screen_6'
import Screen_7 from '../../components/Screens/Screen_7/screen_7'
import { motion } from "framer-motion"
function Menu() {
  return (
    <div className='display-content-menu'>
        <Screen1/>
        <Screen_2/>
        <Screen_3/>
        <Screen_4/>
        <Screen_5/>
        <Banner_data/>
        <Screen_6/>
        <Screen_7/>
    </div>
  )
}

export default Menu
