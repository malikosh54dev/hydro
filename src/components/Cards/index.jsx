import React from "react";
import line from "../../image/Component 1.png";
import sim from "../../image/Mask group (3).png";
import edu from "../../image/Mask group (8).png";
import self from "../../image/Mask group (6).png";
import out from "../../image/Mask group (7).png";

const Cards = (props) => {
  return (
    <div id="cards">
      <div className="container">
        <div className="cards">
          <div className="cards-title" data-aos="fade-right">
            <div className="intro-text">
              <h1>
                WHY BUILD <br />
                <span>WITH HYDRA?</span>
              </h1>
              <img src={line} alt="" />
            </div>
            <p>
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat <br /> nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo <br /> quis imperdiet massa
              tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare{" "}
              <br /> lectus sit amet est placerat in. Lectus magna fringilla
              urna porttitor rhoncus vitae.
            </p>
          </div>
          <div className="all-cards">
            <div className="cards-blocks">
              <div className="block1">
                <div className="bg">
                  <img src={sim} alt="" />
                </div>
                <h1>EDUCATION</h1>
                <h2 className="line"></h2>
                <p className="text">
                  Vitae sapien pellentesque habitant morbi <br /> nunc. Viverra
                  aliquet porttitor rhoncus <br /> libero justo laoreet sit amet
                  vitae.
                </p>
                <button className=" try-btn">TRY IT NOW</button>
              </div>
            </div>
            <div className="cards-blocks">
              <div className="block1">
                <div className="bg">
                  <img src={edu} alt="" />
                </div>
                <h1>EDUCATION</h1>
                <h2 className="line"></h2>
                <p className="text">
                  Vitae sapien pellentesque habitant morbi <br /> nunc. Viverra
                  aliquet porttitor rhoncus <br /> libero justo laoreet sit amet
                  vitae.
                </p>
                <button className=" try-btn">TRY IT NOW</button>
              </div>
            </div>
            <div className="cards-blocks">
              <div className="block1">
                <div className="bg">
                  <img src={self} alt="" />
                </div>
                <h1>SELF-CARE</h1>
                <h2 className="line"></h2>
                <p className="text">
                  Vitae sapien pellentesque habitant morbi <br /> nunc. Viverra
                  aliquet porttitor rhoncus <br /> libero justo laoreet sit amet
                  vitae.
                </p>
                <button className=" try-btn">TRY IT NOW</button>
              </div>
            </div>
            <div className="cards-blocks">
              <div className="block1">
                <div className="bg">
                  <img src={out} alt="" />
                </div>
                <h1>OUTDOOR</h1>
                <h2 className="line"></h2>
                <p className="text">
                  Vitae sapien pellentesque habitant morbi <br /> nunc. Viverra
                  aliquet porttitor rhoncus <br /> libero justo laoreet sit amet
                  vitae.
                </p>
                <button className=" try-btn">TRY IT NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
