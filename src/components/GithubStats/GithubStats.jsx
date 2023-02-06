import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubStatus = () => {
  const ImgSrc = [
    {
      src: "https://github-readme-stats.vercel.app/api/top-langs?username=Vipulvatsa07&show_icons=true&locale=en&layout=compact",
    },
    {
      src: "https://github-readme-stats.vercel.app/api?username=Vipulvatsa07&show_icons=true&locale=en",
    },
    {
      src: "https://github-readme-streak-stats.herokuapp.com/?user=Vipulvatsa07&",
    },
  ];

  return (
    <section className="stats" >
      <div className="calendar" style={{display:"flex",justifyContent:"center"}}>
        <div>
        <h1 style={{textAlign:"center"}}>Github Calendar</h1>
        <GitHubCalendar username="Vipulvatsa07" />
        </div>
      </div>

      

      <div style={{gap:"20px"}}>
      <h1 style={{textAlign:"center"}}>Github Stats</h1>
        {ImgSrc.map((ele, i) => (
            <div style={{display:"flex",justifyContent:"center",margin:"10px"}}>
                
          <div key={i}>
            <img src={ele.src} alt="not found" />
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GithubStatus;
