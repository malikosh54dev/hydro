import React from "react";

const Inputs = (props) => {
  return (
    <div id="inputs">
      <div className="container">
        <div className="inputs">
          <div className="inputs-title">
            <h1>JOIN HYDRA</h1>
            <div className="inputs-line"></div>
            <p>Let’s Build Your VR Experience</p>
          </div>
          <div className="search">
            <div className="input1">
              <input type="text" value="" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="input1">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="sub">
              <input type="text" placeholder="Subject"  />
            </div>
            <div className="">
              <textarea
                name=""
                id=""
                placeholder="Tell Us Something..."
              ></textarea>
            </div>
          </div>
          <button>SEND TO HYDRA</button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
