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

import React from "react";
import "./Skill.scss";
import render from "../../assets/images/render.svg";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import adobeIllustrator from "../../assets/images/adobe_illustrator_logo_icon_167899.svg";
import { useInView } from "react-intersection-observer";
const Skill =React.forwardRef ((props,ref) => {

  return (
    <>
        <div
        className={`Skill-part ${
          props.inView ? "active fade-left" : "reveal"
        }`}
        ref={ref}
      >

        <div className="headingSkill">Skill</div>
        <div className="SkillsGrid">
          <div className="languageGrid">
            {/* <NavLink to="/asas"> */}
            <div className="icon">
              <FontAwesomeIcon icon={faHtml5} color="#ffffff" />
            </div>
            <div className="langauageName">HTML</div>

            {/* </NavLink> */}
            {/* <div className="langauageName">HTML</div> */}
            {/* <div id="myProgress">
              <div id="myBar"></div>
            </div> */}
          </div>
          <div className="languageGrid">
            {/* <NavLink to="/asas"> */}
            <div className="icon">
              <FontAwesomeIcon icon={faCss3Alt} color="#ffffff" />
            </div>
            <div className="langauageName">CSS</div>

            {/* </NavLink> */}

            {/* <div className="langauageName">CSS</div> */}
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
          <div className="languageGrid">
            <div className="icon">
              <FontAwesomeIcon icon={faJs} color="#ffffff" />
            </div>
            <div className="langauageName">JavaScript</div>
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
          <div className="languageGrid">
            <div className="icon">
              <FontAwesomeIcon icon={faReact} color="#ffffff" />
            </div>
            <div className="langauageName">React.js</div>
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
          <div className="languageGrid">
            <div className="icon">
              <FontAwesomeIcon icon={faSass} color="#ffffff" />
            </div>
            <div className="langauageName">SASS</div>
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
          <div className="languageGrid">
            <div className="icon">
              <FontAwesomeIcon icon={faBootstrap} color="#ffffff" />
            </div>
            <div className="langauageName">Bootstrap 5</div>
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
          <div className="languageGrid">
            <div className="icon">
              <FontAwesomeIcon icon={faNode} color="#ffffff" />
            </div>
            <div className="langauageName">SASS</div>
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
          <div className="languageGrid">
            <div className="icon">
              <FontAwesomeIcon icon={faNodeJs} color="#ffffff" />
            </div>
            <div className="langauageName">Express.js</div>
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
          <div className="languageGrid">
            {/* <FontAwesomeIcon icon={faDatabase} pulse color="#ffffff" /> */}
            <div className="icon">
              <FontAwesomeIcon icon={faDatabase} />{" "}
            </div>
            <div className="langauageName">MongoDB</div>
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
          <div className="languageGrid">
            <div className="icon">
              <FontAwesomeIcon icon={faGithub} color="#ffffff" />
            </div>
            <div className="langauageName">Github</div>
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
          <div className="languageGrid">
            <div className="icon">
              <FontAwesomeIcon icon={faJava} color="#ffffff" />
            </div>
            <div className="langauageName">Java</div>
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
          <div className="languageGrid">
            {/* <FontAwesomeIcon icon={faDatabase} pulse color="#ffffff" /> */}
            <div className="icon netlify">
              {/* <img src={netlify} className="netlify" /> */}

              <svg
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
          <div className="languageGrid">
            {/* <FontAwesomeIcon icon={faDatabase} pulse color="#ffffff" />  */}
            <div className="icon heroku">
              <svg
                width="50px"
                height="50px"
                viewBox="-14.5 0 285 285"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M230.4,0 C244.39552,0 255.77047,11.2315104 255.99657,25.1765997 L256,25.6 L256,258.844444 C256,272.839964 244.765005,284.214915 230.823296,284.441014 L230.4,284.444444 L25.6,284.444444 C11.60448,284.444444 0.2295296,273.209449 0.003430144,259.26774 L0,258.844444 L0,25.6 C0,11.60096 11.2349952,0.2294592 25.1767043,0.003429088 L25.6,0 L230.4,0 Z M230.4,14.2222222 L25.6,14.2222222 C19.426,14.2222222 14.3820625,19.169691 14.2259468,25.3068692 L14.2222222,25.6 L14.2222222,258.844444 C14.2222222,265.018444 19.169691,270.062382 25.3068692,270.218498 L25.6,270.222222 L230.4,270.222222 C236.5775,270.222222 241.618047,265.274753 241.774056,259.137575 L241.777778,258.844444 L241.777778,25.6 C241.777778,19.328 236.675556,14.2222222 230.4,14.2222222 Z M64,184.888889 L96,213.333333 L64,241.777778 L64,184.888889 Z M92.4444444,42.6666667 L92.4444444,123.416889 C106.645333,118.794667 126.496,113.777778 145.777778,113.777778 C163.36,113.777778 173.884444,120.689778 179.616,126.488889 C191.7248,138.738489 192.013158,154.309103 191.997015,156.385666 L191.996444,156.444444 L192,241.777778 L163.555556,241.777778 L163.555556,156.835556 C163.416889,150.197333 160.216889,142.222222 145.777778,142.222222 C117.146098,142.222222 85.0644658,156.478539 84.1117507,156.905113 L84.0924444,156.913778 L64,166.016 L64,42.6666667 L92.4444444,42.6666667 Z M192,42.6666667 C190.08,58.8231111 183.530667,74.3111111 170.666667,88.8888889 L170.666667,88.8888889 L142.222222,88.8888889 C153.400889,74.2222222 160.419556,58.7875556 163.555556,42.6666667 L163.555556,42.6666667 Z"
                    fill="coral"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="langauageName">Heroku</div>
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>

          <div className="languageGrid">
            <div className="icon render">
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
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>

          <div className="languageGrid">
            <div className="icon">
              <img src={adobeIllustrator} alt="" />
            </div>
            <div className="langauageName">Adobe illustrator</div>
            <div className="collegeName">
              {/* // Pandit Deendayal Energy University, Gandhinagar, Gujarat. */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Skill;
