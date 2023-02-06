import React from 'react'
import './Skills.css'
import {themeContext} from '../../Context'
import {useContext} from 'react'
import { AiFillHtml5,AiFillGithub } from "react-icons/ai";
import { DiJavascript1,DiNpm,DiReact,DiCss3Full,DiMongodb,DiNodejs } from "react-icons/di";
import {FaBootstrap} from "react-icons/fa"



function Skills()  {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='skills row w-100 pb-5 pt-5' id='skills'>
        <div className="mt-5 mb-5 col-12 col-sm-12 col-md-12 col-lg-6 col-xlg-6">
          <div className="blur" style={{background: 'rgb(200, 231, 220)'}}></div>
        <div className="skill-name">
          <span data-aos='slide-right' style={{color: darkMode ? 'white' : ''}}></span>
          <span data-aos='slide-left'>Skills and Tools</span>
          <span style={{color: darkMode ? 'white' : ''}}>
          My technical skill set encompasses the use of HTML, CSS, JavaScript, Bootstrap, Chakra, and React JS for front-end development, while I am well-versed in utilizing Node.js, Express.js, and MongoDb for back-end development. Additionally, I employ Git as my version control system to maintain and organize my code effectively.
          </span>
        </div>
        <div className="d-flex">
        <a href="#contact"><button className="mt-3 mr-3 button skill-button">Hire me</button></a>
        <a href="#contact"> <button className="mt-3 button skill-button">Contact</button></a>
        </div>
        </div>
        <div className="skill-right mt-5 mb-5 d-flex justify-content-center align-items-center col-12 col-sm-12 col-md-12 col-lg-6 col-xlg-6">
                    <div className="main-circle">
                        <div className="sec-circle">
                        <i  style={{color: 'var(--orange)'}}><AiFillHtml5 style={{fontSize:"70px"}}/></i>
                        
                        </div>
                        <div className="sec-circle">
                        <i  style={{color: 'var(--orange)'}}><DiJavascript1 style={{fontSize:"70px"}}/></i>
                        </div>
                        <div className="sec-circle">
                        <i  style={{color: 'var(--orange)'}}><DiNpm style={{fontSize:"70px"}}/></i>
                        </div>
                        <div className="sec-circle">
                        <i  style={{color: 'var(--orange)'}}><FaBootstrap style={{fontSize:"70px"}}/></i>
                        </div>
                        <div className="sec-circle">
                        <i  style={{color: 'var(--orange)'}}><DiReact style={{fontSize:"70px"}}/></i>
                        </div>
                        <div className="sec-circle">
                        <i  style={{color: 'var(--orange)'}}><DiCss3Full style={{fontSize:"70px"}}/></i>
                        </div>
                        <div className="sec-circle">
                        <i  style={{color: 'var(--orange)'}}><DiMongodb style={{fontSize:"70px"}}/></i>
                        </div>
                        
                        <div className="sec-circle">
                        <i  style={{color: 'var(--orange)'}}>< DiNodejs style={{fontSize:"70px"}}/></i>
                        </div>
                        <div className="sec-circle">
                          <i class="fa-brands fa-git-alt" style={{color: '#F1502F'}}></i>
                        </div>
                    </div>
            {/* background circle  */}
            {/* <div className="background-circle blue-circle"></div> */}
            {/* <div className="background-circle yellow-circle"></div> */}
        </div>
    </div>
  )
}

export default Skills