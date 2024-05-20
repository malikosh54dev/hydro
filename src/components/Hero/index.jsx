import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import herobg from "../../image/Mask group.png";

const Hero = (props) => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero-title">
            <h1>
              <span className="another-col"> Dive </span>Into The Depths <br />
              Of <span className="another-col">Virtual Reality</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />
              nisl tincidunt eget. Lectus mauris eros in vitae .
            </p>
            <div className="btn-icon">
              <button>BUILD YOUR WORLD</button>
              <span className="icon">
                <IoArrowForwardSharp />
              </span>
            </div>
          </div>
          <div className="hero-img">
            <img src={herobg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
