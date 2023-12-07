import React, { useState } from "react";
import { useEffect, useRef } from "react";
import logo from "../../assets/images/PDEU Logo.png";
import schoolLogo from "../../assets/images/ssgv-removebg-preview.png";
import CollageLogo from "../../assets/images/Pandit_Deendayal_Energy_University_logo.png"
import "../../index.css";
import "./Education.scss";
import "../../assets/animation/componentOpeningAni.scss";

const Education = React.forwardRef((props, ref) => {
  //  const myref = useRef();
  //  const [myEducationElement,setMyEducationElement] = useState();
  //  console.log(myEducationElement );
  //  useEffect(() => {
  //    const observer = new IntersectionObserver((entries) => {
  //      const entry = entries[0];
  //       setMyEducationElement(entry.isIntersecting)
  //      console.log("entry", entry);
  //    });
  //    observer.observe(myref.current);
  //  }, []);
  return (
    <>
      <div id="Education_id">
        {/* <div
          className={`Eduaction-part ${
            props.inView ? "active fade-left" : "reveal"
          }`}
          ref={ref}
        > */}
        <div
          className="text-[2.4rem] w-[50%] mx-auto sm:mx-auto   sm:mt-2 sm:text-[1.4rem] text-center sm:tracking-[2px] bg-slate-200 text-[#262626] sm:mx-8 sm:py-2 sm:font-medium	"
        >
          Education Qualification
        </div>
        <div className="acedamicGrid w-[48rem] sm:w-[80%] sm:mx-auto sm:my-8">
          <div className="schoolGrid flex flex-col">
            <div className="schoolLogo ">
              <img src={schoolLogo}></img>
            </div>
            <div className="schoolName text-center mb-5">
              Shree Swaminarayan Gurukul Vidhyalaya, <br />
              Surat, Gujarat.
            </div>
          </div>
        </div>
        <div className="acedamicGrid w-[48rem] sm:w-[80%] sm:mx-auto sm:my-8">
          <div className="collegeGrid">
            <div className="collegeLogo">
              <img src={logo} className="md:hidden  "></img>
              <img
                src={CollageLogo}
                className="hidden md:block  lg:hidden xl:hidden 2xl:hidden"
              ></img>
            </div>
            <div className="collegeName text-center mb-5">
              Pandit Deendayal Energy University,
              <br /> Gandhinagar, Gujarat.
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
});

export default Education;
