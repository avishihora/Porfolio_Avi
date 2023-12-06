import React from 'react'
import "./projectDetails.scss"
import portfolioweb from "../../assets/images/profile-removebg.webp"
const projectDetails = () => {
  return (
    <div>
      <div className="projectheading">
        <h2>Book Management Book</h2>
        <div className="webPic">
          <img src={portfolioweb} alt=""/>
        </div>
        <h3>Technical Details</h3>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic
          aliquid dicta consequuntur perspiciatis earum expedita libero, ipsa
          provident nisi voluptatibus ut maxime facere ullam deserunt harum, eos
          eum est.
        </h4>
        <h3>Technologies</h3>
        <p>Code technologies I got involved while working on this project.</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>NodeJS</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  );
}

export default projectDetails