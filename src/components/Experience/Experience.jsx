import React from "react";
import EvisionWhite from "../../assets/images/EVisionLogo.png";
import Lampros from "../../assets/images/Lampros_Tech_Logo2.png";
import "./Experience.scss";

const Experience =React.forwardRef((props,ref) => {

  return (
    <>
      <div className="Exp_id 3xl:w-[65%] 3xl:mx-auto pt-5 " id="Experience">
        <div
          ref={ref}
          className={`Experience-part ${
            props.inView ? "fade-right active" : "reveal"
          }`}
        >
          <div className="text-[2.4rem] w-[50%] mx-auto sm:mx-auto  sm:mt-2 sm:text-[1.4rem] text-center sm:tracking-[2px] bg-slate-200 text-[#262626] sm:mx-8 sm:font-medium sm:py-2 md:text-[2rem] mx:text-[2rem]  xl:text-[2rem] 2xl:text-[2rem] 3xl:text-[2rem] ">
            EXPERIENCE
          </div>
          <div className="exprienceGrid ssm:w-[80%] sm:w-[80%]  mx-auto md:w-[80%] mx:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] 3xl:w-[80%]">
            <div className="companyGrid sm:my-12 md:my-12 lg:my-12 xl:my-12 2xl:my-12 3xl:my-14 flex flex-col items-center ">
              <div className="companyLogo w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[40%] ">
                <img src={EvisionWhite}></img>
              </div>
              <div className="companyName ssm:text-sm sm:text-sm px-2 xl:text-[2rem] 2xl:text-[2rem] 3xl:text-[1.9rem]">
                Evision IT Solution Pvt. Ltd. , Gandhinagar
              </div>
              <div className="position ssm:text-center">
                Front End Developer
              </div>
            </div>
            <div className="companyGrid sm:my-12 md:my-12 lg:my-12 xl:my-12 2xl:my-12 3xl:my-14 flex flex-col items-center">
              <div className="companyLogo w-[70%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[40%]">
                <img src={Lampros}></img>
              </div>
              <div className="companyName px-2 xl:text-[2rem] 2xl:text-[2rem] 3xl:text-[1.9rem]">
                Lampros Tech IT Solution Pvt. Ltd., Ahemedabad
              </div>
              <div className="position ssm:text-center">Back End Developer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Experience;
