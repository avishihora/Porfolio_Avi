import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimateLettter from "../AnimateLetters/AnimateLettter.jsx";
import FirstLetter from "../../assets/images/FirstLetter.webp";
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
    <div className="container home-page" >
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>&nbsp;
          <img src={FirstLetter} alt="" />
          <AnimateLettter
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimateLettter
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>
          Full Stack Developer <span className="between-animation">|</span>{" "}
          Designer
        </h2>
        <button className="flat-btn">
          <Link to="/contact">CONTACT ME</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
