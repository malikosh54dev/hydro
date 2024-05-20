import React from "react";
import headerimg from "../../image/Vector.png";
import hdtitle from "../../image/Group.png";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="images">
            <img src={headerimg} alt="iimg" />
            <img src={hdtitle} alt="img" className="hydra" />
          </div>
          <div className="title">
            <a href="#">ABOUT</a>
            <a href="#">SERVICES</a>
            <a href="#">TECHNOLOGIES</a>
            <a href="#">HOW TO</a>
          </div>
          <div className="btns">
            <button className="btn1">CONTACT US</button>
            <button className="btn2">JOIN HYDRA</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
