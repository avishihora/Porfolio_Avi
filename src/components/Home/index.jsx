import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AnimateLettter from "../AnimateLetters/AnimateLettter.jsx";
import FirstLetter from "../../assets/images/FirstLetter.webp";
import profilePic from "../../assets/images/profile-removebg.webp";
import "./index.scss";

const Home = () => {
  const [letterClass, seLetterClass] = useState("text-animate");
  const nameArray = ["v", "i", " ", "S", "h", "i", "h", "o", "r", "a", ","];
  const jobArray = [
    "A",
    " ",
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
    "\n",
  ];

  // const a =  () => {
  //   setTimeout(() => {
  //     seLetterClass("text-animate-hover");
  //   }, 4000);
  // };


  useEffect(() => {
  seLetterClass('text-animate-hover')
  },[0]);



  return (
    <>
      {/* <div className="container home-page relative mx-auto sm:hidden ssm:hidden md:hidden mx:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden ">
        <div className="profileImg  ssm:text-center ">
          <img
            className=" profilePic w-[26%] top-[5%] right-[7rem] absolute right-6 top-1 
            ssm:relative ssm:left-[50%] ssm:-translate-x-[50%] ssm:w-[48%]  
            sm:w-[50%]   
            md:(mx-auto my-0)"
            src={profilePic}
            alt=""
          />
        </div>
        <div className=" absolute partitionLine top-[2rem]  h-[35rem] font-thin rotate-[5deg] left-[55%] bg-white ssm:hidden sm:hidden md:hidden mx:hidden">
          |
        </div>

        <div
          className="  absolute top-[8rem] left-[5rem]   font-medium
          ssm:text-center ssm:h-[48vh] ssm:top-[38%] ssm:left-[50%] ssm:-translate-x-[50%] ssm:tracking-widest
        sm:absolute sm:top-[45%] sm:left-[50%] sm:-translate-x-[50%] 
        "
        >
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>&nbsp;
          <img
            src={FirstLetter}
            alt=""
            className={`${letterClass} mb-4 ssm:w-[20%]`}
          />
          <AnimateLettter
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <AnimateLettter
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
          <div
            className="absolute  positionHeadin animate-fade-up animate-once animate-duration-[2000ms] animate-ease-linear 
        ssm:text-center ssm:top-[50%]
        sm:w-full  sm:top-28
        lg:w-[40rem]
        xl:w-[40rem]
        2xl:text-4xl 
        2xl:w-[80rem] 2xl:absolute 2xl:w-[40rem]    "
          >
            Full Stack Developer <br />
            Designer
          </div>
          <div className="contBtn absolute -bottom-[140%]  ssm:absolute ssm:bottom-[5%]   sm:absolute sm:-bottom-[140%]  sm:left-[0%]   ">
            {" "
            <button className="flat-btn px-5 py-3  text-xl ssm:px-2 ssm:py-1  sm:px-2 sm:py-1   ">
              <Link to="/contact">CONTACT ME</Link>
            </button>
          </div>
        </div>
      </div> */}
      <div className="homeDiv home-page  ssm:h-[100vh] sm:h-[100vh] md:h-[100vh] mx:h-[100vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] 3xl:h-[100vh] lg:mx-[7%] xl:mx-[7%] 2xl:mx-[10%] 3xl:mx-[10%]">
        <div className="profileImg   animate-fade-right ssm:relative ssm:text-center  ">
          <img
            className=" profilePic  animate-once  w-[26%] top-[5%] absolute right-6 top-1 
          ssm:relative ssm:left-[50%] ssm:-translate-x-[50%]  ssm:w-[12em]  
          sm:absolute sm:left-[50%] sm:-translate-x-[50%] sm:w-[13em]  sm:top-[0em]
          md:left-[50%] md:-translate-x-[50%] md:w-[13em] md:-top-[1em] 
          mx:left-[50%] mx:-translate-x-[50%] mx:w-[15em] mx:top-0
        lg:w-[15em] lg:top-0 
          xl:w-[15em] xl:top-5 
          2xl:w-[19em] 2xl:top-5
          3xl:w-[22em] 3xl:top-5
           "
            src={profilePic}
            alt=""
          />
        </div>
        <div className=" absolute partitionLine top-[2rem] text-[0.4rem] h-[35rem] font-thin rotate-[4deg] left-[55%] bg-white ssm:hidden sm:hidden md:hidden	mx:hidden lg:hidden xl:h-[60em] xl:left-[70%] 2xl:h-[70em] 3xl:h-[69em] 2xl:left-[60%] 3xl:left-[63%]">
          |
        </div>
        <div
          className="sideTotal absolute w-[60%] 3xl:h-[100vh] 
        ssm:left-[50%] ssm:-translate-x-[50%]  
        sm:top-[41%] sm:text-center sm:w-[100%]
        md:absolute md:text-center md:w-full
        mx:absolute mx:w-[100%] mx:top-[12em] mx:left-[50%] mx:-translate-x-[50%] mx:text-center
        lg:absolute lg:w-full   
        xl:absolute 
        2xl:absolute 
        3xl:absolute 3xl:tracking-[0.2em] 3xl:-top-[2em]"
        >
          <div
            className="sideHeading   custom absolute top-[8rem] text-5xl font-medium
        ssm:absolute ssm:text-[1.3rem] ssm:tracking-[3px]  ssm:h-[48vh] ssm:w-[100%] ssm:top-[45%] 
        sm:text-[1.5rem] sm:left-[50%] sm:-translate-x-[50%] sm:top-[1em] sm:tracking-[2px]
        md:text-[1.7rem] md:tracking-widest  md:left-[50%] md:-translate-x-[50%] md:w-full md:text-center md:top-[10em]
        mx:text-[1.8rem] mx:tracking-widest 
        lg:text-[2rem] lg:tracking-widest
        xl:text-[2rem]
        2xl:text-[2.3rem] 2xl:tracking-widest
        3xl:text-[2.6em]
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
              idx={20}
            />
          </div>
          {/* <div
            className="absolute positionHeadin animate-fade-up animate-once animate-duration-[2000ms] animate-ease-linear
        ssm:absolute ssm:w-full ssm:top-[10em] ssm:text-[20px] ssm:tracking-[2px]
        sm:absolute sm:w-full sm:text-[1.3rem] sm:tracking-[2px] sm:top-[10em]
        md:absolute md:text-center md:w-full md:text-[2rem] md:tracking-[2px] md:top-[13.7em] md:text-[#fdffe3] 
        mx:w-full mx:top-[10em] mx:text-[1.8rem]
        lg:w-full lg:top-[10em] lg:text-[2.2rem] 
        xl:w-[180%] xl:text-[2.2rem] xl:top-[10em] xl:tracking-wider
        2xl:text-4xl   2xl:top-[10em] 2xl:w-[100%] 2xl:tracking-wider
        3xl:text-[2.2em] 3xl:top-[11em] 3xl:tracking-[0.2em] 3xl:w-[100%]	"
          >
             Full Stack Developer{" "}
            <span className="between-animation">|</span> Designer 
          </div> */}
          <div
            className="absolute positionHeadin animate-fade-up animate-once animate-duration-[2000ms] animate-ease-linear
        ssm:absolute ssm:w-full ssm:top-[10em] ssm:text-[20px] ssm:tracking-[2px]
        sm:absolute sm:w-full sm:text-[1.3rem] sm:tracking-[2px] sm:top-[10em]
        md:absolute md:text-center md:w-full md:text-[2rem] md:tracking-[2px] md:top-[13.7em] md:text-[#fdffe3] 
        mx:w-full mx:top-[10em] mx:text-[1.8rem]
        lg:w-full lg:top-[10em] lg:text-[2.2rem] 
        xl:w-[180%] xl:text-[2.2rem] xl:top-[10em] xl:tracking-wider
        2xl:text-4xl   2xl:top-[10em] 2xl:w-[100%] 2xl:tracking-wider
        3xl:text-[2.2em] 3xl:top-[11em] 3xl:tracking-[0.2em] 3xl:w-[100%]	"
          >
            Full Stack Developer
          </div>
          <div
            className="contBtn absolute
         ssm:left-[50%] ssm:-translate-x-[50%] ssm:top-[16em]  
         sm:left-[50%] sm:-translate-x-[50%]  sm:top-[16em]
         md:left-[50%] md:-translate-x-[50%] md:top-[33em]
         mx:left-[50%] mx:-translate-x-[50%] mx:text-[1rem] mx:top-[22em]
         lg:text-[1rem] lg:top-[27em]
         xl:text-[1rem] xl:top-[27em]
         2xl:top-[28em]
         3xl:top-[32em]"
          >
            {" "}
            <button
              className="tracking-[3px] border-solid border-[1px] text-[coral] border-white hover:bg-[coral] hover:text-[#262626] animate-fade-up flat-btn px-5 py-3 text-xl  hover:border-0
              ssm:px-2 ssm:py-1 ssm:text-[0.7rem]   
              sm:px-2 sm:text-[1rem] sm:py-1 
              md:text-[1rem] md:px-3 md:py-2
              mx:text-[1rem] mx:px-3 mx:py-2
              lg:text-[1rem] lg:px-3 lg:py-2
              xl:text-[1rem] xl:px-3 xl:py-2
              2xl:text-[1rem] 2xl:px-3 2xl:py-2
              3xl:text-[1rem] 3xl:px-3 3xl:py-2"
            >
              <a href="#Contact_id">CONTACT ME</a>
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
