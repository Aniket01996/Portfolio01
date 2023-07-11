import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div id="Footer" className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <h3>aniketdb.96@gmail.com</h3>
        <div className="f-icons">
        <a href="https://www.instagram.com/aniket_bhalerao96/" target="blank">
          <Insta color='white' size='3rem'/>
          </a>
        <a href="https://www.facebook.com/aniket.bhalerao.146" target="blank">
          <Facebook color='white' size='3rem'/>
          </a>
          <a href="https://github.com/Aniket01996?tab=repositories" target="blank">
          <Github color='white' size='3rem'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
