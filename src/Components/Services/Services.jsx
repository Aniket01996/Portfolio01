import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from './resume.pdf'

const Services = () => {
  return (
    <div id="Services" className="services">
      {/* left side */}
      <div className="my-services">
        <span>
          My <span className="orange"> Services...</span>
        </span>
        <span>
          I specialize in frontend development services, <br /> including responsive
          web design, website development, intuitive UI design, and building
          dynamic SPAs. <br /> I ensure cross-browser compatibility, optimize website
          performance. <br /> My services
          focus on creating visually appealing and user-friendly web experiences
          while adhering to clean coding practices.
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
      </div>
      {/* right side */}
      <div className="cards" id="c1">
        {/* 1st card */}
        <div style={{left: '3rem'}}>
         <Card 
         emoji = {HeartEmoji}
         heading = {'UI'}
         detail = {"Html, CSS"}
         />
        </div>
        {/* 2nd card */}
        <div id="c2" style={{top: '16rem', left : '-23rem'}}>
         <Card 
         emoji = {Glasses}
         heading = {'Front-End'}
         detail = {"JavaScript, ReactJS"}
         />
        </div>
         {/* 3rd card */}
         <div id="c3" style={{top: '26rem', left : '3rem'}}>
         <Card 
         emoji = {Humble}
         heading = {'Developer'}
         detail = {" Bootstrap, Tailwind CSS"}
         />
        </div>
      </div>
    </div>
  );
};

export default Services;
