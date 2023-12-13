import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faCss3Alt,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faNode,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import "./Skill.scss";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
// import ai from "../../assets/images/ai.svg";
import express from "../../assets/images/expressjs-icon.svg";

const Skill = React.forwardRef((props, ref) => {
  return (
    <>
      <div
        className={`3xl:mx-auto Skill-part 3xl:w-[70%]  ${
          props.inView ? "active fade-left" : "reveal"
        }`}
        ref={ref}
      >
        <div className="text-[2.4rem] w-[50%] mx-auto sm:mx-auto  sm:mt-2 sm:text-[1.4rem] text-center sm:tracking-[2px] bg-slate-200 text-[#262626] sm:mx-8 sm:py-2 sm:font-medium  md:mb-5 mx:mb-5  xl:text-[3rem] 2xl:text-[2rem] 3xl:text-[2rem] 3xl:my-7">
          SKILLS
        </div>
        <div className="SkillsGrid sm:grid sm:grid-cols-2 sm:border-0 sm:m-4	md:grid md:grid-cols-3 mx:grid mx:grid-cols-3 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-4 3xl:grid 3xl:grid-cols-4  ">
          <div className="languageGrid  sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center mx:flex mx:flex-col mx:items-center lg:flex lg:flex-col lg:items-center  xl:flex xl:flex-col xl:items-center 2xl:flex 2xl:flex-col 2xl:items-center 3xl:flex 3xl:flex-col 3xl:items-center  ">
            {/* <NavLink to="/asas"> */}
            <div className="icon sm:text-[3rem] md:text-[3rem] mx:text-[3rem] lg:text-[5rem] xl:text-[3rem] 2xl:text-[3rem] 3xl:text-[3rem]">
              <FontAwesomeIcon icon={faHtml5} color="#ffffff" />
            </div>
            <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem] ">
              HTML
            </div>
          </div>
          <div
            className="languageGrid 
          sm:flex sm:flex-col sm:items-center 
          md:flex md:flex-col md:items-center
          mx:flex mx:flex-col mx:items-center
          lg:flex lg:flex-col lg:items-center  
          xl:flex xl:flex-col xl:items-center 
          2xl:flex 2xl:flex-col 2xl:items-center 
          3xl:flex 3xl:flex-col 3xl:items-center"
          >
            {/* <NavLink to="/asas"> */}
            <div className="icon sm:text-[3rem] md:text-[3rem] mx:text-[3rem] lg:text-[5rem] xl:text-[3rem] 2xl:text-[3rem] 3xl:text-[3rem] ">
              <FontAwesomeIcon icon={faCss3Alt} color="#ffffff" />
            </div>
            <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem]">
              CSS
            </div>

            {/* </NavLink> */}

            {/* <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem]">CSS</div> */}
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
          <div
            className="languageGrid sm:flex sm:flex-col sm:items-center
           md:flex md:flex-col md:items-center md:justify-center 
           mx:flex mx:flex-col mx:items-center mx:justify-center  lg:flex lg:flex-col lg:items-center  
          xl:flex xl:flex-col xl:items-center 
          2xl:flex 2xl:flex-col 2xl:items-center 
          3xl:flex 3xl:flex-col 3xl:items-center"
          >
            <div className="icon sm:text-[3rem] md:text-[3rem] md:text-[3rem] mx:text-[3rem] lg:text-[5rem] xl:text-[3rem] 2xl:text-[3rem] 3xl:text-[3rem]">
              <FontAwesomeIcon icon={faJs} color="#ffffff" />
            </div>
            <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem]">
              JavaScript
            </div>
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>

          <div
            className="languageGrid sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center md:justify-center 
          mx:flex mx:flex-col mx:items-center mx:justify-center  lg:flex lg:flex-col lg:items-center  
          xl:flex xl:flex-col xl:items-center 
          2xl:flex 2xl:flex-col 2xl:items-center 
          3xl:flex 3xl:flex-col 3xl:items-center"
          >
            <div className="icon sm:text-[3rem] md:text-[3rem] md:text-[3rem] mx:text-[3rem] lg:text-[5rem] xl:text-[3rem] 2xl:text-[3rem] 3xl:text-[3rem]">
              <FontAwesomeIcon icon={faReact} color="#ffffff" />
            </div>
            <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem]">
              React.js
            </div>
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
          <div
            className="languageGrid sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center md:justify-center 
          mx:flex mx:flex-col mx:items-center mx:justify-center  lg:flex lg:flex-col lg:items-center  
          xl:flex xl:flex-col xl:items-center 
          2xl:flex 2xl:flex-col 2xl:items-center 
          3xl:flex 3xl:flex-col 3xl:items-center"
          >
            <div className="icon sm:text-[3rem] md:text-[3rem] md:text-[3rem] mx:text-[3rem] lg:text-[5rem] xl:text-[3rem] 2xl:text-[3rem] 3xl:text-[3rem]">
              <FontAwesomeIcon icon={faSass} color="#ffffff" />
            </div>
            <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem]">
              SASS
            </div>
          </div>
          <div
            className="languageGrid sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center md:justify-center 
          mx:flex mx:flex-col mx:items-center mx:justify-center  lg:flex lg:flex-col lg:items-center  
          xl:flex xl:flex-col xl:items-center 
          2xl:flex 2xl:flex-col 2xl:items-center 
          3xl:flex 3xl:flex-col 3xl:items-center"
          >
            <div className="icon sm:text-[3rem] md:text-[3rem] mx:text-[3rem] lg:text-[5rem] xl:text-[3rem] 2xl:text-[3rem] 3xl:text-[3rem]">
              <FontAwesomeIcon icon={faBootstrap} color="#ffffff" />
            </div>
            <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem]">
              Bootstrap 5
            </div>
          </div>
          <div
            className="languageGrid sm:flex sm:flex-col sm:items-center sm:justify-center  md:flex md:flex-col md:items-center md:justify-center 
          mx:flex mx:flex-col mx:items-center mx:justify-center  lg:flex lg:flex-col lg:items-center  
          xl:flex xl:flex-col xl:items-center 
          2xl:flex 2xl:flex-col 2xl:items-center 
          3xl:flex 3xl:flex-col 3xl:items-center"
          >
            {/* <FontAwesomeIcon icon={faDatabase} pulse color="#ffffff" /> */}
            <div className="icon sm:text-[2.4rem] md:text-[3rem] mx:text-[3rem] lg:text-[5rem] xl:text-[3rem] 2xl:text-[3rem] 3xl:text-[3rem]">
              <FontAwesomeIcon icon={faDatabase} />{" "}
            </div>
            <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem]">
              MongoDB
            </div>
          </div>
          <div
            className="languageGrid sm:flex 
          sm:flex-col sm:items-center 
          md:flex md:flex-col md:items-center md:justify-center 
          mx:flex mx:flex-col mx:items-center mx:justify-center  
          lg:flex lg:flex-col lg:items-center  
          xl:flex xl:flex-col xl:items-center 
          2xl:flex 2xl:flex-col 2xl:items-center 
          3xl:flex 3xl:flex-col 3xl:items-center"
          >
            <div className="icon sm:text-[3rem] md:text-[3rem] mx:text-[3rem]  lg:text-[5rem] xl:text-[3rem] 2xl:text-[3rem] 3xl:text-[3rem]">
              <FontAwesomeIcon icon={faGithub} color="#ffffff" />
            </div>
            <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem]">
              Github
            </div>
          </div>
          <div
            className="languageGrid sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center md:justify-center 
          mx:flex mx:flex-col mx:items-center mx:justify-center  lg:flex lg:flex-col lg:items-center  
          xl:flex xl:flex-col xl:items-center 
          2xl:flex 2xl:flex-col 2xl:items-center 
          3xl:flex 3xl:flex-col 3xl:items-center"
          >
            <div className="icon sm:text-[3rem] md:text-[3rem] mx:text-[3rem] lg:text-[5rem] xl:text-[3rem] 2xl:text-[3rem] 3xl:text-[3rem]">
              <FontAwesomeIcon icon={faNode} color="#ffffff" />
            </div>
            <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem]">
              Node.js
            </div>
          </div>
          <div
            className="languageGrid sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-col md:items-center md:justify-center mx:flex mx:flex-col mx:items-center mx:justify-center  lg:flex lg:flex-col lg:items-center  
          xl:flex xl:flex-col xl:items-center 
          2xl:flex 2xl:flex-col 2xl:items-center 
          3xl:flex 3xl:flex-col 3xl:items-center"
          >
            <div className="icon ts sm:w-[42px]  sm:w-[42px]  md:w-[42px] mx:w-[42px] lg:w-[70px] ">
              <svg
                className="sm:mt-4 xl:w-[42px] 2xl:w-[42px] 3xl:w-[42px] 3xl:my-[12px]"
                fill="coral"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 16v16h32v-32h-32zM25.786 14.724c0.813 0.203 1.432 0.568 2.005 1.156 0.292 0.312 0.729 0.885 0.766 1.026 0.010 0.042-1.38 0.974-2.224 1.495-0.031 0.021-0.156-0.109-0.292-0.313-0.411-0.599-0.844-0.859-1.505-0.906-0.969-0.063-1.594 0.443-1.589 1.292-0.005 0.208 0.042 0.417 0.135 0.599 0.214 0.443 0.615 0.708 1.854 1.245 2.292 0.984 3.271 1.635 3.88 2.557 0.682 1.031 0.833 2.677 0.375 3.906-0.51 1.328-1.771 2.234-3.542 2.531-0.547 0.099-1.849 0.083-2.438-0.026-1.286-0.229-2.505-0.865-3.255-1.698-0.297-0.323-0.87-1.172-0.833-1.229 0.016-0.021 0.146-0.104 0.292-0.188s0.682-0.396 1.188-0.688l0.922-0.536 0.193 0.286c0.271 0.411 0.859 0.974 1.214 1.161 1.021 0.542 2.422 0.464 3.115-0.156 0.281-0.234 0.438-0.594 0.417-0.958 0-0.37-0.047-0.536-0.24-0.813-0.25-0.354-0.755-0.656-2.198-1.281-1.651-0.714-2.365-1.151-3.010-1.854-0.406-0.464-0.708-1.010-0.88-1.599-0.12-0.453-0.151-1.589-0.057-2.042 0.339-1.599 1.547-2.708 3.281-3.036 0.563-0.109 1.875-0.068 2.427 0.068zM18.276 16.063l0.010 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-0.714 0.016-1.307 0.036-1.323 0.016-0.021 2.547-0.031 5.62-0.026l5.594 0.016z" />
              </svg>
            </div>
            <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem] sm:mt-6">
              TypeScript
            </div>
          </div>
          <div
            className="languageGrid sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-col md:items-center md:justify-center 
          mx:flex mx:flex-col mx:items-center mx:justify-center  lg:flex lg:flex-col lg:items-center  
          xl:flex xl:flex-col xl:items-center 
          2xl:flex 2xl:flex-col 2xl:items-center 
          3xl:flex 3xl:flex-col 3xl:items-center"
          >
            <div className="icon express ">
              <svg
                className="sm:w-[3rem] md:w-[3rem] mx:w-[3rem] lg:w-[5rem] xl:w-[3rem] 2xl:w-[3rem] 3xl:w-[3rem]"
                xmlns="http://www.w3.org/2000/svg"
                fill="coral"
                viewBox="0 0 32 32"
                width="64"
                height="64"
              >
                <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" />
              </svg>{" "}
            </div>
            <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem]">
              Express.js
            </div>
          </div>

          <div
            className="languageGrid sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center md:justify-center 
          mx:flex mx:flex-col mx:items-center mx:justify-center  lg:flex lg:flex-col lg:items-center  
          xl:flex xl:flex-col xl:items-center 
          2xl:flex 2xl:flex-col 2xl:items-center 
          3xl:flex 3xl:flex-col 3xl:items-center"
          >
            <div className="icon sm:text-[3rem] md:text-[3rem] mx:text-[3rem] lg:text-[5rem] xl:text-[3rem] 2xl:text-[3rem] 3xl:text-[3rem]">
              <FontAwesomeIcon icon={faJava} color="#ffffff" />
            </div>
            <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem] ">
              Java
            </div>
          </div>
          <div
            className="languageGrid sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-col md:items-center md:justify-center mx:flex mx:flex-col mx:items-center mx:justify-center  lg:flex lg:flex-col lg:items-center  
          xl:flex xl:flex-col xl:items-center 
          2xl:flex 2xl:flex-col 2xl:items-center 
          3xl:flex 3xl:flex-col 3xl:items-center"
          >
            <div className="icon tailwind">
              <svg
                className="sm:w-[2.4rem] md:w-[3rem] mx:w-[3.2rem] lg:w-[5rem] xl:w-[3.2rem] 2xl:w-[3.2rem] 3xl:w-[3.2rem] 3xl:mt-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 54 33"
              >
                <g clipPath="url(#prefix__clip0)">
                  <path
                    fill="coral"
                    fillRule="evenodd"
                    d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                    clipRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="prefix__clip0">
                    <path fill="#fff" d="M0 0h54v32.4H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem]">
              Tailwind
            </div>
          </div>
          <div
            className="languageGrid sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-col md:items-center md:justify-center sm:mt-5
          mx:flex mx:flex-col mx:items-center mx:justify-center  lg:flex lg:flex-col lg:items-center  
          xl:flex xl:flex-col xl:items-center 
          2xl:flex 2xl:flex-col 2xl:items-center 
          3xl:flex 3xl:flex-col 3xl:items-center"
          >
            <div className="icon render  sm:w-[5rem] md:w-[5rem]  mx:w-[5rem] lg:w-[7rem] xl:w-[4rem] 2xl:w-[5rem] 3xl:w-[6rem] ">
              <svg
                className="mx:mt-5 3xl:mt-[20px]"
                viewBox="0 0 77.788 20.178"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="coral">
                  <path
                    d="m399.781 222.437a7.34 7.34 0 0 0 -3.618.951v10.557a.548.548 0 0 1 -.525.553h-2.412a.548.548 0 0 1 -.525-.553v-13.736a.533.533 0 0 1 .525-.525h2.285a.533.533 0 0 1 .525.525v.553a6.188 6.188 0 0 1 3.76-1.263.533.533 0 0 1 .525.525v1.887a.555.555 0 0 1 -.54.526z"
                    transform="translate(-392.7 -214.534)"
                  />
                  <path
                    d="m467.333 228.3h-8.556v.085c0 1.518.624 3.335 3.15 3.335 1.618-.014 3.221-.1 4.825-.27h.085c.27 0 .468.128.468.4v1.731c0 .426-.085.61-.553.681a23.519 23.519 0 0 1 -5.094.44c-2.625 0-6.357-1.419-6.357-6.584v-1.944c0-4.1 2.285-6.669 6.3-6.669 4.044 0 6.244 2.753 6.244 6.669v1.476c.013.421-.145.65-.512.65zm-2.966-2.568c0-2.043-1.135-3.235-2.753-3.235s-2.81 1.149-2.81 3.235v.1h5.562z"
                    transform="translate(-446.417 -214.534)"
                  />
                  <path
                    d="m576.293 234.57h-2.412a.548.548 0 0 1 -.525-.553v-8.542c0-2.285-.213-2.937-2.228-2.937a6.648 6.648 0 0 0 -2.966.951v10.557a.549.549 0 0 1 -.525.553h-2.412a.549.549 0 0 1 -.525-.553v-13.737a.533.533 0 0 1 .525-.525h2.285a.533.533 0 0 1 .525.525v.553a6.852 6.852 0 0 1 4.257-1.263c3.774 0 4.541 2.54 4.541 5.875v8.556a.569.569 0 0 1 -.54.54z"
                    transform="translate(-540.294 -214.619)"
                  />
                  <path
                    d="m682.05 204a22.16 22.16 0 0 1 -5.279.681c-4.228 0-6.272-2.5-6.272-6.584v-2.029c0-4.1 2.043-6.584 6.272-6.584a21.371 21.371 0 0 1 2.526.184v-4.64a.533.533 0 0 1 .525-.525h2.412a.533.533 0 0 1 .525.525v18.272c.001.37-.113.541-.709.7zm-2.75-11.511a21.385 21.385 0 0 0 -2.526-.184c-2.256 0-2.809 1.6-2.809 3.76v2.015c0 2.157.553 3.76 2.809 3.76a16.676 16.676 0 0 0 2.526-.184z"
                    transform="translate(-631.081 -184.5)"
                  />
                  <path
                    d="m789.733 228.3h-8.556v.085c0 1.518.624 3.335 3.15 3.335 1.618-.014 3.221-.1 4.825-.27h.085c.255 0 .468.128.468.4v1.731c0 .426-.085.61-.553.681a23.519 23.519 0 0 1 -5.094.44c-2.625 0-6.357-1.419-6.357-6.584v-1.944c0-4.1 2.285-6.669 6.3-6.669 4.044 0 6.244 2.753 6.244 6.669v1.476c.013.421-.145.65-.512.65zm-2.966-2.568c0-2.043-1.135-3.235-2.753-3.235s-2.81 1.149-2.81 3.235v.1h5.562z"
                    transform="translate(-723.07 -214.534)"
                  />
                  <path
                    d="m894.281 222.437a7.339 7.339 0 0 0 -3.618.951v10.557a.548.548 0 0 1 -.525.553h-2.412a.549.549 0 0 1 -.525-.553v-13.736a.533.533 0 0 1 .525-.525h2.284a.533.533 0 0 1 .525.525v.553a6.188 6.188 0 0 1 3.76-1.263.533.533 0 0 1 .525.525v1.887a.546.546 0 0 1 -.539.526z"
                    transform="translate(-817.032 -214.534)"
                  />
                </g>
              </svg>
            </div>
            <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem] sm:mt-5 mx:mt-5 3xl:mt-3">
              Render
            </div>
          </div>
          <div
            className="languageGrid sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-col md:items-center md:justify-center 
          mx:flex mx:flex-col mx:items-center mx:justify-center  lg:flex lg:flex-col lg:items-center  
          xl:flex xl:flex-col xl:items-center 
          2xl:flex 2xl:flex-col 2xl:items-center 
          3xl:flex 3xl:flex-col 3xl:items-center 3xl:h-[9rem]"
          >
            {/* <FontAwesomeIcon icon={faDatabase} pulse color="#ffffff" /> */}
            <div className="icon netlify ">
              {/* <img src={netlify} className="netlify" /> */}
              <svg
                className="sm:w-[2.7rem] md:w-[3rem] mx:w-[3.2rem] lg:w-[4.5rem] xl:w-[3.2rem] 2xl:w-[3.2rem] 3xl:w-[3.2rem] 3xl:mt-3"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.579 11.36c0.151 0.077 0.291 0.181 0.405 0.307l3.131-1.396-2.921-2.896-0.657 3.943zM16.079 8.729c0.156 0.229 0.249 0.489 0.281 0.765l4.661 1.975c0.14-0.109 0.301-0.188 0.473-0.235l0.765-4.735-2.839-2.979-3.343 5.135zM31.989 16.047l-4.995-4.995-3.401 1.391 8.355 3.552c0 0 0.073 0.052 0.041 0.052zM31.156 16.86l-8.020-3.428c-0.224 0.297-0.563 0.495-0.933 0.541l-0.859 5.277c0.255 0.26 0.401 0.609 0.401 0.973l4.843 1.016 4.443-4.412v-0.083zM20.531 12.333l-4.353-1.855c-0.308 0.469-0.833 0.745-1.391 0.724h-0.265l-3.609 5.568 9.635-4.172v0.011c-0.005-0.073-0.005-0.145 0-0.224 0.005-0.016 0-0.036-0.016-0.052zM25.823 22.079l-4.26-0.881c-0.161 0.209-0.369 0.365-0.615 0.459l-1.016 6.297 5.917-5.865c0 0-0.011 0.032-0.027 0.032zM19.864 21.645c-0.411-0.167-0.713-0.52-0.823-0.948l-7.932-1.629-0.115 0.183 7.199 10.411 0.432-0.427 1.224-7.563c0 0 0.041 0.031 0.015 0.016zM11.276 18.109l7.839 1.615c0.229-0.401 0.64-0.661 1.099-0.697l0.849-5.188-0.183-0.156-9.744 4.177c0.052 0.077 0.099 0.161 0.14 0.249zM7.989 19.416l-0.167-0.165-3.38 1.389 1.64 1.631 1.865-2.896zM10.219 19.948c-0.235 0.109-0.495 0.161-0.749 0.167-0.209 0-0.407-0.032-0.605-0.099l-2.057 2.995 9.021 8.937 1.588-1.579zM8.953 16.427c0.135-0.015 0.276-0.015 0.416 0 0.152-0.020 0.308-0.020 0.459 0l3.645-5.667c-0.285-0.296-0.443-0.692-0.443-1.099-0.015-0.12-0.015-0.245 0-0.364l-4.427-2.047-3.563 3.468zM9.355 6.557l4.317 1.839c0.312-0.26 0.708-0.396 1.115-0.38 0.177 0.005 0.353 0.031 0.525 0.083l3.371-5.26-2.787-2.787-6.541 6.421c0 0-0.011 0.068 0 0.084zM7.74 17.443c0.088-0.161 0.197-0.312 0.323-0.448l-3.693-5.511-4.369 4.245zM7.391 18.375l-6.683-1.396 2.937 2.98 3.704-1.573z"
                  fill="coral"
                />
              </svg>
            </div>
            <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem]">
              Netlify
            </div>
          </div>

          <div
            className="languageGrid sm:flex sm:flex-col sm:items-center sm:justify-center sm:mt-3 md:flex md:flex-col md:items-center md:justify-center mx:flex mx:flex-col mx:items-center mx:justify-center  lg:flex lg:flex-col lg:items-center  
          xl:flex xl:flex-col xl:items-center 
          2xl:flex 2xl:flex-col 2xl:items-center 
          3xl:flex 3xl:flex-col 3xl:items-center"
          >
            <div className="icon adobe sm:w-[3rem] md:w-[55px] md:h-[55px] mx:w-[4rem] lg:w-[4rem] xl:w-[3rem] 2xl:w-[3rem] 3xl:w-[3rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 240 234"
              >
                <path
                  fill="#262626"
                  stroke="#ffffff"
                  d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z"
                />
                <path
                  fill="coral"
                  d="M116 140H78.8l-7.6 23.5c-.2.9-1 1.5-1.9 1.4H50.5c-1.1 0-1.4-.6-1.1-1.8l32.2-92.7c.3-1 .6-2.1 1-3.3.4-2.1.6-4.3.6-6.5-.1-.5.3-1 .8-1.1h25.9c.8 0 1.2.3 1.3.8l36.5 103c.3 1.1 0 1.6-1 1.6h-20.9c-.7.1-1.4-.4-1.6-1.1L116 140zm-31.4-20.3H110c-.6-2.1-1.4-4.6-2.3-7.2-.9-2.7-1.8-5.6-2.7-8.6-1-3.1-1.9-6.1-2.9-9.2s-1.9-6-2.7-8.9c-.8-2.8-1.5-5.4-2.2-7.8H97c-.9 4.3-2 8.6-3.4 12.9-1.5 4.8-3 9.8-4.6 14.8-1.4 5.1-2.9 9.8-4.4 14zM170 77c-3.3.1-6.5-1.2-8.9-3.5-2.3-2.5-3.5-5.8-3.4-9.2-.1-3.4 1.2-6.6 3.6-8.9s5.6-3.5 8.9-3.5c3.9 0 6.9 1.2 9.1 3.5 2.2 2.4 3.4 5.6 3.3 8.9.1 3.4-1.1 6.7-3.5 9.2-2.3 2.4-5.7 3.7-9.1 3.5zm-11.2 86.8v-77c0-1 .4-1.4 1.3-1.4h19.8c.9 0 1.3.5 1.3 1.4v77c0 1.1-.4 1.6-1.3 1.6h-19.6c-1 0-1.5-.6-1.5-1.6z"
                />
              </svg>
            </div>
            <div className="langauageName lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[1.4rem]">
              Adobe illustrator
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Skill;
