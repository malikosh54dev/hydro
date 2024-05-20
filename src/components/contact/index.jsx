import React from "react";
import { BsGeoAlt } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="contact">
          <div className="block">
            <div className="card1">
              <span>
                <BsGeoAlt />
              </span>
              <div className="card-title">
                <h2>Pay Us a Visit</h2>
                <p>Union St, Seattle, WA 98101, United States</p>
              </div>
              <h2 className="lines"></h2>
            </div>

            <div className="card1">
              <span>
                <FaPhoneVolume />
              </span>
              <div className="card-title">
                <h2>Give Us a Call</h2>
                <p>(110) 1111-1010</p>
              </div>
            </div>
            <h2 className="lines"></h2>
            <div className="card1">
              <span>
                <MdOutlineMailOutline />
              </span>
              <div className="card-title">
                <h2>Send Us a Message</h2>
                <p>Contact@HydraVTech.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
