import React from "react";
import EvisionWhite from "../../assets/images/EVisionLogo.png";
import Lampros from "../../assets/images/Lampros_Tech_Logo2.png";
import { useInView } from "react-intersection-observer";
import "./Experience.scss";

const Experience = () => {
    const { ref: myref, inView: myExperience, entry } = useInView();

  return (
    <>
      <div
        ref={myref}
        className={`Experience-part ${
          myExperience ? "fade-right active" : "reveal"
        }`}
        id="Exp_id"
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
    </>
  );
};

export default Experience;
