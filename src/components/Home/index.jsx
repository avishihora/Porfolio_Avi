import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimateLettter from "../AnimateLetters/AnimateLettter.jsx";
import FirstLetter from "../../assets/images/FirstLetter.webp";
import profilePic from "../../assets/images/profile-removebg.webp"
import "./index.scss";

const Home = () => {
  const [letterClass, seLetterClass] = useState("text-animate");
  const nameArray = ["v", "i", " ", "S", "h", "i", "h", "o", "r", "a"];
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
    "\n"
  ];

  const a = async  ()=>{
    setTimeout(() => {
      seLetterClass("text-animate-hover");
    }, 4000);
  }

  useEffect(() => {
   a();
  }, []);

  return (
    <div className="container home-page relative mx-auto  ">
      {/* <div className="sideHeading  absolute  text-6xl sm:hidden "> */}
      {/* <div className="sideHeading  absolute  text-6xl  sm:absolute sm:w-[80%] sm:left-[52%] sm:-translate-x-2/4 sm:top-[38%] sm:text-3xl "> */}
      {/* <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>&nbsp;
        <img src={FirstLetter} alt="" className={letterClass} />
        <AnimateLettter
          letterClass={letterClass}
          strArray={nameArray}
          idx={15}
        />
        <br className="sm:hidden" />
        <AnimateLettter
          letterClass={letterClass}
          strArray={jobArray}
          idx={22}
        /> */}
      {/* </div> */}
      <div className="profileImg  ssm:text-center ">
        <img
          className="profilePic w-[26%] top-[5%] right-[7rem] absolute right-6 top-1 ssm:inline-block sm:w-[45%]  sm:static  md:(mx-auto my-0)"
          src={profilePic}
          alt=""
        />
      </div>
      {/* <h2 className="absolute positionHeadin sm:top-[60%] sm:text-[20px] sm:w-[80%] sm:left-[52%] sm:-translate-x-2/4">
        Full Stack Developer <span className="between-animation">|</span>{" "}
        Designer
      </h2> */}
      {/* <div className="sideHeading text-4xl  sm:relative  "> */}
      <div
        className="sideHeading  absolute top-[8rem] left-[5rem]  text-5xl font-medium	
        sm:absolute sm:w-[22rem] sm:left-[52%] sm:-translate-x-2/4 sm:top-[45%] sm:text-3xl 
        ssm:text-[2rem] ssm:w-[22rem] ssm:h-[48vh] ssm:top-[40%]
        "
      >
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>&nbsp;
        <img src={FirstLetter} alt="" className={`${letterClass} mb-4`} />
        <AnimateLettter
          letterClass={letterClass}
          strArray={nameArray}
          idx={15}
        />
        {/* <br className="hidden" /> */}
        <AnimateLettter
          letterClass={letterClass}
          strArray={jobArray}
          idx={22}
        />
        <div className="absolute git positionHeadin animate-fade-up animate-once animate-duration-[2000ms] animate-ease-linear w-[80rem]  2xl:text-4xl mt-32 2xl:w-[80rem] sm:w-full sm:text-[1.4rem] 2xl:absolute 2xl:w-[40rem]">
          Full Stack Developer <span className="between-animation">|</span>{" "}
          Designer
        </div>
        <div className="contBtn absolute -bottom-[140%]  ssm:absolute ssm:bottom-[12%] ssm:text-[0.7rem]  sm:absolute sm:-bottom-[140%]  sm:left-[0%] sm:text-[0.7rem]  ">
          {" "}
          <button className="flat-btn px-5 py-3  text-xl ssm:px-2 ssm:py-1  sm:px-2 sm:py-1 contactBtn  ">
            <Link to="/contact">CONTACT ME</Link>
          </button>
        </div>
        {/* bg-pink-300 2xl:bg-green-100 */}
      </div>
    </div>
  );
};

export default Home;
