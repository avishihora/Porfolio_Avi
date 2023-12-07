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
          <div class="text-[2.4rem] w-[50%] mx-auto sm:mx-auto  sm:mt-2 sm:text-[1.4rem] text-center sm:tracking-[2px] bg-slate-200 text-[#262626] sm:mx-8 sm:font-medium sm:py-2">
            Experience
          </div>
          <div className="exprienceGrid ssm:w-[80%] sm:w-[80%]  mx-auto">
            <div className="companyGrid flex flex-col items-center">
              <div className="companyLogo w-[50%]">
                <img src={EvisionWhite}></img>
              </div>
              <div className="companyName ssm:text-sm sm:text-sm px-2">
                Evision IT Solution Pvt. Ltd. , Gandhinagar
              </div>
              <div className="position">Front End Developer</div>
            </div>
            <div className="companyGrid">
              <div className="companyLogo w-[70%]">
                <img src={Lampros}></img>
              </div>
              <div className="companyName px-2">
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
