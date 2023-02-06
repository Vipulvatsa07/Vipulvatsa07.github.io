import React from "react";
import "./Services.css";
import Heart from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import {themeContext} from '../../Context'
import {useContext} from 'react'
// import Typed from 'react-typed'
import Cv from '../../img/Vipul_Vatsa_Resume.pdf'



function Services() {
  let style={
    marginTop:"10px"
  }
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="services row" id="services">
      <div className="s-left col-12 col-md-12 col-lg-6">
        <span data-aos='slide-right' className="m-0 p-0" style={{color: darkMode ? 'white' : ''}}></span>
        <span data-aos='slide-left' className="m-0 p-0">About Me</span>
        <span style={{color: darkMode ? 'white' : 'black'}} > </span>
        {/* np */}
        <span className=" text-justify" style={{fontSize: '18px'}}>I hail from Sultanpur, Uttar Pradesh and hold a Bachelor of Technology degree from Galgotia College of Engineering and Technology in Greater Noida. In addition to coding, my interests include gaming, football, reading non-fiction books, and exploring new places through traveling.</span>
        <a href={Cv} download><button className="button s-button">Download CV</button></a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="s-righ col-12 col-md-12 col-lg-6 row mt-5" style={{marginTop:"40px"}}>
        <div className="blur s-blur" style={{background: 'rgb(200, 231, 220)'}}></div>
        <div data-aos="slide-up" className="mt-6 col-12 col-md-6 col-lg-6 col-sm-6 col-xlg-6 w-100 d-flex justify-content-center align-items-center">
          <Card
            // emoji={Heart}
            heading={"Frontend"}
          detail={"HTML, CSS, JS, Bootstrap, React"}
            
          />
        </div>
        <div data-aos='slide-right' className="mt-3 col-12 col-md-6 col-lg-6 col-sm-6 col-xlg-6 w-100 d-flex justify-content-center align-items-center">
        <Card
          // emoji={Humble}
          heading={"Backend"}
            detail={"Nodejs, Expressjs, MongoDb"}
        />
        </div>
        {/* <div data-aos='slide-left' className="mt-3 third-box col-12 col-md-6 col-lg-6 col-sm-6 col-xlg-6 w-100 d-flex justify-content-center align-items-center">
        <Card
          // emoji={Glasses}
          heading={"web Development"}
          detail={"Python, Django, MySQL"}
        />
        </div> */}
      </div>
    </div>
  );
}

export default Services;
