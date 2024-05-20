import React from "react";
import bag from "../../image/Mask group (10).png";
import { IoIosArrowDropdown } from "react-icons/io";
import unreal from "../../image/Hydra-Tech1 1 (6).png"
import unity from "../../image/Hydra-Tech3 1 (1).png"
import oculus from "../../image/Hydra-Tech2 1.png"
import vive from "../../image/Hydra-Tech4 1.png"



const thirdHero = (props) => {
  return (
    <div id="third">
      <div className="container">
        <div className="third">
          <div className="">
            <div className="im">
              <img src={bag} alt="img" />
            </div>
            <h1 className="and">
              TECHNOLOGIES & HARDWARE <br />{" "}
              <span className="used">USED BY HYDRA VR.</span>
            </h1>
            <div className="cirlce">
            <span className="arrow">
              <IoIosArrowDropdown />
            </span>
            </div>
          </div>
          <div className="logo">
            <img src={unreal} alt="" />
            <img src={unity} alt="" />
            <img src={oculus} alt="" />
            <img src={vive} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default thirdHero;
