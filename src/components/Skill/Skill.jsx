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
import adobeIllustrator from "../../assets/images/adobe_illustrator_logo_icon_167899.svg";
import express from "../../assets/images/expressjs-icon.svg";

const Skill = React.forwardRef((props, ref) => {
  return (
    <>
      <div
        className={`Skill-part ${props.inView ? "active fade-left" : "reveal"}`}
        ref={ref}
      >
        <div className="text-[2.4rem] w-[50%] mx-auto sm:mx-auto  sm:mt-2 sm:text-[1.4rem] text-center sm:tracking-[2px] bg-slate-200 text-[#262626] sm:mx-8 sm:py-2 sm:font-medium ">
          Skill
        </div>
        <div className="SkillsGrid sm:grid sm:grid-cols-2 sm:border-0 sm:m-4	">
          <div className="languageGrid  sm:flex sm:flex-col sm:items-center   ">
            {/* <NavLink to="/asas"> */}
            <div className="icon sm:text-[3rem]">
              <FontAwesomeIcon icon={faHtml5} color="#ffffff" />
            </div>
            <div className="langauageName ">HTML</div>
          </div>
          <div className="languageGrid sm:flex sm:flex-col sm:items-center ">
            {/* <NavLink to="/asas"> */}
            <div className="icon sm:text-[3rem]">
              <FontAwesomeIcon icon={faCss3Alt} color="#ffffff" />
            </div>
            <div className="langauageName">CSS</div>

            {/* </NavLink> */}

            {/* <div className="langauageName">CSS</div> */}
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
          <div className="languageGrid sm:flex sm:flex-col sm:items-center">
            <div className="icon sm:text-[3rem]">
              <FontAwesomeIcon icon={faJs} color="#ffffff" />
            </div>
            <div className="langauageName">JavaScript</div>
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
          <div className="languageGrid sm:flex sm:flex-col sm:items-center">
            <div className="icon sm:text-[3rem]">
              <FontAwesomeIcon icon={faReact} color="#ffffff" />
            </div>
            <div className="langauageName">React.js</div>
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
          <div className="languageGrid sm:flex sm:flex-col sm:items-center">
            <div className="icon sm:text-[3rem]">
              <FontAwesomeIcon icon={faSass} color="#ffffff" />
            </div>
            <div className="langauageName">SASS</div>
          </div>
          <div className="languageGrid sm:flex sm:flex-col sm:items-center ">
            <div className="icon sm:text-[3rem]">
              <FontAwesomeIcon icon={faBootstrap} color="#ffffff" />
            </div>
            <div className="langauageName">Bootstrap 5</div>
          </div>
          <div className="languageGrid sm:flex sm:flex-col sm:items-center">
            <div className="icon sm:text-[3rem]">
              <FontAwesomeIcon icon={faNode} color="#ffffff" />
            </div>
            <div className="langauageName">Node.js</div>
          </div>
          <div className="languageGrid sm:flex sm:flex-col sm:items-center sm:justify-center">
            <div className="icon express">
              <svg
                className="sm:w-[3rem]"
                xmlns="http://www.w3.org/2000/svg"
                fill="coral"
                viewBox="0 0 32 32"
                width="64"
                height="64"
              >
                <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" />
              </svg>{" "}
            </div>
            <div className="langauageName">Express.js</div>
          </div>

          <div className="languageGrid sm:flex sm:flex-col sm:items-center ">
            {/* <FontAwesomeIcon icon={faDatabase} pulse color="#ffffff" /> */}
            <div className="icon sm:text-[3rem]">
              <FontAwesomeIcon icon={faDatabase} />{" "}
            </div>
            <div className="langauageName">MongoDB</div>
          </div>
          <div className="languageGrid sm:flex sm:flex-col sm:items-center">
            <div className="icon sm:text-[3rem] ">
              <FontAwesomeIcon icon={faGithub} color="#ffffff" />
            </div>
            <div className="langauageName">Github</div>
          </div>
          <div className="languageGrid sm:flex sm:flex-col sm:items-center">
            <div className="icon ">
              
            </div>
            <div className="langauageName">Tailwind</div>
          </div>

          <div className="languageGrid sm:flex sm:flex-col sm:items-center">
            <div className="icon sm:text-[3rem]">
              <FontAwesomeIcon icon={faJava} color="#ffffff" />
            </div>
            <div className="langauageName">Java</div>
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
          <div className="languageGrid sm:flex sm:flex-col sm:items-center sm:justify-center">
            {/* <FontAwesomeIcon icon={faDatabase} pulse color="#ffffff" /> */}
            <div className="icon netlify sm:text-[3rem]">
              {/* <img src={netlify} className="netlify" /> */}
              <svg
                className="sm:text-[3rem]"
                width="60px"
                height="60px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.579 11.36c0.151 0.077 0.291 0.181 0.405 0.307l3.131-1.396-2.921-2.896-0.657 3.943zM16.079 8.729c0.156 0.229 0.249 0.489 0.281 0.765l4.661 1.975c0.14-0.109 0.301-0.188 0.473-0.235l0.765-4.735-2.839-2.979-3.343 5.135zM31.989 16.047l-4.995-4.995-3.401 1.391 8.355 3.552c0 0 0.073 0.052 0.041 0.052zM31.156 16.86l-8.020-3.428c-0.224 0.297-0.563 0.495-0.933 0.541l-0.859 5.277c0.255 0.26 0.401 0.609 0.401 0.973l4.843 1.016 4.443-4.412v-0.083zM20.531 12.333l-4.353-1.855c-0.308 0.469-0.833 0.745-1.391 0.724h-0.265l-3.609 5.568 9.635-4.172v0.011c-0.005-0.073-0.005-0.145 0-0.224 0.005-0.016 0-0.036-0.016-0.052zM25.823 22.079l-4.26-0.881c-0.161 0.209-0.369 0.365-0.615 0.459l-1.016 6.297 5.917-5.865c0 0-0.011 0.032-0.027 0.032zM19.864 21.645c-0.411-0.167-0.713-0.52-0.823-0.948l-7.932-1.629-0.115 0.183 7.199 10.411 0.432-0.427 1.224-7.563c0 0 0.041 0.031 0.015 0.016zM11.276 18.109l7.839 1.615c0.229-0.401 0.64-0.661 1.099-0.697l0.849-5.188-0.183-0.156-9.744 4.177c0.052 0.077 0.099 0.161 0.14 0.249zM7.989 19.416l-0.167-0.165-3.38 1.389 1.64 1.631 1.865-2.896zM10.219 19.948c-0.235 0.109-0.495 0.161-0.749 0.167-0.209 0-0.407-0.032-0.605-0.099l-2.057 2.995 9.021 8.937 1.588-1.579zM8.953 16.427c0.135-0.015 0.276-0.015 0.416 0 0.152-0.020 0.308-0.020 0.459 0l3.645-5.667c-0.285-0.296-0.443-0.692-0.443-1.099-0.015-0.12-0.015-0.245 0-0.364l-4.427-2.047-3.563 3.468zM9.355 6.557l4.317 1.839c0.312-0.26 0.708-0.396 1.115-0.38 0.177 0.005 0.353 0.031 0.525 0.083l3.371-5.26-2.787-2.787-6.541 6.421c0 0-0.011 0.068 0 0.084zM7.74 17.443c0.088-0.161 0.197-0.312 0.323-0.448l-3.693-5.511-4.369 4.245zM7.391 18.375l-6.683-1.396 2.937 2.98 3.704-1.573z"
                  fill="coral"
                />
              </svg>
            </div>
            <div className="langauageName">Netlify</div>
          </div>

          <div className="languageGrid sm:flex sm:flex-col sm:items-center sm:justify-center">
            <div className="icon render ">
              <svg
                height="20.178"
                viewBox="0 0 77.788 20.178"
                width="77.788"
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
            <div className="langauageName">Render</div>
          </div>

          <div className="languageGrid sm:flex sm:flex-col sm:items-center">
            <div className="icon adobe sm:text-[3rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60">
                <path d="M38.606 7.5h42.788v41.62H38.606z" fill="#262626" />
                <path
                  d="M36.66 5.566v45.5h46.68v-45.5zm1.945 1.945h42.788v41.62H38.606zm14.257 23.825l-1.536 5.835c-.04.156-.097.194-.292.194h-2.86c-.194 0-.233-.058-.194-.292l5.524-19.332c.097-.35.156-.66.194-1.614 0-.136.058-.194.156-.194h4.084c.136 0 .194.04.233.194l6.185 20.985c.04.156 0 .253-.156.253h-3.23c-.156 0-.253-.04-.292-.175l-1.614-5.854zm5.407-3.15l-2.314-9.14h-.04c-.408 2.276-1.44 6.126-2.256 9.14zm8.75-10.816c0-1.245.875-1.984 1.984-1.984 1.186 0 1.984.797 1.984 1.984 0 1.284-.836 1.984-2.023 1.984-1.128 0-1.945-.7-1.945-1.984zm.233 4.415c0-.156.058-.233.233-.233h3.053c.156 0 .233.058.233.233V37.13c0 .156-.04.233-.233.233h-3.015c-.194 0-.253-.097-.253-.253V21.786z"
                  fill="coral"
                />
              </svg>
            </div>
            <div className="langauageName">Adobe illustrator</div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Skill;
