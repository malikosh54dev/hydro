import React from "react";
import footerimg from "../../image/Frame (1).png";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <img src={footerimg} alt="" />
          <div className="footer-line"></div>
          <div className="footer-title">
            <a href="#">ABOUT JOIN </a>
            <a href="#">SERVICES</a>
            <a href="#">TECHNOLOGIES</a>
            <a href="#">HOW TO</a>
            <a href="#">HYDRA</a>
          </div>
          <div className="footer-line"></div>
          <div className="footer-title">
            <a href="">F.A.Q</a>
            <a href="">SITEMAP</a>
            <a href="">CONDITIONS</a>
            <a href="">LICENSES</a>
          </div>
          <div className="footer-line"></div>
          <div className="footer3">
            <h3>SOCIALIZE WITH HYDRA</h3>
            <div className="footer-icons">
              <span>
                {" "}
                <FaFacebook />
              </span>{" "}
              <span>
                {" "}
                <AiFillTwitterCircle />{" "}
              </span>
              <span>
                <FaLinkedin />
              </span>
              <span>
                <FaYoutube />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaPinterest />
              </span>
            </div>
            <button className="footer-btn">BUILD YOUR WORLD</button>
          </div>
        </div>
        <div className="">
          <div className="foot"></div>
          <p className="ftft">
            2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS
            RESERVED{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
