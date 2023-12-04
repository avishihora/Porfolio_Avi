import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, NavLink, Outlet } from "react-router-dom";
import namelogo from "../../assets/images/AviShihora.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Squash as Hamburger } from "hamburger-react";
import profilePic from "../../assets/images/profile-removebg.webp";

import {
  faBriefcase,
  faEnvelope,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <>
        <div className="main-nav-bar">
          <div>
            <Link className="logo" to="/">
              <img src={namelogo} alt="" />
            </Link>
          </div>
          <div></div>
          <div className="nav-list">
            <div className="nav-lists"><a href="#Home_id">Home</a></div>
            <div className="nav-lists"><a href="#Exp_id">About</a></div>
            <div className="nav-lists">
              <a href="#Project_id">Project</a>
            </div>
            <div className="nav-lists"><a href="#Contact_id">Contact</a></div>
          </div>
        </div>

        <div className="mainLogo">
          <div className="a">A</div>
          <div className="s">S</div>
          <div className="overlay">
            {/* <img className="profilePic" src={profilePic} alt="" /> */}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="main-nav-bar">
          <div>
            <Link className="logo" to="/">
              <img src={namelogo} alt="" />
            </Link>
          </div>
          <div></div>
          <div className="nav-list">
            <div className="nav-lists">
              <a href="#Home_id">Home</a>
            </div>
            <div className="nav-lists">
              <a href="#Exp_id">Experience</a>
            </div>
            <div className="nav-lists">
              <a href="#Project_id">Project</a>
            </div>
            <div className="nav-lists">
              <a href="#Contact_id">Contact</a>
            </div>
          </div>
        </div>

        {/* <div className="mainLandingpage">
          <div>
            <span className="tags top-tags">&lt;html  &gt;</span>
            <br />
            <span className="tags top-tags">&lt;body&gt;</span> */}
        {/* <Home /> */}
        {/* <br />
            <span className="tags bottom-tags">&lt;/body&gt;</span>
            <br />
            <span className="tags bottom-tags">&lt;/html&gt;</span>
          </div>
          <div> */}
        <img className="profilePic" src={profilePic} alt="" />
        {/* </div>
        </div> */}

        {/* Responsive */}
        <div className="responsive-btn">
          <Hamburger
            toggled={isOpen}
            size={29}
            toggle={setOpen}
            id="nav-hamburger"
          />
        </div>

        {isOpen === true ? (
          <>
            <div className="nav-bar">
              {/* <Link className='logo' to='/'><div>AviShihora</div></Link> */}
              {/* <div>
              <Link className="logo" to="/">
                <img src={namelogo} alt="" />
              </Link>
            </div> */}
              <nav>
                {/* <div className="nav-part"> */}
                {/* <div className="nav-list"> */}
                {/* <div className='nav-ContentList'> */}
                <NavLink
                  exact="true"
                  activeclassname="active"
                  className=""
                  to="/"
                >
                  <FontAwesomeIcon icon={faHome} color="#ffffff" />
                </NavLink>
                {/* <div>Home</div> */}
                {/* </div> */}

                {/* <div className='nav-ContentList'> */}
                <NavLink
                  exact="true"
                  activeclassname="active"
                  className="about-link"
                  to="/about"
                >
                  <FontAwesomeIcon icon={faUser} color="#ffffff" />
                </NavLink>
                {/* <div>About Me</div> */}
                {/* </div> */}

                {/* <div className='nav-ContentList'> */}
                <NavLink
                  exact="true"
                  activeclassname="active"
                  className="work-link"
                  to="/project"
                >
                  <FontAwesomeIcon icon={faBriefcase} color="#ffffff" />
                </NavLink>
                {/* <div>Project</div> */}
                {/* </div> */}

                {/* <div className='nav-ContentList'> */}
                <NavLink
                  exact="true"
                  activeclassname="active"
                  className="contact-link"
                  to="/contact"
                >
                  <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
                </NavLink>
                {/* <div>Contact</div> */}
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
              </nav>
            </div>
          </>
        ) : null}
      </>
    );
  }
};

export default Sidebar;
