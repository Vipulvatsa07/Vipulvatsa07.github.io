import React from "react";
import "./Home.css";
import Gitbub from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

import { themeContext } from "../../Context";
import { useContext } from "react";
// import Typed from 'react-typed'
import Cv from "../../img/Vipul_Vatsa_Resume.pdf";
import img from "../../img/image.png.jpg"

function Home() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="home" className="home w-100 row">
      <div className="h-left p-0 m-0 col-12 col-md-12 col-lg-6">
        <div className="h-name">
          <span style={{ color: darkMode ? "white" : "black" }}>Hello! I Am </span>
          <span>Vipul Vatsa</span>
          
          <span style={{ color: darkMode ? "white" : "" }}>
          A Full Stack Developer who loves solving problems and building projects. I am equipped with a variety of technologies and tools to help me build the best possible product. Combining logic with creative design to create visually appealing, user-friendly websites and applications is a passion of mine.
          </span>
        </div>
        <div className="row m-0 p-0">
          <a href="https://wa.me/8791744159" target="__blank">
            <button className="button h-button">Hire me</button>
          </a>
          <a href={Cv} download>
            <button className="button ml-3">Download CV</button>
          </a>
        </div>
        {/* <div className="h-icons">
          <a href="https://github.com/Vipulvatsa07" target="__blank">
            <img src={Gitbub} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/vipul-vatsa-20b8b9162/"
            target="__blank"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a
            href="https://www.instagram.com/vipulvatsa/?hl=en"
            target="__blank"
          >
            <img src={Instagram} alt="" />
          </a>
        </div> */}
      </div>
      <div
        className="h-right col-12 col-md-12 col-lg-6"
        style={{ color: darkMode ? "black" : "black" }}
      >
        <img alt="" />
      
        <img src={img} alt="image" style={{borderRadius:"50%",width:"350px",marginLeft:"20px",marginTop:"30px"}} />
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "12rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Home;
