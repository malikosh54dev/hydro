import React from "react";
import line from "../../image/Component 1.png";
import { FaArrowRight } from "react-icons/fa6";

const Number = (props) => {
  return (
    <div id="number">
      <div className="container">
        <div className="number">
          <div className="number-title">
            <div className="pop">
              <h1>
                HOW WE BUILD <br />
                <span className="er">WITH HYDRA VR?</span>
              </h1>
            </div>
            <img src={line} alt="img" className="arrowq" />
            <p>
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat <br /> nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo <br /> quis imperdiet massa
              tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare{" "}
              <br /> lectus sit amet est placerat in. Lectus magna fringilla
              urna porttitor rhoncus vitae.
            </p>
          </div>
          <div className="num">
            <div className="one">
              <div className="back">
                <div className="in">
                  <h1 className="first">01</h1>
                </div>
              </div>
              <div className="lol">
                <span className="right">
                  <FaArrowRight />
                </span>
                <h2 className="texts">
                  3D Conception <br /> & Design
                </h2>
              </div>
            </div>
            <div className="one">
              <div className="back">
                <div className="in">
                  <h1 className="first">02</h1>
                </div>
              </div>{" "}
              <div className="lol">
                <span className="right">
                  <FaArrowRight />
                </span>
                <h2 className="texts">
                  Interaction <br />
                  Design
                </h2>
              </div>
            </div>
            <div className="one">
              <div className="back">
                <div className="in">
                  <h1 className="first">03</h1>
                </div>
              </div>{" "}
              <div className="lol">
                <span className="right">
                  <FaArrowRight />
                </span>
                <h2 className="texts">
                  VR World <br /> User Testing
                </h2>
              </div>
            </div>
            <div className="one">
              <div className="back">
                <div className="in">
                  <h1 className="first">04</h1>
                </div>
              </div>{" "}
              <div className="lol">
                <span className="right">
                  <FaArrowRight />
                </span>
                <h2 className="texts">
                  Hydra VR <br />
                  Deploy
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Number;
