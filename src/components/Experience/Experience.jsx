import React from "react";
import EvisionWhite from "../../assets/images/EVisionLogo.png";
import Lampros from "../../assets/images/Lampros_Tech_Logo2.png";
import "./Experience.scss";

const Experience =React.forwardRef((props,ref) => {

  return (
    <>
      <div className="Exp_id" id="Exp_id">
        <div
          ref={ref}
          className={`Experience-part ${
            props.inView ? "fade-right active" : "reveal"
          }`}
        >
          <div className="headingExperience">Experience</div>
          <div className="exprienceGrid">
            <div className="companyGrid">
              <div className="companyLogo">
                <img src={EvisionWhite}></img>
              </div>
              <div className="companyName">
                Evision IT Solution Pvt. Ltd. , Gandhinagar
              </div>
              <div className="position">Front End Developer</div>
            </div>
            <div className="companyGrid">
              <div className="companyLogo">
                <img src={Lampros}></img>
              </div>
              <div className="companyName">
                Lampros Tech IT Solution Pvt. Ltd., Ahemedabad
              </div>
              <div className="position">Back End Developer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Experience;
