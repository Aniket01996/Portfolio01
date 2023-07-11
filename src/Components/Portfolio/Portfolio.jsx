import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Weather from "../../img/weather.jpg";
import ToDo from "../../img/todo.jpg";
import Blog from "../../img/blog.jpg";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="Portfolio" className="portfolio"> 
      <span style={{color: darkMode? 'white':''}}>Recent Projects</span>
      <span>Portfolio...</span>
      {/* Slide */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://wondrous-trifle-d9674f.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img className="p-img" src={Blog} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://aniket01996.github.io/weather-app/" target="_blank" rel="noopener noreferrer">
          <img className="p-img" src={Weather} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://aniket01996.github.io/ToDo-Js/" target="_blank" rel="noopener noreferrer">
          <img className="p-img" src={ToDo} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
