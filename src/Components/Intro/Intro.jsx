import React from "react";
import "./Intro.css";
import Github from '../../img/github.png'
import LinkedIN from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Profile from '../../img/luffy.jpg'
import Resume from './resume.pdf'

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hello! I Am</span>
          <span>Aniket Bhalerao...</span>
          <span>
            Passionate and aspiring <b> Frontend Developer</b> proficient in HTML, CSS,
            JavaScript and ReactJS with a strong dedication to learning and
            growing in the field. <br /> Eager to contribute to a team and bring
            creative ideas to life .
          </span>
        </div>
        {/* <a href="http://" target="_blank" rel="noopener noreferrer"></a> */}
        <a href={Resume} target="blank" download>
        <button className="button i-button">Resume</button>
        </a>
        <div className="i-icons">
            <a href="https://github.com/Aniket01996?tab=repositories" target="blank">
            <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/aniket-bhalerao96/" target="blank">
            <img src={LinkedIN} alt="" />
            </a>
            <a href="https://www.instagram.com/aniket_bhalerao96/" target="blank">
            <img src={Instagram} alt="" />
            </a>
            <h1> - Connect with me socially...</h1>
        </div>
      </div>
      <div className="i-right">
        <div className="i-pic">
          <img className="profile" src={Profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
