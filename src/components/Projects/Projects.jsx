import React from 'react'
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Netflix from '../../img/netflix.png'

import Olx from '../../img/olx.png'

// import Yutube from '../../img/yutube downloader.png'
import Diary from '../../img/diary app 1.png'
import Buyend from '../../img/buy-end.png'
import 'swiper/css'
import {themeContext} from '../../Context'
import {useContext} from 'react'

function Projects() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='portfolio' id='projects'>
        <span data-aos='slide-right' style={{color: darkMode ? 'white': ''}}>Projects</span>
        <span data-aos='zoom-in'>Portfolio</span>


        <Swiper
        spaceBetween={25}
        slidesPerView={3.6}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <a target='_blank' href="https://github.com/adil-shabab/buy-end"><img src={Buyend} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href="https://github.com/adil-shabab/olx-clone-react"><img src={Olx} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href="https://github.com/adil-shabab/netflix-clone-react"><img src={Netflix} alt="" /></a>
            </SwiperSlide>
          


        </Swiper>
        
    </div>
  )
}

export default Projects