import React from "react";
import line from "../../image/Component 1.png";
import vision from "../../image/Mask group (1).png"

const secondHero = () => {
  return (
    <div id="second-hero">
      <div className="container">
        <div className="second-hero">
          <div className="introduction">
            <div className="intro-text">
              <h1>
                INTRODUCTION
                <p>TO HYDRA VR</p>
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
          <div className="about">
            <img src={vision} alt="" />
            <div className="about-title">
              <h1>
                ABOUT <br /> <span>HYDRA VR</span>
              </h1>
              <p>
                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus{" "}
                <br />
                mattis rhoncus urna neque viverra justo. Vivamus at augue eget
                arcu dictum. Ultrices gravida <br /> dictum fusce ut placerat
                orci. Aenean et tortor at risus viverra adipiscing at in. <br />{" "}
                Mattis aliquam faucibus purus in massa. Est placerat in egestas
                erat imperdiet <br /> sed. Consequat semper viverra nam libero
                justo laoreet sit amet. Aliquam <br /> etiam erat velit
                scelerisque in dictum non consectetur a. Laoreet sit amet <br />{" "}
                cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem
                nulla pha <br /> retra diam sit amet nisl suscipit adipiscing
                bibendum. Leo a diam sollicitudi n tempor.
              </p>
              <button>LET’S GET IN TOUCH</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default secondHero;
