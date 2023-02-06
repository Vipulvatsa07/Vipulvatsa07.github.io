import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'


function Footer() {
  return (
    <div className='footer'>
        <img className='w-100' src={Wave} alt="" />
        <div className="f-content">
            <div className="f-icons mt-4">
            <a target='_blank' href="https://github.com/Vipulvatsa07"><i class="fa-brands fa-github"></i></a>
            <a target='_blank' href="https://www.facebook.com/vipul.vatsa"><i class="fa-brands fa-facebook"></i></a>
            <a target='_blank' href="https://www.instagram.com/vipulvatsa/?hl=en"><i class="fa-brands fa-instagram"></i></a>
            <a target='_blank' href="https://www.linkedin.com/in/vipul-vatsa-20b8b9162/"><i class="fa-brands fa-linkedin"></i></a>
            <a target='_blank' href="https://wa.me/8791744159"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
            
        </div>
    </div>
   
  )
}

export default Footer