import React, { useState } from "react";
import { useEffect, useRef } from "react";
import logo from "../../assets/images/PDEU Logo.png";
import schoolLogo from "../../assets/images/ssgv-removebg-preview.png";
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
        <div
          className={`Eduaction-part ${
            props.inView ? "active fade-left" : "reveal"
          }`}
          ref={ref}
        >
          <div className="heading">Education Qualification</div>
          <div className="acedamicGrid">
            <div className="schoolGrid">
              <div className="schoolLogo">
                <img src={schoolLogo}></img>
              </div>
              <div className="schoolName">
                Shree Swaminarayan Gurukul Vidhyalaya, <br />
                Surat, Gujarat.
              </div>
            </div>
          </div>
          <div className="acedamicGrid">
            <div className="collegeGrid">
              <div className="collegeLogo">
                <img src={logo}></img>
              </div>
              <div className="collegeName">
                Pandit Deendayal Energy University, Gandhinagar, Gujarat.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Education;
